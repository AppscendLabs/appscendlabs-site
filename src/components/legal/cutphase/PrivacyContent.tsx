'use client'

export default function PrivacyContent() {
  return (
    <article className="max-w-none space-y-6 leading-relaxed text-slate-800">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-primary">CutPhase Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Last Updated: January 2026</p>
        <p className="text-sm text-muted-foreground">Effective Date: January 2026</p>
      </header>

      <Callout>
        CutPhase is operated by Appscend Labs, LLC. This Privacy Policy explains how we collect, use, disclose,
        and protect your information when you use the CutPhase mobile application and web-based site.
      </Callout>

      <Section title="1. Information We Collect">
        <h3 className="font-semibold mt-2">a. Personal Information You Provide</h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>Email address</li>
          <li>User ID or account identifier</li>
          <li>Profile information (age, height, weight, goals, preferences)</li>
          <li>Fitness, nutrition, and lifestyle inputs you voluntarily provide</li>
        </ul>

        <h3 className="font-semibold mt-4">b. Health & Fitness Data</h3>
        <p>CutPhase collects <strong>non-medical</strong> health and fitness information, such as:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Weight and goal weight</li>
          <li>Dietary preferences</li>
          <li>Activity level</li>
          <li>Meal timing and habits</li>
        </ul>
        <p className="mt-2 text-sm italic">
          CutPhase does <strong>not</strong> provide medical advice and does <strong>not</strong> collect medical records.
        </p>

        <h3 className="font-semibold mt-4">c. Subscription & Payment Information</h3>
        <p>
          Payments are processed by Apple App Store, Google Play Store, RevenueCat (mobile), and Stripe (web).
          We do <strong>not</strong> store your credit card or payment details.
        </p>

        <h3 className="font-semibold mt-4">d. Automatically Collected Information</h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>Device type and OS version</li>
          <li>App usage data</li>
          <li>Crash logs and performance diagnostics</li>
        </ul>
      </Section>

      <Section title="2. How We Use Your Information">
        <ul className="list-disc space-y-1 pl-6">
          <li>Create and manage your account</li>
          <li>Generate personalized fitness and nutrition toolkits</li>
          <li>Provide app functionality and features</li>
          <li>Improve app performance and user experience</li>
          <li>Manage subscriptions and entitlements</li>
          <li>Communicate important updates or changes</li>
        </ul>
        <p className="mt-3">
          We do <strong>not</strong> sell your personal data.
        </p>
      </Section>

      <Section title="3. Data Storage & Security">
        <p>Your data is stored securely using industry-standard practices and trusted third-party services:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li><strong>Supabase</strong> (authentication & database)</li>
          <li><strong>RevenueCat</strong> (subscription management for mobile app)</li>
          <li><strong>Stripe</strong> (subscription management for web version)</li>
        </ul>
        <p className="mt-2">
          We use encryption, access controls, and secure infrastructure to protect your information.
        </p>
      </Section>

      <Section title="4. Third-Party Services">
        <p>CutPhase integrates with the following third-party services:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Apple App Store</li>
          <li>Google Play Store</li>
          <li>RevenueCat</li>
          <li>Supabase</li>
          <li>Stripe</li>
        </ul>
        <p className="mt-2">
          These services process data according to their own privacy policies. We encourage you to review them.
        </p>
      </Section>

      <Section title="5. Data Sharing">
        <p>We may share limited data:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>With service providers to operate the app</li>
          <li>When required by law</li>
          <li>To protect our legal rights or prevent misuse</li>
        </ul>
        <p className="mt-2">
          We do <strong>not</strong> share your data for advertising or resale purposes.
        </p>
      </Section>

      <Section title="6. Data Retention">
        <p>We retain your data only as long as necessary to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Provide the service</li>
          <li>Meet legal obligations</li>
          <li>Resolve disputes</li>
        </ul>
        <p className="mt-2">You may request deletion at any time (see Account & Data Deletion below).</p>
      </Section>

      <Section title="7. Your Rights">
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Access your data</li>
          <li>Correct inaccurate data</li>
          <li>Delete your account and associated data</li>
          <li>Withdraw consent</li>
        </ul>
      </Section>

      <Section title="8. Account & Data Deletion (Apple Requirement)">
        <p>
          You can delete your account <strong>directly within the CutPhase app</strong>.
        </p>
        <p className="mt-2">When you delete your account:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Your profile and personal data are permanently removed</li>
          <li>Subscription access ends</li>
          <li>Some records may be retained if legally required</li>
        </ul>
        <p className="mt-3">
          If you need assistance, contact us at: <a href="mailto:appscendlabs@gmail.com" className="text-primary hover:underline">appscendlabs@gmail.com</a>
        </p>
      </Section>

      <Section title="9. Children's Privacy">
        <p>
          CutPhase is <strong>not intended for users under 13 years of age</strong>. We do not knowingly collect data from children.
        </p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy periodically. Any changes will be reflected by updating the "Last Updated" date.
        </p>
      </Section>

      <Section title="11. Contact Information">
        <p>If you have questions or concerns about this Privacy Policy, contact:</p>
        <p className="mt-2">
          <strong>Appscend Labs, LLC</strong><br />
          Email: <a href="mailto:appscendlabs@gmail.com" className="text-primary hover:underline">appscendlabs@gmail.com</a><br />
          Location: Idaho, United States
        </p>
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
