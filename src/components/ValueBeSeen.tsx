import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Smile, Zap, SlidersHorizontal } from 'lucide-react';

export function ValueBeSeen() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const text = "Real recognition. From real people. Your work finally speaks for itself.";
  const words = text.split(' ');

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F9FCFA] to-white px-4 sm:px-8"
    >
      {/* Dark base layer for spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/5 to-transparent" />

      {/* Animated spotlights that search and reveal */}
      {[...Array(4)].map((_, i) => {
        const startX = i % 2 === 0 ? -20 : 120;
        const endX = 50;
        const startY = i < 2 ? -20 : 120;
        const color = i % 2 === 0 ? 'rgba(140, 165, 143, 0.3)' : 'rgba(220, 130, 133, 0.25)';
        const colorLight = i % 2 === 0 ? 'rgba(140, 165, 143, 0.1)' : 'rgba(220, 130, 133, 0.08)';
        
        return (
          <motion.div
            key={`spotlight-${i}`}
            className="absolute"
            style={{
              width: 300,
              height: 300,
              background: `radial-gradient(circle, ${color} 0%, ${colorLight} 40%, transparent 70%)`,
              filter: 'blur(20px)',
              pointerEvents: 'none',
            }}
            animate={{
              left: [`${startX}%`, `${endX}%`, `${endX}%`, `${startX}%`],
              top: [`${startY}%`, '50%', '50%', `${startY}%`],
              scale: [0.8, 1.2, 1.2, 0.8],
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 12,
              times: [0, 0.3, 0.7, 1],
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Animated light rays emanating from center */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <defs>
          <radialGradient id="lightRay" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#8CA58F" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8CA58F" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8;
          
          return (
            <motion.line
              key={`ray-${i}`}
              x1="50%"
              y1="50%"
              x2={`${50 + Math.cos((angle * Math.PI) / 180) * 50}%`}
              y2={`${50 + Math.sin((angle * Math.PI) / 180) * 50}%`}
              stroke="url(#lightRay)"
              strokeWidth="40"
              strokeLinecap="round"
              initial={{ opacity: 0, strokeWidth: 0 }}
              animate={isInView ? {
                opacity: [0, 0.4, 0.2, 0.4, 0.2],
                strokeWidth: [0, 60, 40, 60, 40],
              } : {}}
              transition={{
                duration: 4,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Emerging shapes from shadow to light */}
      {[...Array(6)].map((_, i) => {
        const positions = [
          { x: '15%', y: '20%', size: 100 },
          { x: '85%', y: '25%', size: 80 },
          { x: '20%', y: '70%', size: 120 },
          { x: '80%', y: '75%', size: 90 },
          { x: '10%', y: '50%', size: 110 },
          { x: '90%', y: '55%', size: 95 },
        ];
        
        return (
          <motion.div
            key={`shape-${i}`}
            className="absolute rounded-2xl"
            style={{
              left: positions[i].x,
              top: positions[i].y,
              width: positions[i].size,
              height: positions[i].size,
              background: `linear-gradient(135deg, rgba(71, 99, 74, 0.15), rgba(180, 190, 181, 0.15))`,
              border: '2px solid rgba(140, 165, 143, 0.3)',
              transformStyle: 'preserve-3d',
            }}
            animate={{
              opacity: [0, 0.2, 0.6, 0.2],
              rotateY: [0, 180, 360],
              scale: [0.5, 1, 1, 0.5],
              boxShadow: [
                '0 0 0px rgba(140, 165, 143, 0)',
                '0 0 40px rgba(140, 165, 143, 0.4)',
                '0 0 60px rgba(140, 165, 143, 0.6)',
                '0 0 40px rgba(140, 165, 143, 0.4)',
              ],
            }}
            transition={{
              duration: 8,
              delay: i * 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Central illumination circle */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background: `radial-gradient(circle, rgba(140, 165, 143, 0.15) 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Revealing particles that move toward light */}
      {[...Array(20)].map((_, i) => {
        const startAngle = (i * 360) / 20;
        const startRadius = 60;
        const startX = 50 + Math.cos((startAngle * Math.PI) / 180) * startRadius;
        const startY = 50 + Math.sin((startAngle * Math.PI) / 180) * startRadius;
        const isPink = i % 3 === 0;
        
        return (
          <motion.div
            key={`particle-${i}`}
            className={`absolute w-2 h-2 rounded-full ${isPink ? 'bg-[#DC8285]' : 'bg-[#8CA58F]'}`}
            style={{
              boxShadow: isPink ? '0 0 10px rgba(220, 130, 133, 0.8)' : '0 0 10px rgba(140, 165, 143, 0.8)',
            }}
            animate={{
              left: [`${startX}%`, '50%', `${startX}%`],
              top: [`${startY}%`, '50%', `${startY}%`],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 6,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      <motion.div 
        ref={ref}
        className="relative max-w-[1440px] mx-auto text-center z-10"
        style={{ opacity, scale }}
      >
        {/* Headline with reveal animation */}
        <div className="overflow-hidden mb-12">
          <motion.h2
            className="text-[#1A1A1A]"
            style={{
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 700,
              lineHeight: '110%',
              letterSpacing: '-0.03em'
            }}
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Be Seen for What You <span className="text-[#8CA58F]">Do Best.</span>
          </motion.h2>
        </div>

        {/* Text with word-by-word fade */}
        <div className="max-w-[800px] mx-auto">
          <p 
            className="text-[#4A4A4A]"
            style={{
              fontSize: 'clamp(18px, 2.5vw, 28px)',
              lineHeight: '150%'
            }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(8px)" }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.05,
                  ease: "easeOut"
                }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>

        {/* Decorative animated line */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-transparent via-[#B7E1D2] to-transparent mx-auto mt-16"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        />

        {/* Three feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-[1200px] mx-auto">
          {/* Authentic Card */}
          <motion.div
            className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[#8CA58F]/20 hover:border-[#8CA58F]/40 transition-colors overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(140, 165, 143, 0.15)' }}
          >
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#8CA58F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            {/* Icon container */}
            <motion.div
              className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8CA58F] to-[#47634A] flex items-center justify-center mb-6"
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Smile className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-[#1A1A1A] mb-3" style={{ fontSize: '24px', fontWeight: 600 }}>
              Authentic
            </h3>
            
            <p className="text-[#4A4A4A]" style={{ fontSize: '16px', lineHeight: '150%' }}>
              Every piece of recognition comes from someone who worked alongside you, not from automated systems or self-promotion. This is feedback you can trust because it's grounded in shared experience.
            </p>

            {/* Animated corner accent */}
            <motion.div
              className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#8CA58F]/20 to-transparent rounded-bl-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
            />
          </motion.div>

          {/* Impactful Card */}
          <motion.div
            className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[#8CA58F]/20 hover:border-[#8CA58F]/40 transition-colors overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(140, 165, 143, 0.15)' }}
          >
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#8CA58F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            {/* Icon container */}
            <motion.div
              className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8CA58F] to-[#47634A] flex items-center justify-center mb-6"
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-[#1A1A1A] mb-3" style={{ fontSize: '24px', fontWeight: 600 }}>
              Impactful
            </h3>
            
            <p className="text-[#4A4A4A]" style={{ fontSize: '16px', lineHeight: '150%' }}>
              Data-driven feedback that goes beyond likes and numbers to reveal the specific skills and qualities that make you valuable — the insights that truly matter for your career trajectory.
            </p>

            {/* Animated corner accent */}
            <motion.div
              className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#8CA58F]/20 to-transparent rounded-bl-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
            />
          </motion.div>

          {/* Meaningful Card */}
          <motion.div
            className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[#8CA58F]/20 hover:border-[#8CA58F]/40 transition-colors overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(140, 165, 143, 0.15)' }}
          >
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#8CA58F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            {/* Icon container */}
            <motion.div
              className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8CA58F] to-[#47634A] flex items-center justify-center mb-6"
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <SlidersHorizontal className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-[#1A1A1A] mb-3" style={{ fontSize: '24px', fontWeight: 600 }}>
              Meaningful
            </h3>
            
            <p className="text-[#4A4A4A]" style={{ fontSize: '16px', lineHeight: '150%' }}>
              Recognition that moves beyond superficial praise to deliver actionable insights that help you grow as a professional and open doors to new opportunities.
            </p>

            {/* Animated corner accent */}
            <motion.div
              className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#8CA58F]/20 to-transparent rounded-bl-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}