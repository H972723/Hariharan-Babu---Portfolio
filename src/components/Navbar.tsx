import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ExternalLink, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { organizationInfo } from '../data/portfolio';

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'CERTIFICATIONS', href: '#certifications' },
  { name: 'AWARDS', href: '#awards' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? theme === 'dark' 
              ? 'bg-gray-900/95 backdrop-blur-md shadow-md border-b border-gray-800'
              : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">
            {/* Left Brand Badge */}
            <div className="flex items-center gap-3">
              <a
                href="#hero"
                className="flex items-center gap-2 group"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#hero');
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md group-hover:scale-105 transition-transform">
                  H
                </div>
                <span className={`font-bold text-sm md:text-base hidden sm:inline ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Hariharan Babu, M.S.
                </span>
              </a>

              {/* Organization Quick Pill in Navbar */}
              <a
                href={organizationInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                  theme === 'dark'
                    ? 'bg-indigo-950/60 border-indigo-500/30 text-indigo-300 hover:bg-indigo-900 hover:text-white'
                    : 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100'
                }`}
                title={`Visit ${organizationInfo.name}`}
              >
                <Sparkles className="w-3 h-3 text-[#6366f1]" />
                <span>{organizationInfo.name}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-xs font-bold transition-colors tracking-wide ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-[#6366f1]' 
                      : 'text-gray-700 hover:text-[#4f46e5]'
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}

              {/* Organization Link */}
              <a
                href={organizationInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#6366f1] text-white hover:bg-[#4f46e5] shadow-sm transition-all"
              >
                <span>{organizationInfo.name}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Right Controls: Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-colors ${
                  theme === 'dark' 
                    ? 'text-yellow-400 hover:bg-gray-800' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'light' ? (
                    <motion.div
                      key="sun"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-xl ${theme === 'dark' ? 'text-gray-300' : 'text-[#6366f1]'}`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className={`absolute right-0 top-0 bottom-0 w-72 shadow-2xl p-6 flex flex-col justify-between ${
              theme === 'dark' ? 'bg-gray-900 border-l border-gray-800' : 'bg-white border-l border-gray-200'
            }`}>
              <div>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-700/40">
                  <div>
                    <div className={`font-bold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Hariharan Babu, M.S.
                    </div>
                    <div className="text-[11px] text-[#6366f1] font-medium">
                      Founder @ {organizationInfo.name}
                    </div>
                  </div>
                  <motion.button 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className={`p-2 rounded-lg ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <motion.button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      whileTap={{ scale: 0.95 }}
                      className={`text-left px-3.5 py-2.5 text-xs font-bold rounded-lg transition-colors ${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                          : 'text-gray-700 hover:bg-gray-100 hover:text-[#6366f1]'
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Organization Card in Mobile Menu */}
              <div className={`p-4 rounded-xl border mt-6 ${
                theme === 'dark' ? 'bg-gray-800/80 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#6366f1]" />
                  <span className="text-xs font-bold text-[#6366f1]">{organizationInfo.name}</span>
                </div>
                <p className="text-[11px] text-gray-400 mb-3 leading-snug">
                  {organizationInfo.tagline}
                </p>
                <a
                  href={organizationInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg text-xs font-bold bg-[#6366f1] text-white flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Visit {organizationInfo.name}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
