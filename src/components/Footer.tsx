import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-bg border-t border-brand-border py-10 overflow-hidden" role="contentinfo">
      {/* Decorative Blob */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[80px] bg-brand-accent-gold/5 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        
        {/* Brand */}
        <div className="flex items-center" />

        {/* Copyright */}
        <div className="text-xs text-brand-text-muted font-sans">
          &copy; {currentYear} Parthip R R. All rights reserved.
        </div>

        {/* Scroll to Top */}
        <a
          href="#home"
          className="p-2.5 bg-white border border-brand-border hover:border-brand-accent-gold text-brand-text-muted hover:text-brand-text-dark rounded-full transition-all cursor-pointer shadow-sm"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};
