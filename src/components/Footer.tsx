import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { GithubIcon, LinkedinIcon } from './CustomIcons';
import { Mail } from 'lucide-react';

const MARQUEE_TEXT = 'BUILDING THE FUTURE • ';
const REPEAT = 12;

export const Footer: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    tweenRef.current = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 35,
      ease: 'none',
      repeat: -1,
    });
    return () => { tweenRef.current?.kill(); };
  }, []);

  return (
    <footer className="relative bg-brand-bg border-t border-brand-border overflow-hidden" role="contentinfo">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-accent-gold/4 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      {/* GSAP Marquee */}
      <div className="marquee-track py-8 border-b border-brand-border/50 overflow-hidden">
        <div ref={marqueeRef} className="marquee-inner text-[13px] font-display italic text-brand-text-muted tracking-[0.25em] whitespace-nowrap">
          {Array.from({ length: REPEAT }, (_, i) => (
            <span key={i}>{MARQUEE_TEXT}</span>
          ))}
          {/* Duplicate for seamless loop */}
          {Array.from({ length: REPEAT }, (_, i) => (
            <span key={`d-${i}`}>{MARQUEE_TEXT}</span>
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand column */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display italic text-brand-text-dark leading-tight">
                Parthip R R
              </h2>
              <p className="text-xs text-brand-accent-gold uppercase tracking-[0.25em] mt-1 font-sans">
                Software Engineer · AI & Full Stack
              </p>
              <p className="text-xs text-brand-text-muted tracking-wider mt-0.5 font-sans">
                Freelance Web Developer
              </p>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs text-brand-text-muted font-sans">Available for projects</span>
            </div>
          </div>

          {/* Navigation column */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.3em] text-brand-text-muted font-sans font-semibold">Navigation</h3>
            <ul className="space-y-2.5" role="list">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/work', label: 'Work' },
                { to: '/services', label: 'Services' },
                { to: '/resume', label: 'Resume' },
                { to: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-brand-text-muted hover:text-brand-text-dark transition-colors duration-200 font-sans"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.3em] text-brand-text-muted font-sans font-semibold">Contact</h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href="mailto:parthiprineesh100@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-brand-text-muted hover:text-brand-text-dark transition-colors font-sans group"
                >
                  <Mail size={14} className="text-brand-accent-gold group-hover:text-brand-accent-gold-dark transition-colors" />
                  <span className="break-all">parthiprineesh100@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/parthiprr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-brand-text-muted hover:text-brand-text-dark transition-colors font-sans group"
                >
                  <GithubIcon size={14} className="text-brand-accent-gold group-hover:text-brand-accent-gold-dark transition-colors" />
                  <span>github.com/parthiprr</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/parthip-r-r-1b9a58266/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-brand-text-muted hover:text-brand-text-dark transition-colors font-sans group"
                >
                  <LinkedinIcon size={14} className="text-brand-accent-gold group-hover:text-brand-accent-gold-dark transition-colors" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>

            {/* CTA */}
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-text-dark border border-brand-border hover:border-brand-accent-gold/40 px-4 py-2.5 rounded-full transition-all duration-300 hover:shadow-sm hover:shadow-brand-accent-gold/10"
              >
                Start a Project ↗
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-brand-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-text-muted/60 font-sans">
            © 2026 Parthip R R. All rights reserved.
          </p>
          <p className="text-xs text-brand-text-muted/40 font-sans">
            Built with React · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
