import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Shield, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrustIndexMockup } from './TrustIndexMockup';
import { useRef } from 'react';

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Smooth parallax values
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  
  // Radar graph expansion based on scroll
  const radarScale1 = useTransform(scrollYProgress, [0, 0.3], [0.7, 1]);
  const radarScale2 = useTransform(scrollYProgress, [0, 0.3], [0.5, 0.85]);
  
  // Smooth spring physics
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothRadarScale1 = useSpring(radarScale1, { stiffness: 80, damping: 20 });
  const smoothRadarScale2 = useSpring(radarScale2, { stiffness: 80, damping: 20 });

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
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-[#F9FCFA] to-white min-h-[80vh] flex items-center pt-20 pb-4">
      {/* Animated Radar Graph Background */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-10 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            {/* Gradient for graph 1 - Primary green */}
            <radialGradient id="radarGradient1" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#8CA58F" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8CA58F" stopOpacity="0.02" />
            </radialGradient>
            {/* Gradient for graph 2 - Pink/Coral */}
            <radialGradient id="radarGradient2" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#DC8285" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#DC8285" stopOpacity="0.02" />
            </radialGradient>
          </defs>
          
          {/* Center point - pink accent */}
          <circle cx="200" cy="200" r="2" fill="#DC8285" opacity="0.5" />
          
          {/* Concentric circles - 5 levels - Mixed colors */}
          {[60, 100, 140, 180, 220].map((radius, i) => (
            <motion.circle
              key={`circle-${i}`}
              cx="200"
              cy="200"
              r={radius}
              fill="none"
              stroke={i % 2 === 0 ? "#8CA58F" : "#DC8285"}
              strokeWidth="1.2"
              opacity="0.5"
              strokeDasharray="2 2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ 
                duration: 1.5, 
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Radial lines - 5 axes - Mixed colors */}
          {[0, 72, 144, 216, 288].map((angle, i) => {
            const x = 200 + Math.cos((angle - 90) * Math.PI / 180) * 220;
            const y = 200 + Math.sin((angle - 90) * Math.PI / 180) * 220;
            const lineColor = i % 3 === 0 ? "#DC8285" : "#8CA58F";
            return (
              <motion.line
                key={`line-${i}`}
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke={lineColor}
                strokeWidth="0.8"
                opacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.3 + i * 0.08,
                  ease: "easeOut"
                }}
              />
            );
          })}
          
          {/* Graph 2 - "Average" - Background layer (pink/coral) */}
          <motion.polygon
            points={
              [0, 72, 144, 216, 288].map((angle, idx) => {
                const radiusVariation = [0.5, 0.6, 0.55, 0.65, 0.52];
                const radius = 180 * radiusVariation[idx];
                const x = 200 + Math.cos((angle - 90) * Math.PI / 180) * radius;
                const y = 200 + Math.sin((angle - 90) * Math.PI / 180) * radius;
                return `${x},${y}`;
              }).join(' ')
            }
            fill="url(#radarGradient2)"
            stroke="#DC8285"
            strokeWidth="1"
            opacity="0.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 1.01, 1],
              opacity: [0, 0.5, 0.6, 0.5]
            }}
            transition={{ 
              duration: 2,
              delay: 0.6,
              ease: "easeOut"
            }}
            style={{
              transformOrigin: "200px 200px"
            }}
          />
          
          {/* Animated morphing for Graph 2 */}
          <motion.polygon
            points={
              [0, 72, 144, 216, 288].map((angle, idx) => {
                const radiusVariation = [0.5, 0.6, 0.55, 0.65, 0.52];
                const radius = 180 * radiusVariation[idx];
                const x = 200 + Math.cos((angle - 90) * Math.PI / 180) * radius;
                const y = 200 + Math.sin((angle - 90) * Math.PI / 180) * radius;
                return `${x},${y}`;
              }).join(' ')
            }
            fill="none"
            stroke="#DC8285"
            strokeWidth="1"
            opacity="0.5"
            animate={{
              points: [
                [0, 72, 144, 216, 288].map((angle, idx) => {
                  const radiusVariation = [0.5, 0.6, 0.55, 0.65, 0.52];
                  const radius = 180 * radiusVariation[idx];
                  const x = 200 + Math.cos((angle - 90) * Math.PI / 180) * radius;
                  const y = 200 + Math.sin((angle - 90) * Math.PI / 180) * radius;
                  return `${x},${y}`;
                }).join(' '),
                [0, 72, 144, 216, 288].map((angle, idx) => {
                  const radiusVariation = [0.52, 0.63, 0.57, 0.68, 0.54];
                  const baseRadius = 180;
                  const radius = baseRadius * radiusVariation[idx];
                  const x = 200 + Math.cos((angle - 90) * Math.PI / 180) * radius;
                  const y = 200 + Math.sin((angle - 90) * Math.PI / 180) * radius;
                  return `${x},${y}`;
                }).join(' '),
                [0, 72, 144, 216, 288].map((angle, idx) => {
                  const radiusVariation = [0.5, 0.6, 0.55, 0.65, 0.52];
                  const radius = 180 * radiusVariation[idx];
                  const x = 200 + Math.cos((angle - 90) * Math.PI / 180) * radius;
                  const y = 200 + Math.sin((angle - 90) * Math.PI / 180) * radius;
                  return `${x},${y}`;
                }).join(' ')
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Graph 1 - "You" - Foreground layer (primary green) - RESPONSIVE TO SCROLL */}
          <motion.g style={{ transformOrigin: "200px 200px" }}>
            <motion.polygon
              points={
                [0, 72, 144, 216, 288].map((angle, idx) => {
                  const radiusVariation = [0.7, 0.85, 0.75, 0.9, 0.65];
                  const radius = 180 * radiusVariation[idx];
                  const x = 200 + Math.cos((angle - 90) * Math.PI / 180) * radius;
                  const y = 200 + Math.sin((angle - 90) * Math.PI / 180) * radius;
                  return `${x},${y}`;
                }).join(' ')
              }
              fill="url(#radarGradient1)"
              stroke="#8CA58F"
              strokeWidth="1.2"
              opacity="0.6"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 1.02, 1],
                opacity: [0, 0.6, 0.7, 0.6]
              }}
              transition={{ 
                duration: 2,
                delay: 0.9,
                ease: "easeOut"
              }}
              style={{
                scale: smoothRadarScale1
              }}
            />
            
            {/* Animated morphing for Graph 1 */}
            <motion.polygon
              points={
                [0, 72, 144, 216, 288].map((angle, idx) => {
                  const radiusVariation = [0.7, 0.85, 0.75, 0.9, 0.65];
                  const radius = 180 * radiusVariation[idx];
                  const x = 200 + Math.cos((angle - 90) * Math.PI / 180) * radius;
                  const y = 200 + Math.sin((angle - 90) * Math.PI / 180) * radius;
                  return `${x},${y}`;
                }).join(' ')
              }
              fill="none"
              stroke="#8CA58F"
              strokeWidth="1.2"
              opacity="0.6"
              animate={{
                points: [
                  [0, 72, 144, 216, 288].map((angle, idx) => {
                    const radiusVariation = [0.7, 0.85, 0.75, 0.9, 0.65];
                    const radius = 180 * radiusVariation[idx];
                    const x = 200 + Math.cos((angle - 90) * Math.PI / 180) * radius;
                    const y = 200 + Math.sin((angle - 90) * Math.PI / 180) * radius;
                    return `${x},${y}`;
                  }).join(' '),
                  [0, 72, 144, 216, 288].map((angle, idx) => {
                    const radiusVariation = [0.73, 0.88, 0.78, 0.93, 0.68];
                    const baseRadius = 180;
                    const radius = baseRadius * radiusVariation[idx];
                    const x = 200 + Math.cos((angle - 90) * Math.PI / 180) * radius;
                    const y = 200 + Math.sin((angle - 90) * Math.PI / 180) * radius;
                    return `${x},${y}`;
                  }).join(' '),
                  [0, 72, 144, 216, 288].map((angle, idx) => {
                    const radiusVariation = [0.7, 0.85, 0.75, 0.9, 0.65];
                    const radius = 180 * radiusVariation[idx];
                    const x = 200 + Math.cos((angle - 90) * Math.PI / 180) * radius;
                    const y = 200 + Math.sin((angle - 90) * Math.PI / 180) * radius;
                    return `${x},${y}`;
                  }).join(' ')
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              style={{
                scale: smoothRadarScale1
              }}
            />
          </motion.g>
          
          {/* Data points for Graph 2 - pink/coral */}
          {[0, 72, 144, 216, 288].map((angle, i) => {
            const radiusVariation = [0.5, 0.6, 0.55, 0.65, 0.52];
            const radius = 180 * radiusVariation[i];
            const x = 200 + Math.cos((angle - 90) * Math.PI / 180) * radius;
            const y = 200 + Math.sin((angle - 90) * Math.PI / 180) * radius;
            return (
              <motion.g key={`point2-${i}`}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r="2.5"
                  fill="#DC8285"
                  opacity="0.6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.4,
                    delay: 0.8 + i * 0.08,
                    type: "spring",
                    stiffness: 200
                  }}
                />
              </motion.g>
            );
          })}
          
          {/* Data points for Graph 1 - primary green */}
          {[0, 72, 144, 216, 288].map((angle, i) => {
            const radiusVariation = [0.7, 0.85, 0.75, 0.9, 0.65];
            const radius = 180 * radiusVariation[i];
            const x = 200 + Math.cos((angle - 90) * Math.PI / 180) * radius;
            const y = 200 + Math.sin((angle - 90) * Math.PI / 180) * radius;
            return (
              <motion.g key={`point1-${i}`}>
                {/* Pulsing outer ring */}
                <motion.circle
                  cx={x}
                  cy={y}
                  r="5"
                  fill="none"
                  stroke="#8CA58F"
                  strokeWidth="1"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 1.4, 1],
                    opacity: [0, 0.6, 0, 0.6]
                  }}
                  transition={{ 
                    duration: 2.5,
                    delay: 1.2 + i * 0.12,
                    repeat: Infinity,
                    repeatDelay: 2.5
                  }}
                />
                {/* Solid center point */}
                <motion.circle
                  cx={x}
                  cy={y}
                  r="2.5"
                  fill="#8CA58F"
                  opacity="0.7"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.4,
                    delay: 1.2 + i * 0.12,
                    type: "spring",
                    stiffness: 200
                  }}
                />
              </motion.g>
            );
          })}
          
          {/* Slow rotating animation for the entire graph */}
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="180s"
            repeatCount="indefinite"
          />
        </svg>
      </motion.div>

      {/* Animated background accent with parallax */}
      <motion.div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#E5E9E6] to-transparent rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{ y: smoothY }}
      />
      
      {/* Floating background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-[#B4BEB5] rounded-full opacity-10 blur-2xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-24 h-24 bg-[#47634A] rounded-full opacity-10 blur-2xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div 
        className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 lg:py-16 w-full"
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