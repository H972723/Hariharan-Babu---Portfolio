import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className={`py-20 px-4 sm:px-8 lg:px-12 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-[#f5f5f7]'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#0d9488] font-semibold tracking-wider text-sm">WHO AM I?</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Hey there, I'm <span className="text-[#6366f1] font-semibold">{personalInfo.name.toUpperCase()}</span>! I'm that developer who gets unreasonably excited about clean code and stays up way too late debugging. When not chasing the perfect solution, I'm probably exploring some shiny new tech that caught my attention. My learning style? <span className="text-[#0d9488] font-medium">Dive in headfirst and figure out how to swim while falling!</span> Apparently I'm also learning Swimming.
            </p>
            
            <p className={`leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              My code is so meticulously organized they make my sock drawer look chaotic—I've been known to refactor perfectly working functions at 2 AM just because the indentation felt wrong. My superpower? Making complex systems look so simple your grandmother could use them.
            </p>
            
            <p className={`leading-relaxed mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              I believe good documentation is like flossing - everyone knows they should do it, but I'm one of the few who actually does (both!). Currently seeking opportunities where I can build meaningful tech, preferably at places that don't mind the occasional dad joke in code comments. Let's create something awesome together!
            </p>

            <div className="flex items-center gap-4">
              <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{personalInfo.name}</span>
            </div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Vertical Label */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
                <div 
                  className={`px-4 py-8 rounded-lg text-sm font-semibold tracking-wider ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'}`}
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                  ABOUT ME
                </div>
              </div>
              
              {/* Image Container */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/Hari_image.jpg" 
                  alt={personalInfo.name}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
