import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    rotateX: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const codeLineVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
    },
  }),
};

const iconHoverVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.2,
    rotate: 5,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { scale: 0.9 }
};

const techTagVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.2 }
  }
};

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className={`py-20 px-4 sm:px-8 lg:px-12 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-[#f5f5f7]'}`}>
      <div className="max-w-5xl mx-auto">
        {/* Section Label with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1,
                type: "spring",
                stiffness: 200
              }}
              className={`font-semibold tracking-wider text-sm px-4 py-2 rounded flex items-center gap-2 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
            >
              <Folder className="w-4 h-4" />
              PROJECTS
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

        {/* Project Cards - Animated Vertical Layout */}
        <motion.div 
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.01,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              {/* Project Header with floating icons */}
              <motion.div 
                className="flex items-center justify-between mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <motion.h3 
                  className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                  whileHover={{ x: 5, color: '#6366f1' }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={iconHoverVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      className="p-2 text-gray-600 hover:text-[#6366f1] transition-colors relative"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.div>
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={iconHoverVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      className="p-2 text-gray-600 hover:text-[#6366f1] transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.div>
                    </motion.a>
                  )}
                </div>
              </motion.div>

              {/* Code Block with 3D hover effect */}
              <motion.div 
                className="rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:shadow-3xl"
                style={{ 
                  backgroundColor: '#2d2d2d',
                  transformStyle: 'preserve-3d',
                }}
                whileHover={{ 
                  boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)',
                }}
              >
                {/* Code Header with animated dots */}
                <motion.div 
                  className="flex items-center gap-2 px-4 py-3 border-b border-gray-600 group-hover:border-indigo-500/50 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex gap-2">
                    {['bg-red-500', 'bg-yellow-500', 'bg-green-500'].map((color, i) => (
                      <motion.div
                        key={color}
                        className={`w-3 h-3 rounded-full ${color}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.4 }}
                      />
                    ))}
                  </div>
                  <motion.span 
                    className="ml-4 text-gray-400 text-sm font-mono"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.title.toLowerCase().replace(/\s+/g, '_')}.js
                  </motion.span>
                </motion.div>
                
                {/* Code Content with staggered typing effect */}
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
                      <span className="text-[#9cdcfe]"> project</span>
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
                        <span className="text-[#9cdcfe]">name</span>
                        <span className="text-[#d4d4d4]">: </span>
                        <motion.span 
                          className="text-[#ce9178]"
                          whileHover={{ color: '#60a5fa' }}
                        >
                          &apos;{project.title}&apos;
                        </motion.span>
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
                        <span className="text-[#9cdcfe]">tools</span>
                        <span className="text-[#d4d4d4]">: [</span>
                        {project.technologies.map((tech, idx) => (
                          <motion.span 
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.05 }}
                            variants={techTagVariants}
                            whileHover="hover"
                            className="inline-block cursor-default"
                          >
                            <motion.span 
                              className="text-[#ce9178] hover:text-[#60a5fa] transition-colors"
                              whileHover={{ scale: 1.1 }}
                            >
                              &apos;{tech}&apos;
                            </motion.span>
                            {idx < project.technologies.length - 1 && <span className="text-[#d4d4d4]">, </span>}
                          </motion.span>
                        ))}
                        <span className="text-[#d4d4d4]">],</span>
                      </motion.div>
                      <motion.div 
                        custom={3}
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
                          &apos;{project.description}&apos;
                        </motion.span>
                        <span className="text-[#d4d4d4]">,</span>
                      </motion.div>
                    </div>
                    <motion.div 
                      custom={4}
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
        
        {/* Extra bottom spacing before Skills section */}
        <div className="h-20 md:h-32"></div>
      </div>
    </section>
  );
}
