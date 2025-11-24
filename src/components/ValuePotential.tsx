import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ValuePotential() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-[#F9FCFA] px-4 sm:px-8"
    >
      <motion.div 
        ref={ref}
        className="relative max-w-[1440px] mx-auto text-center z-10"
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
          scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9])
        }}
      >
        {/* Headline with shimmer effect */}
        <div className="relative inline-block mb-8">
          <motion.h2
            className="text-[#1A1A1A] relative z-10"
            style={{
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 700,
              lineHeight: '110%',
              letterSpacing: '-0.03em'
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Where Potential Finds Its <span className="text-[#8CA58F]">Match.</span>
          </motion.h2>
        </div>

        {/* Text with split reveal */}
        <motion.div
          className="max-w-[800px] mx-auto space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut"
          }}
        >
          <motion.p 
            className="text-[#4A4A4A]"
            style={{
              fontSize: 'clamp(18px, 2.5vw, 28px)',
              lineHeight: '150%'
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Rekolink reveals what truly makes you valuable:
          </motion.p>
          <motion.p 
            className="text-[#8CA58F]"
            style={{
              fontSize: 'clamp(18px, 2.5vw, 28px)',
              lineHeight: '150%',
              fontWeight: 500
            }}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            your skills, your impact, your evolution.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}