import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from 'figma:asset/62d74bce0746b572ec76c0446517c3320579a6bb.png';

export function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E8E8E8]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-2">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.a 
            href="/"
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img 
              src={logo} 
              alt="Rekolink - Match. Grow. Succeed" 
              className="h-6 w-auto"
            />
          </motion.a>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Log In Button */}
            <motion.button
              className="px-3 py-1.5 text-[#47634A] hover:text-[#8CA58F] transition-colors relative group"
              style={{ fontSize: '13px', fontWeight: 500 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Log In
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8CA58F] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Try Now Button */}
            <motion.button
              className="px-4 py-1.5 bg-[#8CA58F] text-white rounded-lg hover:bg-[#47634A] transition-all relative overflow-hidden group"
              style={{ fontSize: '13px', fontWeight: 500 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 8px 24px rgba(140, 165, 143, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Try Now
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>

        </div>
      </div>
    </motion.header>
  );
}