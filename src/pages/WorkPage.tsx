import React from 'react';
import { motion } from 'framer-motion';
import { Projects } from '../sections/Projects';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const WorkPage: React.FC = () => (
  <motion.div {...pageTransition}>
    <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto">
      <p className="text-[10px] uppercase tracking-[0.38em] text-brand-text-muted font-sans mb-3">Portfolio</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-display italic text-brand-text-dark leading-tight">
        My Work
      </h1>
      <p className="text-sm text-brand-text-muted font-sans mt-4 max-w-lg leading-relaxed">
        Technical projects, research publications, and freelance websites I've designed and built.
      </p>
    </div>

    <Projects />
  </motion.div>
);

export default WorkPage;
