export function TermsOfServiceContent() {
  return (
    <div>
      <div className="text-sm mb-6 text-[#6A6A6A]">
        <p><strong>Last Updated:</strong> December 11, 2025</p>
        <p><strong>Company:</strong> Rekolink SAS, France</p>
      </div>

      <div className="bg-[#FFF9ED] border-l-4 border-[#8CA58F] p-4 rounded-lg mb-6">
        <p className="text-sm">
          <strong>Important:</strong> These terms apply to both iOS and Android versions of Rekolink.
        </p>
      </div>

      <section>
        <h2>Welcome to Rekolink</h2>
        <p>
          By using Rekolink, you agree to these terms. Please read them carefully. If you don't agree, please don't use our app.
        </p>
      </section>

      <section>
        <h2>About Us</h2>
        <div className="bg-[#F9FCFA] p-4 rounded-lg">
          <p>
            <strong>Company:</strong> Rekolink SAS<br />
            <strong>Location:</strong> 15 rue de l'Orgerie, 35590 Saint-Gilles, France<br />
            <strong>Contact:</strong> <a href="mailto:contact@rekolink.com">contact@rekolink.com</a><br />
            <strong>Privacy:</strong> <a href="mailto:privacy@rekolink.com">privacy@rekolink.com</a><br />
            <strong>Report Issues:</strong> <a href="mailto:abuse@rekolink.com">abuse@rekolink.com</a>
          </p>
        </div>
      </section>

      <section>
        <h2>What Rekolink Does</h2>
        <p>Rekolink helps you:</p>
        <ul>
          <li>Build a skills-based professional profile</li>
          <li>Request and exchange recommendations</li>
          <li>Access analytics like Trust Index and experience insights</li>
          <li>Get AI-powered career suggestions and CV help</li>
          <li>Connect with other professionals via chat</li>
        </ul>
        <p className="text-sm italic bg-[#FFF9ED] p-3 rounded-lg mt-3">
          Note: Rekolink is not a job board and doesn't guarantee employment or specific outcomes.
        </p>
      </section>

      <section>
        <h2>Who Can Use Rekolink</h2>
        <div className="bg-[#FFF9ED] p-4 rounded-lg">
          <p>
            You must be <strong>at least 16 years old</strong> to use Rekolink.
          </p>
        </div>
      </section>

      <section>
        <h2>Your Account Responsibilities</h2>
        <p>When you create an account, you agree to:</p>
        <ul>
          <li>Provide accurate and truthful information</li>
          <li>Keep your login credentials secure</li>
          <li>Not impersonate others</li>
          <li>Take responsibility for activity on your account</li>
        </ul>
        <p className="mt-3">
          You can delete your account anytime through Settings → Delete Account. After deletion, there's a 90-day recovery period before permanent removal.
        </p>
      </section>

      <section>
        <h2>Subscription Plans</h2>
        
        <h3>Essential Plan (Free)</h3>
        <div className="bg-[#F9FCFA] p-4 rounded-lg mb-4">
          <ul className="space-y-1">
            <li>• Unlimited recommendations</li>
            <li>• Basic profile visibility</li>
            <li>• Basic insights and statistics</li>
            <li>• Reply-only chat</li>
          </ul>
        </div>

        <h3>Reko Pro (Paid)</h3>
        <div className="bg-[#F9FCFA] p-4 rounded-lg mb-4">
          <p className="font-semibold mb-2">Pricing:</p>
          <ul className="space-y-1 mb-3">
            <li>• €11.99/month</li>
            <li>• €59.99/6 months</li>
            <li>• €99.99/year</li>
          </ul>
          <p className="font-semibold mb-2">Features:</p>
          <ul className="space-y-1">
            <li>• Full analytics & Trust Index</li>
            <li>• Advanced AI tools (CV drafts, career guidance)</li>
            <li>• Initiate chat conversations</li>
            <li>• Deep skill-match insights</li>
            <li>• Early access to new features</li>
          </ul>
        </div>

        <div className="bg-[#FFF9ED] p-4 rounded-lg text-sm">
          <p>
            <strong>iOS:</strong> Purchases through Apple In-App Purchase. Apple handles billing and refunds.<br />
            <strong>Android:</strong> Purchases through Google Play Billing. Google handles billing and refunds.
          </p>
        </div>
      </section>

      <section>
        <h2>Subscriptions & Cancellations</h2>
        
        <div className="space-y-3">
          <div>
            <h3 className="text-base">Auto-Renewal</h3>
            <p className="text-sm">Subscriptions renew automatically unless canceled at least 24 hours before renewal.</p>
          </div>

          <div>
            <h3 className="text-base">How to Cancel</h3>
            <p className="text-sm">
              <strong>iOS:</strong> Settings → Apple ID → Subscriptions → Rekolink<br />
              <strong>Android:</strong> Google Play Store → Subscriptions → Rekolink
            </p>
          </div>

          <div>
            <h3 className="text-base">Refunds</h3>
            <p className="text-sm">
              Refunds are handled by Apple or Google, not Rekolink. Request refunds through your app store.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>AI Features</h2>
        <p>
          Rekolink uses AI for skills insights, CV suggestions, Trust Index analytics, and recommendation scoring.
        </p>
        <div className="bg-[#FFF9ED] border-l-4 border-[#8CA58F] p-4 rounded-lg mt-3">
          <p className="font-semibold mb-2">Important:</p>
          <ul className="text-sm space-y-1">
            <li>• AI outputs may contain inaccuracies</li>
            <li>• Content is informational only, not professional advice</li>
            <li>• You're responsible for decisions based on AI content</li>
            <li>• We may use anonymized data to improve AI</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Chat & Content Moderation</h2>
        
        <h3>Allowed File Types</h3>
        <p className="text-sm">JPG, PNG, MP4, PDF, DOCX (Audio files not supported)</p>

        <h3 className="mt-4">Content Moderation</h3>
        <p>To keep everyone safe, we use automated systems to check uploads for:</p>
        <ul>
          <li>Nudity or explicit content</li>
          <li>Violence or threats</li>
          <li>Harassment or hate speech</li>
          <li>Illegal or dangerous activities</li>
        </ul>
        <p className="mt-3">
          We may remove violating content, restrict accounts, or report illegal activity. 
          Report harmful content to: <a href="mailto:abuse@rekolink.com">abuse@rekolink.com</a>
        </p>
      </section>

      <section>
        <h2>Prohibited Content</h2>
        <p>Don't upload or share:</p>
        <ul>
          <li>Illegal, defamatory, or fraudulent material</li>
          <li>Pornographic or sexual content</li>
          <li>Copyright-infringing files</li>
          <li>Malware or harmful files</li>
          <li>Discriminatory or hateful content</li>
          <li>Others' personal data without consent</li>
        </ul>
      </section>

      <section>
        <h2>Account Deletion</h2>
        <div className="bg-[#F9FCFA] p-4 rounded-lg space-y-2">
          <p>Delete your account through Settings → Delete Account:</p>
          <p className="text-sm">
            • Your account enters a <strong>90-day recovery window</strong>
          </p>
          <p className="text-sm">
            • You can restore by logging in during this period
          </p>
          <p className="text-sm">
            • After 90 days, all data is <strong>permanently deleted</strong>
          </p>
        </div>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>
          All intellectual property (design, code, trademarks, UI/UX) belongs to Rekolink SAS. 
          You keep ownership of your content but grant us a license to operate and display it as needed for the service.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>Rekolink provides the app "as is" without warranties. We're not liable for:</p>
        <ul>
          <li>Actions or decisions based on AI outputs</li>
          <li>Service interruptions or data loss</li>
          <li>Third-party actions (including app store billing)</li>
          <li>Misconduct by other users</li>
        </ul>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          These terms are governed by French law, subject to applicable consumer protection laws in your country.
        </p>
      </section>

      <section>
        <h2>Changes to Terms</h2>
        <p>
          We may update these terms to reflect new features or legal requirements. We'll notify you of material changes via email or in-app notice.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <div className="bg-[#F9FCFA] p-4 rounded-lg">
          <p>
            <strong>General Support:</strong> <a href="mailto:contact@rekolink.com">contact@rekolink.com</a><br />
            <strong>Privacy:</strong> <a href="mailto:privacy@rekolink.com">privacy@rekolink.com</a><br />
            <strong>Report Abuse:</strong> <a href="mailto:abuse@rekolink.com">abuse@rekolink.com</a><br /><br />
            <strong>Rekolink SAS</strong><br />
            15 rue de l'Orgerie<br />
            35590 Saint-Gilles, France
          </p>
        </div>
      </section>
    </div>
  );
}
