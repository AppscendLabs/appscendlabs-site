'use client'

export default function PrivacyContent() {
  return (
    <article className="max-w-none space-y-6 leading-relaxed text-slate-800">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-primary">LoopFit Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Last updated: Sept 2025</p>
      </header>

      <Callout>
        This policy describes how Appscend Labs, LLC (“we”) collects, uses, and shares information
        when you use LoopFit.
      </Callout>

      <Section title="1. What we collect">
        <ul className="list-disc space-y-1 pl-6">
          <li>Account info (email, profile)</li>
          <li>App usage and diagnostics</li>
          <li>
            Apple Health data <em>(only if you grant permission)</em> — limited to categories you
            approve
          </li>
        </ul>
        <p className="mt-3">
          We do <strong>not</strong> sell personal data.
        </p>
      </Section>

      <Section title="2. How we use data">
        <ul className="list-disc space-y-1 pl-6">
          <li>Provide features (e.g., goals, leaderboards)</li>
          <li>Personalize your experience and improve the app</li>
          <li>Maintain security and prevent abuse</li>
        </ul>
      </Section>

      <Section title="3. Apple Health">
        <p>
          Health data never leaves your device without your explicit permission. We access only the
          categories you approve and store minimal summaries to enable features like leaderboards and
          check-ins.
        </p>
      </Section>

      <Section title="4. Sharing">
        <p>
          We may share with service providers (e.g., hosting) under contract. We don’t share Health
          data with third-party advertising platforms.
        </p>
      </Section>

      <Section title="5. Your choices">
        <ul className="list-disc space-y-1 pl-6">
          <li>Revoke Health permissions in iOS Settings</li>
          <li>Contact support to request account/data deletion</li>
          <li>Opt out of certain analytics where available</li>
        </ul>
      </Section>

      <Section title="6. Data retention &amp; security">
        <p>
          We keep data only as long as necessary for the app’s functions or as required by law, and
          use reasonable safeguards to protect it.
        </p>
      </Section>

      <Section title="7. Children">
        <p>
          LoopFit is not directed to children under the age required by your region’s law without
          parental consent.
        </p>
      </Section>

      <Section title="8. Changes">
        <p>
          We may update this policy. We’ll notify you of material changes and indicate the “Last
          updated” date above.
        </p>
      </Section>

      <Section title="9. Contact">
        <p>Appscend Labs, LLC — appscendlabs@gmail.com</p>
      </Section>
    </article>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <div className="space-y-2 text-slate-700">{children}</div>
    </section>
  )
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-slate-50 px-4 py-3 text-[0.95rem] text-slate-700">
      {children}
    </div>
  )
}
