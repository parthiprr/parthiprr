import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Hls from 'hls.js';
import { GithubIcon, LinkedinIcon } from '../components/CustomIcons';
import { Mail } from 'lucide-react';

const HLS_URL = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';
const ROLES = ['Software Engineer', 'AI Developer', 'Full Stack Dev', 'Freelance Dev'];

/* ── Background HLS Video ── */
const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: Hls | null = null;

    if (Hls.isSupported()) {
      hlsInstance = new Hls({ autoStartLoad: true, startLevel: -1 });
      hlsInstance.loadSource(HLS_URL);
      hlsInstance.attachMedia(video);
      hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_URL;
      video.play().catch(() => {});
    }

    return () => { hlsInstance?.destroy(); };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
    />
  );
};

/* ── Hero Section ── */
export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Cycle roles every 2s
  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2000);
    return () => clearInterval(id);
  }, []);

  // GSAP entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ ease: 'power3.out' })
        .from('.name-reveal', { opacity: 0, y: 60, duration: 1.2, delay: 0.1 })
        .from(
          '.blur-in',
          { opacity: 0, filter: 'blur(12px)', y: 20, duration: 1, stagger: 0.12 },
          '-=0.8',
        );
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-bg"
      aria-labelledby="hero-title"
    >
      {/* ── Background Video ── */}
      <div className="absolute inset-0 z-0">
        <HeroVideo />
        {/* Primary dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Bottom fade to bg */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-bg to-transparent" />
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand-bg/60 to-transparent" />
      </div>

      {/* ── Hero Content ── */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-20 pb-32"
      >
        {/* Eyebrow */}
        <motion.p
          className="blur-in text-xs text-brand-text-muted uppercase tracking-[0.4em] mb-8 font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Portfolio '26
        </motion.p>

        {/* Name */}
        <h1
          id="hero-title"
          className="name-reveal text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic leading-[0.88] tracking-tight text-brand-text-dark mb-6"
        >
          Parthip R R
        </h1>

        {/* Role cycling line */}
        <p className="blur-in text-base sm:text-lg text-brand-text-muted font-sans mb-3">
          A{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              className="font-display italic text-brand-text-dark animate-role-fade-in inline-block"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {ROLES[roleIndex]}
            </motion.span>
          </AnimatePresence>{' '}
          based in India.
        </p>

        {/* Bio */}
        <p className="blur-in text-sm md:text-base text-brand-text-muted max-w-xl mb-10 leading-relaxed font-sans">
          I design and build modern web applications, AI-driven and LLM-powered platforms,
          and scalable backend systems with Python, React, and FastAPI.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex flex-col sm:flex-row gap-4 mb-10">
          {/* View My Work — solid */}
          <Link
            to="/work"
            id="hero-cta-work"
            className="group relative rounded-full text-sm px-7 py-3.5 font-sans font-semibold bg-brand-text-dark text-brand-bg hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
          </Link>

          {/* Let's Work Together — outlined with gradient ring */}
          <Link
            to="/contact"
            id="hero-cta-contact"
            className="group relative rounded-full text-sm px-7 py-3.5 font-sans font-semibold border-2 border-brand-border bg-brand-bg/30 text-brand-text-dark hover:scale-105 transition-all duration-300"
          >
            {/* Gradient ring on hover */}
            <span
              className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              aria-hidden="true"
            />
            <span className="relative z-10 bg-brand-bg/60 backdrop-blur-sm rounded-full px-7 py-3.5 -mx-7 -my-3.5 flex items-center">
              Let's Work Together
            </span>
          </Link>
        </div>

        {/* Social links row */}
        <motion.div
          className="blur-in flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] sm:text-xs font-sans font-bold tracking-[0.18em] uppercase text-brand-text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <a href="mailto:parthiprineesh100@gmail.com" className="inline-flex items-center gap-1.5 hover:text-brand-accent-gold transition-colors">
            <Mail size={12} />
            <span>Email</span>
          </a>
          <span className="text-brand-border/40 select-none" aria-hidden="true">•</span>
          <a href="https://github.com/parthiprr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand-accent-gold transition-colors">
            <GithubIcon size={12} />
            <span>GitHub</span>
          </a>
          <span className="text-brand-border/40 select-none" aria-hidden="true">•</span>
          <a href="https://www.linkedin.com/in/parthip-r-r-1b9a58266/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand-accent-gold transition-colors">
            <LinkedinIcon size={12} />
            <span>LinkedIn</span>
          </a>
          <span className="text-brand-border/40 select-none" aria-hidden="true">•</span>
          {/* Availability indicator */}
          <span className="inline-flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-emerald-400">Available</span>
          </span>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <a
          href="#featured"
          className="flex flex-col items-center gap-2 text-[9px] uppercase tracking-[0.25em] font-bold text-brand-text-muted hover:text-brand-accent-gold transition-colors font-sans"
          aria-label="Scroll down to featured work"
        >
          <span>Scroll</span>
          {/* Animated line with highlight */}
          <div className="relative w-px h-10 bg-brand-border overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full accent-gradient animate-scroll-down" />
          </div>
        </a>
      </div>
    </section>
  );
};
