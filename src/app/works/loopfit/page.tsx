// src/app/works/loopfit/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import NavigationInternal from '@/components/NavigationInternal'
import LoopFitLegalModals from '@/components/LoopFitLegalModals'

export const metadata: Metadata = {
  title: 'LoopFit',
  description:
    'LoopFit by Appscend Labs — habit loops, friendly challenges, and Apple Health integration to keep you consistent.',
  alternates: { canonical: '/works/loopfit' },
  openGraph: {
    title: 'LoopFit • Appscend Labs',
    description:
      'Habit loops, friendly challenges, and Apple Health integration to keep you consistent.',
    type: 'website',
    url: '/works/loopfit',
  },
}

export default function LoopFitPage() {
  // Provide your real App Store URL in .env as NEXT_PUBLIC_LOOPFIT_APPSTORE_URL
  const APP_STORE_URL = process.env.NEXT_PUBLIC_LOOPFIT_APPSTORE_URL || ''
  const hasStoreLink = !!APP_STORE_URL

  // Use a simple third-party QR endpoint so you don’t need a dependency or local image.
  // (This is an <img>, not next/image, so no next.config.js changes needed.)
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    APP_STORE_URL || 'https://example.com'
  )}`

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Same header look/feel as homepage */}
      <NavigationInternal />

      <main className="pt-16">
        {/* Hero */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            {/* Left: copy + CTAs */}
            <div>
              <h1 className="text-3xl text-primary md:text-5xl">LoopFit</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Habit loops, friendly challenges, and Apple Health integration to keep you consistent.
              </p>

              {/* Download CTA + legal buttons (stacked, centered) */}
              <div className="mt-8 flex flex-col items-center gap-4">
                {/* Top row: download button centered */}
                <Link
                  href={hasStoreLink ? APP_STORE_URL : '#'}
                  target={hasStoreLink ? '_blank' : undefined}
                  rel={hasStoreLink ? 'noopener noreferrer' : undefined}
                  aria-disabled={!hasStoreLink}
                  className={`inline-flex items-center rounded-md px-5 py-3 text-sm font-medium
                    ${hasStoreLink
                      ? 'bg-primary text-primary-foreground hover:opacity-90'
                      : 'cursor-not-allowed bg-slate-200 text-slate-500'}`}
                >
                  Download on the App&nbsp;Store
                </Link>
                  
                {/* Second row: Privacy/Terms centered */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <LoopFitLegalModals />
                </div>
              </div>
                  
              {!hasStoreLink && (
                <p className="mt-3 text-center text-sm text-slate-500">
                  App Store link coming soon.
                </p>
              )}
            </div>

            {/* Right: preview + QR */}
            <div className="space-y-6">
              {/* App preview / placeholder image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-white shadow">
                <Image
                  src="/images/loopfit-cover.png"
                  alt="LoopFit preview"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              {/* QR card */}
              <div className="flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm md:gap-6 md:p-6">
                <div className="shrink-0 overflow-hidden rounded-lg border">
                  <img
                    src={qrSrc}
                    alt="QR code to download LoopFit"
                    width={160}
                    height={160}
                    className="block h-40 w-40"
                  />
                </div>
                <div>
                  <h3 className="text-primary">Scan to Download</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Open your camera and scan the code to go directly to the App Store.
                  </p>
                  {hasStoreLink && (
                    <p className="mt-2 text-xs text-slate-500 break-all">
                      {APP_STORE_URL}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Habit Loops',
                  desc: 'Build consistency with loops that reinforce your daily routine.',
                },
                {
                  title: 'Friendly Challenges',
                  desc: 'Compete with friends and keep each other accountable.',
                },
                {
                  title: 'Apple Health',
                  desc: 'Use Health data you approve to power leaderboards and check-ins.',
                },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border bg-white p-6 shadow-sm">
                  <h3 className="text-primary">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Simple footer for this internal page */}
      <footer className="border-t py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Appscend Labs.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/#contact" className="text-slate-600 hover:text-slate-900">Get a Quote</Link>
            <Link href="/#services" className="text-slate-600 hover:text-slate-900">Services</Link>
            <Link href="/" className="text-slate-600 hover:text-slate-900">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
