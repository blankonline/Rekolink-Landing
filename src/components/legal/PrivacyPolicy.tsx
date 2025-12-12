export function PrivacyPolicyContent() {
  return (
    <div>
      <div className="text-sm mb-6 text-[#6A6A6A]">
        <p><strong>Last Updated:</strong> December 11, 2025</p>
        <p><strong>Company:</strong> Rekolink SAS, France</p>
      </div>

      <section>
        <h2>Your Privacy Matters</h2>
        <p>
          At Rekolink, we're committed to protecting your privacy and being transparent about how we handle your data. 
          This policy explains what information we collect, why we need it, and how we keep it safe.
        </p>
      </section>

      <section>
        <h2>Who We Are</h2>
        <div className="bg-[#F9FCFA] p-4 rounded-lg">
          <p>
            <strong>Company:</strong> Rekolink SAS<br />
            <strong>Location:</strong> 15 rue de l'Orgerie, 35590 Saint-Gilles, France<br />
            <strong>Contact:</strong> <a href="mailto:privacy@rekolink.com">privacy@rekolink.com</a>
          </p>
        </div>
      </section>

      <section>
        <h2>What Information We Collect</h2>
        
        <h3>Information You Provide</h3>
        <ul>
          <li><strong>Account:</strong> Email, name, profile photo</li>
          <li><strong>Profile:</strong> Skills, bio, work history, certifications</li>
          <li><strong>Recommendations:</strong> Endorsements you give and receive</li>
          <li><strong>Messages:</strong> Chat content and shared files</li>
          <li><strong>Subscription:</strong> Payment status through Apple/Google</li>
        </ul>

        <h3>Information We Collect Automatically</h3>
        <ul>
          <li><strong>Device data:</strong> Device type, OS version, app version</li>
          <li><strong>Usage data:</strong> How you use features, crash reports</li>
          <li><strong>Analytics:</strong> Anonymized behavior patterns</li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <div className="space-y-3">
          <div className="bg-[#F9FCFA] p-4 rounded-lg">
            <h3 className="text-base">Running the Service</h3>
            <p className="text-sm">Providing profiles, recommendations, chat, and AI features</p>
          </div>
          
          <div className="bg-[#F9FCFA] p-4 rounded-lg">
            <h3 className="text-base">Managing Subscriptions</h3>
            <p className="text-sm">Verifying payments and managing Pro features</p>
          </div>
          
          <div className="bg-[#F9FCFA] p-4 rounded-lg">
            <h3 className="text-base">Keeping You Safe</h3>
            <p className="text-sm">Preventing fraud and moderating harmful content</p>
          </div>
          
          <div className="bg-[#F9FCFA] p-4 rounded-lg">
            <h3 className="text-base">Improving AI</h3>
            <p className="text-sm">Training models with aggregated, anonymized data</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Sharing Your Information</h2>
        <p><strong>We never sell your data.</strong> We only share it with:</p>
        <ul>
          <li><strong>Service providers:</strong> Hosting, analytics, and AI processing</li>
          <li><strong>Payment platforms:</strong> Apple and Google for subscriptions</li>
          <li><strong>Safety tools:</strong> Content moderation services</li>
          <li><strong>Legal authorities:</strong> When required by law</li>
        </ul>
      </section>

      <section>
        <h2>Your Privacy Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li><strong>Access:</strong> Get a copy of your data</li>
          <li><strong>Correct:</strong> Fix inaccurate information</li>
          <li><strong>Delete:</strong> Request removal of your data</li>
          <li><strong>Export:</strong> Download your data in a portable format</li>
          <li><strong>Opt-out:</strong> Unsubscribe from marketing emails</li>
        </ul>
        <p>
          To exercise these rights, contact us at <a href="mailto:privacy@rekolink.com">privacy@rekolink.com</a>
        </p>
      </section>

      <section>
        <h2>Data Retention</h2>
        <div className="bg-[#F9FCFA] p-4 rounded-lg space-y-2">
          <p>
            <strong>Active accounts:</strong> We keep your data while your account is active
          </p>
          <p>
            <strong>Deleted accounts:</strong> 90-day recovery window, then permanent deletion
          </p>
          <p>
            <strong>Legal requirements:</strong> Some records (financial, abuse reports) kept longer for compliance
          </p>
        </div>
      </section>

      <section>
        <h2>Security</h2>
        <p>We protect your data with:</p>
        <ul>
          <li>Encryption in transit and at rest</li>
          <li>Access controls and authentication</li>
          <li>Regular security audits</li>
          <li>Automated content moderation</li>
        </ul>
        <p className="text-sm mt-3">
          While we use industry-standard security, no system is 100% secure. Please protect your login credentials and report any suspicious activity.
        </p>
      </section>

      <section>
        <h2>International Transfers</h2>
        <p>
          We operate from France (EU), but some data may be transferred to service providers outside the EU, including the United States. 
          We use Standard Contractual Clauses and other safeguards approved by the European Commission to protect your data.
        </p>
      </section>

      <section>
        <h2>Age Requirement</h2>
        <p>
          Rekolink is for users aged <strong>16 and older</strong>. We don't knowingly collect data from anyone younger.
        </p>
      </section>

      <section>
        <h2>Cookies & Tracking</h2>
        <p>
          Our mobile app uses minimal tracking (session tokens, analytics). For details, see our Cookie Policy.
        </p>
      </section>

      <section>
        <h2>Updates to This Policy</h2>
        <p>
          We may update this policy to reflect new features or legal requirements. We'll notify you of material changes via email or in-app notification.
        </p>
      </section>

      <section>
        <h2>Questions or Complaints?</h2>
        <div className="bg-[#F9FCFA] p-4 rounded-lg">
          <p>
            <strong>Contact us:</strong> <a href="mailto:privacy@rekolink.com">privacy@rekolink.com</a><br />
            <strong>Mail:</strong> Rekolink SAS, 15 rue de l'Orgerie, 35590 Saint-Gilles, France
          </p>
          <p className="mt-3">
            <strong>File a complaint with data authorities:</strong><br />
            France (CNIL): <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a><br />
            EU/EEA: <a href="https://edpb.europa.eu" target="_blank" rel="noopener noreferrer">edpb.europa.eu</a>
          </p>
        </div>
      </section>
    </div>
  );
}
