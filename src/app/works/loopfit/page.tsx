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
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Same header look/feel as homepage */}
      <NavigationInternal />

      <main className="pt-16">
        {/* Hero */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h1 className="text-3xl text-primary md:text-5xl">LoopFit</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Habit loops, friendly challenges, and Apple Health integration to keep you consistent.
              </p>

              {/* Primary CTA */}
              
              {/* <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#"
                  className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  Download the App
                </Link>
              </div> */}

              {/* Modal triggers for Privacy & Terms (also include full-page fallbacks inside the modals) */}
              <LoopFitLegalModals />

              <p className="mt-4 text-sm text-slate-500">QR code download and App Store links coming soon.</p>
            </div>

            {/* App preview / placeholder image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-white shadow">
              <Image
                src="/images/loopfit-cover.jpg"
                alt="LoopFit preview"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
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
