import { LegalPageLayout } from '../components/LegalPageLayout';
import { ModerationPolicyContent } from '../components/legal/ModerationPolicy';

export function ModerationPolicyPage() {
  return (
    <LegalPageLayout title="Moderation Policy">
      <ModerationPolicyContent />
    </LegalPageLayout>
  );
}
