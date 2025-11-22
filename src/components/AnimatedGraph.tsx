import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import graphImage from 'figma:asset/59a37dfaa456c5608dfc3a2988b9104858427e64.png';
import centralAvatar from 'figma:asset/d079b4dc55780a0e4a2cd130844e4be7c747c7c4.png';
import avatar1 from 'figma:asset/74cd9718c44a082d7b58cb71dfd5e5075c7c88fa.png';
import avatar2 from 'figma:asset/8ec5e3920034d07bb8430a5aede890ba4e0fe795.png';
import avatar3 from 'figma:asset/d6663159957a6fd5aaf0e4eb27b8b47c73f5a9ee.png';
import avatar4 from 'figma:asset/a28ae0b32d77d9cfc3e3fc3acb474c9398439200.png';
import avatar5 from 'figma:asset/2af0c0e1f6f0f48ffd2abdfc7839eb00beda276b.png';

interface DataPoint {
  label: string;
  value: number;
  color: string;
  delay: number;
}

// CountUpNumber component
interface CountUpNumberProps {
  value: number;
  isInView: boolean;
  delay: number;
}

function CountUpNumber({ value, isInView, delay }: CountUpNumberProps) {
  const [countUp, setCountUp] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    // Delay before starting the count
    const delayTimer = setTimeout(() => {
      let start = 0;
      const end = value;
      const duration = 1500;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCountUp(end);
          clearInterval(timer);
        } else {
          setCountUp(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, delay * 1000);
    
    return () => clearTimeout(delayTimer);
  }, [isInView, value, delay]);

  return (
    <motion.div
      className="text-[#1A1A1A]"
      style={{ fontSize: '32px', fontWeight: 700 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        type: "spring",
        stiffness: 200
      }}
    >
      {countUp}%
    </motion.div>
  );
}

export function AnimatedGraph() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [countUp, setCountUp] = useState(0);

  const dataPoints: DataPoint[] = [
    { label: 'Skills Verified', value: 85, color: '#326C56', delay: 0 },
    { label: 'Growth Rate', value: 92, color: '#4A7C65', delay: 0.2 },
    { label: 'Trust Score', value: 78, color: '#5E8D75', delay: 0.4 },
    { label: 'Recognition', value: 88, color: '#B7E1D2', delay: 0.6 },
  ];

  // Counter animation for the main stat
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = 87;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCountUp(end);
        clearInterval(timer);
      } else {
        setCountUp(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isInView]);

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

          {/* Right side - Animated network visualization */}
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
                  <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8CA58F" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8CA58F" stopOpacity="0.2" />
                  </linearGradient>
                  
                  {/* Glow filter */}
                  <filter id="nodeGlow">
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
                    key={`line-${i}`}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x1}
                    y2={line.y1}
                    stroke="url(#lineGradient1)"
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
                    <g key={`node-${i}`}>
                      {hasAvatar ? (
                        // Avatar node with circular image
                        <>
                          <defs>
                            <clipPath id={`avatarClip${i}`}>
                              <circle cx={node.cx} cy={node.cy} r="22" />
                            </clipPath>
                          </defs>
                          <motion.image
                            href={node.avatar}
                            x={node.cx - 22}
                            y={node.cy - 22}
                            width="44"
                            height="44"
                            clipPath={`url(#avatarClip${i})`}
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
                            filter="url(#nodeGlow)"
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
                  
                  {/* Central avatar image - without clipping to show the badge */}
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
                      key={`particle-${i}`}
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

              {/* Floating ambient particles */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45) * (Math.PI / 180);
                const distance = 180;
                const x = 50 + (Math.cos(angle) * distance / 500 * 100);
                const y = 50 + (Math.sin(angle) * distance / 400 * 100);
                const isPink = i % 2 === 0;
                
                return (
                  <motion.div
                    key={`ambient-${i}`}
                    className={`absolute w-1.5 h-1.5 rounded-full ${isPink ? 'bg-[#DC8285]' : 'bg-[#B4BEB5]'}`}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.2, 0.6, 0.2],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      duration: 3 + i * 0.4,
                      delay: 2.5 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                );
              })}

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
              
              {/* Pulsing glow effect - Pink */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#DC8285] rounded-full blur-3xl pointer-events-none"
                animate={{
                  opacity: [0.03, 0.08, 0.03],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 5,
                  delay: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}