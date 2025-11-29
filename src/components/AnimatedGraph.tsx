import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

export function AnimatedGraph() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref}
      className="relative min-h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#F9FCFA] to-white px-4 sm:px-8 py-20"
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#DC8285] opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-48 h-48 rounded-full bg-[#8CA58F] opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -15, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="relative max-w-[1440px] mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Text content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-[#326C56] uppercase tracking-wider" style={{ fontSize: '14px', fontWeight: 600 }}>
                Real Impact
              </span>
            </motion.div>

            <motion.h2
              className="text-[#1A1A1A]"
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 700,
                lineHeight: '110%',
                letterSpacing: '-0.02em'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Measurable <span className="text-[#8CA58F]">Growth,</span> Visible Results
            </motion.h2>

            <motion.p
              className="text-[#4A4A4A]"
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: '150%'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Track your professional development through data-driven insights. 
              Every recommendation, skill verification, and connection builds your credibility.
            </motion.p>

            {/* Four narrative cards - 2x2 grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Skills That Matter */}
              <motion.div
                className="bg-gradient-to-br from-white to-[#F9FCFA] rounded-2xl p-5 border border-[#E8E8E8] hover:border-[#8CA58F]/40 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ 
                  y: -4,
                  boxShadow: '0 12px 32px rgba(140, 165, 143, 0.15)'
                }}
              >
                <div className="space-y-2">
                  <h3 className="text-[#1A1A1A] group-hover:text-[#326C56] transition-colors" style={{ fontSize: '16px', fontWeight: 600 }}>
                    Skills That Matter
                  </h3>
                  <p className="text-[#6A6A6A]" style={{ fontSize: '13px', lineHeight: '150%' }}>
                    Recognized for what you actually do, not just what you claim
                  </p>
                </div>
              </motion.div>

              {/* Impact Tracking */}
              <motion.div
                className="bg-gradient-to-br from-white to-[#F9FCFA] rounded-2xl p-5 border border-[#E8E8E8] hover:border-[#8CA58F]/40 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ 
                  y: -4,
                  boxShadow: '0 12px 32px rgba(140, 165, 143, 0.15)'
                }}
              >
                <div className="space-y-2">
                  <h3 className="text-[#1A1A1A] group-hover:text-[#326C56] transition-colors" style={{ fontSize: '16px', fontWeight: 600 }}>
                    Impact Tracking
                  </h3>
                  <p className="text-[#6A6A6A]" style={{ fontSize: '13px', lineHeight: '150%' }}>
                    See the real difference your work makes
                  </p>
                </div>
              </motion.div>

              {/* Continuous Evolution */}
              <motion.div
                className="bg-gradient-to-br from-white to-[#F9FCFA] rounded-2xl p-5 border border-[#E8E8E8] hover:border-[#8CA58F]/40 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ 
                  y: -4,
                  boxShadow: '0 12px 32px rgba(140, 165, 143, 0.15)'
                }}
              >
                <div className="space-y-2">
                  <h3 className="text-[#1A1A1A] group-hover:text-[#326C56] transition-colors" style={{ fontSize: '16px', fontWeight: 600 }}>
                    Continuous Evolution
                  </h3>
                  <p className="text-[#6A6A6A]" style={{ fontSize: '13px', lineHeight: '150%' }}>
                    Your profile grows as you develop and achieve
                  </p>
                </div>
              </motion.div>

              {/* Perfect Connections */}
              <motion.div
                className="bg-gradient-to-br from-white to-[#F9FCFA] rounded-2xl p-5 border border-[#E8E8E8] hover:border-[#8CA58F]/40 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ 
                  y: -4,
                  boxShadow: '0 12px 32px rgba(140, 165, 143, 0.15)'
                }}
              >
                <div className="space-y-2">
                  <h3 className="text-[#1A1A1A] group-hover:text-[#326C56] transition-colors" style={{ fontSize: '16px', fontWeight: 600 }}>
                    Perfect Connections
                  </h3>
                  <p className="text-[#6A6A6A]" style={{ fontSize: '13px', lineHeight: '150%' }}>
                    Match with opportunities that align with your strengths
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Growth chart visualization */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-[500px] bg-gradient-to-br from-[#E8F1EC] to-[#F0F5F2] rounded-3xl p-8 h-[450px] overflow-hidden">
              {/* Growth chart visualization */}
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

                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="lineGradientMeasure" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#47634A" />
                    <stop offset="50%" stopColor="#8CA58F" />
                    <stop offset="100%" stopColor="#A5C4A8" />
                  </linearGradient>
                  <linearGradient id="areaGradientMeasure" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8CA58F" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#8CA58F" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {/* Animated growth line path */}
                <motion.path
                  d="M 50 250 Q 100 230, 120 200 T 170 170 T 220 130 T 270 90 T 320 50"
                  fill="none"
                  stroke="url(#lineGradientMeasure)"
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
                  fill="url(#areaGradientMeasure)"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                />

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
                    <g key={`point-measure-${i}`}>
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
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}