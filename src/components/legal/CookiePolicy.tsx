export function CookiePolicyContent() {
  return (
    <div className="space-y-6 text-[#1A1A1A]">
      <div className="text-[#6A6A6A] text-sm mb-6">
        <p><strong>Last Updated:</strong> 11 December 2025</p>
        <p><strong>Operated by:</strong> Rekolink SAS</p>
      </div>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">1. Introduction</h3>
        <p className="text-[#6A6A6A] leading-relaxed">
          This Cookie Policy explains how Rekolink SAS ("we," "our," or "us") uses cookies and 
          similar tracking technologies in our mobile application and any future web interfaces.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">2. What Are Cookies?</h3>
        <p className="text-[#6A6A6A] leading-relaxed">
          Cookies are small text files stored on your device that help websites and apps remember 
          information about your visit. In mobile apps, similar technologies include:
        </p>
        <ul className="list-disc list-inside text-[#6A6A6A] space-y-1 ml-4 mt-2">
          <li>Session tokens</li>
          <li>Local storage</li>
          <li>Device identifiers</li>
          <li>Analytics SDKs</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">3. How We Use Cookies</h3>
        
        <div className="space-y-4">
          <div className="bg-[#F9FCFA] p-4 rounded-lg">
            <h4 className="font-semibold text-[#47634A] mb-2">Essential Cookies</h4>
            <p className="text-[#6A6A6A] text-sm">
              Required for core functionality including authentication, security, and service delivery. 
              These cannot be disabled without affecting app functionality.
            </p>
            <p className="text-[#6A6A6A] text-xs mt-2 italic">Examples: Session tokens, authentication state</p>
          </div>

          <div className="bg-[#F9FCFA] p-4 rounded-lg">
            <h4 className="font-semibold text-[#47634A] mb-2">Analytics Cookies</h4>
            <p className="text-[#6A6A6A] text-sm">
              Help us understand how users interact with the app, including feature usage, 
              crash reports, and performance metrics.
            </p>
            <p className="text-[#6A6A6A] text-xs mt-2 italic">Examples: Firebase Analytics, usage statistics</p>
          </div>

          <div className="bg-[#F9FCFA] p-4 rounded-lg">
            <h4 className="font-semibold text-[#47634A] mb-2">Preference Cookies</h4>
            <p className="text-[#6A6A6A] text-sm">
              Remember your settings and preferences to provide a personalized experience.
            </p>
            <p className="text-[#6A6A6A] text-xs mt-2 italic">Examples: Language preference, theme settings</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">4. Third-Party Services</h3>
        <p className="text-[#6A6A6A] leading-relaxed mb-3">
          We use third-party services that may place cookies or use similar technologies:
        </p>
        <ul className="list-disc list-inside text-[#6A6A6A] space-y-1 ml-4">
          <li><strong>Firebase:</strong> Analytics and crash reporting</li>
          <li><strong>Apple/Google:</strong> App Store services and subscriptions</li>
          <li><strong>Cloud Providers:</strong> Hosting and data storage</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">5. Your Choices</h3>
        <p className="text-[#6A6A6A] leading-relaxed mb-3">
          You can control cookie usage through:
        </p>
        <ul className="list-disc list-inside text-[#6A6A6A] space-y-1 ml-4">
          <li><strong>Device Settings:</strong> Limit ad tracking and analytics through iOS/Android settings</li>
          <li><strong>App Permissions:</strong> Manage app permissions in device settings</li>
          <li><strong>Account Deletion:</strong> Remove all data by deleting your account</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">6. Updates to This Policy</h3>
        <p className="text-[#6A6A6A] leading-relaxed">
          We may update this Cookie Policy to reflect changes in technology or regulations. 
          Material changes will be communicated through the app or via email.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">7. Contact Us</h3>
        <div className="bg-[#F9FCFA] p-4 rounded-lg">
          <p className="text-[#6A6A6A]">
            For questions about cookies and tracking:<br />
            <strong>Email:</strong> <a href="mailto:privacy@rekolink.com" className="text-[#8CA58F] hover:underline">privacy@rekolink.com</a><br />
            <strong>Address:</strong> Rekolink SAS, 15 rue de l'Orgerie, 35590 Saint-Gilles, France
          </p>
        </div>
      </section>
    </div>
  );
}
