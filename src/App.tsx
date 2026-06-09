import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

const sectionMetadata = {
  home: {
    title: 'Parthip R R | Software Engineer, AI & Full Stack Developer | Portfolio',
    description: 'Explore the portfolio of Parthip R R - MCA student specializing in Full Stack Development, AI/LLM Integration, and intelligent backend systems.',
  },
  about: {
    title: 'About Parthip R R | Software Engineer & AI Enthusiast',
    description: 'Learn more about Parthip R R\'s background, education, and credentials in AI and software engineering.',
  },
  experience: {
    title: 'Experience & Skills | Parthip R R - Software Engineer',
    description: 'Professional work experience and technical skills in Python, FastAPI, React, TypeScript, and machine learning.',
  },
  projects: {
    title: 'Featured Projects & Research | Parthip R R',
    description: 'Explore my portfolio of innovative projects and AI research publications.',
  },
  contact: {
    title: 'Contact Parthip R R | Hiring or Collaboration',
    description: 'Get in touch with Parthip R R. Open to opportunities, collaborations, and new projects.',
  },
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Initializing portfolios...');

  useEffect(() => {
    // Sequence of loading states to feel premium
    const sequence = [
      { text: 'Loading modules...', delay: 400 },
      { text: 'Establishing AI routing context...', delay: 800 },
      { text: 'Compiling structural layout...', delay: 1200 },
      { text: 'Ready!', delay: 1600 },
    ];

    sequence.forEach((step) => {
      setTimeout(() => {
        setLoadingText(step.text);
      }, step.delay);
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const sections = [
      'home',
      'about',
      'experience',
      'projects',
      'contact',
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [isLoading]);

  useEffect(() => {
    const metadata = sectionMetadata[activeSection as keyof typeof sectionMetadata];
    if (metadata) {
      const currentUrl = activeSection === 'home'
        ? 'https://parthiprr.com'
        : `https://parthiprr.com/#${activeSection}`;

      document.title = metadata.title;
      
      const metaTitle = document.querySelector('meta[name="title"]');
      if (metaTitle) {
        metaTitle.setAttribute('content', metadata.title);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', metadata.title);
      }

      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', metadata.title);
      }

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', metadata.description);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', metadata.description);
      }

      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', metadata.description);
      }

      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://parthiprr.com');
      }

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', currentUrl);
      }

      const twitterUrl = document.querySelector('meta[name="twitter:url"]');
      if (twitterUrl) {
        twitterUrl.setAttribute('content', currentUrl);
      }
    }
  }, [activeSection]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* Premium Pre-loader */
          <motion.div
            key="preloader"
            className="fixed inset-0 z-50 bg-brand-bg flex flex-col justify-center items-center"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            role="status"
            aria-label="Loading portfolio"
          >
            <div className="space-y-6 flex flex-col items-center">
               {/* Spinner & Centered status dot */}
              <div className="relative w-20 h-20 flex items-center justify-center">
                {/* Glowing border ring */}
                <div className="absolute inset-0 rounded-full border-2 border-brand-accent-gold/20 border-t-brand-accent-gold animate-spin" aria-hidden="true" />
                <div className="absolute inset-2 rounded-full border border-brand-accent-gold/10 border-b-brand-accent-gold animate-spin [animation-duration:3s] [animation-direction:reverse]" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-brand-accent-gold animate-pulse z-10" />
              </div>

              {/* Status Display */}
              <div className="text-center space-y-1.5 font-display min-w-[240px]">
                <h2 className="text-xl font-bold text-white tracking-wider">
                  Parthip R R
                </h2>
                <div className="h-4 flex items-center justify-center">
                  <motion.p
                    key={loadingText}
                    className="text-xs text-brand-text-muted font-sans font-medium"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    {loadingText}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Portfolio Content */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-brand-bg text-white selection:bg-brand-accent-green/25 selection:text-white"
          >
            <main role="main">
              <Hero />
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="h-[1px] w-full bg-brand-border/60" aria-hidden="true" />
              </div>
              <About />
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="h-[1px] w-full bg-brand-border/60" aria-hidden="true" />
              </div>
              <Experience />
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="h-[1px] w-full bg-brand-border/60" aria-hidden="true" />
              </div>
              <Projects />
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="h-[1px] w-full bg-brand-border/60" aria-hidden="true" />
              </div>
              <Contact />
            </main>

            <Footer />
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
