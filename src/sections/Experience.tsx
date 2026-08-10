import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Check, Award, X, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'Wissen Infotech',
    role: 'Intern',
    period: 'April 2026 – July 2026',
    description: '',
    highlights: [
      'Developed Atomic Team and Atomic User APIs (Create, Update, Delete) for LiteLLM, enabling efficient team and user management.',
      'Enhanced the URL Refresh API by implementing bucket allowlists, S3 URL validation, and secure pre-signed URL generation to improve security and reliability.',
      'Integrated Claude Code with a self-hosted Langfuse instance using Stop Hook tracing and configured environment-based authentication and routing.',
      'Conducted in-depth research on Claude AI Agent SDK and OpenAI Agents SDK — focusing on architecture, session persistence, context management, and workflow orchestration.',
      'Built AI coding agents using LangGraph, OpenAI Agents SDK, and Claude Agent SDK with deployment readiness for Azure AI Foundry and Agent Bricks.',
    ],
    tech: ['FastAPI', 'PostgreSQL', 'LiteLLM', 'LangGraph', 'Python', 'Claude SDK', 'OpenAI SDK', 'Langfuse'],
    certificate: '/images/internship.png',
  },
];

export const Experience: React.FC = () => {
  const [viewCert, setViewCert] = useState(false);

  return (
    <section id="experience" className="py-24 bg-brand-bg relative overflow-hidden" aria-labelledby="experience-heading">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-brand-accent-gold/4 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 id="experience-heading" className="text-xs font-bold tracking-[0.38em] uppercase text-brand-text-muted font-sans">
            E X P E R I E N C E
          </h2>
          <div className="h-px w-12 accent-gradient mx-auto mt-3" />
        </div>

        {/* Experience Cards */}
        <div className="max-w-xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="glassmorphism rounded-3xl p-6 md:p-8 pt-14 hover:border-brand-accent-gold/25 hover:scale-[1.01] hover:shadow-lg hover:shadow-brand-accent-gold/5 transition-all duration-300 relative">

                {/* Company Logo */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border border-brand-accent-gold/40 p-1 bg-brand-surface shadow-md flex items-center justify-center overflow-hidden">
                  <img
                    src="https://cdn.prod.website-files.com/6448bf6f0640203c982ca15f/6448bf6f06402071d22ca532_wissen%20fav%20icon%20256x256.png"
                    alt="Wissen Infotech Logo"
                    className="w-full h-full object-contain rounded-full p-2"
                  />
                </div>

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-display font-extrabold text-brand-text-dark mb-1">
                    {exp.role}
                  </h3>
                  <span className="inline-block text-sm font-bold font-display uppercase tracking-wider text-brand-accent-gold">
                    {exp.company}
                  </span>
                  <div className="flex items-center justify-center text-xs font-bold tracking-widest uppercase text-brand-text-muted mt-2 font-display">
                    <Calendar size={12} className="text-brand-accent-gold mr-1.5" aria-hidden="true" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3 mb-8 font-sans max-w-md mx-auto text-left">
                  {exp.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <Check size={14} className="text-brand-accent-gold mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-brand-text-muted text-xs sm:text-sm leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech */}
                <div className="border-t border-brand-border/50 pt-6 text-center">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted mb-3 font-display">
                    Key Technologies Applied
                  </h4>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {exp.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-brand-bg border border-brand-border hover:border-brand-accent-gold/30 text-brand-text-dark rounded-lg text-xs font-sans font-semibold transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Certificate button */}
                  {exp.certificate && (
                    <button
                      onClick={() => setViewCert(true)}
                      className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 accent-gradient text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all hover:opacity-90 cursor-pointer font-sans"
                      aria-label="View internship certificate"
                    >
                      <Award size={13} />
                      <span>View Internship Certificate</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Certificate Modal ── */}
        <AnimatePresence>
          {viewCert && createPortal(
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
              onClick={() => setViewCert(false)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 16 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 16 }}
                className="relative max-w-2xl w-full bg-brand-surface border border-brand-border rounded-3xl p-5 shadow-2xl flex flex-col items-center gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <button
                  onClick={() => setViewCert(false)}
                  className="absolute top-4 right-4 text-brand-text-muted hover:text-brand-accent-gold transition-colors cursor-pointer"
                  aria-label="Close certificate"
                >
                  <X size={18} />
                </button>

                {/* Header */}
                <div className="text-center pr-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent-gold font-sans">Internship Certificate</span>
                  <h4 className="text-base font-display font-extrabold text-brand-text-dark mt-1">Wissen Infotech Pvt. Ltd.</h4>
                  <p className="text-xs text-brand-text-muted font-sans mt-0.5">2nd April 2026 – 31st July 2026</p>
                </div>

                {/* Certificate Image */}
                <div className="w-full border border-brand-border rounded-2xl overflow-hidden bg-white">
                  <img
                    src="/images/internship.png"
                    alt="Wissen Infotech Internship Certificate for Parthip R R"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Open full */}
                <a
                  href="/images/internship.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-text-muted hover:text-brand-accent-gold transition-colors font-sans"
                >
                  <ExternalLink size={11} />
                  <span>Open Full Size</span>
                </a>
              </motion.div>
            </motion.div>,
            document.body
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
