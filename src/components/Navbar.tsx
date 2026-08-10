import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home', exact: true },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/resume', label: 'Resume' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-5 px-4"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        aria-label="Primary navigation"
      >
        <nav
          className={`inline-flex items-center gap-1 rounded-full backdrop-blur-xl border border-brand-border bg-brand-surface/80 px-2 py-2 transition-all duration-300 ${
            scrolled ? 'shadow-lg shadow-black/40' : ''
          }`}
          role="navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="Parthip R R — Home"
            className="group relative mr-1"
          >
            <div className="relative w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-full accent-gradient opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Inner dark circle */}
              <div className="absolute inset-[2px] rounded-full bg-brand-surface flex items-center justify-center">
                <span className="font-display italic text-[12px] text-brand-text-dark leading-none select-none">PR</span>
              </div>
            </div>
          </Link>

          {/* Divider */}
          <div className="w-px h-5 bg-brand-border mx-1 hidden sm:block" aria-hidden="true" />

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.exact}
                  className={({ isActive }) =>
                    `text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 font-sans font-medium tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'text-brand-text-dark bg-brand-stroke/60'
                        : 'text-brand-text-muted hover:text-brand-text-dark hover:bg-brand-stroke/40'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="w-px h-5 bg-brand-border mx-1 hidden md:block" aria-hidden="true" />

          {/* Let's Talk CTA */}
          <Link
            to="/contact"
            id="navbar-cta"
            className="hidden sm:inline-flex relative items-center text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 font-sans font-medium text-brand-text-dark transition-all duration-200 group"
          >
            {/* Gradient border on hover */}
            <span
              className="absolute inset-[-1.5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 accent-gradient"
              aria-hidden="true"
            />
            <span className="relative z-10 bg-brand-surface rounded-full px-3 py-1.5 backdrop-blur-md flex items-center gap-1">
              Let's Talk <span className="ml-0.5">↗</span>
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden ml-1 p-2 rounded-full text-brand-text-muted hover:text-brand-text-dark hover:bg-brand-stroke/40 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-xl md:hidden flex flex-col justify-center items-center"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 p-2 text-brand-text-muted hover:text-brand-text-dark transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <ul className="flex flex-col items-center gap-8 mb-8" role="list">
              {navItems.map((item, i) => (
                <li key={item.to}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.exact}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `text-3xl font-display font-medium tracking-wide ${
                          isActive
                            ? 'accent-gradient-text'
                            : 'text-brand-text-muted hover:text-brand-text-dark'
                        } transition-colors`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                </li>
              ))}
              <li>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * navItems.length, duration: 0.4 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-display font-medium text-brand-accent-gold"
                  >
                    Let's Talk ↗
                  </Link>
                </motion.div>
              </li>
            </ul>

            {/* Social links in mobile menu */}
            <motion.div
              className="flex gap-6 text-xs text-brand-text-muted uppercase tracking-[0.2em] font-sans"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <a href="https://github.com/parthiprr" target="_blank" rel="noopener noreferrer" className="hover:text-brand-text-dark transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/parthip-r-r-1b9a58266/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-text-dark transition-colors">LinkedIn</a>
              <a href="mailto:parthiprineesh100@gmail.com" className="hover:text-brand-text-dark transition-colors">Email</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
