import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import rekolinkLogo from 'figma:asset/c5bcd94301fe9fb5ec98d2c2753e6d8862d75bc6.png';

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
          <div className="relative w-full flex items-center justify-center">
            <svg viewBox="0 0 1200 1000" className="w-full h-auto min-h-[600px] opacity-70" preserveAspectRatio="xMidYMid meet" style={{ transform: 'scale(1.8) translateY(40px)' }}>
              {/* Ground line */}
              <motion.line 
                x1="200" y1="600" x2="1000" y2="600" 
                stroke="#B4BEB5" 
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              />

              {/* Roots - ALL starting from trunk base (600, 600) */}
              <motion.path 
                d="M 600 600 Q 560 620 530 650"
                stroke="#B4BEB5" 
                strokeWidth="1.8"
                fill="none"
                opacity="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              />
              <motion.path 
                d="M 530 650 Q 510 680 490 720"
                stroke="#B4BEB5" 
                strokeWidth="1.3"
                fill="none"
                opacity="0.4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.4 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.45, ease: "easeOut" }}
              />

              <motion.path 
                d="M 600 600 Q 570 615 550 640"
                stroke="#B4BEB5" 
                strokeWidth="1.6"
                fill="none"
                opacity="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
              />
              <motion.path 
                d="M 550 640 Q 530 670 515 710"
                stroke="#B4BEB5" 
                strokeWidth="1.2"
                fill="none"
                opacity="0.4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.4 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.48, ease: "easeOut" }}
              />

              <motion.path 
                d="M 600 600 Q 585 610 570 630"
                stroke="#B4BEB5" 
                strokeWidth="1.5"
                fill="none"
                opacity="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
              />

              <motion.path 
                d="M 600 600 Q 640 620 670 650"
                stroke="#B4BEB5" 
                strokeWidth="1.8"
                fill="none"
                opacity="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              />
              <motion.path 
                d="M 670 650 Q 690 680 710 720"
                stroke="#B4BEB5" 
                strokeWidth="1.3"
                fill="none"
                opacity="0.4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.4 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              />

              <motion.path 
                d="M 600 600 Q 630 615 650 640"
                stroke="#B4BEB5" 
                strokeWidth="1.6"
                fill="none"
                opacity="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.27, ease: "easeOut" }}
              />
              <motion.path 
                d="M 650 640 Q 670 670 685 710"
                stroke="#B4BEB5" 
                strokeWidth="1.2"
                fill="none"
                opacity="0.4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.4 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.52, ease: "easeOut" }}
              />

              <motion.path 
                d="M 600 600 Q 615 610 630 630"
                stroke="#B4BEB5" 
                strokeWidth="1.5"
                fill="none"
                opacity="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.29, ease: "easeOut" }}
              />

              {/* More root ramifications starting from logo (600, 600) */}
              <motion.path 
                d="M 600 600 Q 550 630 520 680"
                stroke="#B4BEB5" 
                strokeWidth="1.4"
                fill="none"
                opacity="0.45"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.45 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              />
              <motion.path 
                d="M 520 680 Q 480 720 450 780"
                stroke="#B4BEB5" 
                strokeWidth="1.1"
                fill="none"
                opacity="0.35"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.35 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.55, ease: "easeOut" }}
              />

              <motion.path 
                d="M 600 600 Q 580 625 560 660"
                stroke="#B4BEB5" 
                strokeWidth="1.3"
                fill="none"
                opacity="0.45"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.45 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
              />
              <motion.path 
                d="M 560 660 Q 530 700 510 750"
                stroke="#B4BEB5" 
                strokeWidth="1.0"
                fill="none"
                opacity="0.35"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.35 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.58, ease: "easeOut" }}
              />

              <motion.path 
                d="M 600 600 Q 650 630 680 680"
                stroke="#B4BEB5" 
                strokeWidth="1.4"
                fill="none"
                opacity="0.45"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.45 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.34, ease: "easeOut" }}
              />
              <motion.path 
                d="M 680 680 Q 720 720 750 780"
                stroke="#B4BEB5" 
                strokeWidth="1.1"
                fill="none"
                opacity="0.35"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.35 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              />

              <motion.path 
                d="M 600 600 Q 620 625 640 660"
                stroke="#B4BEB5" 
                strokeWidth="1.3"
                fill="none"
                opacity="0.45"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.45 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.36, ease: "easeOut" }}
              />
              <motion.path 
                d="M 640 660 Q 670 700 690 750"
                stroke="#B4BEB5" 
                strokeWidth="1.0"
                fill="none"
                opacity="0.35"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.35 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.62, ease: "easeOut" }}
              />

              <motion.path 
                d="M 600 600 Q 600 630 600 670"
                stroke="#B4BEB5" 
                strokeWidth="1.2"
                fill="none"
                opacity="0.4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.4 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.38, ease: "easeOut" }}
              />

              {/* Trunk */}
              <motion.path 
                d="M 600 600 Q 598 550 595 500 Q 593 450 590 400"
                stroke="#47634A" 
                strokeWidth="12"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              />

              {/* Main branches */}
              <motion.path 
                d="M 590 400 Q 550 380 500 340 Q 450 300 420 250"
                stroke="#47634A" 
                strokeWidth="8"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.7, delay: 1.5, ease: "easeOut" }}
              />

              <motion.path 
                d="M 592 450 Q 570 420 540 380 Q 510 340 490 290"
                stroke="#47634A" 
                strokeWidth="7"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.7, delay: 1.6, ease: "easeOut" }}
              />

              <motion.path 
                d="M 594 470 Q 585 440 570 400 Q 555 360 545 310"
                stroke="#47634A" 
                strokeWidth="6"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.7, delay: 1.7, ease: "easeOut" }}
              />

              <motion.path 
                d="M 595 480 Q 595 450 595 410 Q 595 370 595 320"
                stroke="#47634A" 
                strokeWidth="6"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.7, delay: 1.75, ease: "easeOut" }}
              />

              <motion.path 
                d="M 596 470 Q 605 440 620 400 Q 635 360 645 310"
                stroke="#47634A" 
                strokeWidth="6"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.7, delay: 1.8, ease: "easeOut" }}
              />

              <motion.path 
                d="M 598 450 Q 620 420 650 380 Q 680 340 700 290"
                stroke="#47634A" 
                strokeWidth="7"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.7, delay: 1.85, ease: "easeOut" }}
              />

              <motion.path 
                d="M 600 400 Q 640 380 690 340 Q 740 300 770 250"
                stroke="#47634A" 
                strokeWidth="8"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.7, delay: 1.9, ease: "easeOut" }}
              />

              {/* Mid-trunk branches */}
              <motion.path 
                d="M 593 500 Q 560 490 520 470"
                stroke="#47634A" 
                strokeWidth="5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.55, ease: "easeOut" }}
              />
              <motion.path 
                d="M 520 470 Q 500 450 480 420"
                stroke="#47634A" 
                strokeWidth="3.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.95, ease: "easeOut" }}
              />
              <motion.path 
                d="M 520 470 Q 510 460 500 440"
                stroke="#47634A" 
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.0, ease: "easeOut" }}
              />

              <motion.path 
                d="M 597 500 Q 630 490 670 470"
                stroke="#47634A" 
                strokeWidth="5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.58, ease: "easeOut" }}
              />
              <motion.path 
                d="M 670 470 Q 690 450 710 420"
                stroke="#47634A" 
                strokeWidth="3.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.98, ease: "easeOut" }}
              />
              <motion.path 
                d="M 670 470 Q 680 460 690 440"
                stroke="#47634A" 
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.03, ease: "easeOut" }}
              />

              <motion.path 
                d="M 594 510 Q 575 500 555 485"
                stroke="#47634A" 
                strokeWidth="4.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.62, ease: "easeOut" }}
              />
              <motion.path 
                d="M 555 485 Q 545 470 535 450"
                stroke="#47634A" 
                strokeWidth="3.2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.05, ease: "easeOut" }}
              />

              <motion.path 
                d="M 596 510 Q 615 500 635 485"
                stroke="#47634A" 
                strokeWidth="4.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.65, ease: "easeOut" }}
              />
              <motion.path 
                d="M 635 485 Q 645 470 655 450"
                stroke="#47634A" 
                strokeWidth="3.2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.08, ease: "easeOut" }}
              />

              {/* Secondary branches - with additional ramifications */}
              <motion.path 
                d="M 420 250 Q 400 230 380 200"
                stroke="#47634A" 
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.2, ease: "easeOut" }}
              />
              <motion.path 
                d="M 420 250 Q 410 220 400 180"
                stroke="#47634A" 
                strokeWidth="3.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.25, ease: "easeOut" }}
              />
              <motion.path d="M 420 250 Q 395 235 370 210" stroke="#47634A" strokeWidth="2.8" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 2.75, ease: "easeOut" }}
              />

              <motion.path 
                d="M 490 290 Q 480 260 470 220"
                stroke="#47634A" 
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.3, ease: "easeOut" }}
              />
              <motion.path 
                d="M 490 290 Q 475 270 460 240"
                stroke="#47634A" 
                strokeWidth="3.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.35, ease: "easeOut" }}
              />
              <motion.path d="M 490 290 Q 495 270 500 240" stroke="#47634A" strokeWidth="2.8" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 2.78, ease: "easeOut" }}
              />

              <motion.path 
                d="M 545 310 Q 535 280 525 240"
                stroke="#47634A" 
                strokeWidth="3.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.4, ease: "easeOut" }}
              />
              <motion.path d="M 545 310 Q 550 290 555 260" stroke="#47634A" strokeWidth="2.5" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 2.8, ease: "easeOut" }}
              />

              <motion.path 
                d="M 595 320 Q 590 280 585 230"
                stroke="#47634A" 
                strokeWidth="3.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.45, ease: "easeOut" }}
              />
              <motion.path d="M 595 320 Q 600 295 605 260" stroke="#47634A" strokeWidth="2.5" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 2.83, ease: "easeOut" }}
              />

              <motion.path 
                d="M 645 310 Q 655 280 665 240"
                stroke="#47634A" 
                strokeWidth="3.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.5, ease: "easeOut" }}
              />
              <motion.path d="M 645 310 Q 650 285 655 255" stroke="#47634A" strokeWidth="2.8" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 2.85, ease: "easeOut" }}
              />

              <motion.path 
                d="M 700 290 Q 710 260 720 220"
                stroke="#47634A" 
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.55, ease: "easeOut" }}
              />
              <motion.path 
                d="M 700 290 Q 715 270 730 240"
                stroke="#47634A" 
                strokeWidth="3.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.6, ease: "easeOut" }}
              />
              <motion.path d="M 700 290 Q 705 270 710 240" stroke="#47634A" strokeWidth="2.8" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 2.88, ease: "easeOut" }}
              />

              <motion.path 
                d="M 770 250 Q 790 230 810 200"
                stroke="#47634A" 
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.65, ease: "easeOut" }}
              />
              <motion.path 
                d="M 770 250 Q 780 220 790 180"
                stroke="#47634A" 
                strokeWidth="3.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.7, ease: "easeOut" }}
              />
              <motion.path d="M 770 250 Q 775 235 780 210" stroke="#47634A" strokeWidth="2.8" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 2.9, ease: "easeOut" }}
              />

              {/* Ripple waves from logo */}
              {[...Array(3)].map((_, i) => (
                <motion.circle
                  key={`ripple-${i}`}
                  cx="600"
                  cy="600"
                  r="25"
                  stroke="#8CA58F"
                  strokeWidth="2"
                  fill="none"
                  initial={{ r: 25, opacity: 0 }}
                  animate={isInView ? {
                    r: [25, 60, 100],
                    opacity: [0, 0.6, 0],
                  } : { r: 25, opacity: 0 }}
                  transition={{
                    duration: 2.5,
                    delay: 1.5 + i * 0.8,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    ease: "easeOut"
                  }}
                />
              ))}

              {/* Rekolink Logo at trunk-root intersection */}
              <foreignObject x="575" y="575" width="50" height="50">
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.95, ease: "easeOut" }}
                >
                  <img
                    src={rekolinkLogo}
                    alt="Rekolink"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </foreignObject>

              {/* Foliage blobs */}
              {[
                // Far left cluster
                { cx: 380, cy: 200, r: 45, delay: 3.0, opacity: 0.3 },
                { cx: 360, cy: 170, r: 38, delay: 3.05, opacity: 0.4 },
                { cx: 400, cy: 180, r: 40, delay: 3.1, opacity: 0.35 },
                { cx: 420, cy: 160, r: 35, delay: 3.15, opacity: 0.3 },
                
                // Left cluster
                { cx: 460, cy: 240, r: 50, delay: 3.2, opacity: 0.4 },
                { cx: 440, cy: 210, r: 42, delay: 3.25, opacity: 0.35 },
                { cx: 480, cy: 220, r: 46, delay: 3.3, opacity: 0.38 },
                { cx: 470, cy: 190, r: 40, delay: 3.35, opacity: 0.32 },
                
                // Mid-lower left foliage
                { cx: 480, cy: 420, r: 40, delay: 2.75, opacity: 0.35 },
                { cx: 500, cy: 440, r: 38, delay: 2.8, opacity: 0.32 },
                { cx: 465, cy: 405, r: 35, delay: 2.85, opacity: 0.3 },
                
                // Lower left foliage
                { cx: 520, cy: 470, r: 45, delay: 2.65, opacity: 0.38 },
                { cx: 505, cy: 485, r: 40, delay: 2.7, opacity: 0.35 },
                { cx: 535, cy: 455, r: 35, delay: 2.72, opacity: 0.3 },
                
                // Center-left cluster
                { cx: 520, cy: 240, r: 55, delay: 3.4, opacity: 0.45 },
                { cx: 500, cy: 210, r: 48, delay: 3.45, opacity: 0.4 },
                { cx: 540, cy: 220, r: 50, delay: 3.5, opacity: 0.42 },
                { cx: 525, cy: 180, r: 45, delay: 3.55, opacity: 0.38 },
                { cx: 510, cy: 260, r: 42, delay: 3.6, opacity: 0.35 },
                
                // Mid-lower center-left foliage
                { cx: 535, cy: 450, r: 42, delay: 2.78, opacity: 0.36 },
                { cx: 550, cy: 435, r: 38, delay: 2.82, opacity: 0.33 },
                
                // Center cluster
                { cx: 580, cy: 230, r: 58, delay: 3.65, opacity: 0.5 },
                { cx: 560, cy: 200, r: 50, delay: 3.7, opacity: 0.45 },
                { cx: 600, cy: 210, r: 52, delay: 3.75, opacity: 0.48 },
                { cx: 585, cy: 170, r: 46, delay: 3.8, opacity: 0.42 },
                { cx: 595, cy: 250, r: 48, delay: 3.85, opacity: 0.4 },
                { cx: 575, cy: 260, r: 45, delay: 3.9, opacity: 0.38 },
                
                // Mid-lower center-right foliage
                { cx: 655, cy: 450, r: 42, delay: 2.8, opacity: 0.36 },
                { cx: 640, cy: 435, r: 38, delay: 2.84, opacity: 0.33 },
                
                // Center-right cluster
                { cx: 660, cy: 240, r: 55, delay: 3.95, opacity: 0.45 },
                { cx: 680, cy: 210, r: 48, delay: 4.0, opacity: 0.4 },
                { cx: 645, cy: 220, r: 50, delay: 4.05, opacity: 0.42 },
                { cx: 665, cy: 180, r: 45, delay: 4.1, opacity: 0.38 },
                { cx: 675, cy: 260, r: 42, delay: 4.15, opacity: 0.35 },
                
                // Lower right foliage
                { cx: 670, cy: 470, r: 45, delay: 2.68, opacity: 0.38 },
                { cx: 685, cy: 485, r: 40, delay: 2.73, opacity: 0.35 },
                { cx: 655, cy: 455, r: 35, delay: 2.76, opacity: 0.3 },
                
                // Mid-lower right foliage
                { cx: 710, cy: 420, r: 40, delay: 2.77, opacity: 0.35 },
                { cx: 690, cy: 440, r: 38, delay: 2.82, opacity: 0.32 },
                { cx: 725, cy: 405, r: 35, delay: 2.87, opacity: 0.3 },
                
                // Right cluster
                { cx: 720, cy: 240, r: 50, delay: 4.2, opacity: 0.4 },
                { cx: 740, cy: 210, r: 42, delay: 4.25, opacity: 0.35 },
                { cx: 700, cy: 220, r: 46, delay: 4.3, opacity: 0.38 },
                { cx: 730, cy: 190, r: 40, delay: 4.35, opacity: 0.32 },
                
                // Far right cluster
                { cx: 810, cy: 200, r: 45, delay: 4.4, opacity: 0.3 },
                { cx: 830, cy: 170, r: 38, delay: 4.45, opacity: 0.4 },
                { cx: 790, cy: 180, r: 40, delay: 4.5, opacity: 0.35 },
                { cx: 775, cy: 160, r: 35, delay: 4.55, opacity: 0.3 },
              ].map((blob, i) => (
                <motion.circle
                  key={`foliage-${i}`}
                  cx={blob.cx}
                  cy={blob.cy}
                  r={blob.r}
                  fill="#8CA58F"
                  opacity={blob.opacity}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { 
                    scale: 1, 
                    opacity: blob.opacity 
                  } : { scale: 0, opacity: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: blob.delay, 
                    ease: "easeOut" 
                  }}
                />
              ))}

              {/* Additional foliage layers */}
              {[
                { cx: 340, cy: 190, r: 30, delay: 4.6, opacity: 0.25, color: "#B4BEB5" },
                { cx: 460, cy: 200, r: 35, delay: 4.65, opacity: 0.28, color: "#B4BEB5" },
                { cx: 540, cy: 200, r: 38, delay: 4.7, opacity: 0.3, color: "#B4BEB5" },
                { cx: 590, cy: 190, r: 40, delay: 4.75, opacity: 0.32, color: "#B4BEB5" },
                { cx: 650, cy: 200, r: 38, delay: 4.8, opacity: 0.3, color: "#B4BEB5" },
                { cx: 730, cy: 200, r: 35, delay: 4.85, opacity: 0.28, color: "#B4BEB5" },
                { cx: 850, cy: 190, r: 30, delay: 4.9, opacity: 0.25, color: "#B4BEB5" },
              ].map((blob, i) => (
                <motion.circle
                  key={`foliage-light-${i}`}
                  cx={blob.cx}
                  cy={blob.cy}
                  r={blob.r}
                  fill={blob.color}
                  opacity={blob.opacity}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { 
                    scale: 1, 
                    opacity: blob.opacity 
                  } : { scale: 0, opacity: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: blob.delay, 
                    ease: "easeOut" 
                  }}
                />
              ))}

              {/* Accent foliage */}
              {[
                { cx: 380, cy: 185, r: 25, delay: 4.95, opacity: 0.2 },
                { cx: 470, cy: 225, r: 28, delay: 5.0, opacity: 0.22 },
                { cx: 525, cy: 215, r: 30, delay: 5.05, opacity: 0.25 },
                { cx: 595, cy: 205, r: 32, delay: 5.1, opacity: 0.28 },
                { cx: 665, cy: 215, r: 30, delay: 5.15, opacity: 0.25 },
                { cx: 720, cy: 225, r: 28, delay: 5.2, opacity: 0.22 },
                { cx: 810, cy: 185, r: 25, delay: 5.25, opacity: 0.2 },
              ].map((blob, i) => (
                <motion.circle
                  key={`foliage-accent-${i}`}
                  cx={blob.cx}
                  cy={blob.cy}
                  r={blob.r}
                  fill="#DC8285"
                  opacity={blob.opacity}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { 
                    scale: 1, 
                    opacity: blob.opacity 
                  } : { scale: 0, opacity: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: blob.delay, 
                    ease: "easeOut" 
                  }}
                />
              ))}

              {/* Energy particles */}
              {[...Array(15)].map((_, i) => {
                const color = i % 3 === 0 ? "#DC8285" : "#8CA58F";
                const delay = 5.5 + i * 0.15;
                
                const paths = [
                  { cx: [600, 600, 595, 585, 575], cy: [600, 500, 400, 300, 200] },
                  { cx: [600, 590, 550, 500, 460], cy: [600, 500, 400, 320, 240] },
                  { cx: [600, 595, 640, 680, 720], cy: [600, 500, 400, 320, 240] },
                  { cx: [600, 595, 570, 545, 525], cy: [600, 480, 380, 290, 220] },
                  { cx: [600, 598, 620, 645, 665], cy: [600, 480, 380, 290, 220] },
                ];
                const path = paths[i % paths.length];
                const opacities = [0, 0.6, 0.6, 0.4, 0.15];
                
                return (
                  <motion.circle
                    key={`energy-${i}`}
                    cx={path.cx[0]}
                    cy={path.cy[0]}
                    r="2.5"
                    fill={color}
                    initial={{ cx: path.cx[0], cy: path.cy[0], opacity: 0 }}
                    animate={isInView ? {
                      cx: path.cx,
                      cy: path.cy,
                      opacity: opacities,
                      scale: [0, 1, 1, 1, 1.5]
                    } : { cx: path.cx[0], cy: path.cy[0], opacity: 0 }}
                    transition={{
                      duration: 3,
                      delay: delay,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}