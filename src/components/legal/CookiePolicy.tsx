export function CookiePolicyContent() {
  return (
    <div>
      <div className="text-base mb-8 text-[#6A6A6A] bg-[#F9FCFA] p-6 rounded-xl border-l-4 border-[#8CA58F]">
        <p className="mb-2"><strong className="text-[#47634A]">Last Updated:</strong> December 11, 2025</p>
        <p><strong className="text-[#47634A]">Company:</strong> Rekolink SAS, France</p>
      </div>

      <section>
        <h2>Understanding Cookies & Tracking</h2>
        <p>
          This policy explains how Rekolink uses cookies and similar technologies in our mobile app and any future web interfaces.
        </p>
      </section>

      <section>
        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small data files that help apps and websites remember information about your visit. 
          In mobile apps, we use similar technologies including:
        </p>
        <ul>
          <li>Session tokens</li>
          <li>Local storage</li>
          <li>Device identifiers</li>
          <li>Analytics SDKs</li>
        </ul>
      </section>

      <section>
        <h2>How We Use Tracking Technologies</h2>
        
        <div className="space-y-4">
          <div className="bg-[#F9FCFA] p-4 rounded-lg">
            <h3 className="text-base">Essential</h3>
            <p className="text-sm">
              Required for the app to work properly, including authentication and security. These can't be disabled.
            </p>
            <p className="text-xs mt-2 italic">Examples: Login sessions, security tokens</p>
          </div>

          <div className="bg-[#F9FCFA] p-4 rounded-lg">
            <h3 className="text-base">Analytics</h3>
            <p className="text-sm">
              Help us understand how you use the app, including feature usage, crashes, and performance.
            </p>
            <p className="text-xs mt-2 italic">Examples: Firebase Analytics, usage statistics</p>
          </div>

          <div className="bg-[#F9FCFA] p-4 rounded-lg">
            <h3 className="text-base">Preferences</h3>
            <p className="text-sm">
              Remember your settings for a personalized experience.
            </p>
            <p className="text-xs mt-2 italic">Examples: Language, theme settings</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Third-Party Services</h2>
        <p>We use third-party services that may use tracking technologies:</p>
        <ul>
          <li><strong>Firebase:</strong> Analytics and crash reporting</li>
          <li><strong>Apple/Google:</strong> App Store services and subscriptions</li>
          <li><strong>Cloud Providers:</strong> Hosting and data storage</li>
        </ul>
      </section>

      <section>
        <h2>Your Choices</h2>
        <p>You can control tracking through:</p>
        <ul>
          <li><strong>Device Settings:</strong> Limit ad tracking in iOS/Android settings</li>
          <li><strong>App Permissions:</strong> Manage permissions in device settings</li>
          <li><strong>Account Deletion:</strong> Remove all data by deleting your account</li>
        </ul>
      </section>

      <section>
        <h2>Updates</h2>
        <p>
          We may update this policy to reflect technology or regulatory changes. 
          Material changes will be communicated through the app or via email.
        </p>
      </section>

      <section>
        <h2>Questions?</h2>
        <div className="bg-[#F9FCFA] p-4 rounded-lg">
          <p>
            <strong>Email:</strong> <a href="mailto:privacy@rekolink.com">privacy@rekolink.com</a><br />
            <strong>Address:</strong> Rekolink SAS, 15 rue de l'Orgerie, 35590 Saint-Gilles, France
          </p>
        </div>
      </section>
    </div>
  );
}
