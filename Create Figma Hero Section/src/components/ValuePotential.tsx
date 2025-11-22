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

  // Floating UI pieces with enhanced parallax
  const floatingShapes = [
    { size: 240, x: '8%', y: '15%', duration: 6, delay: 0, rotation: 15 },
    { size: 180, x: '75%', y: '25%', duration: 7, delay: 1, rotation: -20 },
    { size: 200, x: '15%', y: '65%', duration: 8, delay: 2, rotation: 25 },
    { size: 160, x: '82%', y: '55%', duration: 6.5, delay: 1.5, rotation: -15 },
    { size: 140, x: '45%', y: '10%', duration: 7.5, delay: 0.5, rotation: 10 },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-[#F9FCFA] px-4 sm:px-8"
    >
      {/* 3D Wireframe Structure */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ perspective: '1000px' }}>
        {/* Floating 3D cubes that "find their match" and align */}
        {[...Array(5)].map((_, i) => {
          const size = 120 + i * 20;
          const baseX = 20 + i * 15;
          const baseY = 30 + (i % 2) * 25;
          const isPink = i % 2 === 0;
          
          return (
            <motion.div
              key={`cube-${i}`}
              className="absolute"
              style={{
                width: size,
                height: size,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                // Start scattered, then move to aligned positions
                left: [
                  `${baseX - 10 + Math.random() * 20}%`,
                  `${baseX}%`,
                  `${baseX}%`,
                ],
                top: [
                  `${baseY + Math.random() * 30}%`,
                  `${baseY}%`,
                  `${baseY}%`,
                ],
                // Rotate to find alignment, then sync rotation
                rotateX: [
                  Math.random() * 360,
                  45,
                  45,
                  405,
                ],
                rotateY: [
                  Math.random() * 360,
                  45,
                  45,
                  405,
                ],
                rotateZ: [
                  Math.random() * 360,
                  0,
                  0,
                  360,
                ],
                scale: [0.7, 1, 1, 1],
              }}
              transition={{
                duration: 15,
                times: [0, 0.3, 0.7, 1],
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              {/* Cube faces as wireframe - thicker borders when aligned */}
              <motion.div 
                className={`absolute inset-0 ${isPink ? 'border-[#DC8285]' : 'border-[#8CA58F]'}`}
                style={{ transform: `translateZ(${size/2}px)` }}
                animate={{
                  borderWidth: ['2px', '3px', '3px', '2px'],
                }}
                transition={{
                  duration: 15,
                  times: [0, 0.3, 0.7, 1],
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
              <motion.div 
                className={`absolute inset-0 ${isPink ? 'border-[#DC8285]' : 'border-[#8CA58F]'}`}
                style={{ transform: `translateZ(-${size/2}px)` }}
                animate={{
                  borderWidth: ['2px', '3px', '3px', '2px'],
                }}
                transition={{
                  duration: 15,
                  times: [0, 0.3, 0.7, 1],
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
              <motion.div 
                className="absolute inset-0 border-[#47634A]"
                style={{ transform: `rotateY(90deg) translateZ(${size/2}px)` }}
                animate={{
                  borderWidth: ['2px', '3px', '3px', '2px'],
                }}
                transition={{
                  duration: 15,
                  times: [0, 0.3, 0.7, 1],
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
              <motion.div 
                className="absolute inset-0 border-[#47634A]"
                style={{ transform: `rotateY(90deg) translateZ(-${size/2}px)` }}
                animate={{
                  borderWidth: ['2px', '3px', '3px', '2px'],
                }}
                transition={{
                  duration: 15,
                  times: [0, 0.3, 0.7, 1],
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
              <motion.div 
                className="absolute inset-0 border-[#B4BEB5]"
                style={{ transform: `rotateX(90deg) translateZ(${size/2}px)` }}
                animate={{
                  borderWidth: ['2px', '3px', '3px', '2px'],
                }}
                transition={{
                  duration: 15,
                  times: [0, 0.3, 0.7, 1],
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
              <motion.div 
                className="absolute inset-0 border-[#B4BEB5]"
                style={{ transform: `rotateX(90deg) translateZ(-${size/2}px)` }}
                animate={{
                  borderWidth: ['2px', '3px', '3px', '2px'],
                }}
                transition={{
                  duration: 15,
                  times: [0, 0.3, 0.7, 1],
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
              
              {/* "Lock in" indicator when matched */}
              <motion.div
                className="absolute inset-0 border-4 border-[#8CA58F] rounded-lg"
                animate={{
                  opacity: [0, 0, 1, 0.6, 0],
                  scale: [1, 1, 1.1, 1, 1],
                }}
                transition={{
                  duration: 15,
                  times: [0, 0.25, 0.3, 0.35, 0.4],
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            </motion.div>
          );
        })}

        {/* Connection lines that appear when cubes "match" */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(4)].map((_, i) => {
            const x1 = 20 + i * 15 + 6;
            const y1 = 30 + (i % 2) * 25 + 6;
            const x2 = 20 + (i + 1) * 15 + 6;
            const y2 = 30 + ((i + 1) % 2) * 25 + 6;
            
            return (
              <motion.line
                key={`connection-${i}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="#8CA58F"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 0, 1, 1, 0],
                  opacity: [0, 0, 0.8, 0.8, 0],
                  strokeWidth: [3, 3, 5, 5, 3],
                }}
                transition={{
                  duration: 15,
                  times: [0, 0.28, 0.32, 0.65, 0.7],
                  delay: i * 0.5 + 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </svg>

        {/* Nodes that pulse brightly when connection is made */}
        {[...Array(5)].map((_, i) => {
          const x = 20 + i * 15 + 6;
          const y = 30 + (i % 2) * 25 + 6;
          
          return (
            <motion.div
              key={`node-${i}`}
              className="absolute rounded-full bg-[#8CA58F]"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                boxShadow: '0 0 20px rgba(140, 165, 143, 0.6)',
              }}
              animate={{
                width: ['8px', '8px', '16px', '12px', '8px'],
                height: ['8px', '8px', '16px', '12px', '8px'],
                opacity: [0.3, 0.3, 1, 0.8, 0.3],
                boxShadow: [
                  '0 0 10px rgba(140, 165, 143, 0.3)',
                  '0 0 10px rgba(140, 165, 143, 0.3)',
                  '0 0 40px rgba(140, 165, 143, 1)',
                  '0 0 30px rgba(140, 165, 143, 0.8)',
                  '0 0 10px rgba(140, 165, 143, 0.3)',
                ],
              }}
              transition={{
                duration: 15,
                times: [0, 0.25, 0.3, 0.35, 0.4],
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Synchronized orbiting ring that represents alignment */}
        <motion.div
          className="absolute left-1/2 top-1/2 rounded-full border-[#47634A]"
          style={{
            width: 350,
            height: 350,
            marginLeft: -175,
            marginTop: -175,
            transformStyle: 'preserve-3d',
          }}
          animate={{
            rotateX: [70, 70, 0, 0, 70],
            rotateZ: [0, 0, 360, 360, 720],
            borderWidth: ['2px', '2px', '4px', '4px', '2px'],
            opacity: [0.3, 0.3, 0.9, 0.9, 0.3],
          }}
          transition={{
            duration: 15,
            times: [0, 0.25, 0.3, 0.65, 0.7],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating blurred UI shapes with scroll parallax */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-3xl bg-gradient-to-br from-[#B4BEB5] to-[#47634A] blur-2xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            opacity: 0.08,
            y: useTransform(
              scrollYProgress, 
              [0, 1], 
              [index % 2 === 0 ? 50 : -50, index % 2 === 0 ? -50 : 50]
            ),
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            rotate: [shape.rotation, shape.rotation + 10, shape.rotation],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay
          }}
        />
      ))}

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