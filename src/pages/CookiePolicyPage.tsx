import { LegalPageLayout } from '../components/LegalPageLayout';
import { CookiePolicyContent } from '../components/legal/CookiePolicy';

export function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie Policy">
      <CookiePolicyContent />
    </LegalPageLayout>
  );
}
