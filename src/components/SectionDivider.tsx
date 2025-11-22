import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface SectionDividerProps {
  variant?: 'wave' | 'gradient' | 'dots';
}

export function SectionDivider({ variant = 'wave' }: SectionDividerProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  if (variant === 'wave') {
    return (
      <div ref={ref} className="relative h-32 overflow-hidden">
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          style={{ y, opacity }}
        >
          <motion.path
            d="M0,50 Q300,20 600,50 T1200,50 L1200,100 L0,100 Z"
            fill="url(#waveGradient)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B4BEB5" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#8CA58F" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#B4BEB5" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <div ref={ref} className="relative h-24 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#8CA58F] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    );
  }

  // dots variant
  return (
    <div ref={ref} className="relative h-20 flex items-center justify-center overflow-hidden">
      <motion.div
        className="flex gap-2"
        style={{ y, opacity }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{
              background: i === 2 ? '#8CA58F' : i % 2 === 0 ? '#B4BEB5' : '#DC8285'
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.4 }}
            transition={{ 
              duration: 0.4, 
              delay: i * 0.1,
              ease: "easeOut" 
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}