import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Certification {
  id: string;
  title: string;
  organization: string;
  logo: string;
  url?: string;
}

const certifications: Certification[] = [
  {
    id: '1',
    title: 'AWS Certified Solutions Architect – Associate',
    organization: 'Amazon Web Services',
    logo: '/certifications/aws-solutions-architect.png',
    url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
  },
  {
    id: '2',
    title: 'Databricks Certified Data Engineering Professional',
    organization: 'Databricks',
    logo: '/certifications/databricks.png',
    url: 'https://www.databricks.com/learn/certification/data-engineer-professional',
  },
  {
    id: '3',
    title: 'Project Management Professional (PMP)®',
    organization: 'Project Management Institute',
    logo: '/certifications/pmp.png',
    url: 'https://www.pmi.org/certifications/project-management-pmp',
  },
  {
    id: '4',
    title: 'NVIDIA-Certified Professional - Generative AI LLMs',
    organization: 'NVIDIA',
    logo: '/certifications/nvidia.png',
    url: 'https://www.nvidia.com/en-us/training/',
  },
  {
    id: '5',
    title: 'Cisco Generative AI Black Belt 2024',
    organization: 'Cisco',
    logo: '/certifications/cisco.png',
    url: 'https://www.cisco.com/',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Certifications() {
  const { theme } = useTheme();

  return (
    <section
      id="certifications"
      className={`py-24 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-[#f5f5f7]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ rotate: -20, scale: 0.8 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <Award className="w-6 h-6 text-[#6366f1]" />
            </motion.div>
            <span className="text-[#6366f1] text-sm font-semibold tracking-wider uppercase">
              Certifications
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Professional Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`mt-4 text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Industry-recognized credentials validating expertise in cloud, data engineering, project management, and AI.
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <motion.div
                className={`relative rounded-2xl p-6 border transition-all duration-300 h-full flex flex-col ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 hover:border-[#6366f1]'
                    : 'bg-white border-gray-200 hover:border-[#6366f1]'
                }`}
                whileHover={{
                  boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)',
                }}
              >
                {/* Logo */}
                <motion.div
                  className="mb-4 flex items-center justify-center h-32"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.img
                    src={cert.logo}
                    alt={cert.title}
                    className="max-h-28 max-w-full object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className={`text-lg font-bold mb-2 group-hover:text-[#6366f1] transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {cert.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {cert.organization}
                  </p>
                </div>

                {/* Link */}
                {cert.url && (
                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                      theme === 'dark'
                        ? 'text-[#6366f1] hover:text-[#818cf8]'
                        : 'text-[#6366f1] hover:text-[#4f46e5]'
                    }`}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Verify Credential
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
