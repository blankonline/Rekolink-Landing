import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';

export function ParallaxFloatingElements() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Different parallax speeds for depth
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // Smooth spring physics
  const smoothY1 = useSpring(y1, { stiffness: 50, damping: 20 });
  const smoothY2 = useSpring(y2, { stiffness: 40, damping: 25 });
  const smoothY3 = useSpring(y3, { stiffness: 60, damping: 15 });
  const smoothY4 = useSpring(y4, { stiffness: 35, damping: 30 });
  const smoothY5 = useSpring(y5, { stiffness: 55, damping: 20 });

  // Rotation based on scroll
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large gradient orb - slow movement */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#B4BEB5]/20 to-[#8CA58F]/10 rounded-full blur-3xl"
        style={{ y: smoothY1 }}
      />

      {/* Medium orb with rotation - medium speed */}
      <motion.div
        className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-[#DC8285]/15 to-[#B4BEB5]/10 rounded-full blur-2xl"
        style={{ y: smoothY2, rotate: rotate1 }}
      />

      {/* Small accent orb - fast movement */}
      <motion.div
        className="absolute top-2/3 right-1/4 w-64 h-64 bg-gradient-to-br from-[#47634A]/15 to-transparent rounded-full blur-2xl"
        style={{ y: smoothY3 }}
      />

      {/* Floating rings - very slow */}
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-72 h-72"
        style={{ y: smoothY4, rotate: rotate2 }}
      >
        <div className="absolute inset-0 border-2 border-[#8CA58F]/20 rounded-full" />
        <div className="absolute inset-8 border border-[#DC8285]/15 rounded-full" />
        <div className="absolute inset-16 border border-[#B4BEB5]/20 rounded-full" />
      </motion.div>

      {/* Geometric shapes floating */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-48 h-48"
        style={{ y: smoothY5 }}
      >
        {/* Triangle */}
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
          <polygon points="50,15 90,85 10,85" fill="none" stroke="#8CA58F" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* Small floating dots */}
      {[...Array(8)].map((_, i) => {
        const yOffset = useTransform(scrollYProgress, [0, 1], [0, -150 * (i % 3 + 1)]);
        const smoothYOffset = useSpring(yOffset, { stiffness: 45 + i * 5, damping: 20 });
        
        return (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-2 h-2 rounded-full bg-[#8CA58F]/30"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + i * 8}%`,
              y: smoothYOffset
            }}
          />
        );
      })}
    </div>
  );
}
