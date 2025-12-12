import { LegalPageLayout } from '../components/LegalPageLayout';
import { LegalMentionsContent } from '../components/legal/LegalMentions';

export function LegalMentionsPage() {
  return (
    <LegalPageLayout title="Legal Mentions">
      <LegalMentionsContent />
    </LegalPageLayout>
  );
}
