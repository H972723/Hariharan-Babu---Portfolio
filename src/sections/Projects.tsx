import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className={`py-20 px-4 sm:px-8 lg:px-12 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-[#f5f5f7]'}`}>
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
            <span className={`font-semibold tracking-wider text-sm px-4 py-2 rounded ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}>PROJECTS</span>
            <div className={`flex-1 h-px ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
          </div>
        </motion.div>

        {/* Project Cards - Standard Vertical Layout */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 text-gray-600 hover:text-[#6366f1] transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 text-gray-600 hover:text-[#6366f1] transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Code Block */}
              <div className="rounded-xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#2d2d2d' }}>
                {/* Code Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-600">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="ml-4 text-gray-400 text-sm font-mono">{project.title.toLowerCase().replace(/\s+/g, '_')}.js</span>
                </div>
                
                {/* Code Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="leading-relaxed">
                    <div className="text-[#d4d4d4]">
                      <span className="text-[#c586c0]">const</span>
                      <span className="text-[#9cdcfe]"> project</span>
                      <span className="text-[#d4d4d4]"> = {'{'}</span>
                    </div>
                    <div className="pl-4">
                      <div className="text-[#d4d4d4]">
                        <span className="text-[#9cdcfe]">name</span>
                        <span className="text-[#d4d4d4]">: </span>
                        <span className="text-[#ce9178]">&apos;{project.title}&apos;</span>
                        <span className="text-[#d4d4d4]">,</span>
                      </div>
                      <div className="text-[#d4d4d4]">
                        <span className="text-[#9cdcfe]">tools</span>
                        <span className="text-[#d4d4d4]">: [</span>
                        {project.technologies.map((tech, idx) => (
                          <span key={tech}>
                            <span className="text-[#ce9178]">&apos;{tech}&apos;</span>
                            {idx < project.technologies.length - 1 && <span className="text-[#d4d4d4]">, </span>}
                          </span>
                        ))}
                        <span className="text-[#d4d4d4]">],</span>
                      </div>
                      <div className="text-[#d4d4d4] mt-2">
                        <span className="text-[#9cdcfe]">description</span>
                        <span className="text-[#d4d4d4]">: </span>
                        <span className="text-[#ce9178]">&apos;{project.description}&apos;</span>
                        <span className="text-[#d4d4d4]">,</span>
                      </div>
                    </div>
                    <div className="text-[#d4d4d4]">{'}'};</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Extra bottom spacing before Skills section */}
        <div className="h-20 md:h-32"></div>
      </div>
    </section>
  );
}
