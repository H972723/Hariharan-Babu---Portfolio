import { motion } from 'framer-motion';
import { 
  Database, Cloud, Code, Container, GitBranch, 
  BarChart3, Table, Settings, Server, Cpu, 
  Layers, Workflow, Box, Globe, Terminal,
  Zap, Bot, Brain, Sparkles, Activity
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// Skills organized by category
const skillCategories = [
  {
    name: 'HPC & Systems',
    skills: ['HPC (High Performance Computing)', 'In-Memory Computing', 'CUDA / GPU Acceleration', 'Distributed Memory Systems', 'Parallel Processing']
  },
  {
    name: 'Agentic AI & LLMs',
    skills: ['Agentic AI Systems', 'Model Context Protocol (MCP)', 'Multi-Agent Orchestration', 'Large Language Models (LLMs)', 'LangChain & LangGraph', 'RAG (Retrieval-Augmented Gen)']
  },
  {
    name: 'Machine Learning & AI',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Transformers', 'Neural Networks', 'Fine-Tuning & Evaluation']
  },
  {
    name: 'Programming',
    skills: ['Python (Pandas, PySpark)', 'SQL', 'C/C++', 'Java', 'JavaScript']
  },
  {
    name: 'Cloud & Infrastructure',
    skills: ['AWS', 'GCP', 'Azure']
  },
  {
    name: 'Big Data & Streaming',
    skills: ['Apache Spark', 'Hadoop', 'Kafka', 'MapReduce', 'Pig', 'Sqoop']
  },
  {
    name: 'Data Warehouse',
    skills: ['Snowflake', 'Amazon Redshift', 'Google BigQuery', 'Amazon RDS']
  },
  {
    name: 'ETL & Orchestration',
    skills: ['ETL/ELT Pipelines', 'Apache Airflow', 'dbt', 'Azure Data Factory']
  },
  {
    name: 'DevOps & Tooling',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'GitHub', 'Jenkins']
  },
  {
    name: 'BI & Visualization',
    skills: ['Tableau', 'Looker', 'Matplotlib', 'Seaborn', 'Excel', 'Power BI']
  }
];

// Skill icons mapping
const skillIcons: Record<string, { icon: React.ElementType; color: string }> = {
  // HPC & Systems
  'HPC (High Performance Computing)': { icon: Cpu, color: '#ea580c' },
  'In-Memory Computing': { icon: Cpu, color: '#f97316' },
  'CUDA / GPU Acceleration': { icon: Zap, color: '#76b900' },
  'Distributed Memory Systems': { icon: Server, color: '#0284c7' },
  'Parallel Processing': { icon: Layers, color: '#8b5cf6' },

  // Agentic AI & LLMs
  'Agentic AI Systems': { icon: Bot, color: '#6366f1' },
  'Model Context Protocol (MCP)': { icon: Workflow, color: '#d97706' },
  'Multi-Agent Orchestration': { icon: Sparkles, color: '#a855f7' },
  'Large Language Models (LLMs)': { icon: Brain, color: '#ec4899' },
  'LangChain & LangGraph': { icon: Workflow, color: '#10b981' },
  'RAG (Retrieval-Augmented Gen)': { icon: Database, color: '#06b6d4' },

  // Machine Learning & AI
  'PyTorch': { icon: Activity, color: '#ee4c2c' },
  'TensorFlow': { icon: Layers, color: '#ff6f00' },
  'Scikit-Learn': { icon: Cpu, color: '#f7931e' },
  'Transformers': { icon: Brain, color: '#6366f1' },
  'Neural Networks': { icon: Cpu, color: '#8b5cf6' },
  'Fine-Tuning & Evaluation': { icon: Activity, color: '#14b8a6' },

  // Programming
  'Python (Pandas, PySpark)': { icon: Terminal, color: '#3776ab' },
  'SQL': { icon: Database, color: '#f29111' },
  'C/C++': { icon: Code, color: '#00599c' },
  'Java': { icon: Code, color: '#007396' },
  'JavaScript': { icon: Code, color: '#f7df1e' },

  // Cloud
  'AWS': { icon: Cloud, color: '#ff9900' },
  'GCP': { icon: Cloud, color: '#4285f4' },
  'Azure': { icon: Cloud, color: '#0089d6' },

  // Big Data
  'Apache Spark': { icon: Server, color: '#e25a1c' },
  'Hadoop': { icon: Server, color: '#ff7f00' },
  'Kafka': { icon: Workflow, color: '#231f20' },
  'MapReduce': { icon: Server, color: '#ff7f00' },
  'Pig': { icon: Code, color: '#ff7f00' },
  'Sqoop': { icon: Code, color: '#ff7f00' },

  // Data Warehouse
  'Snowflake': { icon: Box, color: '#29b5e8' },
  'Amazon Redshift': { icon: Database, color: '#ff9900' },
  'Google BigQuery': { icon: Database, color: '#4285f4' },
  'Amazon RDS': { icon: Database, color: '#ff9900' },

  // ETL
  'ETL/ELT Pipelines': { icon: Workflow, color: '#6366f1' },
  'Apache Airflow': { icon: Workflow, color: '#00c7b7' },
  'dbt': { icon: Box, color: '#ff694b' },
  'Azure Data Factory': { icon: Workflow, color: '#0089d6' },

  // DevOps
  'Docker': { icon: Container, color: '#2496ed' },
  'Kubernetes': { icon: Globe, color: '#326ce5' },
  'Terraform': { icon: Settings, color: '#7b42bc' },
  'CI/CD': { icon: GitBranch, color: '#6366f1' },
  'GitHub': { icon: GitBranch, color: '#181717' },
  'Jenkins': { icon: Settings, color: '#d24939' },

  // Visualization
  'Tableau': { icon: BarChart3, color: '#e97627' },
  'Looker': { icon: BarChart3, color: '#4285f4' },
  'Matplotlib': { icon: BarChart3, color: '#3776ab' },
  'Seaborn': { icon: BarChart3, color: '#6366f1' },
  'Excel': { icon: Table, color: '#217346' },
  'Power BI': { icon: BarChart3, color: '#f2c811' },
};

