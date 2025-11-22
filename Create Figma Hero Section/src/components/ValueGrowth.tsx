import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export function ValueGrowth() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F5F5] to-white px-4 sm:px-8 py-20"
    >
      {/* Animated rotating background pattern */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <motion.svg 
          width="800" 
          height="800" 
          viewBox="0 0 600 600"
          style={{ rotate }}
        >
          {/* Radial growth lines */}
          {[...Array(24)].map((_, i) => {
            const angle = (i * 15) * (Math.PI / 180);
            const x1 = 300 + Math.cos(angle) * 80;
            const y1 = 300 + Math.sin(angle) * 80;
            const x2 = 300 + Math.cos(angle) * 280;
            const y2 = 300 + Math.sin(angle) * 280;
            const color = i % 3 === 0 ? '#DC8285' : '#326C56';
            
            return (
              <motion.line
                key={i}
                x1={x1}
                y1={y1}
                x2={x1}
                y2={y1}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ x2: x1, y2: y1, opacity: 0 }}
                animate={isInView ? { x2, y2, opacity: 0.6 } : { x2: x1, y2: y1, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 0.3 + i * 0.03,
                  ease: [0.22, 1, 0.36, 1]
                }}
              />
            );
          })}
          
          {/* Concentric circles */}
          {[80, 140, 200, 280].map((r, i) => (
            <motion.circle
              key={r}
              cx="300"
              cy="300"
              r={0}
              fill="none"
              stroke={i % 2 === 0 ? '#B7E1D2' : '#DC8285'}
              strokeWidth={4 - i}
              initial={{ r: 0, opacity: 0 }}
              animate={isInView ? { r, opacity: 0.4 - i * 0.08 } : { r: 0, opacity: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.2 + i * 0.15,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.svg>
      </div>

      <motion.div 
        ref={ref}
        className="relative max-w-[1440px] mx-auto z-10 w-full"
        style={{ scale }}
      >
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div className="text-left">
            {/* Headline with scale + blur animation */}
            <motion.h2
              className="text-[#1A1A1A] mb-6"
              style={{
                fontSize: 'clamp(40px, 6vw, 64px)',
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
              Grow Through <span className="text-[#8CA58F]">Recognition.</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-[#4A4A4A] mb-12"
              style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: '150%'
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut"
              }}
            >
              Recognition isn't static—it's a living record of your professional journey. Watch as each reko contributes to a clearer picture of who you are, what you bring to the table, and where you're headed next.
            </motion.p>

            {/* Three narrative points */}
            <div className="space-y-6">
              {/* Build Your Reputation */}
              <motion.div
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/60 transition-colors cursor-pointer"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                whileHover={{ x: 8 }}
              >
                <motion.div 
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8CA58F]/10 flex items-center justify-center mt-1"
                  whileHover={{ scale: 1.2, backgroundColor: "rgba(140, 165, 143, 0.2)" }}
                >
                  <ArrowRight className="w-4 h-4 text-[#8CA58F]" />
                </motion.div>
                <div>
                  <h3 className="text-[#1A1A1A] mb-2" style={{ fontSize: '18px', fontWeight: 600 }}>
                    Build Your Reputation
                  </h3>
                  <p className="text-[#6A6A6A]" style={{ fontSize: '15px', lineHeight: '150%' }}>
                    Each recognition strengthens your professional standing, creating a verified track record that hiring managers and collaborators can trust
                  </p>
                </div>
              </motion.div>

              {/* Track Your Progress */}
              <motion.div
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/60 transition-colors cursor-pointer"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                whileHover={{ x: 8 }}
              >
                <motion.div 
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8CA58F]/10 flex items-center justify-center mt-1"
                  whileHover={{ scale: 1.2, backgroundColor: "rgba(140, 165, 143, 0.2)" }}
                >
                  <ArrowRight className="w-4 h-4 text-[#8CA58F]" />
                </motion.div>
                <div>
                  <h3 className="text-[#1A1A1A] mb-2" style={{ fontSize: '18px', fontWeight: 600 }}>
                    Track Your Progress
                  </h3>
                  <p className="text-[#6A6A6A]" style={{ fontSize: '15px', lineHeight: '150%' }}>
                    Visual analytics show the trajectory of your development, revealing patterns in how your expertise grows and which strengths define your unique professional profile
                  </p>
                </div>
              </motion.div>

              {/* Unlock Opportunities */}
              <motion.div
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/60 transition-colors cursor-pointer"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                whileHover={{ x: 8 }}
              >
                <motion.div 
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8CA58F]/10 flex items-center justify-center mt-1"
                  whileHover={{ scale: 1.2, backgroundColor: "rgba(140, 165, 143, 0.2)" }}
                >
                  <ArrowRight className="w-4 h-4 text-[#8CA58F]" />
                </motion.div>
                <div>
                  <h3 className="text-[#1A1A1A] mb-2" style={{ fontSize: '18px', fontWeight: 600 }}>
                    Unlock Opportunities
                  </h3>
                  <p className="text-[#6A6A6A]" style={{ fontSize: '15px', lineHeight: '150%' }}>
                    A strong recognition profile opens doors—whether it's landing your next role, earning promotions, or connecting with mentors who see what you're capable of
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right column - Animated line graph */}
          <motion.div
            className="relative bg-gradient-to-br from-[#E8F1EC] to-[#F0F5F2] rounded-3xl p-8 h-[400px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Floating decorative elements */}
            {[...Array(8)].map((_, i) => {
              const isPink = i % 2 === 0;
              return (
                <motion.div
                  key={`float-${i}`}
                  className={`absolute w-2 h-2 rounded-full ${isPink ? 'bg-[#DC8285]/20' : 'bg-[#8CA58F]/20'}`}
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${20 + Math.sin(i) * 15}%`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { 
                    opacity: [0, 0.5, 0.5],
                    y: [20, 0, 0],
                  } : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 1,
                    delay: 0.8 + i * 0.1,
                    ease: "easeOut"
                  }}
                />
              );
            })}

            {/* Growth graph visualization */}
            <svg 
              className="w-full h-full" 
              viewBox="0 0 400 350"
              style={{ overflow: 'visible' }}
            >
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.line
                  key={`grid-${i}`}
                  x1="40"
                  y1={60 + i * 60}
                  x2="360"
                  y2={60 + i * 60}
                  stroke="#8CA58F"
                  strokeWidth="1"
                  strokeOpacity="0.15"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                />
              ))}

              {/* Y axis labels */}
              {['100%', '75%', '50%', '25%', '0%'].map((label, i) => (
                <motion.text
                  key={`y-label-${i}`}
                  x="20"
                  y={70 + i * 60}
                  fill="#6A6A6A"
                  fontSize="10"
                  textAnchor="end"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
                >
                  {label}
                </motion.text>
              ))}

              {/* X axis labels */}
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((label, i) => (
                <motion.text
                  key={`x-label-${i}`}
                  x={70 + i * 50}
                  y="320"
                  fill="#6A6A6A"
                  fontSize="11"
                  textAnchor="middle"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.05 }}
                >
                  {label}
                </motion.text>
              ))}

              {/* Animated growth line path */}
              <motion.path
                d="M 50 250 Q 100 230, 120 200 T 170 170 T 220 130 T 270 90 T 320 50"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { 
                  pathLength: 1, 
                  opacity: 1 
                } : { pathLength: 0, opacity: 0 }}
                transition={{
                  pathLength: { duration: 2, delay: 1.2, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.3, delay: 1.2 }
                }}
              />

              {/* Area fill under the line */}
              <motion.path
                d="M 50 250 Q 100 230, 120 200 T 170 170 T 220 130 T 270 90 T 320 50 L 320 300 L 50 300 Z"
                fill="url(#areaGradient)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
              />

              {/* Gradient definitions */}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#47634A" />
                  <stop offset="50%" stopColor="#8CA58F" />
                  <stop offset="100%" stopColor="#A5C4A8" />
                </linearGradient>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8CA58F" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8CA58F" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Animated data points */}
              {[
                { x: 50, y: 250, delay: 1.3 },
                { x: 120, y: 200, delay: 1.5 },
                { x: 170, y: 170, delay: 1.7 },
                { x: 220, y: 130, delay: 1.9 },
                { x: 270, y: 90, delay: 2.1 },
                { x: 320, y: 50, delay: 2.3 },
              ].map((point, i) => {
                const isPink = i % 3 === 0;
                return (
                  <g key={`point-${i}`}>
                    {/* Pulsing circle on last point */}
                    {i === 5 && (
                      <>
                        <motion.circle
                          cx={point.x}
                          cy={point.y}
                          r="6"
                          fill="none"
                          stroke="#8CA58F"
                          strokeWidth="2"
                          initial={{ r: 6, opacity: 0 }}
                          animate={isInView ? {
                            r: [6, 20, 6],
                            opacity: [0.8, 0, 0.8],
                          } : { r: 6, opacity: 0 }}
                          transition={{
                            duration: 2,
                            delay: point.delay + 0.5,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                        <motion.circle
                          cx={point.x}
                          cy={point.y}
                          r="6"
                          fill="none"
                          stroke="#DC8285"
                          strokeWidth="2"
                          initial={{ r: 6, opacity: 0 }}
                          animate={isInView ? {
                            r: [6, 20, 6],
                            opacity: [0.6, 0, 0.6],
                          } : { r: 6, opacity: 0 }}
                          transition={{
                            duration: 2,
                            delay: point.delay + 1,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                      </>
                    )}
                    
                    {/* Main data point */}
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r="5"
                      fill="#FFFFFF"
                      stroke={isPink ? '#DC8285' : '#47634A'}
                      strokeWidth="3"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: point.delay,
                        type: "spring",
                        stiffness: 300
                      }}
                      style={{ transformOrigin: `${point.x}px ${point.y}px` }}
                    />

                    {/* Glow effect */}
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r="8"
                      fill={isPink ? '#DC8285' : '#8CA58F'}
                      opacity="0.3"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: [0, 1.5, 0] } : { scale: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: point.delay + 0.2,
                        ease: "easeOut"
                      }}
                      style={{ transformOrigin: `${point.x}px ${point.y}px` }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Growth percentage indicator */}
            <motion.div
              className="absolute top-6 right-6 bg-[#47634A] text-white px-4 py-2 rounded-xl"
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -10 }}
              transition={{ duration: 0.6, delay: 2.6, type: "spring", stiffness: 200 }}
            >
              <div style={{ fontSize: '10px', opacity: 0.8 }}>Growth Rate</div>
              <div style={{ fontSize: '20px', fontWeight: 700 }}>+82%</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}