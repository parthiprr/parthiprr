import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        aria-label="Primary"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-brand-border'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Placeholder */}
          <a
            href="#home"
            className="text-xs font-display font-extrabold tracking-[0.3em] uppercase text-brand-text-dark hover:text-brand-accent-gold transition-colors"
            aria-label="Go to home section"
          >
            PRR
          </a>

          {/* Desktop Actions */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-xs font-display font-bold tracking-[0.2em] uppercase transition-colors ${
                    activeSection === item.id
                      ? 'text-brand-accent-gold'
                      : 'text-brand-text-muted hover:text-brand-text-dark'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-brand-text-dark hover:text-brand-accent-gold transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-lg lg:hidden flex flex-col justify-center items-center"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-text-dark hover:text-brand-accent-gold transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col space-y-6 text-center mb-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-display font-medium tracking-wide cursor-pointer ${
                      activeSection === item.id
                        ? 'text-brand-accent-gold font-bold'
                        : 'text-brand-text-muted hover:text-brand-text-dark'
                    }`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
