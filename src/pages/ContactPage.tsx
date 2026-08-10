import React from 'react';
import { motion } from 'framer-motion';
import { Contact } from '../sections/Contact';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const ContactPage: React.FC = () => (
  <motion.div {...pageTransition}>
    <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto">
      <p className="text-[10px] uppercase tracking-[0.38em] text-brand-text-muted font-sans mb-3">Get in Touch</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-display italic text-brand-text-dark leading-tight">
        Contact Me
      </h1>
      <p className="text-sm text-brand-text-muted font-sans mt-4 max-w-md leading-relaxed">
        For project inquiries, collaborations, or freelance work — I'd love to hear from you.
      </p>
    </div>

    <Contact />
  </motion.div>
);

export default ContactPage;
