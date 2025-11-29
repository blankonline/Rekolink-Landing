import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, Award, TrendingUp } from 'lucide-react';
import { TrustIndexMockup } from './TrustIndexMockup';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';
import logo from '../assets/top_bar_logo.png';

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Smooth parallax values
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const trustIndicators = [
    {
      icon: Shield,
      text: "Verified by managers, colleagues & clients"
    },
    {
      icon: Award,
      text: "Evidence-based profile — not just job titles"
    },
    {
      icon: TrendingUp,
      text: "A modern alternative to traditional platforms"
    }
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-[#F9FCFA] to-white min-h-[80vh] flex flex-col pt-20 sm:pt-24 lg:pt-28 pb-4">
      {/* Logo at top with elegant entrance */}
      <motion.div 
        className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 w-full mb-14 lg:mb-20"
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1
        }}
      >
        <motion.a 
          href="/"
          className="inline-flex items-center group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            initial={{ filter: 'blur(10px)' }}
            animate={{ filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ImageWithFallback 
              src={logo} 
              alt="Rekolink - Match. Grow. Succeed" 
              className="h-10 w-auto transition-all duration-300 group-hover:drop-shadow-lg"
            />
          </motion.div>
        </motion.a>
      </motion.div>

      <motion.div 
        className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 lg:py-16 w-full flex-1 flex items-center"
        style={{ opacity, scale }}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Column - Text Block */}
          <motion.div 
            className="max-w-[560px] mx-auto lg:mx-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Headline - UPDATED */}
            <motion.h1 
              className="text-[#1A1A1A] max-w-[520px]"
              variants={itemVariants}
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 700,
                lineHeight: '105%',
                letterSpacing: '-0.03em'
              }}
            >
              No Noise. No Self-Promotion. <span className="text-[#8CA58F]">Just Real Trust.</span>
            </motion.h1>

            {/* Subheadline - UPDATED */}
            <motion.p 
              className="mt-6 text-[#4A4A4A] max-w-[560px]"
              variants={itemVariants}
              style={{
                fontSize: 'clamp(18px, 2vw, 26px)',
                lineHeight: '150%'
              }}
            >
              Let your skills speak — and grow with recognition that truly matters.
            </motion.p>

            {/* CTAs - UPDATED to App Store / Google Play */}
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              variants={itemVariants}
            >
              {/* App Store Button */}
              <motion.button
                className="flex items-center gap-3 px-6 py-4 bg-[#1A1A1A] text-white rounded-xl transition-all relative overflow-hidden group"
                style={{ fontSize: '16px', fontWeight: 500 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Apple Logo */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Download on the</div>
                  <div>App Store</div>
                </div>
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              {/* Google Play Button */}
              <motion.button
                className="flex items-center gap-3 px-6 py-4 bg-[#8CA58F] text-white rounded-xl transition-all relative overflow-hidden group"
                style={{ fontSize: '16px', fontWeight: 500 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 12px 32px rgba(140, 165, 143, 0.5)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Google Play Logo */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Get it on</div>
                  <div>Google Play</div>
                </div>
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-12 space-y-4"
              variants={containerVariants}
            >
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 group cursor-default"
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <indicator.icon className="w-4 h-4 text-[#47634A] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    {/* Subtle glow on hover */}
                    <motion.div
                      className="absolute inset-0 bg-[#B4BEB5] rounded-full blur-md opacity-0 group-hover:opacity-50"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <span className="text-[#6A6A6A] transition-colors group-hover:text-[#47634A]" style={{ fontSize: '14px' }}>
                    {indicator.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Block */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-center"
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <TrustIndexMockup />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}