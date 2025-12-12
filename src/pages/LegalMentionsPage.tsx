import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { LegalMentionsContent } from '../components/legal/LegalMentions';
import logo from '../assets/top_bar_logo.png';

export function LegalMentionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FCFA] to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E8E8E8] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-2 rounded-full bg-[#E5E9E6] group-hover:bg-[#8CA58F] transition-colors">
                <ArrowLeft className="w-5 h-5 text-[#47634A] group-hover:text-white transition-colors" />
              </div>
              <span className="text-[#47634A] font-semibold">Back to Home</span>
            </Link>
            <img 
              src={logo} 
              alt="Rekolink" 
              className="h-6"
              style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(13%) saturate(806%) hue-rotate(82deg) brightness(94%) contrast(88%)' }}
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <div className="prose prose-base max-w-none
            prose-headings:text-[#47634A] prose-headings:font-semibold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:first:mt-0
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
            prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3
            prose-p:text-[#6A6A6A] prose-p:leading-relaxed prose-p:mb-4
            prose-li:text-[#6A6A6A] prose-li:leading-relaxed
            prose-strong:text-[#47634A] prose-strong:font-semibold
            prose-a:text-[#8CA58F] prose-a:no-underline hover:prose-a:underline
            prose-ul:my-4 prose-ol:my-4
            prose-li:my-2">
            <h1 className="text-4xl font-bold text-[#1A1A1A] mb-8">Legal Mentions</h1>
            <LegalMentionsContent />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E8E8E8] py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#6A6A6A]">
              © {new Date().getFullYear()} Rekolink SAS. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-[#6A6A6A] hover:text-[#8CA58F] transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-[#6A6A6A] hover:text-[#8CA58F] transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-[#6A6A6A] hover:text-[#8CA58F] transition-colors">Cookie Policy</Link>
              <Link to="/moderation" className="text-[#6A6A6A] hover:text-[#8CA58F] transition-colors">Moderation</Link>
              <Link to="/legal" className="text-[#6A6A6A] hover:text-[#8CA58F] transition-colors">Legal</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
