import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

// Minimal project detail — the main showcase is already on /work
// This page handles direct links and provides context
const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-text-muted hover:text-brand-accent-gold transition-colors font-sans mb-8"
        >
          <ArrowLeft size={14} />
          <span>Back to Work</span>
        </Link>

        <p className="text-[10px] uppercase tracking-[0.38em] text-brand-text-muted font-sans mb-3">Project</p>
        <h1 className="text-3xl sm:text-4xl font-display italic text-brand-text-dark capitalize">
          {slug?.replace(/-/g, ' ')}
        </h1>
        <p className="text-sm text-brand-text-muted font-sans mt-4 max-w-lg leading-relaxed">
          Full project details and case study available on the work page.
        </p>
        <div className="mt-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-6 py-3 accent-gradient text-white text-sm font-bold uppercase tracking-[0.15em] rounded-xl font-sans hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={14} />
            <span>View All Projects</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
