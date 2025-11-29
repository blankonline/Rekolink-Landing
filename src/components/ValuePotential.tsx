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

  // Skills for the radar chart
  const skills = [
    { name: 'Leadership', angle: 0 },
    { name: 'Technical', angle: 60 },
    { name: 'Communication', angle: 120 },
    { name: 'Creativity', angle: 180 },
    { name: 'Collaboration', angle: 240 },
    { name: 'Problem Solving', angle: 300 },
  ];

  // Two user profiles with different skill levels
  const user1Values = [85, 70, 90, 65, 80, 75]; // Green user
  const user2Values = [60, 90, 70, 85, 65, 80]; // Pink user

  // Calculate points for the radar polygon
  const getPolygonPoints = (values: number[], centerX: number, centerY: number, maxRadius: number) => {
    return values.map((value, i) => {
      const angle = (i * 60 - 90) * (Math.PI / 180);
      const radius = (value / 100) * maxRadius;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      return `${x},${y}`;
    }).join(' ');
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-[#F9FCFA] px-4 sm:px-8 py-20"
    >
      <motion.div 
        ref={ref}
        className="relative max-w-[1440px] mx-auto z-10 w-full"
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
          scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9])
        }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
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
              className="max-w-[600px] mx-auto lg:mx-0 space-y-4 mb-8"
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
                "Rekolink reveals what truly makes you valuable:
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

            {/* Legend for the graph */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center gap-3 bg-white/60 rounded-xl px-4 py-3 border border-[#E8E8E8]">
                <div className="w-4 h-4 rounded-full bg-[#8CA58F]" />
                <span className="text-[#4A4A4A]" style={{ fontSize: '14px' }}>Your Profile</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 rounded-xl px-4 py-3 border border-[#E8E8E8]">
                <div className="w-4 h-4 rounded-full bg-[#DC8285]" />
                <span className="text-[#4A4A4A]" style={{ fontSize: '14px' }}>Matched Opportunity</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="mt-6 text-[#6A6A6A] max-w-[500px] mx-auto lg:mx-0"
              style={{ fontSize: '15px', lineHeight: '160%' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Compare skill profiles to find the perfect alignment between your strengths and opportunity requirements.
            </motion.p>
          </div>

          {/* Right side - Radar/Web Graph */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-[500px] h-[500px]">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  {/* Gradient for user 1 (green) */}
                  <linearGradient id="user1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8CA58F" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#47634A" stopOpacity="0.2" />
                  </linearGradient>
                  
                  {/* Gradient for user 2 (pink) */}
                  <linearGradient id="user2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DC8285" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#B75A5D" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Grid circles */}
                {[40, 80, 120, 160].map((radius, i) => (
                  <motion.circle
                    key={`grid-circle-${i}`}
                    cx="200"
                    cy="200"
                    r={radius}
                    fill="none"
                    stroke="#B4BEB5"
                    strokeWidth="1"
                    strokeOpacity={0.3 - i * 0.05}
                    initial={{ r: 0, opacity: 0 }}
                    animate={isInView ? { r: radius, opacity: 1 } : { r: 0, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                  />
                ))}

                {/* Axis lines */}
                {skills.map((skill, i) => {
                  const angle = (skill.angle - 90) * (Math.PI / 180);
                  const x2 = 200 + Math.cos(angle) * 160;
                  const y2 = 200 + Math.sin(angle) * 160;
                  
                  return (
                    <motion.line
                      key={`axis-${i}`}
                      x1="200"
                      y1="200"
                      x2="200"
                      y2="200"
                      stroke="#B4BEB5"
                      strokeWidth="1"
                      strokeOpacity="0.4"
                      initial={{ x2: 200, y2: 200, opacity: 0 }}
                      animate={isInView ? { x2, y2, opacity: 1 } : { x2: 200, y2: 200, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + i * 0.08 }}
                    />
                  );
                })}

                {/* User 2 polygon (pink - behind) */}
                <motion.polygon
                  points={getPolygonPoints(user2Values, 200, 200, 160)}
                  fill="url(#user2Gradient)"
                  stroke="#DC8285"
                  strokeWidth="2"
                  strokeOpacity="0.8"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: '200px 200px' }}
                />

                {/* User 1 polygon (green - in front) */}
                <motion.polygon
                  points={getPolygonPoints(user1Values, 200, 200, 160)}
                  fill="url(#user1Gradient)"
                  stroke="#47634A"
                  strokeWidth="2"
                  strokeOpacity="0.9"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: '200px 200px' }}
                />

                {/* Data points for user 1 */}
                {user1Values.map((value, i) => {
                  const angle = (i * 60 - 90) * (Math.PI / 180);
                  const radius = (value / 100) * 160;
                  const cx = 200 + Math.cos(angle) * radius;
                  const cy = 200 + Math.sin(angle) * radius;
                  
                  return (
                    <motion.circle
                      key={`user1-point-${i}`}
                      cx={cx}
                      cy={cy}
                      r="5"
                      fill="#FFFFFF"
                      stroke="#47634A"
                      strokeWidth="2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 2.0 + i * 0.1, type: "spring", stiffness: 300 }}
                      style={{ transformOrigin: `${cx}px ${cy}px` }}
                    />
                  );
                })}

                {/* Data points for user 2 */}
                {user2Values.map((value, i) => {
                  const angle = (i * 60 - 90) * (Math.PI / 180);
                  const radius = (value / 100) * 160;
                  const cx = 200 + Math.cos(angle) * radius;
                  const cy = 200 + Math.sin(angle) * radius;
                  
                  return (
                    <motion.circle
                      key={`user2-point-${i}`}
                      cx={cx}
                      cy={cy}
                      r="5"
                      fill="#FFFFFF"
                      stroke="#DC8285"
                      strokeWidth="2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 2.2 + i * 0.1, type: "spring", stiffness: 300 }}
                      style={{ transformOrigin: `${cx}px ${cy}px` }}
                    />
                  );
                })}

                {/* Center point */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="6"
                  fill="#47634A"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 1.5, type: "spring", stiffness: 300 }}
                />

                {/* Pulsing ring at center */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="6"
                  fill="none"
                  stroke="#8CA58F"
                  strokeWidth="2"
                  initial={{ r: 6, opacity: 0 }}
                  animate={isInView ? {
                    r: [6, 25, 6],
                    opacity: [0.8, 0, 0.8],
                  } : { r: 6, opacity: 0 }}
                  transition={{
                    duration: 2,
                    delay: 2.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </svg>

              {/* Floating ambient glow */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#8CA58F] rounded-full blur-3xl pointer-events-none"
                animate={{
                  opacity: [0.08, 0.15, 0.08],
                  scale: [0.9, 1.1, 0.9]
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
        </div>
      </motion.div>
    </section>
  );
}