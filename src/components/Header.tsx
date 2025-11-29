import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from '../assets/top_bar_logo.png';

export function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E8E8E8]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-2">
        <div className="flex items-center">
          
          {/* Logo */}
          <motion.a 
            href="/"
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ImageWithFallback 
              src={logo} 
              alt="Rekolink - Match. Grow. Succeed" 
              className="h-6 w-auto"
            />
          </motion.a>

        </div>
      </div>
    </motion.header>
  );
}