// Skill Icon Component
const SkillIcon = ({ skill }: { skill: string }) => {
  const skillData = skillIcons[skill] || { color: '#6366f1', icon: Code };
  const IconComponent = skillData.icon || Code;
  const { theme } = useTheme();
  
  return (
    <div className="flex flex-col items-center gap-2 min-w-[110px]">
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transition-transform hover:rotate-6"
        style={{ backgroundColor: skillData.color }}
      >
        <IconComponent className="w-7 h-7" />
      </div>
      <span className={`text-xs text-center font-medium leading-tight max-w-[100px] ${theme === 'dark' ? 'text-gray-300' : 'text-gray-200'}`}>
        {skill}
      </span>
    </div>
  );
};

export default function Skills() {
  const { theme } = useTheme();
  
  // Row 1: HPC, Agentic AI, ML, Programming
  const row1Skills = [
    ...skillCategories[0].skills,
    ...skillCategories[1].skills,
    ...skillCategories[2].skills,
    ...skillCategories[3].skills,
  ];
  const duplicatedRow1 = [...row1Skills, ...row1Skills];

  // Row 2: Cloud, Big Data, Data Warehouse, ETL, DevOps, Visualization
  const row2Skills = [
    ...skillCategories[4].skills,
    ...skillCategories[5].skills,
    ...skillCategories[6].skills,
    ...skillCategories[7].skills,
    ...skillCategories[8].skills,
    ...skillCategories[9].skills,
  ];
  const duplicatedRow2 = [...row2Skills, ...row2Skills];
  
  return (
    <section id="skills" className={`py-24 overflow-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#f4f6fb]'}`}>
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
            <span className={`font-semibold tracking-wider text-sm px-6 py-2 rounded flex items-center gap-2 ${theme === 'dark' ? 'text-white bg-gray-800' : 'text-white bg-gray-800'}`}>
              <Cpu className="w-4 h-4 text-orange-400" />
              Technical Skills & Specializations
            </span>
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
        {/* First Marquee Row - HPC, Agentic AI & ML - Left to Right */}
        <div className="flex mb-6">
          <div 
            className="flex gap-6"
            style={{
              animation: 'marquee 35s linear infinite',
            }}
          >
            {duplicatedRow1.map((skill, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 p-4 rounded-2xl flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105 shadow-md border border-gray-700/40"
                style={{ backgroundColor: '#21262d', minWidth: '120px' }}
              >
                <SkillIcon skill={skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Second Marquee Row - Cloud, Big Data & DevOps - Right to Left */}
        <div className="flex">
          <div 
            className="flex gap-6"
            style={{
              animation: 'marquee-reverse 40s linear infinite',
            }}
          >
            {duplicatedRow2.map((skill, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 p-4 rounded-2xl flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105 shadow-md border border-gray-700/40"
                style={{ backgroundColor: '#21262d', minWidth: '120px' }}
              >
                <SkillIcon skill={skill} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Fade edges */}
        <div className={`absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10 ${
          theme === 'dark' ? 'bg-gradient-to-r from-gray-900 to-transparent' : 'bg-gradient-to-r from-[#f4f6fb] to-transparent'
        }`}></div>
        <div className={`absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-10 ${
          theme === 'dark' ? 'bg-gradient-to-l from-gray-900 to-transparent' : 'bg-gradient-to-l from-[#f4f6fb] to-transparent'
        }`}></div>
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
