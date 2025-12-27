'use client'

export default function TermsContent() {
  return (
    <article className="max-w-none space-y-6 leading-relaxed text-slate-800">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-primary">CutPhase Terms of Service</h1>
        <p className="text-sm text-muted-foreground">Last Updated: January 2025</p>
        <p className="text-sm text-muted-foreground">Effective Date: January 2025</p>
      </header>

      <Callout>
        These Terms of Service govern your use of the CutPhase mobile application, operated by Appscend Labs, LLC.
        By accessing or using CutPhase, you agree to be bound by these Terms.
      </Callout>

      <Section title="1. Eligibility">
        <p>
          You must be at least <strong>13 years old</strong> to use CutPhase. By using the App, you represent that you meet this requirement.
        </p>
      </Section>

      <Section title="2. Purpose of the App">
        <p>
          CutPhase provides <strong>fitness, nutrition, and lifestyle planning tools</strong> designed to help users organize and track their goals.
        </p>
        <p className="mt-2 font-semibold">
          IMPORTANT: CutPhase is <strong>not a medical or healthcare service</strong>.
        </p>
      </Section>

      <Section title="3. Health & Medical Disclaimer (CRITICAL)">
        <div className="rounded-lg border-2 border-amber-400 bg-amber-50 p-4">
          <p className="font-semibold text-amber-900">CutPhase does NOT provide medical advice, diagnosis, or treatment.</p>
          <ul className="list-disc space-y-1 pl-6 mt-2 text-amber-900">
            <li>All content is for <strong>educational and informational purposes only</strong></li>
            <li>Results are <strong>not guaranteed</strong></li>
            <li>Always consult a physician, dietitian, or qualified healthcare provider before making changes to diet, exercise, or lifestyle</li>
            <li>Use of CutPhase is <strong>at your own risk</strong></li>
          </ul>
          <p className="mt-3 text-sm text-amber-900">
            By using the App, you acknowledge and agree that Appscend Labs, LLC is <strong>not liable</strong> for injuries, health issues, or outcomes resulting from use of the App.
          </p>
        </div>
      </Section>

      <Section title="4. User Accounts">
        <p>To access certain features, you must create an account. You agree to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Provide accurate information</li>
          <li>Maintain the security of your login credentials</li>
          <li>Accept responsibility for all activity under your account</li>
        </ul>
        <p className="mt-2">We reserve the right to suspend or terminate accounts that violate these Terms.</p>
      </Section>

      <Section title="5. Subscriptions & Billing">
        <h3 className="font-semibold mt-2">a. Subscription Model</h3>
        <p>CutPhase offers paid subscriptions that unlock premium features. Subscriptions:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Are billed through Apple App Store or Google Play Store</li>
          <li>Automatically renew unless canceled</li>
          <li>May include a free trial (if offered at the time of signup)</li>
        </ul>

        <h3 className="font-semibold mt-4">b. Free Trials</h3>
        <p>If a free trial is offered:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>You will be charged automatically when the trial ends unless you cancel</li>
          <li>Only one free trial may be available per user</li>
        </ul>

        <h3 className="font-semibold mt-4">c. Cancellation</h3>
        <p>
          You may cancel your subscription at any time through Apple ID or Google Play subscription settings.
          <strong> Deleting the app does NOT cancel your subscription.</strong>
        </p>

        <h3 className="font-semibold mt-4">d. Refunds</h3>
        <p>
          Refunds are handled <strong>exclusively</strong> by Apple or Google, in accordance with their policies.
          Appscend Labs, LLC does not issue direct refunds.
        </p>
      </Section>

      <Section title="6. Intellectual Property">
        <p>
          All content, features, designs, and generated toolkits are the property of Appscend Labs, LLC. You may not:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Copy, resell, distribute, or exploit the App or its content</li>
          <li>Reverse engineer or attempt to extract proprietary logic</li>
          <li>Use CutPhase content for commercial purposes without permission</li>
        </ul>
      </Section>

      <Section title="7. Acceptable Use">
        <p>You agree <strong>not</strong> to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Use the App for unlawful purposes</li>
          <li>Attempt to gain unauthorized access</li>
          <li>Abuse, exploit, or disrupt the App or services</li>
          <li>Use automation, scraping, or bots</li>
        </ul>
        <p className="mt-2">We reserve the right to terminate access for violations.</p>
      </Section>

      <Section title="8. Account & Data Deletion">
        <p>
          You may delete your account <strong>directly within the CutPhase app</strong>.
        </p>
        <p className="mt-2">Upon deletion:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Your personal data will be permanently removed</li>
          <li>Access to paid features will end</li>
          <li>Some data may be retained if legally required</li>
        </ul>
        <p className="mt-3">
          For help, contact: <a href="mailto:appscendlabs@gmail.com" className="text-primary hover:underline">appscendlabs@gmail.com</a>
        </p>
      </Section>

      <Section title="9. Disclaimer of Warranties">
        <p>CutPhase is provided <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong>.</p>
        <p className="mt-2">We make no warranties regarding:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Accuracy of results</li>
          <li>Availability or uptime</li>
          <li>Fitness outcomes or success</li>
        </ul>
      </Section>

      <Section title="10. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Appscend Labs, LLC shall <strong>not be liable</strong> for:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Personal injury</li>
          <li>Health-related issues</li>
          <li>Lost data</li>
          <li>Lost profits</li>
          <li>Indirect or consequential damages</li>
        </ul>
        <p className="mt-2">Your sole remedy is to stop using the App.</p>
      </Section>

      <Section title="11. Indemnification">
        <p>
          You agree to indemnify and hold harmless Appscend Labs, LLC from any claims, damages, or expenses arising from:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Your use of the App</li>
          <li>Violation of these Terms</li>
          <li>Violation of any laws or third-party rights</li>
        </ul>
      </Section>

      <Section title="12. Governing Law">
        <p>
          These Terms are governed by the laws of the <strong>State of Idaho, United States</strong>, without regard to conflict-of-law principles.
        </p>
      </Section>

      <Section title="13. Changes to These Terms">
        <p>
          We may update these Terms at any time. Continued use of CutPhase after updates constitutes acceptance.
        </p>
      </Section>

      <Section title="14. Contact Information">
        <p>
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
