import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

import LoadingScreen from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ProjectDetail from './pages/ProjectDetail';
import ServicesPage from './pages/ServicesPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

/* ── Animated page routes (needs useLocation inside BrowserRouter) ── */
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Fallback 404 */}
        <Route
          path="*"
          element={
            <motion.div
              className="min-h-screen flex flex-col items-center justify-center gap-6 pt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-7xl font-display italic text-brand-text-muted/30">404</p>
              <p className="text-brand-text-muted font-sans text-sm">Page not found.</p>
              <a
                href="/"
                className="px-6 py-3 accent-gradient text-white text-xs font-bold uppercase tracking-wider rounded-full font-sans hover:opacity-90 transition-opacity"
              >
                Go Home
              </a>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

/* ── Main App shell (inside BrowserRouter) ── */
const AppShell: React.FC = () => (
  <motion.div
    key="app"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* Grain overlay */}
    <div className="grain-overlay" aria-hidden="true" />

    {/* Navigation */}
    <Navbar />

    {/* Page content */}
    <main>
      <ScrollToTop />
      <AnimatedRoutes />
    </main>

    {/* Footer */}
    <Footer />

    {/* Vercel analytics */}
    <Analytics />
  </motion.div>
);

/* ── Root App ── */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <AppShell key="app-shell" />
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
