import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import centralAvatar from '../assets/real_impact_center_image.png';
import avatar1 from '../assets/real_impact_1.png';
import avatar2 from '../assets/real_impact_2.png';
import avatar3 from '../assets/real_impact_3.png';
import avatar4 from '../assets/real_impact_4.png';
import avatar5 from '../assets/real_impact_5.png';

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

          {/* Right column - Network visualization with avatars */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main graph container */}
            <div className="relative w-full max-w-[500px] h-[500px]">
              
              {/* Network connection visualization */}
              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-full"
              >
                <defs>
                  {/* Gradient definitions */}
                  <linearGradient id="lineGradientGrowth" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8CA58F" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8CA58F" stopOpacity="0.2" />
                  </linearGradient>
                  
                  {/* Glow filter */}
                  <filter id="nodeGlowGrowth">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Connection lines */}
                {[
                  { x1: 200, y1: 200, x2: 320, y2: 200, delay: 1.2 },
                  { x1: 200, y1: 200, x2: 292, y2: 277, delay: 1.3 },
                  { x1: 200, y1: 200, x2: 221, y2: 318, delay: 1.4 },
                  { x1: 200, y1: 200, x2: 140, y2: 304, delay: 1.5 },
                  { x1: 200, y1: 200, x2: 87, y2: 241, delay: 1.6 },
                  { x1: 200, y1: 200, x2: 87, y2: 159, delay: 1.7 },
                  { x1: 200, y1: 200, x2: 140, y2: 96, delay: 1.8 },
                  { x1: 200, y1: 200, x2: 221, y2: 82, delay: 1.9 },
                  { x1: 200, y1: 200, x2: 292, y2: 123, delay: 2.0 },
                ].map((line, i) => (
                  <motion.line
                    key={`line-growth-${i}`}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x1}
                    y2={line.y1}
                    stroke="url(#lineGradientGrowth)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ x2: line.x1, y2: line.y1, opacity: 0 }}
                    animate={isInView ? { 
                      x2: line.x2, 
                      y2: line.y2,
                      opacity: 1
                    } : { 
                      x2: line.x1, 
                      y2: line.y1,
                      opacity: 0 
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: line.delay,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  />
                ))}

                {/* Satellite nodes */}
                {[
                  { cx: 320, cy: 200, delay: 1.2, avatar: avatar1 },
                  { cx: 292, cy: 277, delay: 1.3, avatar: avatar4 },
                  { cx: 221, cy: 318, delay: 1.4, avatar: avatar2 },
                  { cx: 140, cy: 304, delay: 1.5, avatar: avatar5 },
                  { cx: 87, cy: 241, delay: 1.6, avatar: null },
                  { cx: 87, cy: 159, delay: 1.7, avatar: avatar3 },
                  { cx: 140, cy: 96, delay: 1.8, avatar: null },
                  { cx: 221, cy: 82, delay: 1.9, avatar: null },
                  { cx: 292, cy: 123, delay: 2.0, avatar: null },
                ].map((node, i) => {
                  const isPink = i % 3 === 0;
                  const hasAvatar = node.avatar !== null;
                  
                  return (
                    <g key={`node-growth-${i}`}>
                      {hasAvatar ? (
                        // Avatar node with circular image
                        <>
                          <defs>
                            <clipPath id={`avatarClipGrowth${i}`}>
                              <circle cx={node.cx} cy={node.cy} r="22" />
                            </clipPath>
                          </defs>
                          <motion.image
                            href={node.avatar}
                            x={node.cx - 22}
                            y={node.cy - 22}
                            width="44"
                            height="44"
                            clipPath={`url(#avatarClipGrowth${i})`}
                            preserveAspectRatio="xMidYMid slice"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={isInView ? { 
                              scale: 1, 
                              opacity: 1
                            } : { scale: 0, opacity: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: node.delay,
                              type: "spring",
                              stiffness: 300
                            }}
                            style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                          />
                        </>
                      ) : (
                        // Regular node with icon
                        <>
                          <motion.circle
                            cx={node.cx}
                            cy={node.cy}
                            r="22"
                            fill={isPink ? '#F0C8C9' : '#B4BEB5'}
                            filter="url(#nodeGlowGrowth)"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={isInView ? { 
                              scale: 1, 
                              opacity: 1
                            } : { scale: 0, opacity: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: node.delay,
                              type: "spring",
                              stiffness: 300
                            }}
                            style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                          />
                          
                          {/* User icon simulation */}
                          <motion.path
                            d={`M ${node.cx} ${node.cy - 6} 
                                a 4 4 0 1 1 0 0.1
                                M ${node.cx - 8} ${node.cy + 8}
                                a 8 6 0 0 1 16 0`}
                            fill="none"
                            stroke={isPink ? '#DC8285' : '#47634A'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
                            transition={{ duration: 0.3, delay: node.delay + 0.3 }}
                          />
                        </>
                      )}
                    </g>
                  );
                })}

                {/* Central node - larger */}
                <g>
                  {/* Pulsing ring around center */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="50"
                    fill="none"
                    stroke="#8CA58F"
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? {
                      opacity: [0, 0.4, 0],
                      scale: [0.8, 1.3, 1.5],
                    } : { opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 2,
                      delay: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                    style={{ transformOrigin: '200px 200px' }}
                  />
                  
                  {/* Central avatar image */}
                  <motion.image
                    href={centralAvatar}
                    x="140"
                    y="140"
                    width="120"
                    height="120"
                    preserveAspectRatio="xMidYMid meet"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { 
                      scale: 1, 
                      opacity: 1
                    } : { scale: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.9,
                      type: "spring",
                      stiffness: 200
                    }}
                    style={{ transformOrigin: '200px 200px' }}
                  />
                </g>

                {/* Animated data flow particles */}
                {[...Array(18)].map((_, i) => {
                  const paths = [
                    { from: [200, 200], to: [320, 200] },
                    { from: [200, 200], to: [292, 277] },
                    { from: [200, 200], to: [221, 318] },
                    { from: [200, 200], to: [140, 304] },
                    { from: [200, 200], to: [87, 241] },
                    { from: [200, 200], to: [87, 159] },
                    { from: [200, 200], to: [140, 96] },
                    { from: [200, 200], to: [221, 82] },
                    { from: [200, 200], to: [292, 123] },
                  ];
                  const pathIndex = i % 9;
                  const path = paths[pathIndex];
                  const isPink = i % 4 === 0;
                  
                  return (
                    <motion.circle
                      key={`particle-growth-${i}`}
                      r="2.5"
                      fill={isPink ? '#DC8285' : '#8CA58F'}
                      initial={{ 
                        cx: path.from[0], 
                        cy: path.from[1],
                        opacity: 0 
                      }}
                      animate={isInView ? {
                        cx: [path.from[0], path.to[0], path.from[0]],
                        cy: [path.from[1], path.to[1], path.from[1]],
                        opacity: [0, 1, 0],
                      } : {
                        cx: path.from[0],
                        cy: path.from[1],
                        opacity: 0
                      }}
                      transition={{
                        duration: 2.5,
                        delay: 2.5 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}
              </svg>

              {/* Pulsing glow effect - Green */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#8CA58F] rounded-full blur-3xl pointer-events-none"
                animate={{
                  opacity: [0.05, 0.12, 0.05],
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
        </div>
      </motion.div>
    </section>
  );
}