'use client'

export default function TermsContent() {
  return (
    <article className="max-w-none space-y-6 leading-relaxed text-slate-800">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-primary">LoopFit Terms of Service</h1>
        <p className="text-sm text-muted-foreground">Last updated: Sept 2025</p>
      </header>

      <Callout>
        These Terms govern your use of the LoopFit app and services provided by Appscend Labs, LLC.
      </Callout>

      <Section title="1. Who we are">
        <p>
          LoopFit is provided by Appscend Labs, LLC (“we”, “us”, “our”). These Terms govern your use
          of the LoopFit app and services.
        </p>
      </Section>

      <Section title="2. Health &amp; Safety">
        <p>
          LoopFit is not a medical device. Always consult a qualified healthcare professional before
          making changes to your exercise, nutrition, or wellness routines. If you experience
          symptoms or an emergency, seek medical attention immediately.
        </p>
      </Section>

      <Section title="3. Accounts &amp; Eligibility">
        <p>
          You must be at least 13 (or the age required by law in your region) to use LoopFit. Keep
          your credentials secure and don’t share your account.
        </p>
      </Section>

      <Section title="4. Acceptable Use">
        <ul className="list-disc space-y-1 pl-6">
          <li>Don’t misuse the app or attempt to reverse engineer it</li>
          <li>Don’t harass or abuse other users</li>
          <li>We may suspend or terminate accounts that violate these Terms</li>
        </ul>
      </Section>

      <Section title="5. Subscriptions / In-App Purchases">
        <p>
          If offered, purchases are managed by Apple/Google and subject to their terms. All fees are
          shown before you confirm.
        </p>
      </Section>

      <Section title="6. Data &amp; Privacy">
        <p>
          Our Privacy Policy explains how we collect, use, and share information. If you connect
          Apple Health, we only access the categories you grant permission for.
        </p>
      </Section>

      <Section title="7. Disclaimers &amp; Liability">
        <p>
          Services are provided “as is.” To the fullest extent permitted by law, we disclaim
          warranties and limit liability for indirect or consequential damages.
        </p>
      </Section>

      <Section title="8. Changes">
        <p>We may update these Terms. Continued use after updates means you accept the new Terms.</p>
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
