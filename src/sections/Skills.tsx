import { motion } from 'framer-motion';
import { 
  Database, Cloud, Code, Container, GitBranch, 
  BarChart3, Table, Settings, Server, Cpu, 
  Layers, Workflow, Box, Globe, Terminal
} from 'lucide-react';

// Skills organized by category
const skillCategories = [
  {
    name: 'Programming',
    skills: ['Python (Pandas, PySpark)', 'SQL', 'Java', 'C/C++', 'JavaScript']
  },
  {
    name: 'Cloud',
    skills: ['AWS', 'GCP', 'Azure']
  },
  {
    name: 'Big Data',
    skills: ['Apache Spark', 'Hadoop', 'Kafka', 'MapReduce', 'Pig', 'Sqoop']
  },
  {
    name: 'Data Warehouse',
    skills: ['Snowflake', 'Amazon Redshift', 'Google BigQuery', 'Amazon RDS']
  },
  {
    name: 'ETL/Pipelines',
    skills: ['ETL/ELT Pipelines', 'dbt', 'Apache Airflow', 'Azure Data Factory']
  },
  {
    name: 'ML/AI',
    skills: ['Scikit-Learn', 'TensorFlow', 'PyTorch', 'Keras', 'Neural Networks', 'Transformers']
  },
  {
    name: 'DevOps',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'GitHub', 'Jenkins']
  },
  {
    name: 'Visualization',
    skills: ['Tableau', 'Looker', 'Matplotlib', 'Seaborn', 'Excel', 'Power BI']
  }
];

// Skill icons mapping
const skillIcons: Record<string, { icon: React.ElementType; color: string }> = {
  'Python (Pandas, PySpark)': { icon: Terminal, color: '#3776ab' },
  'SQL': { icon: Database, color: '#f29111' },
  'Java': { icon: Code, color: '#007396' },
  'C/C++': { icon: Code, color: '#00599c' },
  'JavaScript': { icon: Code, color: '#f7df1e' },
  'AWS': { icon: Cloud, color: '#ff9900' },
  'GCP': { icon: Cloud, color: '#4285f4' },
  'Azure': { icon: Cloud, color: '#0089d6' },
  'Apache Spark': { icon: Server, color: '#e25a1c' },
  'Hadoop': { icon: Server, color: '#ff7f00' },
  'Kafka': { icon: Workflow, color: '#231f20' },
  'MapReduce': { icon: Server, color: '#ff7f00' },
  'Pig': { icon: Code, color: '#ff7f00' },
  'Sqoop': { icon: Code, color: '#ff7f00' },
  'Snowflake': { icon: Box, color: '#29b5e8' },
  'Amazon Redshift': { icon: Database, color: '#ff9900' },
  'Google BigQuery': { icon: Database, color: '#4285f4' },
  'Amazon RDS': { icon: Database, color: '#ff9900' },
  'ETL/ELT Pipelines': { icon: Workflow, color: '#6366f1' },
  'dbt': { icon: Box, color: '#ff694b' },
  'Apache Airflow': { icon: Workflow, color: '#00c7b7' },
  'Azure Data Factory': { icon: Workflow, color: '#0089d6' },
  'Scikit-Learn': { icon: Cpu, color: '#f7931e' },
  'TensorFlow': { icon: Layers, color: '#ff6f00' },
  'PyTorch': { icon: Layers, color: '#ee4c2c' },
  'Keras': { icon: Layers, color: '#d00000' },
  'Neural Networks': { icon: Cpu, color: '#6366f1' },
  'Transformers': { icon: Cpu, color: '#6366f1' },
  'Docker': { icon: Container, color: '#2496ed' },
  'Kubernetes': { icon: Globe, color: '#326ce5' },
  'Terraform': { icon: Settings, color: '#7b42bc' },
  'CI/CD': { icon: GitBranch, color: '#6366f1' },
  'GitHub': { icon: GitBranch, color: '#181717' },
  'Jenkins': { icon: Settings, color: '#d24939' },
  'Tableau': { icon: BarChart3, color: '#e97627' },
  'Looker': { icon: BarChart3, color: '#4285f4' },
  'Matplotlib': { icon: BarChart3, color: '#3776ab' },
  'Seaborn': { icon: BarChart3, color: '#6366f1' },
  'Excel': { icon: Table, color: '#217346' },
  'Power BI': { icon: BarChart3, color: '#f2c811' },
};

import { useTheme } from '../context/ThemeContext';

// Skill Icon Component
const SkillIcon = ({ skill }: { skill: string }) => {
  const skillData = skillIcons[skill] || { color: '#6366f1' };
  const IconComponent = skillData.icon || Code;
  const { theme } = useTheme();
  
  return (
    <div className="flex flex-col items-center gap-2 min-w-[100px]">
      <div 
        className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg"
        style={{ backgroundColor: skillData.color }}
      >
        <IconComponent className="w-8 h-8" />
      </div>
      <span className={`text-xs text-center font-medium leading-tight max-w-[90px] ${theme === 'dark' ? 'text-gray-300' : 'text-white'}`}>
        {skill}
      </span>
    </div>
  );
};

export default function Skills() {
  const { theme } = useTheme();
  // Flatten all skills for the marquee - duplicate for seamless loop
  const allSkills = skillCategories.flatMap(cat => cat.skills);
  const duplicatedSkills = [...allSkills, ...allSkills];
  
  return (
    <section id="skills" className={`py-20 overflow-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#f5f5f7]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex justify-center"
        >
          <div className="flex items-center gap-4">
            <div className={`w-24 h-px ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
            <span className={`font-semibold tracking-wider text-sm px-6 py-2 rounded ${theme === 'dark' ? 'text-white bg-gray-800' : 'text-white bg-gray-800'}`}>Skills</span>
            <div className={`w-24 h-px ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
          </div>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        {/* First Marquee Row - Left to Right */}
        <div className="flex mb-6">
          <div 
            className="flex gap-6"
            style={{
              animation: 'marquee 30s linear infinite',
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 p-4 rounded-xl flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#2d2d2d', minWidth: '110px' }}
              >
                <SkillIcon skill={skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Second Marquee Row - Right to Left */}
        <div className="flex">
          <div 
            className="flex gap-6"
            style={{
              animation: 'marquee-reverse 35s linear infinite',
            }}
          >
            {[...duplicatedSkills].reverse().map((skill, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 p-4 rounded-xl flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#2d2d2d', minWidth: '110px' }}
              >
                <SkillIcon skill={skill} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f5f5f7] to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f5f5f7] to-transparent pointer-events-none z-10"></div>
      </motion.div>

      {/* CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
