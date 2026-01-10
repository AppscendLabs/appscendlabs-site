import type { Metadata } from 'next'
import Link from 'next/link'
import TermsContent from '@/components/legal/cutphase/TermsContent'

export const metadata: Metadata = {
  title: 'Terms of Service - CutPhase',
  description:
    'Terms of Service for CutPhase by Appscend Labs. Review the terms governing your use of the CutPhase app.',
  alternates: { canonical: '/works/cutphase/terms' },
  robots: {
    index: false,
    follow: false,
  },
}

export default function CutPhaseTermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <Link
            href="/works/cutphase"
            className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to CutPhase
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-primary md:text-3xl">
            CutPhase
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-primary prose-strong:text-slate-900 prose-li:text-slate-700">
            <TermsContent />
          </div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Appscend Labs, LLC. All rights
            reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <Link
              href="/works/cutphase"
              className="text-slate-600 hover:text-slate-900"
            >
              CutPhase
            </Link>
            <Link
              href="/works/cutphase/privacy"
              className="text-slate-600 hover:text-slate-900"
            >
              Privacy Policy
            </Link>
            <a
              href="mailto:appscendlabs@gmail.com"
              className="text-slate-600 hover:text-slate-900"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
