import { Hero } from '../components/Hero';
import { ValueBeSeen } from '../components/ValueBeSeen';
import { ValueGrowth } from '../components/ValueGrowth';
import { AnimatedGraph } from '../components/AnimatedGraph';
import { ValuePotential } from '../components/ValuePotential';
import { ValueHuman } from '../components/ValueHuman';
import { SocialProof } from '../components/SocialProof';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { ScrollRevealText } from '../components/ScrollRevealText';
import { ScrollProgress } from '../components/ScrollProgress';
import { SectionDivider } from '../components/SectionDivider';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        
        {/* Inspirational micro-copy between sections */}
        <ScrollRevealText 
          text="In a world of noise, authentic recognition is the new currency." 
          highlight="is the new currency"
          position="center"
        />
        
        <SectionDivider variant="wave" />
        <ValueBeSeen />
        
        <ScrollRevealText 
          text="Every skill tells a story. Make yours heard." 
          highlight="Make yours heard"
          position="right"
        />
        
        <SectionDivider variant="dots" />
        <ValueGrowth />
        
        <SectionDivider variant="gradient" />
        <AnimatedGraph />
        
        <ScrollRevealText 
          text="Your potential isn't just a promise. It's proof." 
          highlight="It's proof"
          position="left"
        />
        
        <SectionDivider variant="wave" />
        <ValuePotential />
        
        <ScrollRevealText 
          text="Beyond the résumé. Beyond the algorithm. This is you." 
          highlight="This is you"
          position="center"
        />
        
        <SectionDivider variant="dots" />
        <ValueHuman />
        
        <SectionDivider variant="gradient" />
        <SocialProof />
        
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}
