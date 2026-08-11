import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import healthProjectImg from '../assets/health_project.png';

/* ── IEEE Icon ── */
const IEEEIcon: React.FC<{ className?: string }> = ({ className = 'h-4 w-auto' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.61 34.68" className={className}>
    <g fill="currentColor">
      <path d="m4.22 25.61-.65.01-.04-.04c-.02-.27-.02-.47-.05-.75l-.04-.53H1.93l-.24.45-.38.76-.02.06-.05.03-.63.01-.03-.06c.11-.2 1.75-3.1 2.32-4.2l.05-.03.85-.02.03.03c.03.51.25 2.81.42 4.24zm-.96-3.87L2.18 23.8l.41.01h.83zm0 0"/>
      <path d="M20.59 2.5h3.75v13.54h-3.75zm0 0"/>
      <path d="M26.3 16.04V2.5h10.33v2.62h-6.57v2.8h6.04v2.63h-6.04v2.87h6.57v2.62zm0 0"/>
      <path d="M38.73 16.04V2.5h10.31v2.62h-6.56v2.8h6.04v2.63h-6.04v2.87h6.56v2.62zm0 0"/>
      <path d="M51.15 16.04V2.5h10.31v2.62H54.9v2.8h6.04v2.63H54.9v2.87h6.56v2.62zm0 0"/>
      <path d="M8.55 2.65c.6-.47 1.35-.08 1.85.35.53.4 1.08.86 1.56 1.33l.09.05a25.93 25.93 0 0 1 3.6 4.06c.16.26.3.55.21.88-.34.85-1.03 1.53-1.63 2.27A27.5 27.5 0 0 1 10 15.44c-.32.22-.74.42-1.11.25-1.13-.6-2.1-1.57-3.08-2.46a21.34 21.34 0 0 1-3.18-3.61c-.13-.18-.17-.4-.17-.65.12-.45.42-.82.72-1.2a29.6 29.6 0 0 1 3.56-3.7l.14-.11c.54-.48 1.09-.9 1.66-1.31m1.75-1.37L9.63.32C9.54.27 9.44.2 9.35.16c-.2-.08-.42.02-.58.15L7.55 1.9A33 33 0 0 1 .7 8.34c-.2.16-.5.31-.56.57-.07.23.06.43.2.57a33.35 33.35 0 0 1 5.7 4.96c.31.32.56.64.86.95.51.67 1.1 1.35 1.57 2.07.15.16.17.4.4.48.18.06.4.1.57 0l.17-.17a33.9 33.9 0 0 1 7.75-7.82c.3-.27.87-.36.88-.86a.78.78 0 0 0-.35-.58h-.05a30.13 30.13 0 0 1-4.31-3.57L12.05 3.4c-.6-.67-1.19-1.41-1.75-2.12"/>
    </g>
  </svg>
);

/* ── Project Data ── */
const technicalProjects = [
  {
    slug: 'llm-activity-diagrams',
    title: 'LLM-Based Activity Diagram Generation & Extraction',
    description:
      'An AI-powered pipeline converting natural language specifications into structural UML activity diagrams. Employs advanced Vision-Language Models (VLMs) and structural parsing code to generate, render, and validate behavioral diagrams, running semantic evaluation against gold-standard architectures.',
    technologies: ['Python', 'LLMs', 'Vision-Language Models', 'PlantUML', 'Semantic Evaluation'],
    image: '/images/llmproject.png',
    imageAlt: 'UML Activity Diagram project demonstration with AI-generated diagrams',
    links: [
      { label: 'Diagram Generation Code', url: 'https://github.com/parthiprr/activity-diagram-generation', available: true },
      { label: 'Diagram Extraction', url: '#', available: false, tooltip: 'currently not available' },
    ],
  },
  {
    slug: 'healthcare-parkinsons',
    title: "Healthcare Portal with ML-based Parkinson's Detection",
    description:
      "A full-stack diagnostic and patient care portal featuring integrated machine learning algorithms for the early detection and classification of Parkinson's disease. Leverages acoustic and gait features analyzed via backend classification engines to provide visual reports and medical dashboard integrations.",
    technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Python ML', 'Scikit-Learn'],
    image: healthProjectImg,
    imageAlt: "Healthcare portal interface with Parkinson's detection machine learning model",
    links: [{ label: 'GitHub Repository', url: '#', available: false, tooltip: 'currently not available' }],
  },
];

const publication = {
  slug: 'ieee-llm-uml',
  title: 'Comparative Evaluation of Fine-Tuned LLMs for UML Activity Diagram Generation',
  description:
    'Research publication presented in ICSSAS 2026 (IEEE Co-sponsored). Fine-tuned state-of-the-art LLMs on domain-specific corpora mapping textual workflows to raw PlantUML code. Established a dual evaluation mechanism assessing structural accuracy and semantic workflow grounding.',
  technologies: ['LLM Fine-Tuning', 'PlantUML', 'Semantic Evaluation', 'IEEE Publication', 'Python'],
  image: '/publication/144.png',
  imageAlt: 'First page of the research publication on UML Activity Diagram generation',
  pdf: '/publication/144.pdf',
  certificate: '/publication/144-4.pdf',
  ieeeUrl: 'https://ieeexplore.ieee.org/document/11559382',
  doi: '10.1109/ICSSAS68835.2026.11559382',
  venue: '2026 4th International Conference on Self Sustainable Artificial Intelligence Systems (ICSSAS), Erode, India',
  pages: 'pp. 1768–1775',
};

const freelanceProjects = [
  {
    slug: 'royal-dent',
    title: 'Royal Dent Dental Clinic',
    category: 'Premium Dental Care & Clinic',
    description:
      'A premium website for an advanced dental clinic in Kochi, India, featuring detailed treatment showcases, doctor profiles, sterile facility details, and interactive appointment scheduling.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/dental-screenshot.png',
    imageAlt: 'Royal Dent Dental Clinic website homepage showing premium dental care solutions and booking details',
    liveUrl: 'https://dental-clinic-three-ruddy.vercel.app/',
  },
  {
    slug: 'the-glam-up-studio',
    title: 'The Glam Up Studio',
    category: 'Luxury Beauty Salon',
    description:
      'A premium, fully responsive luxury beauty salon website featuring modern aesthetics, interactive service sections, high-end gallery showcasing, and booking integration.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/beautuparloru.png',
    imageAlt: 'The Glam Up Studio — Premium Beauty Salon website showcasing luxury styling and salon booking',
    liveUrl: 'https://beautyparlour-eta.vercel.app/',
  },
  {
    slug: 'togera',
    title: 'Togera',
    category: 'Travel Community Platform',
    description:
      'A full-featured travel community platform for Indonesia, connecting travelers for trips, carpooling, travel buddies, hangouts, and digital nomad activities. Built as a complete web platform serving the Indonesian travel community.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    image: '/images/togera-screenshot.png',
    imageAlt: 'Togera website — Indonesia Travel Community: Trusted Trips and Carpooling',
    liveUrl: 'https://www.togera.online/',
  },
  {
    slug: 'retno-explorica',
    title: 'Retno Explorica',
    category: 'Travel Blog & Portfolio',
    description:
      'A cinematic travel blog and visual portfolio for Indonesian travel creator Retno, showcasing budget travel guides, photography, and travel stories from Kashmir, Kerala, and Lakshadweep, India.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
    image: '/images/retno-screenshot.png',
    imageAlt: 'Retno Explorica website — Explore The World Through My Eyes, personal travel journal',
    liveUrl: 'https://retnoexplorica.vercel.app/',
  },
  {
    slug: 'sharemyday',
    title: 'ShareMyDay',
    category: 'Companion Marketplace Platform',
    description:
      'A premium companion marketplace connecting verified social companions for coffee dates, dining, shopping, and social activities in Jakarta & Bali, Indonesia. Features KYC verification and activity-based matching.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    image: '/images/SHAREMYDAY.png',
    imageAlt: 'ShareMyDay premium companion marketplace Jakarta Bali',
    liveUrl: 'https://sharemyday.vercel.app/',
  },
  {
    slug: 'creative-portfolio',
    title: 'Creative Portfolio',
    category: 'Interactive Portfolio',
    description:
      'A premium, dark-themed, cinematic developer portfolio featuring video preloading and dynamic accent themes tailored for high-impact visual presentation.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/images/creative-web.png',
    imageAlt: 'Parthip Creative Developer Portfolio homepage screenshot',
    liveUrl: 'https://parthip-creative-ajq1dhv5w-parthiprrs-projects.vercel.app/',
  },
];

/* ── Reusable Project Card ── */
const ProjectCard: React.FC<{
  project: (typeof technicalProjects)[0];
  idx: number;
}> = ({ project, idx }) => (
  <motion.article
    key={idx}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.7, delay: idx * 0.1 }}
    className="group flex flex-col items-center w-full bg-brand-surface border border-brand-border rounded-3xl p-5 sm:p-6 card-hover"
  >
    {/* Image */}
    <div className="relative w-full aspect-[16/10] select-none mb-6">
      <div className="absolute inset-0 bg-brand-accent-gold/5 border border-brand-border rounded-2xl rotate-2 translate-x-2 translate-y-1.5" />
      <div className="absolute inset-0 bg-brand-surface border border-brand-border rounded-2xl -rotate-1 -translate-x-1.5 translate-y-0.5 shadow-sm" />
      <div className="absolute inset-0 bg-brand-bg border border-brand-border p-2 rounded-2xl shadow-md overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
        />
      </div>
    </div>

    {/* Title */}
    <h3 className="text-lg sm:text-xl font-display font-extrabold text-brand-text-dark text-center group-hover:text-brand-accent-gold transition-colors mb-4 px-4">
      <span className="relative inline-block pb-2">
        {project.title}
        <span className="absolute bottom-0 left-1/4 right-1/4 h-0.5 accent-gradient" />
      </span>
    </h3>

    {/* Tech tags */}
    <div className="flex flex-wrap justify-center gap-1.5 max-w-xl mx-auto mb-4 px-4">
      {project.technologies.map((tech, tIdx) => (
        <span key={tIdx} className="px-2.5 py-1 bg-brand-bg border border-brand-border rounded-lg text-xs font-semibold text-brand-text-muted font-sans">
          {tech}
        </span>
      ))}
    </div>

    {/* Description */}
    <p className="text-brand-text-muted text-center text-sm leading-relaxed max-w-2xl mx-auto font-sans px-4 mb-6">
      {project.description}
    </p>

    {/* Links */}
    <div className="flex flex-wrap justify-center gap-3 w-full px-4 mt-auto">
      {project.links?.map((link, lIdx) => {
        if (link.available) {
          return (
            <a
              key={lIdx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 accent-gradient hover:opacity-90 text-white text-xs font-bold tracking-wider uppercase rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-1.5 font-sans"
            >
              <span>{link.label}</span>
              <ArrowUpRight size={14} />
            </a>
          );
        }
        return (
          <button
            key={lIdx}
            disabled
            className="px-5 py-2.5 bg-brand-bg border border-brand-border text-brand-text-muted/50 text-xs font-bold tracking-wider uppercase rounded-xl cursor-not-allowed flex items-center gap-1.5 font-sans"
            title={link.tooltip}
          >
            <span>{link.label}</span>
            <span className="text-[10px] lowercase font-normal opacity-85">({link.tooltip})</span>
          </button>
        );
      })}
    </div>
  </motion.article>
);

