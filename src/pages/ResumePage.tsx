import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText } from 'lucide-react';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const RESUME_PATH = '/resume/Parthip_RR_Resume.pdf';

const ResumePage: React.FC = () => (
  <motion.div {...pageTransition} className="min-h-screen">
    <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto">
      <p className="text-[10px] uppercase tracking-[0.38em] text-brand-text-muted font-sans mb-3">Curriculum Vitae</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-display italic text-brand-text-dark leading-tight">
        Resume
      </h1>
    </div>

    <section className="pb-24 px-6 max-w-5xl mx-auto" aria-label="Resume viewer">
      {/* Action buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href={RESUME_PATH}
          download="Parthip_RR_Resume.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 accent-gradient text-white text-sm font-bold uppercase tracking-[0.15em] rounded-xl font-sans hover:opacity-90 transition-opacity"
          aria-label="Download Parthip R R Resume PDF"
        >
          <Download size={14} aria-hidden="true" />
          <span>Download PDF</span>
        </a>
        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-surface border border-brand-border text-brand-text-dark text-sm font-bold uppercase tracking-[0.15em] rounded-xl font-sans hover:border-brand-accent-gold/40 transition-colors"
          aria-label="Open resume in new tab"
        >
          <ExternalLink size={14} aria-hidden="true" />
          <span>Open in New Tab</span>
        </a>
      </div>

      {/* PDF Viewer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-brand-surface border border-brand-border rounded-3xl overflow-hidden shadow-lg"
      >
        {/* Frame header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-brand-border bg-brand-bg">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-stroke" />
            <div className="w-2.5 h-2.5 rounded-full bg-brand-stroke" />
            <div className="w-2.5 h-2.5 rounded-full bg-brand-stroke" />
          </div>
          <div className="flex items-center gap-1.5 ml-2 text-[10px] text-brand-text-muted font-mono">
            <FileText size={10} aria-hidden="true" />
            <span>Parthip_RR_Resume.pdf</span>
          </div>
        </div>

        {/* iframe */}
        <div className="relative w-full" style={{ height: '80vh', minHeight: '600px' }}>
          <iframe
            src={`${RESUME_PATH}#view=FitH`}
            title="Parthip R R Resume PDF"
            className="w-full h-full"
            style={{ border: 'none' }}
          />
          {/* Fallback for browsers that can't render PDF inline */}
          <noscript>
            <p className="text-brand-text-muted text-sm font-sans p-8 text-center">
              PDF preview not available.{' '}
              <a href={RESUME_PATH} className="text-brand-accent-gold underline">Download the resume here.</a>
            </p>
          </noscript>
        </div>
      </motion.div>

      {/* LinkedIn nudge */}
      <p className="text-xs text-brand-text-muted font-sans text-center mt-6">
        Also available on{' '}
        <a
          href="https://www.linkedin.com/in/parthip-r-r-1b9a58266/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-accent-gold hover:text-brand-accent-gold-dark transition-colors underline underline-offset-2"
        >
          LinkedIn
        </a>
      </p>
    </section>
  </motion.div>
);

export default ResumePage;
