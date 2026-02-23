import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

// Company logo colors
const companyColors: Record<string, string> = {
  'Newgen KnowledgeWorks': '#dc2626',
  'IHUB Divya Sampark at IIT-Roorkee': '#fbbf24',
  'National Institute of Technology (NITK)': '#8b5cf6',
  'IEEE': '#3b82f6',
};

export default function Experience() {
  const { theme } = useTheme();

  return (
    <section id="experience" className={`py-20 px-4 sm:px-8 lg:px-12 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-[#f5f5f7]'}`}>
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4">
            <span className={`font-semibold tracking-wider text-sm px-4 py-2 rounded ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}>EXPERIENCE</span>
            <div className={`flex-1 h-px ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
          </div>
        </motion.div>

        {/* Experience Cards - Standard Vertical Layout */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Code Block */}
              <div className="rounded-xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#2d2d2d' }}>
                {/* Code Header with Company Logo */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-600">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  {/* Company Logo/Icon */}
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: companyColors[exp.company] || '#6366f1' }}
                  >
                    {exp.company.charAt(0)}
                  </div>
                  <span className="text-white font-semibold ml-2">{exp.company}</span>
                </div>
                
                {/* Code Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="leading-relaxed">
                    <div className="text-[#d4d4d4]">
                      <span className="text-[#c586c0]">const</span>
                      <span className="text-[#9cdcfe]"> job</span>
                      <span className="text-[#d4d4d4]"> = {'{'}</span>
                    </div>
                    <div className="pl-4">
                      <div className="text-[#d4d4d4]">
                        <span className="text-[#9cdcfe]">myRole</span>
                        <span className="text-[#d4d4d4]">: </span>
                        <span className="text-[#ce9178]">&apos;{exp.role}&apos;</span>
                        <span className="text-[#d4d4d4]">,</span>
                      </div>
                      <div className="text-[#d4d4d4]">
                        <span className="text-[#9cdcfe]">duration</span>
                        <span className="text-[#d4d4d4]">: </span>
                        <span className="text-[#ce9178]">&apos;{exp.duration}&apos;</span>
                        <span className="text-[#d4d4d4]">,</span>
                      </div>
                      <div className="text-[#d4d4d4]">
                        <span className="text-[#9cdcfe]">tools</span>
                        <span className="text-[#d4d4d4]">: [</span>
                        {exp.technologies.map((tech, i) => (
                          <span key={tech}>
                            <span className="text-[#ce9178]">&apos;{tech}&apos;</span>
                            {i < exp.technologies.length - 1 && <span className="text-[#d4d4d4]">, </span>}
                          </span>
                        ))}
                        <span className="text-[#d4d4d4]">],</span>
                      </div>
                      <div className="text-[#d4d4d4] mt-2">
                        <span className="text-[#9cdcfe]">description</span>
                        <span className="text-[#d4d4d4]">: </span>
                        <span className="text-[#ce9178]">&apos;{exp.description.join(' ')}&apos;</span>
                      </div>
                    </div>
                    <div className="text-[#d4d4d4]">{'}'};</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
