import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import treeImage from '../assets/tree_imgae.png';

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F9FCFA] to-white px-4 sm:px-8 py-12 sm:py-16"
    >
      {/* Ambient glow background */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#8CA58F] opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-[1440px] mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <motion.h2
              className="text-[#1A1A1A] mb-6"
              style={{
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 700,
                lineHeight: '110%',
                letterSpacing: '-0.03em'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              Ready to Be <span className="text-[#8CA58F]">Recognized?</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              className="text-[#4A4A4A] mb-12"
              style={{
                fontSize: 'clamp(18px, 2.5vw, 28px)',
                lineHeight: '150%'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut"
              }}
            >
              Start your growth journey today.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut"
              }}
            >
              {/* App Store Button */}
              <motion.button
                className="group relative flex items-center gap-3 px-8 py-5 bg-[#1A1A1A] text-white rounded-2xl overflow-hidden"
                style={{ fontSize: '18px', fontWeight: 500 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Apple Logo */}
                <svg className="w-7 h-7 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left relative z-10">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-lg">App Store</div>
                </div>
              </motion.button>

              {/* Google Play Button */}
              <motion.button
                className="group relative flex items-center gap-3 px-8 py-5 bg-[#8CA58F] text-white rounded-2xl overflow-hidden"
                style={{ fontSize: '18px', fontWeight: 500 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 20px 40px rgba(140, 165, 143, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-40"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Google Play Logo */}
                <svg className="w-7 h-7 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left relative z-10">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-lg">Google Play</div>
                </div>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Tree Illustration */}
          <motion.div 
            className="relative w-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={treeImage}
              alt="Growth Tree"
              className="w-full h-auto max-w-[500px] opacity-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}