import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Star, GitFork, Globe, ExternalLink } from 'lucide-react';
import { personalInfo, socialLinks, organizationInfo } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
  Globe,
};

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`py-12 px-4 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-950 border-t border-gray-800' : 'bg-[#f0f2f8] border-t border-gray-200'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-6 flex-wrap"
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon] || Globe;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full shadow-md hover:text-[#6366f1] transition-all ${theme === 'dark' ? 'bg-gray-900 border border-gray-800 text-gray-400' : 'bg-white text-gray-600'}`}
                aria-label={link.name}
                title={link.name}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Organization & Founder Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-6 space-y-1.5"
        >
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} Portfolio by{' '}
            <a 
              href={socialLinks.find(l => l.name === 'LinkedIn')?.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6366f1] font-semibold hover:underline"
            >
              {personalInfo.name}
            </a>
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400 flex-wrap">
            <span>Founder of</span>
            <a
              href={organizationInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 font-bold hover:underline inline-flex items-center gap-1"
            >
              {organizationInfo.name}
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <span>Ph.D. Researcher @ The University of Texas at Dallas</span>
          </div>
        </motion.div>

        {/* Star/Fork */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4"
        >
          <a 
            href="https://github.com/H972723/Hariharan-Babu---Portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl shadow-sm hover:text-[#6366f1] transition-colors text-xs font-medium ${theme === 'dark' ? 'bg-gray-900 border border-gray-800 text-gray-400' : 'bg-white border border-gray-200 text-gray-600'}`}
          >
            <Star className="w-3.5 h-3.5" />
            Star
          </a>
          <a 
            href="https://github.com/H972723/Hariharan-Babu---Portfolio/fork" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl shadow-sm hover:text-[#6366f1] transition-colors text-xs font-medium ${theme === 'dark' ? 'bg-gray-900 border border-gray-800 text-gray-400' : 'bg-white border border-gray-200 text-gray-600'}`}
          >
            <GitFork className="w-3.5 h-3.5" />
            Fork
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
