import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Users, ShieldCheck, Volume2 } from 'lucide-react';

export function ValueHuman() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [activeShape, setActiveShape] = useState(0);

  // Human silhouette positions
  const silhouettes = [
    { x: '20%', y: '30%', size: 100, delay: 0 },
    { x: '50%', y: '35%', size: 120, delay: 0.3 },
    { x: '75%', y: '25%', size: 90, delay: 0.6 },
    { x: '35%', y: '60%', size: 110, delay: 0.9 },
    { x: '65%', y: '65%', size: 95, delay: 1.2 },
  ];

  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveShape((prev) => (prev + 1) % silhouettes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section 
      ref={ref}
      className="relative min-h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] px-4 sm:px-8 py-20"
    >
      {/* Human silhouettes with crossfade */}
      {silhouettes.map((silhouette, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${index % 2 === 0 ? 'bg-gradient-to-br from-[#DC8285] to-[#8C5456]' : 'bg-gradient-to-br from-[#B7E1D2] to-[#326C56]'}`}
          style={{
            width: silhouette.size,
            height: silhouette.size * 1.8,
            left: silhouette.x,
            top: silhouette.y,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: activeShape === index ? 0.15 : 0.05,
            scale: activeShape === index ? 1 : 0.9,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="relative max-w-[1440px] mx-auto w-full z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Trust Index visualization */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main trust index container */}
            <div className="relative w-full max-w-[500px] h-[500px]">
              
              {/* SVG Animated Concentric Circles */}
              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-full"
              >
                <defs>
                  {/* Gradient definitions for dark background */}
                  <linearGradient id="circleGradientDark1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8CA58F" />
                    <stop offset="100%" stopColor="#B7E1D2" />
                  </linearGradient>
                  <linearGradient id="circleGradientDark2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6A9C8A" />
                    <stop offset="100%" stopColor="#8CA58F" />
                  </linearGradient>
                  <linearGradient id="circleGradientDark3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4A7C65" />
                    <stop offset="100%" stopColor="#6A9C8A" />
                  </linearGradient>
                  
                  {/* Glow filter */}
                  <filter id="circleGlowDark">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Background guide circles */}
                <circle
                  cx="200"
                  cy="200"
                  r="140"
                  fill="none"
                  stroke="#3A3A3A"
                  strokeWidth="40"
                  opacity="0.3"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="105"
                  fill="none"
                  stroke="#3A3A3A"
                  strokeWidth="30"
                  opacity="0.25"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="70"
                  fill="none"
                  stroke="#3A3A3A"
                  strokeWidth="20"
                  opacity="0.2"
                />

                {/* Animated Circle 1 - Outermost */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="140"
                  fill="none"
                  stroke="url(#circleGradientDark1)"
                  strokeWidth="40"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 140}
                  initial={{ strokeDashoffset: 2 * Math.PI * 140, opacity: 0 }}
                  animate={isInView ? { 
                    strokeDashoffset: 2 * Math.PI * 140 * 0.13,
                    opacity: 1
                  } : { 
                    strokeDashoffset: 2 * Math.PI * 140, 
                    opacity: 0 
                  }}
                  transition={{ 
                    duration: 2.5, 
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  filter="url(#circleGlowDark)"
                  style={{ transform: 'rotate(-90deg)', transformOrigin: '200px 200px' }}
                />

                {/* Animated Circle 2 - Middle */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="105"
                  fill="none"
                  stroke="url(#circleGradientDark2)"
                  strokeWidth="30"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 105}
                  initial={{ strokeDashoffset: 2 * Math.PI * 105, opacity: 0 }}
                  animate={isInView ? { 
                    strokeDashoffset: 2 * Math.PI * 105 * 0.13,
                    opacity: 1
                  } : { 
                    strokeDashoffset: 2 * Math.PI * 105, 
                    opacity: 0 
                  }}
                  transition={{ 
                    duration: 2.5, 
                    delay: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  filter="url(#circleGlowDark)"
                  style={{ transform: 'rotate(-90deg)', transformOrigin: '200px 200px' }}
                />

                {/* Animated Circle 3 - Innermost */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="70"
                  fill="none"
                  stroke="url(#circleGradientDark3)"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 70}
                  initial={{ strokeDashoffset: 2 * Math.PI * 70, opacity: 0 }}
                  animate={isInView ? { 
                    strokeDashoffset: 2 * Math.PI * 70 * 0.13,
                    opacity: 1
                  } : { 
                    strokeDashoffset: 2 * Math.PI * 70, 
                    opacity: 0 
                  }}
                  transition={{ 
                    duration: 2.5, 
                    delay: 1.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  filter="url(#circleGlowDark)"
                  style={{ transform: 'rotate(-90deg)', transformOrigin: '200px 200px' }}
                />

                {/* Animated dots around circles */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 - 90) * (Math.PI / 180);
                  const x = 200 + Math.cos(angle) * 140;
                  const y = 200 + Math.sin(angle) * 140;
                  
                  return (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="3"
                      fill="#8CA58F"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { 
                        opacity: 0.6, 
                        scale: 1 
                      } : { opacity: 0, scale: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.8 + i * 0.05,
                        type: "spring",
                        stiffness: 300
                      }}
                    />
                  );
                })}

                {/* Center indicator */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="8"
                  fill="#8CA58F"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: [0, 1.2, 1]
                  } : { opacity: 0, scale: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 2.5,
                    type: "spring",
                    stiffness: 200
                  }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="16"
                  fill="none"
                  stroke="#B7E1D2"
                  strokeWidth="2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { 
                    opacity: [0, 0.6, 0], 
                    scale: [0.5, 1.5, 2]
                  } : { opacity: 0, scale: 0 }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 2.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
              </svg>

              {/* Center stat - 87% Trust Score */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                <motion.div
                  className="text-white mb-1"
                  style={{ fontSize: '72px', fontWeight: 700, lineHeight: 1 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 2.8,
                    type: "spring",
                    stiffness: 150
                  }}
                >
                  87%
                </motion.div>
                <motion.div
                  className="text-[#8CA58F] px-4 py-1 bg-[#1A1A1A]/80 backdrop-blur-sm rounded-full border border-[#8CA58F]/30"
                  style={{ fontSize: '14px', fontWeight: 600 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 3 }}
                >
                  Trust Score
                </motion.div>
              </div>

              {/* Floating ambient particles */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45) * (Math.PI / 180);
                const distance = 180;
                const x = 50 + (Math.cos(angle) * distance / 500 * 100);
                const y = 50 + (Math.sin(angle) * distance / 400 * 100);
                
                return (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-[#8CA58F]"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.2, 0.7, 0.2],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 3 + i * 0.4,
                      delay: 3 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                );
              })}

              {/* Pulsing glow effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#8CA58F] rounded-full blur-3xl"
                animate={{
                  opacity: [0.05, 0.15, 0.05],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{
                  duration: 4,
                  delay: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            className="space-y-8 text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Headline */}
            <div>
              <motion.h2
                className="text-white mb-4"
                style={{
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  fontWeight: 700,
                  lineHeight: '110%',
                  letterSpacing: '-0.03em'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Recognition That Feels <span className="text-[#8CA58F]">Real.</span>
              </motion.h2>

              <motion.p
                className="text-[#B4BEB5]"
                style={{
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  lineHeight: '150%'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Because careers are built on people — not noise, not algorithms.
              </motion.p>
            </div>

            {/* Three narrative points */}
            <div className="space-y-6">
              {/* Human-Centered */}
              <motion.div
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8CA58F]/20 flex items-center justify-center group-hover:bg-[#8CA58F]/30 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Users className="w-6 h-6 text-[#B4BEB5]" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-white mb-1" style={{ fontSize: '18px', fontWeight: 600 }}>
                    Human-Centered
                  </h3>
                  <p className="text-[#B4BEB5]" style={{ fontSize: '15px', lineHeight: '150%' }}>
                    Built on genuine connections between real professionals
                  </p>
                </div>
              </motion.div>

              {/* Verified & Secure */}
              <motion.div
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8CA58F]/20 flex items-center justify-center group-hover:bg-[#8CA58F]/30 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <ShieldCheck className="w-6 h-6 text-[#B4BEB5]" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-white mb-1" style={{ fontSize: '18px', fontWeight: 600 }}>
                    Verified & Secure
                  </h3>
                  <p className="text-[#B4BEB5]" style={{ fontSize: '15px', lineHeight: '150%' }}>
                    Every recognition is authenticated and meaningful
                  </p>
                </div>
              </motion.div>

              {/* No Noise */}
              <motion.div
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#8CA58F]/20 flex items-center justify-center group-hover:bg-[#8CA58F]/30 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Volume2 className="w-6 h-6 text-[#B4BEB5]" strokeWidth={2.5} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-white mb-1" style={{ fontSize: '18px', fontWeight: 600 }}>
                    No Noise
                  </h3>
                  <p className="text-[#B4BEB5]" style={{ fontSize: '15px', lineHeight: '150%' }}>
                    Free from spam, self-promotion, and empty validation
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative line */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#B4BEB5] via-[#8CA58F] to-transparent mt-8"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{
                duration: 1,
                delay: 1.3,
                ease: "easeOut"
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}