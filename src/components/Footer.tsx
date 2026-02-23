import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Star, GitFork } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
};

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 px-4 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 border-t border-gray-800' : 'bg-[#f5f5f7] border-t border-gray-200'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-8"
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
                className={`p-3 rounded-full shadow-md hover:text-[#6366f1] transition-all ${theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'}`}
                aria-label={link.name}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-6"
        >
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            © Developer Portfolio by{' '}
            <a 
              href={socialLinks.find(l => l.name === 'LinkedIn')?.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6366f1] hover:underline"
            >
              {personalInfo.name}
            </a>
          </p>
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
            href="https://github.com/hariharan/portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:text-[#6366f1] transition-colors text-sm ${theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'}`}
          >
            <Star className="w-4 h-4" />
            Star
          </a>
          <a 
            href="https://github.com/hariharan/portfolio/fork" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:text-[#6366f1] transition-colors text-sm ${theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'}`}
          >
            <GitFork className="w-4 h-4" />
            Fork
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
