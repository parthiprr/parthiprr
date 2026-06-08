import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Brain, Code, Sparkles, BookOpen, Home, Award, ExternalLink, ShieldCheck, X, Cpu, Layers, Cloud, MessageSquare, Terminal } from 'lucide-react';

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

export const About: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

  return (
    <section id="about" className="py-24 bg-brand-bg relative overflow-hidden" aria-labelledby="about-heading">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-brand-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="about-heading" className="text-xs font-bold tracking-[0.35em] uppercase text-brand-text-muted">
            A B O U T
          </h2>
          <div className="h-[1px] w-12 bg-brand-accent-gold/30 mx-auto mt-3" />
        </div>

        {/* Content Grid */}
        {/* Content Container */}
        <div className="max-w-3xl mx-auto">
          
          {/* Bio & Interests */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-brand-text-muted leading-relaxed font-sans text-sm sm:text-base">
                I am an MCA student at Amrita Vishwa Vidyapeetham and an aspiring Software Engineer specializing in Artificial Intelligence, Large Language Models (LLMs), NLP, and scalable backend architectures. Leveraging a robust technology stack including Python, FastAPI, Angular, Node.js, PostgreSQL, and MongoDB, I build intelligent full-stack systems and integrate advanced AI capabilities. My experience spans AI research, fine-tuning LLMs, designing high-performance REST APIs, and developing autonomous AI agent workflows. Driven by a passion for backend engineering and system design, I focus on transforming complex business workflows into robust, production-grade software solutions suitable for modern enterprise environments.
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
                      className="flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-brand-border rounded-xl transition-all cursor-default text-brand-text-dark hover:border-brand-accent-gold/30 hover:shadow-sm"
                    >
                      <Icon size={12} className="text-brand-accent-gold" />
                      <span className="text-xs font-semibold font-sans">{interest.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Education Journey Row */}
        <motion.div 
          className="mt-24 pt-16 border-t border-brand-border/60 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-brand-text-muted font-display">
              Education Journey
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationData.map((edu, idx) => {
              const Icon = edu.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-brand-border p-6 rounded-2xl transition-all hover:scale-[1.01] hover:border-brand-accent-gold/30 hover:shadow-md hover:shadow-brand-accent-gold/5 font-sans"
                >
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold font-display tracking-wider text-brand-accent-gold bg-brand-accent-gold/10 px-2 py-0.5 rounded-md">
                      {edu.period}
                    </span>
                    {edu.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold border bg-gray-50 border-gray-100 text-brand-text-muted">
                        {edu.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-brand-text-dark mt-1 font-display flex items-center gap-1.5">
                    <Icon size={14} className="text-brand-accent-gold" />
                    {edu.degree}
                  </h4>
                  {edu.institution && (
                    <p className="text-xs font-semibold text-brand-text-muted mt-1.5 font-sans">
                      {edu.institution}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Certifications Row (Merged here) */}
        <motion.div 
          className="mt-20 pt-16 border-t border-brand-border/60 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-brand-text-muted font-display">
              Certifications & Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {certificates.map((cert, idx) => {
              return (
                <div
                  key={idx}
                  className="group bg-white border border-brand-border rounded-2xl p-5 transition-all duration-300 hover:scale-[1.01] hover:border-brand-accent-gold/30 hover:shadow-md hover:shadow-brand-accent-gold/5 flex items-center space-x-4 cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  {/* Badge Image */}
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-50 border border-brand-border/60 flex items-center justify-center p-1 flex-shrink-0">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-grow min-w-0">
                    <span className="flex items-center space-x-1 text-[9px] font-bold uppercase tracking-wider text-brand-accent-gold">
                      <ShieldCheck size={10} />
                      <span>{cert.issuer}</span>
                    </span>
                    <h4 className="text-sm font-display font-extrabold text-brand-text-dark truncate mt-0.5">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] text-brand-text-muted font-sans font-semibold mt-1">
                      Issued {cert.year}
                    </p>
                  </div>

                  <Award size={16} className="text-brand-accent-gold flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Floating/Centered Home scroll button */}
        <div className="flex justify-center mt-20">
          <a
            href="#home"
            className="p-2.5 bg-brand-text-dark hover:bg-brand-accent-gold text-white rounded-full shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
            aria-label="Back to Home"
          >
            <Home size={16} />
          </a>
        </div>

      </div>

      {/* Immersive Modal Certificate Viewer Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-text-dark/45 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative max-w-xl w-full bg-white border border-brand-border rounded-3xl p-6 shadow-2xl flex flex-col items-center space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-brand-text-muted hover:text-brand-accent-gold transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
              
              <h4 className="text-base sm:text-lg font-display font-extrabold text-brand-text-dark text-center pr-6 leading-tight">
                {selectedCert.title}
              </h4>
              
              <p className="text-[10px] font-bold text-brand-accent-gold uppercase tracking-widest">
                Issued by {selectedCert.issuer} ({selectedCert.year})
              </p>

              <div className="w-full aspect-[4/3] max-h-[300px] border border-brand-border rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-2">
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
                className="px-6 py-2.5 bg-brand-accent-gold hover:bg-brand-accent-gold-dark text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-brand-accent-gold/15 cursor-pointer flex items-center space-x-1.5"
              >
                <span>Verify Credential</span>
                <ExternalLink size={12} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
