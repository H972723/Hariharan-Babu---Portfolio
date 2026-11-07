import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe, ChevronDown, ExternalLink, Sparkles } from 'lucide-react';
import { personalInfo, socialLinks, organizationInfo } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';
import RotatingGreeting from '../components/RotatingGreeting';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
  Globe,
};

export default function Hero() {
  const { theme } = useTheme();
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative px-4 sm:px-8 lg:px-12 py-20 transition-colors duration-500 overflow-hidden"
      style={{
        background:
          theme === 'dark'
            ? 'radial-gradient(circle at 15% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 40%), radial-gradient(circle at 85% 75%, rgba(14, 165, 233, 0.12) 0%, transparent 45%), linear-gradient(135deg, #090d16 0%, #0f172a 45%, #111827 100%)'
            : 'radial-gradient(circle at 10% 15%, rgba(99, 102, 241, 0.18) 0%, transparent 35%), radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.16) 0%, transparent 40%), linear-gradient(135deg, #eef2ff 0%, #e0e7ff 35%, #ecfeff 70%, #f5f3ff 100%)',
      }}
    >
      {/* Dynamic Cyber Tech Grid Background */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          theme === 'dark' ? 'opacity-[0.06]' : 'opacity-[0.05]'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(to right, ${theme === 'dark' ? '#818cf8' : '#4338ca'} 1px, transparent 1px),
            linear-gradient(to bottom, ${theme === 'dark' ? '#818cf8' : '#4338ca'} 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px',
        }}
      />

      {/* Floating subtle ambient glow orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-[#6366f1]/10 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-[#0ea5e9]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Organization & Degree Tag */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 flex-wrap"
            >
              <a
                href={organizationInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 shadow-sm ${
                  theme === 'dark'
                    ? 'bg-indigo-950/60 border-indigo-500/40 text-indigo-300 hover:bg-indigo-900/80 hover:border-indigo-400'
                    : 'bg-white/80 backdrop-blur-sm border-indigo-200 text-indigo-700 hover:bg-white hover:border-indigo-400'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#6366f1]" />
                <span>Founder @ {organizationInfo.name}</span>
                <span className="opacity-40">•</span>
                <span>Ph.D. Researcher @ UT Dallas</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-2"
            >
              <RotatingGreeting />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4"
            >
              <span
                className={`text-4xl md:text-5xl lg:text-6xl font-extrabold block mb-2 tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                I am{' '}
                <span className="text-[#6366f1]">{personalInfo.name.toUpperCase()}</span>
              </span>
              <span
                className="text-3xl md:text-4xl lg:text-5xl font-bold block"
                style={{
                  background: 'linear-gradient(90deg, #0d9488 0%, #0891b2 50%, #2563eb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {personalInfo.tagline}
              </span>
            </motion.h1>

            {/* Sub-headline Focus */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`text-base md:text-lg font-medium mb-6 flex items-center gap-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              {personalInfo.heroSubheading}
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || Globe;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2.5 rounded-xl border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-800/80 border-gray-700 text-gray-300 hover:text-white hover:border-[#6366f1] hover:bg-[#6366f1]/20'
                        : 'bg-white/80 border-gray-200 text-gray-700 hover:text-[#4f46e5] hover:border-[#6366f1] hover:bg-white shadow-sm'
                    }`}
                    aria-label={link.name}
                    title={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
              <span className={`text-xs px-2.5 py-1 rounded-md font-mono ${theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-600'}`}>
                {organizationInfo.name}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3.5 flex-wrap"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3 bg-[#6366f1] text-white font-semibold rounded-full hover:bg-[#4f46e5] shadow-lg shadow-indigo-500/25 transition-all duration-300 text-center flex items-center justify-center gap-2 text-sm"
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
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3 bg-[#0d9488] text-white font-semibold rounded-full hover:bg-[#0f766e] shadow-lg shadow-teal-500/25 transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                GET RESUME
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </motion.button>

              <motion.a
                href="https://calendly.com/hariharanbabu-ms/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3 bg-[#f59e0b] text-white font-semibold rounded-full hover:bg-[#d97706] shadow-lg shadow-amber-500/25 transition-all duration-300 text-center flex items-center justify-center gap-2 text-sm"
              >
                BOOK A CALL
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </motion.a>

              <motion.a
                href={organizationInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`px-7 py-3 font-semibold rounded-full border transition-all duration-300 text-center flex items-center justify-center gap-2 text-sm ${
                  theme === 'dark'
                    ? 'border-indigo-400/50 bg-indigo-950/40 text-indigo-300 hover:bg-indigo-900/60 hover:text-white'
                    : 'border-indigo-300 bg-white/90 text-indigo-700 hover:bg-indigo-50 shadow-sm'
                }`}
              >
                <span>VISIT {organizationInfo.name}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Interactive Terminal Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl border transition-all duration-300"
              style={{
                backgroundColor: '#161b22',
                borderColor: theme === 'dark' ? '#30363d' : '#cbd5e1',
              }}
            >
              {/* Code Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1117] border-b border-gray-700/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="text-xs font-mono text-gray-400 ml-2">researcher.config.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-indigo-400 bg-indigo-950/60 px-2.5 py-0.5 rounded-full border border-indigo-800/40">
                  <span>⚡ UTD & DOE / LBNL</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-xs sm:text-sm overflow-x-auto">
                <pre className="leading-relaxed">
                  <code>
                    <span className="text-[#ff7b72]">const</span>
                    <span className="text-[#79c0ff]"> researcher</span>
                    <span className="text-[#c9d1d9]"> = {'{'}</span>
                    {'\n  '}
                    <span className="text-[#79c0ff]">name</span>
                    <span className="text-[#c9d1d9]">: </span>
                    <span className="text-[#a5d6ff]">&apos;{personalInfo.name}&apos;</span>
                    <span className="text-[#c9d1d9]">,</span>
                    {'\n  '}
                    <span className="text-[#79c0ff]">organization</span>
                    <span className="text-[#c9d1d9]">: </span>
                    <span className="text-[#a5d6ff]">&apos;{organizationInfo.name} (Founder)&apos;</span>
                    <span className="text-[#c9d1d9]">,</span>
                    {'\n  '}
                    <span className="text-[#79c0ff]">education</span>
                    <span className="text-[#c9d1d9]">: {'{'}</span>
                    {'\n    '}
                    <span className="text-[#79c0ff]">phd</span>
                    <span className="text-[#c9d1d9]">: </span>
                    <span className="text-[#a5d6ff]">&apos;Ph.D. in ECE @ UT Dallas (2026-2029)&apos;</span>
                    <span className="text-[#c9d1d9]">,</span>
                    {'\n    '}
                    <span className="text-[#79c0ff]">masters</span>
                    <span className="text-[#c9d1d9]">: </span>
                    <span className="text-[#a5d6ff]">&apos;M.S. in Data Science @ UNT (4.0 GPA)&apos;</span>
                    <span className="text-[#c9d1d9]">,</span>
                    {'\n    '}
                    <span className="text-[#79c0ff]">bachelors</span>
                    <span className="text-[#c9d1d9]">: </span>
                    <span className="text-[#a5d6ff]">&apos;B.E. in CSE @ Anna University&apos;</span>
                    {'\n  '}
                    <span className="text-[#c9d1d9]">{'}'},</span>
                    {'\n  '}
                    <span className="text-[#79c0ff]">projects</span>
                    <span className="text-[#c9d1d9]">: [</span>
                    {'\n    '}
                    <span className="text-[#a5d6ff]">&apos;US Department of Energy (DOE)&apos;</span>
                    <span className="text-[#c9d1d9]">,</span>
                    {'\n    '}
                    <span className="text-[#a5d6ff]">&apos;Lawrence Berkeley National Lab (LBNL)&apos;</span>
                    {'\n  '}
                    <span className="text-[#c9d1d9]">],</span>
                    {'\n  '}
                    <span className="text-[#79c0ff]">coreFocus</span>
                    <span className="text-[#c9d1d9]">: [</span>
                    {'\n    '}
                    <span className="text-[#a5d6ff]">&apos;High Performance Computing (HPC)&apos;</span>
                    <span className="text-[#c9d1d9]">,</span>
                    {'\n    '}
                    <span className="text-[#a5d6ff]">&apos;In-Memory Computing&apos;</span>
                    <span className="text-[#c9d1d9]">,</span>
                    {'\n    '}
                    <span className="text-[#a5d6ff]">&apos;Agentic AI & MCP Systems&apos;</span>
                    <span className="text-[#c9d1d9]">,</span>
                    {'\n    '}
                    <span className="text-[#a5d6ff]">&apos;Distributed Data Ecosystems&apos;</span>
                    {'\n  '}
                    <span className="text-[#c9d1d9]">],</span>
                    {'\n  '}
                    <span className="text-[#79c0ff]">available</span>
                    <span className="text-[#c9d1d9]">: </span>
                    <span className="text-[#ff7b72]">true</span>
                    {'\n'}
                    <span className="text-[#c9d1d9]">{'}'};</span>
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
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 p-2 transition-colors cursor-pointer ${
          theme === 'dark' ? 'text-gray-500 hover:text-[#6366f1]' : 'text-gray-400 hover:text-[#6366f1]'
        }`}
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
