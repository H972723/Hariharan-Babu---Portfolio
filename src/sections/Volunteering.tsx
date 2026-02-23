import { motion } from 'framer-motion';
import { volunteering } from '../data/portfolio';
import { Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const VolunteeringSection = () => {
  const { theme } = useTheme();

  return (
    <section id="volunteering" className={`py-24 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#f5f5f7]'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Users className="w-6 h-6 text-[#6366f1]" />
          <span className="text-[#6366f1] text-sm font-semibold tracking-wider uppercase">
            Volunteering
          </span>
        </div>

        <h2 className={`text-4xl md:text-5xl font-bold mb-16 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Giving Back</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteering.map((vol, index) => (
            <motion.div
              key={vol.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 border hover:border-[#6366f1] transition-colors shadow-sm ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{vol.role}</h3>
                  <p className="text-[#6366f1] font-medium">{vol.organization}</p>
                </div>
                <span className="px-3 py-1 bg-[#6366f1]/10 text-[#6366f1] text-sm rounded-full">
                  {vol.category}
                </span>
              </div>
              {vol.description && (
                <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{vol.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteeringSection;
