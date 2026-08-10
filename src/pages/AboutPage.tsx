import React from 'react';
import { motion } from 'framer-motion';
import { About, Education } from '../sections/About';
import { Experience } from '../sections/Experience';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const AboutPage: React.FC = () => (
  <motion.div {...pageTransition}>
    {/* Page hero header */}
    <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto">
      <p className="text-[10px] uppercase tracking-[0.38em] text-brand-text-muted font-sans mb-3">About</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-display italic text-brand-text-dark leading-tight">
        Who I Am
      </h1>
    </div>

    <About />
    <Experience />
    <Education />
  </motion.div>
);

export default AboutPage;


