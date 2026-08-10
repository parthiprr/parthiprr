import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, Brain, Code, Sparkles, BookOpen, Award,
  ExternalLink, ShieldCheck, X, Cpu, Layers, Cloud, MessageSquare, Terminal,
} from 'lucide-react';

const educationData = [
  {
    period: '2024 – Present',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Amrita Vishwa Vidyapeetham',
    icon: GraduationCap,
  },
  {
    period: '2020 – 2024',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Bangalore City University',
    icon: GraduationCap,
    badge: 'CGPA: 7.09 / 10',
  },
  {
    period: '2018 – 2020',
    degree: 'Higher Secondary Education (12th Grade)',
    icon: BookOpen,
    badge: '84%',
  },
];

const interests = [
  { label: 'Artificial Intelligence', icon: Brain },
  { label: 'Machine Learning', icon: Cpu },
  { label: 'NLP', icon: MessageSquare },
  { label: 'LLMs', icon: Sparkles },
  { label: 'AI Agents', icon: Cpu },
  { label: 'Prompt Engineering', icon: Terminal },
  { label: 'Software Engineering', icon: Code },
  { label: 'Backend Development', icon: Code },
  { label: 'Full Stack Development', icon: Code },
  { label: 'Intelligent Systems', icon: Brain },
  { label: 'System Design', icon: Layers },
  { label: 'Cloud Technologies', icon: Cloud },
];

const certificates = [
  {
    title: 'Software Engineer Intern Certification',
    issuer: 'HackerRank',
    year: '2025',
    credentialUrl: '/certificates/softwareintern.png',
    image: '/certificates/softwareintern.png',
  },
  {
    title: 'React.js AI Chatbot with ChatGPT, Gemini and DeepSeek',
    issuer: 'Udemy',
    year: '2025',
    credentialUrl: '/certificates/udemy.jpeg',
    image: '/certificates/udemy.jpeg',
  },
];

type Cert = typeof certificates[0];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-bg relative overflow-hidden" aria-labelledby="about-heading">
      {/* Decorative glow */}
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-brand-accent-gold/4 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="about-heading" className="text-xs font-bold tracking-[0.38em] uppercase text-brand-text-muted font-sans">
            A B O U T
          </h2>
          <div className="h-px w-12 accent-gradient mx-auto mt-3" />
        </div>

        {/* Bio & Interests */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-brand-text-muted leading-relaxed font-sans text-sm sm:text-base">
                I am an MCA graduate from Amrita Vishwa Vidyapeetham and an aspiring Software Engineer
                specializing in Artificial Intelligence, Large Language Models (LLMs), NLP, and scalable
                backend architectures. Leveraging a robust technology stack including Python, FastAPI,
                Angular, Node.js, PostgreSQL, and MongoDB, I build intelligent full-stack systems and
                integrate advanced AI capabilities. My experience spans AI research, fine-tuning LLMs,
                designing high-performance REST APIs, and developing autonomous AI agent workflows.
                Driven by a passion for backend engineering and system design, I focus on transforming
                complex business workflows into robust, production-grade software solutions suitable for
                modern enterprise environments.
              </p>
            </motion.div>

            {/* Interest badges */}
            <motion.div variants={itemVariants} className="space-y-3 pt-4">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-brand-accent-gold font-display">
                Areas of Interest
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {interests.map((interest, idx) => {
                  const Icon = interest.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-surface border border-brand-border rounded-xl transition-all cursor-default hover:border-brand-accent-gold/30 hover:bg-brand-surface/80"
                    >
                      <Icon size={12} className="text-brand-accent-gold" aria-hidden="true" />
                      <span className="text-xs font-semibold font-sans text-brand-text-dark">{interest.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export const Education: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);

  return (
    <section id="education" className="py-20 bg-brand-bg relative overflow-hidden" aria-labelledby="education-heading">
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-brand-accent-gold/3 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Education Journey */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 id="education-heading" className="text-xs font-bold tracking-[0.28em] uppercase text-brand-text-muted font-sans">
              Education Journey
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationData.map((edu, idx) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-brand-surface border border-brand-border p-6 rounded-2xl card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold font-display tracking-wider text-brand-accent-gold bg-brand-accent-gold/10 px-2 py-0.5 rounded-md">
                      {edu.period}
                    </span>
                    {edu.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold border border-brand-border text-brand-text-muted font-sans">
                        {edu.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-brand-text-dark mt-1 font-display flex items-start gap-1.5">
                    <Icon size={14} className="text-brand-accent-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                    {edu.degree}
                  </h4>
                  {edu.institution && (
                    <p className="text-xs font-semibold text-brand-text-muted mt-1.5 font-sans">
                      {edu.institution}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mt-20 pt-16 border-t border-brand-border/50 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-xs font-bold tracking-[0.28em] uppercase text-brand-text-muted font-sans">
              Certifications & Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                className="group bg-brand-surface border border-brand-border rounded-2xl p-5 transition-all duration-300 hover:scale-[1.01] hover:border-brand-accent-gold/30 hover:shadow-md hover:shadow-brand-accent-gold/5 flex items-center gap-4 cursor-pointer"
                onClick={() => setSelectedCert(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedCert(cert)}
                aria-label={`View certificate: ${cert.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-brand-bg border border-brand-border flex items-center justify-center p-1 flex-shrink-0">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-brand-accent-gold">
                    <ShieldCheck size={10} aria-hidden="true" />
                    <span>{cert.issuer}</span>
                  </span>
                  <h4 className="text-sm font-display font-extrabold text-brand-text-dark truncate mt-0.5">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] text-brand-text-muted font-sans font-semibold mt-1">
                    Issued {cert.year}
                  </p>
                </div>
                <Award size={16} className="text-brand-accent-gold flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 16 }}
              className="relative max-w-xl w-full bg-brand-surface border border-brand-border rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-brand-text-muted hover:text-brand-accent-gold transition-colors cursor-pointer"
                aria-label="Close certificate viewer"
              >
                <X size={18} />
              </button>

              <h4 className="text-base sm:text-lg font-display font-extrabold text-brand-text-dark text-center pr-6 leading-tight">
                {selectedCert.title}
              </h4>
              <p className="text-[10px] font-bold text-brand-accent-gold uppercase tracking-widest font-sans">
                Issued by {selectedCert.issuer} ({selectedCert.year})
              </p>

              <div className="w-full aspect-[4/3] max-h-[300px] border border-brand-border rounded-2xl overflow-hidden bg-brand-bg flex items-center justify-center p-2">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-full object-contain rounded-xl"
                />
              </div>

              <a
                href={selectedCert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 accent-gradient text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm hover:opacity-90 cursor-pointer flex items-center gap-1.5 font-sans"
              >
                <span>Verify Credential</span>
                <ExternalLink size={12} />
              </a>
            </motion.div>
          </motion.div>,
          document.body
        )}
      </AnimatePresence>
    </section>
  );
};

