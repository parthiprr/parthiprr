import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, Server, BrainCircuit, Layers, Globe, RefreshCw } from 'lucide-react';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const services = [
  {
    icon: Globe,
    title: 'Web Application Development',
    description:
      'Modern, responsive, and performant web applications built with React, Next.js, and TypeScript. From landing pages to complex SPA dashboards.',
    deliverables: ['React / Next.js frontend', 'TypeScript codebase', 'Responsive design', 'SEO optimization'],
  },
  {
    icon: Server,
    title: 'Backend API Development',
    description:
      'Scalable, secure RESTful APIs and backend services using FastAPI (Python) or Node.js with Express. Database design with PostgreSQL and MongoDB.',
    deliverables: ['FastAPI / Node.js + Express', 'PostgreSQL / MongoDB design', 'REST API architecture', 'Authentication & security'],
  },
  {
    icon: BrainCircuit,
    title: 'AI & LLM Integration',
    description:
      'Integration of Large Language Models (LLMs) into existing applications. Prompt engineering, RAG pipelines, LiteLLM-based multi-model routing, and AI agent workflows.',
    deliverables: ['LLM API integration', 'Prompt engineering', 'RAG pipeline setup', 'AI automation workflows'],
  },
  {
    icon: Layers,
    title: 'Full-Stack Systems',
    description:
      'End-to-end development of complete web systems — frontend, backend, database, and deployment. Ideal for MVPs, internal tools, and customer-facing platforms.',
    deliverables: ['Full-stack React + FastAPI/Node', 'Database design & setup', 'Deployment to Vercel/Railway', 'Complete documentation'],
  },
  {
    icon: Code2,
    title: 'Portfolio & Landing Pages',
    description:
      'Premium, animated portfolios and marketing landing pages. Built with modern design principles, performance optimization, and SEO best practices.',
    deliverables: ['Custom design', 'Animations (GSAP / Framer Motion)', 'SEO meta & schema', 'Fast Core Web Vitals'],
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign & Optimization',
    description:
      'Transforming outdated websites into modern, fast, and visually stunning experiences. Performance auditing, code refactoring, and design overhauls.',
    deliverables: ['Design modernization', 'Performance audit & fix', 'Lighthouse score improvement', 'Mobile responsiveness'],
  },
];

const ServicesPage: React.FC = () => (
  <motion.div {...pageTransition}>
    <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto">
      <p className="text-[10px] uppercase tracking-[0.38em] text-brand-text-muted font-sans mb-3">Freelance</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-display italic text-brand-text-dark leading-tight">
        Services I Offer
      </h1>
      <p className="text-sm text-brand-text-muted font-sans mt-4 max-w-lg leading-relaxed">
        From MVPs to enterprise tools — I build scalable, modern, and production-ready solutions as a freelance developer.
      </p>
    </div>

    <section className="py-12 bg-brand-bg" aria-label="Services list">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.55 }}
                className="group bg-brand-surface border border-brand-border rounded-2xl p-6 card-hover flex flex-col gap-4"
              >
                <div className="p-2.5 rounded-xl bg-brand-accent-gold/10 text-brand-accent-gold w-fit">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-base font-display font-bold text-brand-text-dark mb-2 group-hover:text-brand-accent-gold transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-xs text-brand-text-muted font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-brand-border/50 flex flex-col gap-1.5">
                  {service.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand-accent-gold flex-shrink-0" />
                      <span className="text-[11px] font-sans text-brand-text-muted">{d}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center space-y-6"
        >
          <div className="h-px w-20 accent-gradient mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-display italic text-brand-text-dark">
            Have a project in mind?
          </h2>
          <p className="text-sm text-brand-text-muted font-sans max-w-sm mx-auto">
            Let's discuss your requirements and build something great together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 accent-gradient text-white text-sm font-bold uppercase tracking-[0.15em] rounded-full font-sans hover:opacity-90 transition-opacity"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  </motion.div>
);

export default ServicesPage;
