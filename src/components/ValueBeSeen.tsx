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