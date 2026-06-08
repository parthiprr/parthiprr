import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Check, Home, Code2, Monitor, Server, Database, GitBranch, BrainCircuit } from 'lucide-react';

const experiences = [
  {
    company: 'Wissen Infotec',
    role: 'Intern',
    period: 'April 2026 – Present',
    description: '',
    highlights: [
      'Developing backend services and RESTful APIs using FastAPI and PostgreSQL for scalable application architecture.',
      'Designing and optimizing backend logic to support automation and efficient data processing workflows using LiteLLM.',
    ],
    tech: ['FastAPI', 'PostgreSQL', 'LiteLLM', 'Python'],
  },
];

const skillsData = [
  {
    category: 'Programming',
    icon: Code2,
    skills: ['Python', 'Java', 'C', 'C++'],
  },
  {
    category: 'Frontend',
    icon: Monitor,
    skills: ['JavaScript', 'HTML & CSS', 'Angular', 'React / TS'],
  },
  {
    category: 'Backend',
    icon: Server,
    skills: ['FastAPI', 'Node.js', 'Express.js'],
  },
  {
    category: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    category: 'Tools & DevOps',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'REST APIs'],
  },
  {
    category: 'AI / ML & LLMs',
    icon: BrainCircuit,
    skills: ['LLM Integration', 'Prompt Engineering', 'Model Evaluation', 'LiteLLM'],
  },
];

export const Experience: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Databases', 'AI / ML & LLMs', 'Tools & DevOps'];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(item => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="experience" className="py-24 bg-brand-bg relative overflow-hidden" aria-labelledby="experience-heading">
      {/* Decorative Blur blob */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-brand-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 id="experience-heading" className="text-xs font-bold tracking-[0.35em] uppercase text-brand-text-muted">
            E X P E R I E N C E
          </h2>
          <div className="h-[1px] w-12 bg-brand-accent-gold/30 mx-auto mt-3" />
        </div>

        {/* Experience Timeline Grid */}
        <div className="max-w-xl mx-auto mb-28">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              className="relative mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              {/* Experience Card */}
              <div className="glassmorphism rounded-3xl p-6 md:p-8 pt-12 hover:border-brand-accent-gold/30 hover:scale-[1.01] hover:shadow-lg hover:shadow-brand-accent-gold/5 transition-all duration-300 relative bg-white border border-brand-border">
                
                {/* Centered Logo/Badge */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border border-brand-accent-gold p-1 bg-white shadow-md flex items-center justify-center overflow-hidden">
                  <img
                    src="https://cdn.prod.website-files.com/6448bf6f0640203c982ca15f/6448bf6f06402071d22ca532_wissen%20fav%20icon%20256x256.png"
                    alt="Wissen Infotech Logo"
                    className="w-full h-full object-contain rounded-full p-2 bg-white"
                  />
                </div>

                {/* Header Details */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-display font-extrabold text-brand-text-dark mb-1">
                    {exp.role}
                  </h3>
                  
                  <span className="inline-block text-sm font-bold font-display uppercase tracking-wider text-brand-accent-gold">
                    {exp.company}
                  </span>

                  {/* Date/Period */}
                  <div className="flex items-center justify-center text-xs font-bold tracking-widest uppercase text-brand-text-muted mt-2 font-display">
                    <Calendar size={12} className="text-brand-accent-gold mr-1.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {exp.description && (
                  <p className="text-brand-text-muted text-center text-sm mb-6 leading-relaxed font-sans">
                    {exp.description}
                  </p>
                )}

                {/* Highlights Bullet Points */}
                <div className="space-y-3 mb-8 font-sans max-w-md mx-auto text-left">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-2.5">
                      <Check size={14} className="text-brand-accent-gold mt-1 flex-shrink-0" />
                      <span className="text-brand-text-muted text-xs sm:text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Key Tech */}
                <div className="border-t border-brand-border/60 pt-6 text-center">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted mb-3 font-display">
                    Key Technologies Applied
                  </h4>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {exp.tech.map((t, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2.5 py-1 bg-gray-50 border border-brand-border hover:border-brand-accent-gold/30 text-brand-text-dark rounded-lg text-xs font-sans font-semibold transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Sub-section (Merged here) */}
        <motion.div 
          className="pt-16 border-t border-brand-border/60 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-brand-text-muted font-display">
              Technical Skills Grid
            </h3>
          </div>

          {/* Dynamic Category Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto font-display">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs font-bold tracking-wider rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand-accent-gold border-brand-accent-gold text-white shadow-md shadow-brand-accent-gold/10'
                      : 'bg-white border-brand-border text-brand-text-muted hover:text-brand-text-dark hover:border-brand-accent-gold/30'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    layout
                    key={item.category}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="bg-white border border-brand-border rounded-2xl p-5 hover:border-brand-accent-gold/35 hover:shadow-md hover:shadow-brand-accent-gold/5 transition-all flex flex-col justify-between space-y-4"
                  >
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-xl bg-brand-accent-gold/15 text-brand-accent-gold">
                          <Icon size={16} />
                        </div>
                        <h4 className="text-sm font-display font-extrabold text-brand-text-dark">
                          {item.category}
                        </h4>
                      </div>

                      {/* Skill Tags Wrap */}
                      <div className="flex flex-wrap gap-1 font-sans">
                        {item.skills.map((skillName, sIdx) => (
                          <span 
                            key={sIdx}
                            className="px-2.5 py-1 bg-gray-50 border border-brand-border/50 hover:bg-white text-xs font-semibold text-brand-text-muted hover:text-brand-text-dark hover:border-brand-accent-gold/30 rounded-lg transition-all cursor-default"
                          >
                            {skillName}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
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
    </section>
  );
};
