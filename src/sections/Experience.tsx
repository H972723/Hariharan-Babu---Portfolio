import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

// Company logo colors
const companyColors: Record<string, string> = {
  'Newgen KnowledgeWorks': '#dc2626',
  'IHUB Divya Sampark at IIT-Roorkee': '#fbbf24',
  'National Institute of Technology (NITK)': '#8b5cf6',
  'IEEE': '#3b82f6',
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const codeLineVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
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
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={`font-semibold tracking-wider text-sm px-4 py-2 rounded flex items-center gap-2 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
            >
              <Briefcase className="w-4 h-4" />
              EXPERIENCE
            </motion.span>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`flex-1 h-px origin-left ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}
            />
          </div>
        </motion.div>

        {/* Experience Cards - Animated Vertical Layout */}
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              {/* Code Block with enhanced styling */}
              <motion.div 
                className="rounded-xl overflow-hidden shadow-2xl transition-shadow duration-300 group-hover:shadow-3xl group-hover:shadow-indigo-500/20"
                style={{ backgroundColor: '#2d2d2d' }}
                whileHover={{ boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)' }}
              >
                {/* Code Header with Company Logo - Animated */}
                <motion.div 
                  variants={headerVariants}
                  className="flex items-center gap-3 px-4 py-3 border-b border-gray-600 group-hover:border-indigo-500/50 transition-colors duration-300"
                >
                  <motion.div 
                    className="flex gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-red-500"
                      whileHover={{ scale: 1.3 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-yellow-500"
                      whileHover={{ scale: 1.3 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-green-500"
                      whileHover={{ scale: 1.3 }}
                    />
                  </motion.div>
                  {/* Company Logo/Icon with animation */}
                  <motion.div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: companyColors[exp.company] || '#6366f1' }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {exp.company.charAt(0)}
                  </motion.div>
                  <span className="text-white font-semibold ml-2">{exp.company}</span>
                </motion.div>
                
                {/* Code Content with typing animation effect */}
                <div className="p-6 font-mono text-sm">
                  <div className="leading-relaxed">
                    <motion.div 
                      custom={0}
                      variants={codeLineVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="text-[#d4d4d4]"
                    >
                      <span className="text-[#c586c0]">const</span>
                      <span className="text-[#9cdcfe]"> job</span>
                      <span className="text-[#d4d4d4]"> = {'{'}</span>
                    </motion.div>
                    <div className="pl-4">
                      <motion.div 
                        custom={1}
                        variants={codeLineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-[#d4d4d4]"
                      >
                        <span className="text-[#9cdcfe]">myRole</span>
                        <span className="text-[#d4d4d4]">: </span>
                        <span className="text-[#ce9178]">&apos;{exp.role}&apos;</span>
                        <span className="text-[#d4d4d4]">,</span>
                      </motion.div>
                      <motion.div 
                        custom={2}
                        variants={codeLineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-[#d4d4d4]"
                      >
                        <span className="text-[#9cdcfe]">duration</span>
                        <span className="text-[#d4d4d4]">: </span>
                        <span className="text-[#ce9178]">&apos;{exp.duration}&apos;</span>
                        <span className="text-[#d4d4d4]">,</span>
                      </motion.div>
                      <motion.div 
                        custom={3}
                        variants={codeLineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-[#d4d4d4]"
                      >
                        <span className="text-[#9cdcfe]">tools</span>
                        <span className="text-[#d4d4d4]">: [</span>
                        {exp.technologies.map((tech, i) => (
                          <motion.span 
                            key={tech}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.05 }}
                            whileHover={{ color: '#60a5fa', scale: 1.05 }}
                            className="inline-block cursor-default"
                          >
                            <span className="text-[#ce9178]">&apos;{tech}&apos;</span>
                            {i < exp.technologies.length - 1 && <span className="text-[#d4d4d4]">, </span>}
                          </motion.span>
                        ))}
                        <span className="text-[#d4d4d4]">],</span>
                      </motion.div>
                      <motion.div 
                        custom={4}
                        variants={codeLineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-[#d4d4d4] mt-2"
                      >
                        <span className="text-[#9cdcfe]">description</span>
                        <span className="text-[#d4d4d4]">: </span>
                        <motion.span 
                          className="text-[#ce9178]"
                          whileHover={{ color: '#a7f3d0' }}
                          transition={{ duration: 0.2 }}
                        >
                          &apos;{exp.description.join(' ')}&apos;
                        </motion.span>
                      </motion.div>
                    </div>
                    <motion.div 
                      custom={5}
                      variants={codeLineVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="text-[#d4d4d4]"
                    >
                      {'}'}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
