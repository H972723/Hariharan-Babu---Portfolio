import { motion } from 'framer-motion';
import { awards } from '../data/portfolio';
import { Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const AwardsSection = () => {
  const { theme } = useTheme();

  return (
    <section id="awards" className={`py-24 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-[#f5f5f7]'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Award className="w-6 h-6 text-[#6366f1]" />
          <span className="text-[#6366f1] text-sm font-semibold tracking-wider uppercase">
            Honors & Awards
          </span>
        </div>

        <h2 className={`text-4xl md:text-5xl font-bold mb-16 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Recognitions</h2>

        <div className="space-y-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`rounded-2xl p-8 border hover:border-[#6366f1] transition-all shadow-sm ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="text-5xl md:text-6xl">{award.emoji}</div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className={`text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{award.title}</h3>
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{award.date}</span>
                  </div>
                  <p className="text-[#6366f1] font-medium mb-3">{award.organization}</p>
                  <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{award.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
