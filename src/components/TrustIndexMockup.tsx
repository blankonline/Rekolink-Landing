import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'motion/react';
import { useState, useRef } from 'react';
const profileImage = '';
const statusBar = '';

export function TrustIndexMockup() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  
  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scrollY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scrollRotate = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);
  
  // Mouse tracking for tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);
  
  const springConfig = { stiffness: 300, damping: 30 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const smoothScrollY = useSpring(scrollY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div 
      ref={containerRef}
      className="relative perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        y: smoothScrollY,
      }}
    >
      {/* Floating animation wrapper with tilt */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Phone Frame - iPhone Pro Max Style */}
        <motion.div 
          className="relative bg-[#1C1C1E] rounded-[2.8rem] p-[3px]"
          style={{
            width: '302px',
            height: '656px',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
            transformStyle: "preserve-3d",
          }}
          whileHover={{
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Screen */}
          <div className="relative w-full h-full bg-white rounded-[2.6rem] overflow-hidden">
            
            {/* Status Bar Background */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-white z-20" />
            
            {/* Status Bar Image (9:41, signal, wifi, battery) */}
            <div className="absolute top-[6px] left-3 right-3 z-40">
              <img
                src={statusBar}
                alt="Status Bar"
                className="w-full h-auto"
                draggable={false}
              />
            </div>
            
            {/* Dynamic Island */}
            <div className="absolute top-[13px] left-1/2 -translate-x-1/2 w-[95px] h-[28px] bg-black rounded-full z-30" 
              style={{
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.4)'
              }}
            />
            
            {/* Profile Screenshot */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={profileImage}
                alt="Laurent Colon - Rekolink Profile"
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
          </div>
          
          {/* Side buttons (subtle) */}
          <div className="absolute left-0 top-[90px] w-[2px] h-9 bg-[#1C1C1E] rounded-r-sm" 
            style={{
              boxShadow: 'inset -1px 0 2px rgba(0, 0, 0, 0.3)'
            }}
          />
          <div className="absolute left-0 top-[135px] w-[2px] h-12 bg-[#1C1C1E] rounded-r-sm"
            style={{
              boxShadow: 'inset -1px 0 2px rgba(0, 0, 0, 0.3)'
            }}
          />
          <div className="absolute left-0 top-[188px] w-[2px] h-12 bg-[#1C1C1E] rounded-r-sm"
            style={{
              boxShadow: 'inset -1px 0 2px rgba(0, 0, 0, 0.3)'
            }}
          />
          <div className="absolute right-0 top-[150px] w-[2px] h-16 bg-[#1C1C1E] rounded-l-sm"
            style={{
              boxShadow: 'inset 1px 0 2px rgba(0, 0, 0, 0.3)'
            }}
          />
        </motion.div>
      </motion.div>

      {/* Enhanced decorative nodes with interaction */}
      <motion.div
        className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#8CA58F] opacity-20 blur-xl pointer-events-none"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-[#47634A] opacity-15 blur-xl pointer-events-none"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 -right-8 w-12 h-12 rounded-full bg-[#8CA58F] opacity-10 blur-lg pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </motion.div>
  );
}