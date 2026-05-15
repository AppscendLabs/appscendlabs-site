'use client'

export default function SlabbPrivacyContent() {
  return (
    <article className="max-w-none space-y-6 leading-relaxed text-slate-800">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-primary">Slabb Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Last Updated: May 2026</p>
        <p className="text-sm text-muted-foreground">Effective Date: May 2026</p>
      </header>

      <p>
        Slabb ("we", "our", or "us") is operated by Appscend Labs, LLC. This Privacy Policy explains
        how we collect, use, and protect your information when you use the Slabb mobile application
        for trading card collection tracking.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">1. Information We Collect</h2>

        <h3 className="font-semibold">Account Information</h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>Full name</li>
          <li>Email address</li>
          <li>Password (stored as a secure hash — we never see your actual password)</li>
        </ul>

        <h3 className="font-semibold mt-3">Card Collection Data</h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>Card details you enter: name, set, year, condition, grade, and estimated value</li>
          <li>Photos you take or upload of your cards</li>
          <li>Price history fetched from third-party pricing APIs</li>
          <li>Price alerts you configure</li>
        </ul>

        <h3 className="font-semibold mt-3">Usage Data</h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>App interactions (screens visited, features used) — collected anonymously to improve the app</li>
          <li>Device type and OS version for compatibility purposes</li>
          <li>Push notification token (only if you enable notifications)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">2. How We Use Your Information</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>To provide, maintain, and improve the Slabb service</li>
          <li>To sync your card collection across your devices</li>
          <li>To send you price alerts and notifications you have opted into</li>
          <li>To identify trading cards using AI image analysis (photos are sent to Anthropic's API and are not stored by Anthropic beyond the API call)</li>
          <li>To fetch live market pricing from third-party services</li>
          <li>To communicate service updates or respond to support requests</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">3. Third-Party Services</h2>
        <p>Slabb uses the following third-party services. Each has its own privacy policy:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Supabase</strong> — database, authentication, and file storage.{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              supabase.com/privacy
            </a>
          </li>
          <li>
            <strong>Anthropic (Claude API)</strong> — AI card identification from photos.{' '}
            <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              anthropic.com/privacy
            </a>
          </li>
          <li>
            <strong>Pokémon TCG API</strong> — Pokémon card pricing data.{' '}
            <a href="https://pokemontcg.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              pokemontcg.io
            </a>
          </li>
          <li>
            <strong>Scryfall</strong> — Magic: The Gathering card pricing.{' '}
            <a href="https://scryfall.com/docs/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              scryfall.com/docs/privacy
            </a>
          </li>
          <li>
            <strong>YGOProDeck</strong> — Yu-Gi-Oh! card pricing.{' '}
            <a href="https://ygoprodeck.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              ygoprodeck.com
            </a>
          </li>
          <li>
            <strong>eBay</strong> — sports card sold listing prices.{' '}
            <a href="https://www.ebay.com/help/policies/member-behaviour-policies/user-privacy-notice-privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              eBay Privacy Policy
            </a>
          </li>
          <li>
            <strong>Expo (EAS)</strong> — push notification delivery.{' '}
            <a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              expo.dev/privacy
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">4. Data Storage &amp; Security</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Your data is stored on Supabase servers protected by row-level security — only you can access your card collection</li>
          <li>Card photos are stored in a private Supabase Storage bucket</li>
          <li>All data is transmitted over HTTPS/TLS</li>
          <li>Passwords are hashed using bcrypt and are never stored in plain text</li>
          <li>API keys and secrets are stored server-side and never transmitted to your device</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">5. Push Notifications</h2>
        <p>
          If you enable push notifications, we store a device push token to deliver price alerts
          and collection updates. You can disable notifications at any time in your device settings
          or within the app under Profile → Settings → Notifications.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">6. Your Rights</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li><strong>Access:</strong> You can view all your data within the app at any time</li>
          <li><strong>Export:</strong> Use Profile → Export Collection to download your data as CSV or PDF</li>
          <li><strong>Deletion:</strong> You can delete your account and all associated data by emailing us. We will process deletion requests within 30 days</li>
          <li><strong>Correction:</strong> You can edit or delete any card in your collection at any time</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">7. Children's Privacy</h2>
        <p>
          Slabb is not directed at children under 13. We do not knowingly collect personal
          information from children under 13. If you believe a child has provided us with personal
          information, please contact us and we will delete it promptly.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">8. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. We will notify you of significant changes
          via the app or by email. The "Last updated" date at the top of this page reflects the
          most recent revision.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="font-semibold">Slabb by Appscend Labs, LLC</p>
          <p className="mt-1">
            <a href="mailto:appscendlabs@gmail.com" className="text-primary hover:underline">
              appscendlabs@gmail.com
            </a>
          </p>
        </div>
      </section>
    </article>
  )
}