/* ── Freelance Card ── */
const FreelanceCard: React.FC<{
  project: (typeof freelanceProjects)[0];
  idx: number;
}> = ({ project, idx }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.7, delay: idx * 0.1 }}
    className="group flex flex-col items-center w-full bg-brand-surface border border-brand-border rounded-3xl p-5 sm:p-6 card-hover"
  >
    {/* Image */}
    <div className="relative w-full aspect-[16/9] select-none mb-6 overflow-hidden rounded-2xl border border-brand-border">
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
      />
      {/* Category badge */}
      <div className="absolute top-3 left-3 px-2.5 py-1 glassmorphism rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-text-dark">
        {project.category}
      </div>
    </div>

    {/* Title */}
    <h3 className="text-xl sm:text-2xl font-display italic text-brand-text-dark text-center group-hover:text-brand-accent-gold transition-colors mb-3 px-4">
      {project.title}
    </h3>

    {/* Tech tags */}
    <div className="flex flex-wrap justify-center gap-1.5 max-w-xl mx-auto mb-4 px-4">
      {project.technologies.map((tech, tIdx) => (
        <span key={tIdx} className="px-2.5 py-1 bg-brand-bg border border-brand-border rounded-lg text-xs font-semibold text-brand-text-muted font-sans">
          {tech}
        </span>
      ))}
    </div>

    {/* Description */}
    <p className="text-brand-text-muted text-center text-sm leading-relaxed max-w-2xl mx-auto font-sans px-4 mb-6">
      {project.description}
    </p>

    {/* Live link */}
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group/btn relative px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase font-sans border border-brand-border text-brand-text-dark hover:border-brand-accent-gold/40 transition-all flex items-center gap-1.5 mt-auto"
    >
      <span>View Live Website</span>
      <ExternalLink size={12} />
    </a>
  </motion.article>
);

