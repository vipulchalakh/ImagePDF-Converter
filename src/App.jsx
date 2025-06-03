import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutUsPage from '@/pages/AboutUsPage';
import ContactUsPage from '@/pages/ContactUsPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import { Toaster } from '@/components/ui/toaster';

const PageLayout = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-foreground">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />
              <Route path="/about" element={<PageLayout><AboutUsPage /></PageLayout>} />
              <Route path="/contact" element={<PageLayout><ContactUsPage /></PageLayout>} />
              <Route path="/privacy" element={<PageLayout><PrivacyPolicyPage /></PageLayout>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;