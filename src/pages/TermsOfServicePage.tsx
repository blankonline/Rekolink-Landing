import { LegalPageLayout } from '../components/LegalPageLayout';
import { TermsOfServiceContent } from '../components/legal/TermsOfService';

export function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service">
      <TermsOfServiceContent />
    </LegalPageLayout>
  );
}
