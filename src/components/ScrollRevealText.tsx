import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, Fragment } from 'react';
import logoElement from '../assets/story_sectrions_leftside_image.png';

interface ScrollRevealTextProps {
  text: string;
  highlight?: string;
  position?: 'left' | 'center' | 'right';
  delay?: number;
}

export function ScrollRevealText({ text, highlight, position = 'center', delay = 0 }: ScrollRevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.8],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.8],
    [0.8, 1, 1, 0.8]
  );

  // Split text into words for staggered animation
  const words = text.split(' ');

  return (
    <div ref={ref} className="relative py-48 flex items-center justify-center px-8 overflow-hidden">
      {/* Dynamic gradient background that reacts to scroll */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#F9FCFA] via-white to-[#F9FCFA]"
        style={{ opacity }}
      />
      
      {/* Rekolink logo background - partially truncated */}
      <motion.div
        className="absolute inset-0 flex items-start justify-start pointer-events-none overflow-hidden"
        style={{ opacity: useTransform(opacity, [0, 1], [0, 0.25]) }}
      >
        <img 
          src={logoElement}
          alt=""
          className="w-[900px] h-auto object-contain"
          style={{
            filter: 'brightness(0) saturate(100%) invert(60%) sepia(13%) saturate(806%) hue-rotate(82deg) brightness(94%) contrast(88%)',
            transform: 'translate(-35%, -10%)'
          }}
        />
      </motion.div>
      
      {/* Animated circular gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#8CA58F]/20 to-transparent rounded-full blur-3xl"
        style={{
          x: useTransform(scrollYProgress, [0.3, 0.7], [-100, 100]),
          opacity
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-[#DC8285]/15 to-transparent rounded-full blur-3xl"
        style={{
          x: useTransform(scrollYProgress, [0.3, 0.7], [100, -100]),
          opacity
        }}
      />

      {/* Main content container */}
      <motion.div
        style={{ scale }}
        className="relative max-w-5xl text-center z-10"
      >
        {/* Decorative top element */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay }}
        >
          <div className="flex gap-2 items-center">
            <motion.div 
              className="w-12 h-px bg-gradient-to-r from-transparent to-[#8CA58F]"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: delay + 0.2 }}
            />
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#DC8285]"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, delay: delay + 0.4 }}
            />
            <motion.div 
              className="w-12 h-px bg-gradient-to-l from-transparent to-[#8CA58F]"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: delay + 0.2 }}
            />
          </div>
        </motion.div>

        {/* Text with word-by-word reveal */}
        <div className="relative">
          <motion.div
            className="text-[#2A2A2A]"
            style={{
              fontSize: 'clamp(28px, 4vw, 56px)',
              lineHeight: '130%',
              fontWeight: 400,
              letterSpacing: '-0.02em'
            }}
          >
            {words.map((word, i) => {
              const cleanWord = word.toLowerCase().replace(/[.,!?]/g, '');
              const cleanHighlight = highlight?.toLowerCase().replace(/[.,!?]/g, '') || '';
              const highlightWords = cleanHighlight.split(' ');
              const isHighlight = highlightWords.includes(cleanWord);
              const isFirstHighlightWord = isHighlight && cleanWord === highlightWords[0];
              const isLastWordBeforeHighlight = highlight && i < words.length - 1 && 
                highlightWords.includes(words[i + 1].toLowerCase().replace(/[.,!?]/g, '')) &&
                !highlightWords.includes(cleanWord);
              
              // Check if this word should trigger a line break (specific to "recognition")
              const shouldBreakAfter = cleanWord === 'recognition';
              
              // Skip rendering if this is a highlight word but not the first one
              if (isHighlight && !isFirstHighlightWord) {
                return null;
              }
              
              // If this is the first highlight word, render all highlight words together
              if (isFirstHighlightWord) {
                const highlightText = words
                  .filter((w) => highlightWords.includes(w.toLowerCase().replace(/[.,!?]/g, '')))
                  .join(' ');
                
                return (
                  <motion.span
                    key={i}
                    className="block"
                    initial={{ opacity: 0, y: 30, rotateX: -90 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      y: 0,
                      rotateX: 0
                    } : { 
                      opacity: 0, 
                      y: 30,
                      rotateX: -90
                    }}
                    transition={{
                      duration: 0.6,
                      delay: delay + 0.4 + (i * 0.08),
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    style={{ textAlign: 'left', marginTop: '0.5em' }}
                  >
                    <span>
                      {highlightText.split(' ').map((w, idx, arr) => {
                        const isLastWord = idx === arr.length - 1;
                        return (
                          <span key={idx} className={isLastWord ? "text-[#8CA58F]" : ""} style={isLastWord ? { fontWeight: 700 } : {}}>
                            {w}{idx < arr.length - 1 ? ' ' : ''}
                          </span>
                        );
                      })}
                    </span>
                  </motion.span>
                );
              }
              
              return (
                <Fragment key={i}>
                  <motion.span
                    className="inline-block mr-3"
                    initial={{ opacity: 0, y: 30, rotateX: -90 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      y: 0,
                      rotateX: 0
                    } : { 
                      opacity: 0, 
                      y: 30,
                      rotateX: -90
                    }}
                    transition={{
                      duration: 0.6,
                      delay: delay + 0.4 + (i * 0.08),
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <span>
                      {word}
                    </span>
                  </motion.span>
                  {shouldBreakAfter && <br />}
                </Fragment>
              );
            })}
          </motion.div>
        </div>

        {/* Decorative bottom element */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: delay + 1.2 }}
        >
          <div className="flex gap-1.5">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#8CA58F]"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 0.4 } : { scale: 0, opacity: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: delay + 1.3 + (i * 0.1),
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Parallax floating shapes */}
      <motion.div
        className="absolute top-1/3 left-12 w-16 h-16 border border-[#B4BEB5]/30 rounded-full"
        style={{
          y: useTransform(scrollYProgress, [0.2, 0.8], [50, -50]),
          rotate: useTransform(scrollYProgress, [0.2, 0.8], [0, 180]),
          opacity
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-16 w-12 h-12"
        style={{
          y: useTransform(scrollYProgress, [0.2, 0.8], [-30, 30]),
          rotate: useTransform(scrollYProgress, [0.2, 0.8], [0, -180]),
          opacity
        }}
      >
        <svg viewBox="0 0 50 50" className="w-full h-full">
          <polygon points="25,5 45,45 5,45" fill="none" stroke="#DC8285" strokeWidth="1" opacity="0.3" />
        </svg>
      </motion.div>
    </div>
  );
}