// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Appscend Labs'
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const ogImage = `${siteUrl}/og.png` // add a real image in /public/og.png

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s • ${siteName}`,
  },
  description:
    'Appscend Labs builds fast, modern websites and mobile apps that grow your business.',
  keywords: [
    'web development',
    'mobile apps',
    'UI/UX',
    'React',
    'Next.js',
    'TypeScript',
    'Appscend Labs',
  ],
  authors: [{ name: 'Appscend Labs' }],
  creator: 'Appscend Labs',
  publisher: 'Appscend Labs',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteName,
    siteName,
    description:
      'Modern web & mobile solutions — design, build, and launch with Appscend Labs.',
    images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description:
      'Modern web & mobile solutions — design, build, and launch with Appscend Labs.',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest', // optional if you add one
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, // if you verify domain
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