/* ── Projects Section ── */
export const Projects: React.FC = () => (
  <section id="projects" className="py-20 bg-brand-bg relative overflow-hidden" aria-labelledby="projects-heading">
    <div className="absolute top-1/4 right-[10%] w-[300px] h-[300px] bg-brand-accent-gold/4 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

      {/* ── Websites I've Built (TOP) ── */}
      <div className="mb-0">
        <div className="text-center mb-12">
          <h2 id="projects-heading" className="text-xs font-bold tracking-[0.38em] uppercase text-brand-text-muted font-sans mb-2">Freelance</h2>
          <p className="text-2xl sm:text-3xl font-display italic text-brand-text-dark">
            Websites I've Built
          </p>
          <p className="text-sm text-brand-text-muted font-sans mt-3 max-w-md mx-auto">
            Real-world web projects developed and delivered for clients and platforms.
          </p>
          <div className="h-px w-12 accent-gradient mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {freelanceProjects.map((project, idx) => (
            <FreelanceCard key={project.slug} project={project} idx={idx} />
          ))}
        </div>
      </div>

      {/* ── Academic Projects (BELOW) ── */}
      <div className="mt-20 pt-16 border-t border-brand-border/50">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.38em] text-brand-text-muted font-sans mb-2">Academic</p>
          <p className="text-2xl sm:text-3xl font-display italic text-brand-text-dark">
            Projects & Research
          </p>
          <div className="h-px w-12 accent-gradient mx-auto mt-4" />
        </div>

        {/* Technical project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {technicalProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} idx={idx} />
          ))}
        </div>

        {/* ── Publication ── */}
        <div className="max-w-4xl mx-auto mt-14 pt-12 border-t border-brand-border/50">
          <div className="text-center mb-12">
            <h3 className="text-xs font-bold tracking-[0.28em] uppercase text-brand-text-muted font-sans">
              Research Publication
            </h3>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="group flex flex-col items-center w-full bg-brand-surface border border-brand-border rounded-3xl p-5 sm:p-6 card-hover"
          >
            <div className="relative w-full md:w-[78%] aspect-[16/10] select-none mb-6">
              <div className="absolute inset-0 bg-brand-accent-gold/5 border border-brand-border rounded-2xl rotate-2 translate-x-2 translate-y-1.5" />
              <div className="absolute inset-0 bg-brand-surface border border-brand-border rounded-2xl -rotate-1 -translate-x-1.5 translate-y-0.5 shadow-sm" />
              <div className="absolute inset-0 bg-brand-bg border border-brand-border p-2 rounded-2xl shadow-md overflow-hidden">
                <img src={publication.image} alt={publication.imageAlt} loading="lazy" className="w-full h-full object-cover object-top rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" />
              </div>
              <div className="absolute top-4 right-4 z-20 bg-brand-surface/90 backdrop-blur-sm border border-brand-border py-1.5 px-3 rounded-xl flex items-center">
                <IEEEIcon className="h-4 w-auto text-[#5baed8]" />
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-display font-extrabold text-brand-text-dark text-center group-hover:text-brand-accent-gold transition-colors mb-4 px-4">
              <span className="relative inline-block pb-2">
                {publication.title}
                <span className="absolute bottom-0 left-1/4 right-1/4 h-0.5 accent-gradient" />
              </span>
            </h3>

            <div className="flex flex-wrap justify-center gap-1.5 max-w-xl mx-auto mb-4 px-4">
              {publication.technologies.map((tech, tIdx) => {
                const isIEEE = tech === 'IEEE Publication';
                return (
                  <span key={tIdx} className={`px-2.5 py-1 border rounded-lg text-xs font-semibold font-sans flex items-center gap-1.5 transition-all ${isIEEE ? 'bg-blue-950/40 border-blue-500/30 text-blue-300' : 'bg-brand-bg border-brand-border text-brand-text-muted'}`}>
                    {isIEEE && <IEEEIcon className="h-2.5 w-auto text-[#5baed8]" />}
                    {tech}
                  </span>
                );
              })}
            </div>

            <p className="text-brand-text-muted text-center text-sm leading-relaxed max-w-2xl mx-auto font-sans px-4 mb-4">
              {publication.description}
            </p>

            {(publication.venue || publication.doi) && (
              <div className="flex flex-col items-center gap-1 mb-6 px-4">
                {publication.venue && <p className="text-center text-xs text-brand-text-muted/80 font-sans italic max-w-xl">{publication.venue}{publication.pages ? `, ${publication.pages}` : ''}</p>}
                {publication.doi && <p className="text-center text-[11px] text-brand-text-muted/60 font-mono">DOI: {publication.doi}</p>}
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-sans w-full px-4">
              {publication.ieeeUrl && (
                <a href={publication.ieeeUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-[#005580] hover:bg-[#006699] text-white text-xs font-bold tracking-wider uppercase rounded-xl transition-all flex items-center gap-1.5">
                  <IEEEIcon className="h-3 w-auto text-white" />
                  <span>IEEE Xplore</span>
                </a>
              )}
              <a href={publication.pdf} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 accent-gradient hover:opacity-90 text-white text-xs font-bold tracking-wider uppercase rounded-xl transition-all flex items-center gap-1.5">
                <span>Research Paper</span>
                <ArrowUpRight size={14} />
              </a>
              <a href={publication.certificate} target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-wider uppercase text-brand-text-muted hover:text-brand-accent-gold transition-colors flex items-center gap-1 py-2">
                <span>Presentation Certificate</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.article>
        </div>
      </div>

    </div>
  </section>
);


