import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

// CountUp component for animated numbers
function CountUpNumber({ value, suffix = '', isInView, delay }: { value: number; suffix?: string; isInView: boolean; delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const timer = setTimeout(() => {
      let start = 0;
      const duration = 1500;
      const increment = value / (duration / 16);
      
      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(counter);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return <span>{count}{suffix}</span>;
}

export function AnimatedGraph() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Skills data with progress values
  const skills = [
    { name: 'Leadership', value: 85, color: '#47634A' },
    { name: 'Communication', value: 92, color: '#8CA58F' },
    { name: 'Technical Skills', value: 78, color: '#5E8D75' },
    { name: 'Collaboration', value: 88, color: '#326C56' },
  ];

  // Key metrics
  const metrics = [
    { label: 'Skills Verified', value: 24, icon: '✓' },
    { label: 'Endorsements', value: 156, icon: '★' },
    { label: 'Trust Score', value: 94, suffix: '%', icon: '◈' },
  ];

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

          {/* Right side - Skills Dashboard visualization */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-[500px] bg-gradient-to-br from-[#E8F1EC] to-[#F0F5F2] rounded-3xl p-8 overflow-hidden">
              
              {/* Key Metrics Row */}
              <div className="flex justify-between mb-8">
                {metrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                  >
                    <motion.div
                      className="w-12 h-12 mx-auto mb-2 rounded-full bg-white shadow-sm flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 + i * 0.15, type: "spring" }}
                    >
                      <span className="text-[#47634A] text-lg">{metric.icon}</span>
                    </motion.div>
                    <div className="text-[#1A1A1A] font-bold text-2xl">
                      <CountUpNumber value={metric.value} suffix={metric.suffix} isInView={isInView} delay={1.0 + i * 0.15} />
                    </div>
                    <div className="text-[#6A6A6A] text-xs mt-1">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Skills Progress Bars */}
              <div className="space-y-5">
                <motion.div
                  className="text-[#1A1A1A] font-semibold text-sm mb-4"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  Verified Skills
                </motion.div>
                
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 1.4 + i * 0.12 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[#4A4A4A] text-sm">{skill.name}</span>
                      <span className="text-[#47634A] font-semibold text-sm">{skill.value}%</span>
                    </div>
                    <div className="h-2 bg-white/60 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.value}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 1.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Growth Indicator */}
              <motion.div
                className="mt-8 p-4 bg-white/50 rounded-2xl flex items-center justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 2.0 }}
              >
                <div>
                  <div className="text-[#6A6A6A] text-xs">Overall Growth</div>
                  <div className="text-[#1A1A1A] font-bold text-lg">This Quarter</div>
                </div>
                <motion.div
                  className="bg-[#47634A] text-white px-4 py-2 rounded-xl"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 2.2, type: "spring" }}
                >
                  <div className="text-xl font-bold">+27%</div>
                </motion.div>
              </motion.div>

              {/* Subtle decorative ring */}
              <motion.div
                className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border-2 border-[#8CA58F]/10"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}