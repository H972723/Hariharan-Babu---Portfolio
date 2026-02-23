import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
};

export default function Hero() {
  const { theme } = useTheme();
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex flex-col justify-center relative px-4 sm:px-8 lg:px-12 py-20 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-900' 
          : ''
      }`}
      style={{ 
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)' 
          : 'linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 50%, #f5f5f7 100%)' 
      }}
    >
      {/* Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-2"
            >
              <span className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Hey there,</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4"
            >
              <span className={`text-4xl md:text-5xl lg:text-6xl font-bold block mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                I am{' '}
                <span className="text-[#6366f1]">{personalInfo.name.toUpperCase()}.</span>
              </span>
              <span 
                className="text-3xl md:text-4xl lg:text-5xl font-bold block"
                style={{
                  background: 'linear-gradient(90deg, #0d9488 0%, #0891b2 50%, #2563eb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {personalInfo.tagline}
              </span>
            </motion.h1>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4 mb-8"
            >
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`transition-all duration-300 ${theme === 'dark' ? 'text-gray-400 hover:text-[#6366f1]' : 'text-gray-600 hover:text-[#6366f1]'}`}
                    aria-label={link.name}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-[#6366f1] text-white font-semibold rounded-full hover:bg-[#4f46e5] transition-colors duration-300 text-center flex items-center justify-center gap-2"
              >
                CONTACT ME
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Final%20Resume_Hariharan_Babu_MS.pdf';
                  link.download = 'Hariharan_Babu_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-[#0d9488] text-white font-semibold rounded-full hover:bg-[#0f766e] transition-colors duration-300 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                GET RESUME
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div 
              className="rounded-xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: '#1e1e1e' }}
            >
              {/* Code Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <pre className="leading-relaxed">
                  <code>
                    <span className="text-[#c586c0]">const</span>
                    <span className="text-[#9cdcfe]"> coder</span>
                    <span className="text-[#d4d4d4]"> = {'{'}</span>
                    {'\n  '}
                    <span className="text-[#9cdcfe]">name</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#ce9178]">&apos;{personalInfo.name}&apos;</span>
                    <span className="text-[#d4d4d4]">,</span>
                    {'\n  '}
                    <span className="text-[#9cdcfe]">skills</span>
                    <span className="text-[#d4d4d4]">: [</span>
                    <span className="text-[#ce9178]">&apos;React&apos;</span>
                    <span className="text-[#d4d4d4]">, </span>
                    <span className="text-[#ce9178]">&apos;Node.js&apos;</span>
                    <span className="text-[#d4d4d4]">, </span>
                    <span className="text-[#ce9178]">&apos;TypeScript&apos;</span>
                    <span className="text-[#d4d4d4]">,</span>
                    {'\n    '}
                    <span className="text-[#ce9178]">&apos;Python&apos;</span>
                    <span className="text-[#d4d4d4]">, </span>
                    <span className="text-[#ce9178]">&apos;AWS&apos;</span>
                    <span className="text-[#d4d4d4]">, </span>
                    <span className="text-[#ce9178]">&apos;Docker&apos;</span>
                    <span className="text-[#d4d4d4]">],</span>
                    {'\n  '}
                    <span className="text-[#9cdcfe]">hardWorker</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#569cd6]">true</span>
                    <span className="text-[#d4d4d4]">,</span>
                    {'\n  '}
                    <span className="text-[#9cdcfe]">quickLearner</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#569cd6]">true</span>
                    <span className="text-[#d4d4d4]">,</span>
                    {'\n  '}
                    <span className="text-[#9cdcfe]">problemSolver</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#569cd6]">true</span>
                    <span className="text-[#d4d4d4]">,</span>
                    {'\n  '}
                    <span className="text-[#dcdcaa]">hireable</span>
                    <span className="text-[#d4d4d4]">: </span>
                    <span className="text-[#c586c0]">function</span>
                    <span className="text-[#d4d4d4]">() {'{'}</span>
                    {'\n    '}
                    <span className="text-[#c586c0]">return</span>
                    <span className="text-[#d4d4d4]">(</span>
                    {'\n      '}
                    <span className="text-[#569cd6]">this</span>
                    <span className="text-[#d4d4d4]">.</span>
                    <span className="text-[#9cdcfe]">hardWorker</span>
                    <span className="text-[#d4d4d4]"> &&</span>
                    {'\n      '}
                    <span className="text-[#569cd6]">this</span>
                    <span className="text-[#d4d4d4]">.</span>
                    <span className="text-[#9cdcfe]">problemSolver</span>
                    <span className="text-[#d4d4d4]"> &&</span>
                    {'\n      '}
                    <span className="text-[#569cd6]">this</span>
                    <span className="text-[#d4d4d4]">.</span>
                    <span className="text-[#9cdcfe]">skills</span>
                    <span className="text-[#d4d4d4]">.</span>
                    <span className="text-[#dcdcaa]">length</span>
                    <span className="text-[#d4d4d4]"> &gt;= </span>
                    <span className="text-[#b5cea8]">5</span>
                    {'\n    '}
                    <span className="text-[#d4d4d4]">);</span>
                    {'\n  '}
                    <span className="text-[#d4d4d4]">{'}'}</span>
                    {'\n'}
                    <span className="text-[#d4d4d4]">{'}'};</span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 p-2 transition-colors cursor-pointer ${theme === 'dark' ? 'text-gray-500 hover:text-[#6366f1]' : 'text-gray-400 hover:text-[#6366f1]'}`}
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}
