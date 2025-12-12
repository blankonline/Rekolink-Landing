import { LegalPageLayout } from '../components/LegalPageLayout';
import { PrivacyPolicyContent } from '../components/legal/PrivacyPolicy';

export function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <PrivacyPolicyContent />
    </LegalPageLayout>
  );
}
