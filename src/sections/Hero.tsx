import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/CustomIcons';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Parthip R R";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 110);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const photoVariants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-12 pb-12 overflow-hidden bg-brand-bg" aria-labelledby="hero-title">
      <motion.div
        className="absolute -top-16 left-[8%] h-44 w-44 rounded-full bg-brand-accent-gold/10 blur-3xl"
        animate={{
          x: [0, 30, -10, 0],
          y: [0, 20, 40, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-16 right-[10%] h-56 w-56 rounded-full bg-brand-accent-gold/8 blur-[120px]"
        animate={{
          x: [0, -25, 10, 0],
          y: [0, -18, 24, 0],
          scale: [1, 0.94, 1.06, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute inset-x-0 top-[18%] mx-auto h-px w-[min(82vw,760px)] bg-gradient-to-r from-transparent via-brand-accent-gold/35 to-transparent"
        animate={{ opacity: [0.25, 0.65, 0.25], scaleX: [0.92, 1, 0.92] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10 space-y-6">
        
        {/* Avatar Container with concentric circles centered exactly on it */}
        <motion.div
          className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center mb-2"
          animate={{ y: [0, -8, 0], rotate: [0, 0.6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Concentric rings centered on the avatar center */}
          <div className="absolute pointer-events-none w-0 h-0 flex items-center justify-center z-0" aria-hidden="true">
            <div className="absolute w-[280px] h-[280px] rounded-full border border-brand-border/40 flex-shrink-0" />
            <div className="absolute w-[440px] h-[440px] rounded-full border border-brand-border/30 animate-[pulse_6s_infinite] flex-shrink-0" />
            <div className="absolute w-[620px] h-[620px] rounded-full border border-brand-border/20 flex-shrink-0" />
            <div className="absolute w-[800px] h-[800px] rounded-full border border-brand-border/15 animate-[pulse_8s_infinite] flex-shrink-0" />
            <div className="absolute w-[1000px] h-[1000px] rounded-full border border-brand-border/10 flex-shrink-0" />
            <div className="absolute w-[1200px] h-[1200px] rounded-full border border-brand-border/5 flex-shrink-0" />
            <div className="absolute w-[1420px] h-[1420px] rounded-full border border-brand-border/2 flex-shrink-0" />
          </div>

          {/* Avatar frame */}
          <motion.div 
            className="w-full h-full rounded-full overflow-hidden border border-brand-border p-1.5 bg-white shadow-md relative z-10"
            variants={photoVariants}
            initial="hidden"
            animate="visible"
          >
            <img 
              src="/images/casual_pic.png" 
              alt="Parthip R R" 
              className="w-full h-full object-cover object-top rounded-full filter grayscale contrast-110 brightness-95"
            />
          </motion.div>
        </motion.div>

        {/* Role Tag (just below profile) */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-brand-accent-gold font-display z-10"
        >
          SOFTWARE DEVELOPER • AI
        </motion.p>

        {/* Resume Download Option (below role tag) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="z-10"
        >
          <a
            href="/resume/Parthip_RR_Resume.pdf"
            download="Parthip_RR_Resume.pdf"
            className="px-6 py-2.5 bg-brand-accent-gold hover:bg-brand-accent-gold-dark text-white text-xs font-bold font-display tracking-wider uppercase rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-brand-accent-gold/15 cursor-pointer flex items-center justify-center"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Text Details (Title, Bio) */}
        <motion.div
          className="space-y-3 flex flex-col items-center pt-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-brand-text-dark tracking-tight leading-none min-h-[60px] flex items-center justify-center"
          >
            <span>{typedText}</span>
            <span className="inline-block w-1 h-8 sm:h-10 md:h-12 ml-1 bg-brand-accent-gold/75 animate-[pulse_1s_infinite] font-light">|</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xs sm:text-sm text-brand-text-muted max-w-md leading-relaxed font-sans"
          >
            I design and build modern web applications, AI-driven and LLM-powered platforms, and scalable backend systems with Python, React, and FastAPI.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase text-brand-text-muted font-display pt-2"
          >
            <a href="mailto:parthiprineesh100@gmail.com" className="inline-flex items-center gap-1.5 hover:text-brand-accent-gold transition-colors">
              <Mail size={12} />
              <span>Mail</span>
            </a>
            <span className="text-brand-border/40 select-none">•</span>
            <a href="https://github.com/parthiprr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand-accent-gold transition-colors">
              <GithubIcon size={12} />
              <span>GitHub</span>
            </a>
            <span className="text-brand-border/40 select-none">•</span>
            <a href="https://www.linkedin.com/in/parthip-r-r-1b9a58266/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand-accent-gold transition-colors">
              <LinkedinIcon size={12} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Spaced out Navigation links */}
        <motion.nav 
          variants={itemVariants}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="pt-4 font-display"
          aria-label="Hero navigation"
        >
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-text-muted">
            <a href="#about" className="hover:text-brand-accent-gold transition-colors">About</a>
            <span className="text-brand-border/40 select-none">•</span>
            <a href="#experience" className="hover:text-brand-accent-gold transition-colors">Experience</a>
            <span className="text-brand-border/40 select-none">•</span>
            <a href="#projects" className="hover:text-brand-accent-gold transition-colors">Projects</a>
            <span className="text-brand-border/40 select-none">•</span>
            <a href="#contact" className="hover:text-brand-accent-gold transition-colors">Contact</a>
          </div>
        </motion.nav>

      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block z-10">
        <a
          href="#about"
          className="flex flex-col items-center space-y-1 text-[9px] uppercase tracking-[0.25em] font-bold text-brand-text-muted hover:text-brand-accent-gold transition-colors cursor-pointer font-display"
        >
          <span>Scroll</span>
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={12} className="text-brand-accent-gold" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};
