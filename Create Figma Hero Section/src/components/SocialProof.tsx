import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Newspaper, Video, ArrowUpRight } from 'lucide-react';
import lefigaroLogo from 'figma:asset/b97bd282d6d236b079b8a4c44b3567307b43c6dd.png';
import regardsDirLogo from 'figma:asset/e263c7a3b36a9631f89e83437b38f478e5ab4d0b.png';
import bfmtvLogo from 'figma:asset/8161d0be860bed6fc7b6241930b290b6106a12bb.png';

export function SocialProof() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeDots, setActiveDots] = useState<number[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  // World map dot positions (representing major cities)
  const mapDots = [
    { x: '18%', y: '35%', delay: 0 },   // Americas
    { x: '22%', y: '45%', delay: 0.1 },
    { x: '28%', y: '50%', delay: 0.2 },
    { x: '46%', y: '28%', delay: 0.3 },   // Europe
    { x: '50%', y: '33%', delay: 0.4 },
    { x: '54%', y: '38%', delay: 0.5 },
    { x: '58%', y: '30%', delay: 0.6 },
    { x: '64%', y: '42%', delay: 0.7 },   // Asia
    { x: '68%', y: '36%', delay: 0.8 },
    { x: '72%', y: '40%', delay: 0.9 },
    { x: '76%', y: '33%', delay: 1.0 },
    { x: '48%', y: '68%', delay: 1.1 },   // Africa
    { x: '82%', y: '63%', delay: 1.2 },   // Australia
  ];

  useEffect(() => {
    if (!isInView) return;

    // Randomly activate dots
    const interval = setInterval(() => {
      const randomDots = Array.from(
        { length: Math.floor(Math.random() * 4) + 2 },
        () => Math.floor(Math.random() * mapDots.length)
      );
      setActiveDots(randomDots);
    }, 1200);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-white px-4 sm:px-8 py-20"
    >
      {/* Decorative hexagonal mesh pattern - top right */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[200px] opacity-20 pointer-events-none"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 0.2, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <svg viewBox="0 0 600 200" className="w-full h-full">
          <defs>
            <pattern id="hexPattern" x="0" y="0" width="30" height="26" patternUnits="userSpaceOnUse">
              <path
                d="M15,0 L22.5,4.3 L22.5,13 L15,17.3 L7.5,13 L7.5,4.3 Z"
                fill="none"
                stroke="#8CA58F"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="600" height="200" fill="url(#hexPattern)" />
        </svg>
      </motion.div>

      {/* Decorative hexagonal mesh pattern - bottom right */}
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[150px] opacity-15 pointer-events-none"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 0.15, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      >
        <svg viewBox="0 0 400 150" className="w-full h-full">
          <rect width="400" height="150" fill="url(#hexPattern)" />
        </svg>
      </motion.div>

      <motion.div 
        ref={ref}
        className="relative max-w-[1440px] mx-auto text-center z-10"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
          y: useTransform(scrollYProgress, [0, 1], [50, -50])
        }}
      >
        {/* Headline */}
        <motion.h2
          className="text-[#1A1A1A] mb-4"
          style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
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
          Rekolink in the <span className="text-[#8CA58F]">Spotlight.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-[#6A6A6A] mb-16"
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
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
          Rekolink is making headlines.
        </motion.p>

        {/* Three press cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1 */}
          <motion.div
            className="bg-gradient-to-br from-[#E8F0EB] to-[#EFF4EE] rounded-3xl p-8 text-left relative overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              y: -8,
              boxShadow: '0 20px 40px rgba(140, 165, 143, 0.15)'
            }}
          >
            {/* Type icon - top right */}
            <motion.div
              className="absolute top-6 right-6 bg-white/60 backdrop-blur-sm rounded-full p-2.5 shadow-sm"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <Newspaper className="w-5 h-5 text-[#47634A]" />
            </motion.div>

            {/* Quote icon */}
            <motion.div
              className="text-[#8CA58F] mb-6"
              initial={{ scale: 0, rotate: -45 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200 }}
            >
              <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor">
                <path d="M0 32V16C0 7.168 5.824 0 16 0v6.4C10.752 6.4 6.4 10.176 6.4 16v2.4H16V32H0zm24 0V16c0-8.832 5.824-16 16-16v6.4c-5.248 0-9.6 3.776-9.6 9.6v2.4h9.6V32H24z"/>
              </svg>
            </motion.div>

            {/* Title */}
            <h3 className="text-[#1A1A1A] mb-4" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '130%' }}>
              The Future of Professional Recognition
            </h3>

            {/* Description */}
            <p className="text-[#4A4A4A] mb-8" style={{ fontSize: '15px', lineHeight: '160%' }}>
              Rekolink is revolutionizing how professionals build trust and credibility in the digital age.
            </p>

            {/* Source and View More Button - aligned */}
            <div className="flex items-center justify-between">
              <ImageWithFallback
                src={bfmtvLogo}
                alt="BFM TV"
                className="h-4 w-auto object-contain"
              />
              
              <motion.button
                className="group/btn flex items-center gap-2 text-[#8CA58F] border border-[#8CA58F] rounded-full px-4 py-2 transition-all hover:bg-[#8CA58F] hover:text-white"
                style={{ fontSize: '13px', fontWeight: 600 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                View more
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </motion.button>
            </div>

            {/* Decorative element */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#B4BEB5] opacity-10 group-hover:opacity-20 transition-opacity"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-gradient-to-br from-[#E8F0EB] to-[#EFF4EE] rounded-3xl p-8 text-left relative overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              y: -8,
              boxShadow: '0 20px 40px rgba(140, 165, 143, 0.15)'
            }}
          >
            {/* Type icon - top right */}
            <motion.div
              className="absolute top-6 right-6 bg-white/60 backdrop-blur-sm rounded-full p-2.5 shadow-sm"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 200 }}
            >
              <Video className="w-5 h-5 text-[#47634A]" />
            </motion.div>

            {/* Quote icon */}
            <motion.div
              className="text-[#8CA58F] mb-6"
              initial={{ scale: 0, rotate: -45 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor">
                <path d="M0 32V16C0 7.168 5.824 0 16 0v6.4C10.752 6.4 6.4 10.176 6.4 16v2.4H16V32H0zm24 0V16c0-8.832 5.824-16 16-16v6.4c-5.248 0-9.6 3.776-9.6 9.6v2.4h9.6V32H24z"/>
              </svg>
            </motion.div>

            {/* Title */}
            <h3 className="text-[#1A1A1A] mb-4" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '130%' }}>
              Building Trust in the Modern Workplace
            </h3>

            {/* Description */}
            <p className="text-[#4A4A4A] mb-8" style={{ fontSize: '15px', lineHeight: '160%' }}>
              A refreshing approach to professional networking that prioritizes authenticity over self-promotion.
            </p>

            {/* Source and View More Button - aligned */}
            <div className="flex items-center justify-between">
              <ImageWithFallback
                src={regardsDirLogo}
                alt="Regards de dirigeants"
                className="h-4 w-auto object-contain"
              />
              
              <motion.button
                className="group/btn flex items-center gap-2 text-[#8CA58F] border border-[#8CA58F] rounded-full px-4 py-2 transition-all hover:bg-[#8CA58F] hover:text-white"
                style={{ fontSize: '13px', fontWeight: 600 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                View more
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </motion.button>
            </div>

            {/* Decorative element */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#B4BEB5] opacity-10 group-hover:opacity-20 transition-opacity"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-gradient-to-br from-[#E8F0EB] to-[#EFF4EE] rounded-3xl p-8 text-left relative overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              y: -8,
              boxShadow: '0 20px 40px rgba(140, 165, 143, 0.15)'
            }}
          >
            {/* Type icon - top right */}
            <motion.div
              className="absolute top-6 right-6 bg-white/60 backdrop-blur-sm rounded-full p-2.5 shadow-sm"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 200 }}
            >
              <Newspaper className="w-5 h-5 text-[#47634A]" />
            </motion.div>

            {/* Quote icon */}
            <motion.div
              className="text-[#8CA58F] mb-6"
              initial={{ scale: 0, rotate: -45 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
              transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 200 }}
            >
              <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor">
                <path d="M0 32V16C0 7.168 5.824 0 16 0v6.4C10.752 6.4 6.4 10.176 6.4 16v2.4H16V32H0zm24 0V16c0-8.832 5.824-16 16-16v6.4c-5.248 0-9.6 3.776-9.6 9.6v2.4h9.6V32H24z"/>
              </svg>
            </motion.div>

            {/* Title */}
            <h3 className="text-[#1A1A1A] mb-4" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '130%' }}>
              Recognition That Actually Matters
            </h3>

            {/* Description */}
            <p className="text-[#4A4A4A] mb-8" style={{ fontSize: '15px', lineHeight: '160%' }}>
              Finally, a platform that understands recognition should come from those who know your work best.
            </p>

            {/* Source and View More Button - aligned */}
            <div className="flex items-center justify-between">
              <ImageWithFallback
                src={lefigaroLogo}
                alt="Le Figaro"
                className="h-4 w-auto object-contain"
              />
              
              <motion.button
                className="group/btn flex items-center gap-2 text-[#8CA58F] border border-[#8CA58F] rounded-full px-4 py-2 transition-all hover:bg-[#8CA58F] hover:text-white"
                style={{ fontSize: '13px', fontWeight: 600 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                View more
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </motion.button>
            </div>

            {/* Decorative element */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#B4BEB5] opacity-10 group-hover:opacity-20 transition-opacity"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}