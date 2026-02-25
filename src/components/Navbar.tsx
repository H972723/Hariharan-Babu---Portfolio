import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EDUCATION', href: '#education' },
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
              ? 'bg-gray-900/90 backdrop-blur-md shadow-sm'
              : 'bg-white/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-16 md:h-20 gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-sm font-semibold transition-colors tracking-wide ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-[#6366f1]' 
                      : 'text-[#6366f1] hover:text-[#4f46e5]'
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
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
              className={`md:hidden p-2 ${theme === 'dark' ? 'text-gray-300' : 'text-[#6366f1]'}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
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
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className={`absolute right-0 top-0 bottom-0 w-64 shadow-xl p-6 ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}>
              <div className="flex justify-end items-center mb-8">
                <motion.button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className={`p-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    whileTap={{ scale: 0.95 }}
                    className={`text-left px-4 py-3 text-sm font-semibold rounded-lg transition-colors ${
                      theme === 'dark' 
                        ? 'text-gray-300 hover:bg-gray-800' 
                        : 'text-[#6366f1] hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
