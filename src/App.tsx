import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { ModerationPolicyPage } from './pages/ModerationPolicyPage';
import { LegalMentionsPage } from './pages/LegalMentionsPage';
import { WaitingListPage } from './pages/WaitingListPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsOfServicePage />} />
      <Route path="/cookies" element={<CookiePolicyPage />} />
      <Route path="/moderation" element={<ModerationPolicyPage />} />
      <Route path="/legal" element={<LegalMentionsPage />} />
      <Route path="/waiting-list" element={<WaitingListPage />} />
    </Routes>
  );
}
