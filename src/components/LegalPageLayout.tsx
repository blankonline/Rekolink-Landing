import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Footer } from '../components/Footer';
import logo from '../assets/top_bar_logo.png';

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  const location = useLocation();

  // Scroll to top when page loads or route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FCFA] to-white flex flex-col">
      {/* Header matching homepage */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E8E8E8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-6">
          <Link to="/" className="inline-flex items-center group">
            <img 
              src={logo} 
              alt="Rekolink" 
              className="h-8 w-auto transition-all duration-300 group-hover:drop-shadow-lg"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 lg:p-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">{title}</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-[#8CA58F] to-[#47634A] rounded-full mb-12"></div>
          
          <div className="prose prose-lg max-w-none
            prose-headings:text-[#47634A] prose-headings:font-semibold
            prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:first:mt-0
            prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
            prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3
            prose-p:text-[#6A6A6A] prose-p:leading-relaxed prose-p:mb-6
            prose-strong:text-[#47634A] prose-strong:font-semibold
            prose-a:text-[#8CA58F] prose-a:no-underline hover:prose-a:underline
            prose-ul:my-6 prose-ol:my-6 prose-ul:list-none prose-ul:pl-0
            prose-li:text-[#6A6A6A] prose-li:leading-relaxed prose-li:mb-3 prose-li:pl-0">
            {children}
          </div>
        </article>
      </main>

      {/* Footer matching homepage */}
      <Footer />
    </div>
  );
}
