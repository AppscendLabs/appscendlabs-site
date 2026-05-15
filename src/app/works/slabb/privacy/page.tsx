import type { Metadata } from 'next'
import Link from 'next/link'
import SlabbPrivacyContent from '@/components/legal/slabb/PrivacyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy - Slabb',
  description:
    'Privacy Policy for Slabb by Appscend Labs. Learn how we collect, use, and protect your information.',
  alternates: { canonical: '/works/slabb/privacy' },
  robots: {
    index: false,
    follow: false,
  },
}

export default function SlabbPrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <Link
            href="/"
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
            Back to Appscend Labs
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-primary md:text-3xl">
            Slabb
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-primary prose-strong:text-slate-900 prose-li:text-slate-700">
            <SlabbPrivacyContent />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Appscend Labs, LLC. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <Link href="/" className="text-slate-600 hover:text-slate-900">
              Appscend Labs
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
