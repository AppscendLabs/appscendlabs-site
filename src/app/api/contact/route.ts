// /src/app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs' // Resend requires Node runtime

const resend = new Resend(process.env.RESEND_API_KEY)
export const dynamic = 'force-dynamic' // no caching of POST

// ---- tiny in-memory rate limit (per-IP) ----
type Bucket = { count: number; resetAt: number }
const RATE_LIMIT_WINDOW_MS = 60_000 // 1 minute
const RATE_LIMIT_MAX = 8             // 8 requests / minute / IP
const buckets = new Map<string, Bucket>()

function getClientIp(req: Request) {
  const fwd = req.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0]!.trim()
  return req.headers.get('x-real-ip') || 'unknown'
}

function rateLimited(ip: string) {
  const now = Date.now()
  const b = buckets.get(ip)
  if (!b || now > b.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }
  b.count++
  return b.count > RATE_LIMIT_MAX
}

// ---- helpers ----
function esc(s: unknown) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function parseRecipients(input?: string): string[] {
  if (!input) return []
  return input
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

// ---- POST handler ----
export async function POST(req: Request) {
  try {
    const ip = getClientIp(req)
    if (rateLimited(ip)) {
      return NextResponse.json({ ok: false, error: 'Rate limited' }, { status: 429 })
    }

    const body = (await req.json()) as {
      name?: string
      email?: string
      company?: string
      phone?: string
      projectType?: string
      budget?: string
      timeline?: string
      message?: string
      startedAt?: number
      hp?: string // honeypot
      userAgent?: string
    }

    // Honeypot: if filled, pretend success (don’t tip off bots)
    if (body.hp && body.hp.trim().length > 0) {
      return NextResponse.json({ ok: true })
    }

    // Required fields
    const { name, email, projectType, message } = body
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Timing check (form must take ≥ 4s to submit)
    const now = Date.now()
    const startedAt = Number(body.startedAt || 0)
    const elapsedMs = startedAt ? now - startedAt : 0
    const suspectedSpam = !startedAt || elapsedMs < 4000

    const from = process.env.CONTACT_FROM_EMAIL
    const to = parseRecipients(process.env.CONTACT_TO_EMAIL)
    if (!from || !to.length) {
      return NextResponse.json(
        { ok: false, error: 'Server email config missing (FROM/TO).' },
        { status: 500 }
      )
    }

    // Build internal notification email
    const subject = `New inquiry: ${esc(projectType)} — ${esc(name)}`
    const detailsHtml = `
      <h2>New Project Inquiry</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      ${body.company ? `<p><strong>Company:</strong> ${esc(body.company)}</p>` : ''}
      ${body.phone ? `<p><strong>Phone:</strong> ${esc(body.phone)}</p>` : ''}
      ${body.budget ? `<p><strong>Budget:</strong> ${esc(body.budget)}</p>` : ''}
      ${body.timeline ? `<p><strong>Timeline:</strong> ${esc(body.timeline)}</p>` : ''}
      <p><strong>Project Type:</strong> ${esc(body.projectType)}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
${esc(body.message)}
      </pre>
      <hr />
      <p style="color:#64748b">
        Meta: IP=${esc(ip)} • UA=${esc(body.userAgent || req.headers.get('user-agent') || '')} •
        Elapsed=${elapsedMs}ms ${suspectedSpam ? '• ⚠ suspected spam (fast submit)' : ''}
      </p>
    `

    // Send internal email
    const internal = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email,
      html: detailsHtml,
    })

    if (internal.error) {
      return NextResponse.json(
        { ok: false, error: String(internal.error) },
        { status: 500 }
      )
    }

    // Auto-reply to the sender
    const autoSubject = `We received your inquiry — Appscend Labs`
    const autoHtml = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;line-height:1.5">
        <h2>Thanks, ${esc(name)}!</h2>
        <p>We’ve received your message and will get back to you within 1 business day.</p>
        <p><strong>Summary</strong></p>
        <ul>
          <li><strong>Project Type:</strong> ${esc(projectType)}</li>
          ${body.budget ? `<li><strong>Budget:</strong> ${esc(body.budget)}</li>` : ''}
          ${body.timeline ? `<li><strong>Timeline:</strong> ${esc(body.timeline)}</li>` : ''}
        </ul>
        <p style="margin-top:16px">If you have more details to share, just reply to this email.</p>
        <p style="margin-top:24px;color:#64748b">— Appscend Labs</p>
      </div>
    `

    const autoresp = await resend.emails.send({
      from,
      to: [email],
      subject: autoSubject,
      html: autoHtml,
      replyTo: to[0], // replies go to your inbox
    })

    if (autoresp.error) {
      // Not fatal for the overall flow
      console.error('Auto-reply error:', autoresp.error)
    }

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json(
      { ok: false, error: err?.message || 'Server error' },
      { status: 500 }
    )
  }
}
