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
              Hey there, I'm <span className="text-[#6366f1] font-semibold">HARIHARAN BABU</span>! I am a data professional operating across data engineering, data analytics, data science, and applied AI, focused on building scalable data ecosystems that convert raw information into reliable intelligence.
            </p>
            
            <p className={`leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              My experience includes designing robust ETL/ELT pipelines, implementing modern data warehouse architectures, and optimizing large-scale data processing using Python, SQL, and distributed frameworks such as Spark. I work extensively with cloud platforms to develop secure, cost-efficient, and production-grade data solutions that support reporting, advanced analytics, and machine learning use cases.
            </p>
            
            <p className={`leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              In my role as a data engineer and analyst, I design data models, develop batch and real-time pipelines, and ensure data quality, governance, and performance across the data lifecycle. I collaborate closely with business and product teams to translate requirements into scalable datasets, semantic layers, and decision-ready dashboards.
            </p>

            <p className={`leading-relaxed mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Alongside engineering, I focus on AI and LLM-driven solutions within data platforms. I build machine learning pipelines, develop retrieval-augmented generation (RAG) workflows, work with embeddings and transformers, and integrate AI capabilities directly into data products. By combining data engineering foundations with data science and modern AI practices, I help create intelligent systems that power automation, advanced insights, and next-generation data applications.
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
