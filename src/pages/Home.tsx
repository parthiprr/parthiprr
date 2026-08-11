import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../sections/Hero';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

/* ── Featured Work (4 cards) ── */
const featuredWork = [
  {
    slug: 'royal-dent',
    title: 'Royal Dent Dental Clinic',
    description: 'A premium website for an advanced dental clinic featuring interactive bookings, treatment listings, and doctor profiles.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/dental-screenshot.png',
    liveUrl: 'https://dental-clinic-three-ruddy.vercel.app/',
  },
  {
    slug: 'the-glam-up-studio',
    title: 'The Glam Up Studio',
    description: 'A premium, fully responsive luxury beauty salon website featuring modern aesthetics, interactive services, and booking integration.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/beautuparloru.png',
    liveUrl: 'https://beautyparlour-eta.vercel.app/',
  },
  {
    slug: 'togera',
    title: 'Togera',
    description: 'Indonesia travel community platform for travel buddies, carpooling, and digital nomads.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    image: '/images/togera-screenshot.png',
    liveUrl: 'https://www.togera.online/',
  },
  {
    slug: 'retno-explorica',
    title: 'Retno Explorica',
    description: 'Cinematic travel blog & portfolio for an Indonesian travel creator.',
    tech: ['Next.js', 'TypeScript', 'MDX'],
    image: '/images/retno-screenshot.png',
    liveUrl: 'https://retnoexplorica.vercel.app/',
  },
];

/* ── Services Teaser ── */
const servicesList = [
  'Web Application Development',
  'Backend API Development (FastAPI / Node.js)',
  'AI & LLM Integration',
  'Full-Stack Systems',
  'Portfolio & Landing Pages',
];

const Home: React.FC = () => (
  <motion.div {...pageTransition}>
    {/* Hero */}
    <Hero />

    {/* ── Featured Work ── */}
    <section id="featured" className="py-24 bg-brand-bg relative overflow-hidden" aria-labelledby="featured-heading">
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-brand-accent-gold/4 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <p className="text-[10px] uppercase tracking-[0.38em] text-brand-text-muted font-sans mb-2">Selected Work</p>
            <h2 id="featured-heading" className="text-2xl sm:text-3xl font-display italic text-brand-text-dark">
              Things I've built
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-text-muted hover:text-brand-accent-gold transition-colors font-sans group"
          >
            View all work <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredWork.map((item, idx) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.55 }}
              className="group relative bg-brand-surface border border-brand-border rounded-2xl overflow-hidden card-hover flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 to-transparent" />
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-base font-display font-bold text-brand-text-dark group-hover:text-brand-accent-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-text-muted font-sans leading-relaxed flex-1">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-brand-bg border border-brand-border text-[10px] font-semibold text-brand-text-muted rounded-lg font-sans">
                      {t}
                    </span>
                  ))}
                </div>
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-brand-accent-gold hover:text-brand-accent-gold-dark transition-colors font-sans mt-1"
                  >
                    <ExternalLink size={11} />
                    <span>View live</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    {/* ── Identity / Who I Am ── */}
    <section className="py-20 bg-brand-surface/50 border-y border-brand-border relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[250px] h-[250px] bg-brand-accent-gold/3 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] uppercase tracking-[0.38em] text-brand-text-muted font-sans mb-4">About</p>
            <h2 className="text-2xl sm:text-3xl font-display italic text-brand-text-dark leading-tight mb-5">
              Building intelligent software, one system at a time.
            </h2>
            <p className="text-sm text-brand-text-muted font-sans leading-relaxed mb-6">
              MCA graduate from Amrita Vishwa Vidyapeetham. I specialize in AI, LLMs, NLP, and scalable
              backend systems. Currently interning at Wissen Infotec, building FastAPI backends and LLM
              automation pipelines.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-text-dark hover:text-brand-accent-gold transition-colors font-sans group"
            >
              More about me <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {['Python · FastAPI · PostgreSQL', 'React · TypeScript · Angular', 'LLM Integration · Prompt Engineering', 'Node.js · Express.js · MongoDB'].map((stack, i) => (
              <div key={i} className="flex items-center gap-3 bg-brand-bg border border-brand-border rounded-xl px-4 py-3">
                <div className="w-1 h-6 accent-gradient rounded-full flex-shrink-0" />
                <span className="text-sm font-sans font-medium text-brand-text-muted">{stack}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── Freelance CTA ── */}
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-brand-accent-gold/4 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-[10px] uppercase tracking-[0.38em] text-brand-text-muted font-sans">Freelance Services</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display italic text-brand-text-dark leading-tight">
            Need a website or AI-powered app?
          </h2>
          <p className="text-sm text-brand-text-muted font-sans max-w-md mx-auto leading-relaxed">
            I build premium websites, full-stack applications, and AI-integrated systems as a freelance developer.
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            {servicesList.map((s, i) => (
              <span key={i} className="px-3 py-1.5 bg-brand-surface border border-brand-border text-xs font-sans font-medium text-brand-text-muted rounded-xl">
                {s}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-1.5 px-7 py-3.5 accent-gradient text-white text-sm font-bold uppercase tracking-[0.15em] rounded-full font-sans hover:opacity-90 transition-opacity"
            >
              See Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-7 py-3.5 bg-brand-surface border border-brand-border text-brand-text-dark text-sm font-bold uppercase tracking-[0.15em] rounded-full font-sans hover:border-brand-accent-gold/40 transition-colors"
            >
              Get in Touch ↗
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

  </motion.div>
);

export default Home;
