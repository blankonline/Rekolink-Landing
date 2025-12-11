export function ModerationPolicyContent() {
  return (
    <div className="space-y-6 text-[#1A1A1A]">
      <div className="text-[#6A6A6A] text-sm mb-6">
        <p><strong>Last Updated:</strong> 11 December 2025</p>
        <p><strong>Operated by:</strong> Rekolink SAS</p>
      </div>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">1. Purpose</h3>
        <p className="text-[#6A6A6A] leading-relaxed">
          Rekolink is committed to maintaining a safe, respectful, and professional environment for all users. 
          This Moderation Policy outlines the content standards we enforce and the measures we take to 
          protect our community.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">2. Scope</h3>
        <p className="text-[#6A6A6A] leading-relaxed mb-3">
          This policy applies to all user-generated content within the Rekolink app, including:
        </p>
        <ul className="list-disc list-inside text-[#6A6A6A] space-y-1 ml-4">
          <li>Profile information and descriptions</li>
          <li>Recommendations ("rekos")</li>
          <li>Chat messages (text and media)</li>
          <li>Uploaded documents and images</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">3. Prohibited Content</h3>
        
        <div className="space-y-3">
          <div className="bg-[#FFF9ED] border-l-4 border-red-400 p-4 rounded-lg">
            <h4 className="font-semibold text-[#47634A] mb-2">Illegal Content</h4>
            <ul className="text-[#6A6A6A] text-sm space-y-1">
              <li>• Child sexual abuse material (CSAM)</li>
              <li>• Terrorism or violent extremism</li>
              <li>• Human trafficking or exploitation</li>
              <li>• Sale of illegal goods or services</li>
              <li>• Copyright or trademark infringement</li>
            </ul>
          </div>

          <div className="bg-[#FFF9ED] border-l-4 border-orange-400 p-4 rounded-lg">
            <h4 className="font-semibold text-[#47634A] mb-2">Harmful Content</h4>
            <ul className="text-[#6A6A6A] text-sm space-y-1">
              <li>• Graphic violence, gore, or cruelty</li>
              <li>• Self-harm or suicide promotion</li>
              <li>• Bullying, harassment, or threats</li>
              <li>• Hate speech or discrimination based on race, religion, gender, etc.</li>
              <li>• Sexual or nude content</li>
            </ul>
          </div>

          <div className="bg-[#FFF9ED] border-l-4 border-yellow-400 p-4 rounded-lg">
            <h4 className="font-semibold text-[#47634A] mb-2">Deceptive Content</h4>
            <ul className="text-[#6A6A6A] text-sm space-y-1">
              <li>• Impersonation or fake identities</li>
              <li>• Fraudulent schemes or scams</li>
              <li>• Misleading professional credentials</li>
              <li>• Spam or automated content</li>
              <li>• Malware or phishing attempts</li>
            </ul>
          </div>

          <div className="bg-[#FFF9ED] border-l-4 border-[#8CA58F] p-4 rounded-lg">
            <h4 className="font-semibold text-[#47634A] mb-2">Inappropriate Professional Content</h4>
            <ul className="text-[#6A6A6A] text-sm space-y-1">
              <li>• Off-topic or irrelevant content</li>
              <li>• Personal attacks or unprofessional behavior</li>
              <li>• Privacy violations (sharing others' personal information)</li>
              <li>• Solicitation for unrelated services</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">4. Moderation Approach</h3>
        
        <h4 className="text-lg font-semibold mb-2 text-[#47634A]">4.1 Automated Systems</h4>
        <p className="text-[#6A6A6A] leading-relaxed mb-3">
          Rekolink uses AI-powered moderation tools to scan media uploads in real-time for:
        </p>
        <ul className="list-disc list-inside text-[#6A6A6A] space-y-1 ml-4 mb-4">
          <li>Nudity and sexual content</li>
          <li>Violence and graphic imagery</li>
          <li>Hate symbols and extremist content</li>
          <li>Known CSAM hashes</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2 text-[#47634A]">4.2 Human Review</h4>
        <p className="text-[#6A6A6A] leading-relaxed">
          Content flagged by automated systems or reported by users is reviewed by our moderation team. 
          We prioritize cases involving:
        </p>
        <ul className="list-disc list-inside text-[#6A6A6A] space-y-1 ml-4">
          <li>Immediate safety threats</li>
          <li>Illegal content</li>
          <li>Repeated violations</li>
          <li>High-impact reports</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">5. Enforcement Actions</h3>
        <p className="text-[#6A6A6A] leading-relaxed mb-3">
          Depending on the severity and frequency of violations, we may:
        </p>
        
        <div className="space-y-2">
          <div className="bg-[#F9FCFA] p-3 rounded-lg">
            <p className="text-[#47634A] font-semibold">Warning</p>
            <p className="text-[#6A6A6A] text-sm">First-time minor violations receive a notification</p>
          </div>
          
          <div className="bg-[#F9FCFA] p-3 rounded-lg">
            <p className="text-[#47634A] font-semibold">Content Removal</p>
            <p className="text-[#6A6A6A] text-sm">Violating content is deleted from the platform</p>
          </div>
          
          <div className="bg-[#F9FCFA] p-3 rounded-lg">
            <p className="text-[#47634A] font-semibold">Feature Restriction</p>
            <p className="text-[#6A6A6A] text-sm">Temporary suspension of chat, uploads, or other features</p>
          </div>
          
          <div className="bg-[#F9FCFA] p-3 rounded-lg">
            <p className="text-[#47634A] font-semibold">Account Suspension</p>
            <p className="text-[#6A6A6A] text-sm">Temporary ban for repeated or serious violations</p>
          </div>
          
          <div className="bg-[#F9FCFA] p-3 rounded-lg">
            <p className="text-[#47634A] font-semibold">Permanent Ban</p>
            <p className="text-[#6A6A6A] text-sm">Account termination for severe or illegal content</p>
          </div>
          
          <div className="bg-[#F9FCFA] p-3 rounded-lg">
            <p className="text-[#47634A] font-semibold">Legal Reporting</p>
            <p className="text-[#6A6A6A] text-sm">Illegal content reported to law enforcement</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">6. Reporting Violations</h3>
        <p className="text-[#6A6A6A] leading-relaxed mb-3">
          Users can report harmful or inappropriate content by:
        </p>
        <div className="bg-[#F9FCFA] p-4 rounded-lg">
          <ul className="text-[#6A6A6A] space-y-2">
            <li><strong>In-App Reporting:</strong> Use the report button within chat or profiles</li>
            <li><strong>Email:</strong> <a href="mailto:abuse@rekolink.com" className="text-[#8CA58F] hover:underline">abuse@rekolink.com</a></li>
            <li><strong>Emergency Situations:</strong> Contact local law enforcement immediately</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">7. Appeals Process</h3>
        <p className="text-[#6A6A6A] leading-relaxed">
          Users may appeal moderation decisions by contacting <a href="mailto:abuse@rekolink.com" className="text-[#8CA58F] hover:underline">abuse@rekolink.com</a> 
          with their account information and reason for appeal. We review appeals within 7 business days.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">8. Transparency</h3>
        <p className="text-[#6A6A6A] leading-relaxed">
          Rekolink may publish periodic transparency reports detailing:
        </p>
        <ul className="list-disc list-inside text-[#6A6A6A] space-y-1 ml-4">
          <li>Number of content reports received</li>
          <li>Enforcement actions taken</li>
          <li>Appeal outcomes</li>
          <li>Cooperation with law enforcement</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">9. Policy Updates</h3>
        <p className="text-[#6A6A6A] leading-relaxed">
          This policy may be updated to reflect evolving community standards, legal requirements, 
          or platform changes. Users will be notified of material updates.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3 text-[#47634A]">10. Contact</h3>
        <div className="bg-[#F9FCFA] p-4 rounded-lg">
          <p className="text-[#6A6A6A]">
            <strong>Report Abuse:</strong> <a href="mailto:abuse@rekolink.com" className="text-[#8CA58F] hover:underline">abuse@rekolink.com</a><br />
            <strong>General Contact:</strong> <a href="mailto:contact@rekolink.com" className="text-[#8CA58F] hover:underline">contact@rekolink.com</a><br /><br />
            Rekolink SAS<br />
            15 rue de l'Orgerie<br />
            35590 Saint-Gilles, France
          </p>
        </div>
      </section>
    </div>
  );
}
