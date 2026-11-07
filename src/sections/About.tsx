import { motion } from 'framer-motion';
import { personalInfo, organizationInfo } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';
import { Cpu, Bot, Award, ExternalLink, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Cpu,
    title: 'Ph.D. in ECE @ UT Dallas',
    subtitle: 'High-Performance & In-Memory Computing (2026 - 2029) • 4.0 CGPA',
    color: '#ea580c',
  },
  {
    icon: Sparkles,
    title: 'US DOE & Lawrence Berkeley Lab',
    subtitle: 'Research on High-Throughput HPC & Distributed Memory Paradigms',
    color: '#0284c7',
  },
  {
    icon: Bot,
    title: 'Founder @ DOS3.AI',
    subtitle: 'Pioneering Autonomous Agentic AI & Model Context Protocol (MCP)',
    color: '#6366f1',
  },
  {
    icon: Award,
    title: 'M.S. Data Science @ UNT',
    subtitle: "Perfect 4.0/4.0 CGPA across all semesters • Dean's List Distinction",
    color: '#0d9488',
  },
];

export default function About() {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`py-24 px-4 sm:px-8 lg:px-12 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900/90' : 'bg-[#f4f6fb]'
      }`}
    >
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
            <span className="text-[#0d9488] font-bold tracking-wider text-sm uppercase">
              WHO AM I?
            </span>
            <div className="h-px w-16 bg-[#0d9488]/40" />
          </div>
        </motion.div>

        {/* Highlight Banners - High Priority Callouts */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-800/90 border-gray-700/80 hover:border-indigo-500/60 shadow-lg shadow-black/20'
                    : 'bg-white border-gray-200/80 hover:border-indigo-500/60 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="p-2.5 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className={`text-sm font-bold leading-tight ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs mt-1 leading-snug ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side - Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 space-y-5"
          >
            <p
              className={`text-xl font-medium leading-relaxed ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}
            >
              Hey there, I'm{' '}
              <span className="text-[#6366f1] font-bold">HARIHARAN BABU, M.S.</span> — Founder of{' '}
              <a
                href={organizationInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0ea5e9] font-bold hover:underline inline-flex items-center gap-1"
              >
                {organizationInfo.name}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>{' '}
              and Ph.D. Researcher in Electrical & Computer Engineering at{' '}
              <span className="font-semibold text-[#ea580c]">The University of Texas at Dallas (UTD)</span>.
            </p>

            <div
              className={`p-4 rounded-xl border border-l-4 border-l-[#ea580c] ${
                theme === 'dark'
                  ? 'bg-amber-950/20 border-gray-700 text-gray-300'
                  : 'bg-orange-50/70 border-orange-200 text-gray-700'
              }`}
            >
              <p className="text-sm leading-relaxed">
                <strong className="text-[#ea580c]">Core Research Focus:</strong> My doctoral research at UTD centers on{' '}
                <strong>High-Performance Computing (HPC)</strong>, <strong>In-Memory Computing architectures</strong>, and{' '}
                <strong>Agentic AI</strong>. I am actively working on landmark research initiatives sponsored by the{' '}
                <strong>US Department of Energy (DOE)</strong> and <strong>Lawrence Berkeley National Laboratory (LBNL)</strong>, architecting memory-centric acceleration frameworks that shatter data-movement bottlenecks for exascale scientific computation.
              </p>
            </div>

            <p
              className={`leading-relaxed text-sm md:text-base ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Prior to my Ph.D., I completed my <strong>Master of Science in Data Science at the University of North Texas (UNT)</strong> with a perfect <strong>4.0/4.0 CGPA</strong>, earning recurring Dean's List honors. My academic journey is backed by a Bachelor of Engineering in Computer Science and Engineering from <strong>Anna University Chennai</strong> (First Class honors).
            </p>

            <p
              className={`leading-relaxed text-sm md:text-base ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Across industry and research environments, I bring extensive hands-on experience in building scalable data ecosystems. I have engineered serverless AWS ETL/ELT pipelines processing 5M+ records daily with 99.9% uptime, built lakehouse platforms using <strong>Databricks, Snowflake, and Apache Spark</strong>, and designed automated data governance workflows.
            </p>

            <p
              className={`leading-relaxed text-sm md:text-base ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Through <strong>DOS3.AI</strong>, I merge low-level HPC performance with the frontier of <strong>Agentic AI</strong>. I specialize in designing autonomous multi-agent systems, <strong>Model Context Protocol (MCP)</strong> architectures, fine-tuning LLMs, and crafting production-grade RAG pipelines. My goal is to build intelligent, self-reasoning computing platforms that solve humanity's most complex computational challenges.
            </p>

            {/* Profile Signature & Org Link */}
            <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-gray-700/40">
              <div>
                <div
                  className={`text-2xl font-bold tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {personalInfo.name}
                </div>
                <div className="text-xs text-[#0ea5e9] font-medium mt-0.5">
                  Founder @ {organizationInfo.name} • Ph.D. Researcher @ UTD
                </div>
              </div>
              <a
                href={organizationInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6366f1] text-white text-xs font-semibold hover:bg-[#4f46e5] transition-all shadow-md"
              >
                Explore {organizationInfo.name}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Profile Image with Org & Degree Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div
              className={`rounded-2xl p-4 border transition-all duration-300 shadow-2xl ${
                theme === 'dark' ? 'bg-gray-800/90 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              {/* Image Container */}
              <div className="relative rounded-xl overflow-hidden mb-4 group">
                <img
                  src="/Hari_image.jpg"
                  alt={personalInfo.name}
                  className="w-full h-auto object-cover max-h-[460px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xl font-bold">{personalInfo.name}</div>
                  <div className="text-xs text-indigo-300 font-medium">
                    {personalInfo.degree}
                  </div>
                </div>
              </div>

              {/* Founder & Org Summary Card Below Photo */}
              <div
                className={`p-4 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-gray-900/80 border-gray-700/80'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                    Organization & Affiliation
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono">
                    Active
                  </span>
                </div>
                <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <span className="text-[#6366f1]">{organizationInfo.name}</span>
                  <span className="text-xs text-gray-400 font-normal">| {organizationInfo.founderTitle}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mb-3">
                  {organizationInfo.tagline}
                </p>
                <div className="flex gap-2">
                  <a
                    href={organizationInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-3 rounded-lg text-center text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{organizationInfo.name} Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="mailto:contact@dos3.ai"
                    className={`py-1.5 px-3 rounded-lg text-center text-xs font-semibold border transition-colors flex items-center justify-center ${
                      theme === 'dark'
                        ? 'border-gray-700 hover:bg-gray-800 text-gray-300'
                        : 'border-gray-300 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    contact@dos3.ai
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
