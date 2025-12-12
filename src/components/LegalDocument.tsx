import { motion } from 'motion/react';
import { X, ChevronLeft } from 'lucide-react';

interface LegalDocumentProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}

export function LegalDocument({ title, content, onClose }: LegalDocumentProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col my-8"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-br from-[#F9FCFA] to-white border-b border-[#E8E8E8] px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#E5E9E6] transition-colors"
              aria-label="Go back"
            >
              <ChevronLeft className="w-5 h-5 text-[#47634A]" />
            </button>
            <h2 
              className="text-[#1A1A1A]"
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                lineHeight: '120%'
              }}
            >
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#E5E9E6] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-[#47634A]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-8">
          <div className="prose prose-base max-w-none
            prose-headings:text-[#47634A] prose-headings:font-semibold
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-h4:text-lg prose-h4:mt-4 prose-h4:mb-2
            prose-p:text-[#6A6A6A] prose-p:leading-relaxed prose-p:mb-4
            prose-li:text-[#6A6A6A] prose-li:leading-relaxed
            prose-strong:text-[#47634A] prose-strong:font-semibold
            prose-a:text-[#8CA58F] prose-a:no-underline hover:prose-a:underline
            prose-ul:my-3 prose-ol:my-3
            prose-li:my-1">
            {content}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
