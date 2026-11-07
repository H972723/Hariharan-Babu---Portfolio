import type { Experience, Project, Skill, Education, SocialLink, Testimonial, Volunteering, Award, CertificationItem, OrganizationInfo } from '../types';

export const personalInfo = {
  name: 'Dr Hariharan Babu BE, MS, PhD',
  fullName: 'Dr Hariharan Babu',
  degree: 'PhD Researcher at UTD | MS in UNT',
  title: 'PhD Researcher at UTD | MS in UNT',
  organization: 'DOS3.AI',
  orgWebsite: 'https://dos3.ai',
  email: 'hariharanbabu.ms@gmail.com',
  orgEmail: 'contact@dos3.ai',
  phone: '(206) 954-7948',
  location: 'Dallas, Texas, USA',
  tagline: 'I Turn Ideas into Code.',
  heroSubheading: 'PhD Researcher at UTD | MS in UNT',
  heroDescription: `const researcher = {
  name: "Dr Hariharan Babu BE, MS, PhD",
  role: "PhD Researcher at UTD | MS in UNT",
  organization: "DOS3.AI (Founder)",
  education: {
    phd: "PhD in Electrical & Computer Engineering @ UT Dallas (2026-2029)",
    masters: "MS in Data Science @ UNT (4.0/4.0 GPA, Dean's List)",
    bachelors: "B.E. in Computer Science @ Anna University"
  },
  collaborations: ["US Department of Energy (DOE)", "Lawrence Berkeley National Lab (LBNL)"],
  coreFocus: ["High Performance Computing (HPC)", "In-Memory Computing", "Agentic AI", "Distributed Systems"]
};`,
  description: "Hey there, I'm Dr Hariharan Babu BE, MS, PhD! I am a researcher, data systems architect, and the Founder of DOS3.AI. I am currently pursuing my Ph.D. in Electrical and Computer Engineering at The University of Texas at Dallas (UTD) with a 4.0 CGPA, having graduated with my Master's in Data Science from the University of North Texas (UNT) with a perfect 4.0/4.0 CGPA and Dean's List honors.\n\nMy primary research focuses on High-Performance Computing (HPC), In-Memory Computing architectures, and Agentic AI Systems. In collaboration with landmark initiatives sponsored by the US Department of Energy (DOE) and Lawrence Berkeley National Laboratory (LBNL), I design memory-centric acceleration architectures, high-throughput distributed memory frameworks, and autonomous multi-agent reasoning systems that eliminate computational bottlenecks in large-scale scientific simulations and AI inference.\n\nAlongside my doctoral research, I have engineered enterprise-grade data platforms across AWS, Databricks, and Snowflake, implementing serverless ETL/ELT pipelines, real-time streaming engines, and robust data quality frameworks. Through DOS3.AI, I bridge frontier academic computing research with production-grade AI intelligence—pioneering Model Context Protocol (MCP) agent swarms and distributed systems that turn massive data into dependable autonomous action.",
  heroTexts: [
    'PhD Researcher at UTD',
    'MS in UNT',
    'Founder @ DOS3.AI',
    'HPC & In-Memory Computing',
    'Agentic AI & MCP Systems',
    'US DOE & LBNL Researcher',
  ],
};

export const organizationInfo: OrganizationInfo = {
  name: 'DOS3.AI',
  logo: '/dos3-logo.png',
  tagline: 'Pioneering Autonomous Agentic AI & High-Performance Computing',
  founder: 'Dr Hariharan Babu BE, MS, PhD',
  founderTitle: 'Founder & Lead AI Researcher',
  email: 'contact@dos3.ai',
  website: 'https://dos3.ai',
  description: 'DOS3.AI is an AI research and deep-tech innovation organization founded by Hariharan Babu. The lab is dedicated to architecting next-generation Agentic AI ecosystems, distributed high-performance computing (HPC) acceleration, and intelligent data backbones. By converging frontier research in memory-centric computing with multi-agent orchestration, DOS3.AI builds self-reasoning AI swarms and scalable enterprise intelligence systems.',
  mission: 'Bridging frontier academic research in HPC and Agentic AI with enterprise-scale autonomous intelligence and memory-centric architectures.',
  highlights: [
    'Agentic AI Architectures & Model Context Protocol (MCP) Swarms',
    'High Performance Computing (HPC) & In-Memory Computing Paradigms',
    'Low-Latency Distributed Memory Acceleration & Scalable Inference',
    'Enterprise Data Pipelines & Real-Time Intelligence Platforms',
  ],
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/hariharan',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hariharan-babu-hb',
    icon: 'Linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:hariharanbabu.ms@gmail.com',
    icon: 'Mail',
  },
  {
    name: 'DOS3.AI',
    url: 'https://dos3.ai',
    icon: 'Globe',
  },
];

export const experiences: Experience[] = [
  {
    id: '0',
    company: 'University of Texas at Dallas (UTD)',
    role: 'Ph.D. Researcher / Graduate Research Assistant',
    duration: 'June 2026 - May 2029',
    description: [
      'Spearheading doctoral research in Electrical and Computer Engineering, specializing in High-Performance Computing (HPC), In-Memory Computing, and distributed Agentic AI systems.',
      'Conducting research in active collaboration with the US Department of Energy (US DOE) and Lawrence Berkeley National Laboratory (LBNL) to design high-throughput computational frameworks.',
      'Designing and benchmarking memory-centric acceleration architectures and low-latency distributed memory hierarchies to optimize large-scale scientific simulations and machine learning workloads.',
      'Developing autonomous Agentic AI reasoning systems, integrating Model Context Protocol (MCP) and multi-agent orchestration to automate complex scientific workflows and data processing pipelines.',
    ],
    technologies: [
      'HPC',
      'In-Memory Computing',
      'Agentic AI',
      'Data Science & ML',
      'US DOE / LBNL',
      'Distributed Computing',
      'PyTorch',
      'CUDA',
      'C/C++',
      'Python',
    ],
    codeBlock: `const job = {
  myRole: "Ph.D. Researcher",
  institution: "University of Texas at Dallas (UTD)",
  duration: "June 2026 - May 2029",
  location: "Dallas, TX",
  collaborators: ["US Department of Energy (DOE)", "Lawrence Berkeley National Laboratory (LBNL)"],
  tools: ["HPC", "In-Memory Computing", "Agentic AI", "Data Science", "Machine Learning", "Distributed Systems", "CUDA"],
  description: "Conducting Ph.D. research on High Performance Computing & Agentic AI for US DOE & Lawrence Berkeley Lab. Architecting in-memory computing models and multi-agent autonomous reasoning systems."
};`,
  },
  {
    id: '1',
    company: 'University of North Texas',
    role: 'Graduate Student Research Assistant',
    duration: 'January 2025 - May 2026',
    description: [
      'Advanced statistical learning and large-scale data research by engineering scalable ML pipelines and distributed workflows, strengthening model robustness and improving experimental reproducibility by 32%.',
      'Designed and evaluated agentic AI systems capable of autonomous reasoning and multi-step orchestration, reducing manual research intervention by 46% while enhancing execution reliability.',
      'Optimized big data processing for semi-structured and high-dimensional datasets through feature abstraction and dimensionality strategies, increasing downstream predictive stability by 28%.',
      'Led end-to-end career readiness initiatives for 600+ graduate students, architecting workshops on résumé strategy, LinkedIn positioning, interview performance, and strategic networking to elevate market competitiveness.',
      'Delivered structured mentorship, faculty collaboration, and performance-based feedback frameworks, strengthening professional branding quality and improving interview preparedness across student cohorts.',
    ],
    technologies: [
      'Python',
      'Machine Learning',
      'Agentic AI Systems',
      'Large Language Models (LLMs)',
      'Deep Learning',
      'Distributed Computing',
      'Statistical Modeling',
      'Data Engineering',
      'Model Validation',
      'Career Coaching',
    ],
    codeBlock: `const job = {
  myRole: "Graduate Student Research Assistant",
  company: "University of North Texas",
  duration: "January 2025 - May 2026",
  location: "Dallas, TX",
  type: "Research & Teaching",
  tools: ["Python", "Machine Learning", "Agentic AI Systems", "Large Language Models (LLMs)", "Deep Learning", "Distributed Computing"],
  description: "Advanced statistical learning research. Improved experimental reproducibility by 32% and reduced manual research intervention by 46%. Led career readiness for 600+ graduate students."
};`,
  },
  {
    id: '2',
    company: 'Newgen KnowledgeWorks',
    role: 'Data Engineer',
    duration: 'Jun 2023 - Jul 2024',
    description: [
      'Architected a serverless, event-driven ETL pipeline on AWS (S3, Lambda, Glue), automating ingestion of 5M+ records/day with 99.9% data availability and reducing manual processing effort by 40%.',
      'Developed scalable transformation workflows using AWS Glue and DataBrew to process complex nested JSON data, improving data quality by 30% and reducing downstream query latency by 25%.',
      'Engineered a fault-tolerant and secure framework using SQS, DLQ, AES-256 encryption, OpenSearch, and CloudWatch, decreasing pipeline failures by 35% and ensuring real-time monitoring with proactive alerting.',
    ],
    technologies: ['AWS', 'Lambda', 'Glue', 'S3', 'SQS', 'OpenSearch', 'CloudWatch'],
    codeBlock: `const job = {
  myRole: "Data Engineer",
  company: "Newgen KnowledgeWorks",
  duration: "Jun 2023 - Jul 2024",
  location: "Chennai, TN, India",
  type: "Full-Time",
  tools: ["AWS", "Lambda", "Glue", "S3", "SQS", "DataBrew", "OpenSearch", "CloudWatch"],
  description: "Architected serverless ETL pipeline processing 5M+ records/day. Improved data quality by 30% and reduced pipeline failures by 35%."
};`,
  },
  {
    id: '3',
    company: 'IHUB Divya Sampark at IIT-Roorkee',
    role: 'Data Science Intern',
    duration: 'Jun 2023 - Jul 2023',
    description: [
      'Led end-to-end data science workflow (data cleaning, EDA, feature engineering, validation) on real-world datasets, delivering predictive models with 92% accuracy, 0.90 F1-score, and 0.94 ROC-AUC.',
      'Developed and validated machine learning models using Python (Pandas, NumPy, Scikit-learn), improving prediction precision by 25% and reducing error rate by 18%.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning'],
    codeBlock: `const job = {
  myRole: "Data Science Intern",
  company: "IHUB Divya Sampark at IIT-Roorkee",
  duration: "Jun 2023 - Jul 2023",
  type: "Internship",
  tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
  description: "Delivered predictive models with 92% accuracy and 0.94 ROC-AUC. Improved prediction precision by 25% using robust cross-validation."
};`,
  },
  {
    id: '4',
    company: 'National Institute of Technology (NITK)',
    role: 'Machine Learning Intern',
    duration: 'Jan 2023 - Feb 2023',
    description: [
      'Developed and optimized supervised ML models (Logistic Regression, Decision Trees, KNN) in Python, increasing prediction accuracy to 91% with 0.89 F1-score and 0.93 ROC-AUC.',
      'Built an end-to-end ML pipeline including preprocessing, scaling, and cross-validation, reducing overfitting by 22% and improving model generalization.',
    ],
    technologies: ['Python', 'Machine Learning', 'Logistic Regression', 'Decision Trees', 'KNN'],
    codeBlock: `const job = {
  myRole: "Machine Learning Intern",
  company: "National Institute of Technology (NITK)",
  duration: "Jan 2023 - Feb 2023",
  type: "Internship",
  tools: ["Python", "Scikit-learn", "Logistic Regression", "Decision Trees", "KNN"],
  description: "Achieved 91% prediction accuracy with optimized ML models. Reduced overfitting by 22% through comprehensive ML pipeline."
};`,
  },
  {
    id: '5',
    company: 'IEEE',
    role: 'Machine Learning Intern',
    duration: 'May 2022 - Jun 2022',
    description: [
      'Implemented supervised and unsupervised ML algorithms (Regression, Classification, K-Means) in Python, achieving 89% classification accuracy and improving convergence speed by 20%.',
      'Developed and evaluated ML workflows using Scikit-learn, performing cross-validation with 0.87 F1-score and 0.91 ROC-AUC.',
    ],
    technologies: ['Python', 'Scikit-learn', 'Regression', 'Classification', 'K-Means'],
    codeBlock: `const job = {
  myRole: "Machine Learning Intern",
  company: "IEEE",
  duration: "May 2022 - Jun 2022",
  type: "Internship",
  tools: ["Python", "Scikit-learn", "Regression", "Classification", "K-Means"],
  description: "Achieved 89% classification accuracy with optimized ML algorithms. Developed robust ML workflows with 0.91 ROC-AUC."
};`,
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Diabetes Readmission Analysis',
    description: 'Analyzed 100K+ hospital records to identify key readmission drivers. Built Random Forest & Logistic Regression models, improving high-risk patient detection by 18%, and created 5 interactive Tableau dashboards to visualize patterns across demographics and treatments.',
    image: '/projects/diabetes.jpg',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Tableau', 'SQL'],
    githubUrl: 'https://github.com/hariharan/diabetes-readmission',
    codeBlock: `const project = {
  name: "Diabetes Readmission Analysis",
  tools: ["Python", "Pandas", "Scikit-learn", "Tableau", "SQL"],
  dataset: "UCI Machine Learning Repository",
  description: "Analyzed 100K+ hospital records to identify key readmission drivers. Built Random Forest & Logistic Regression models, improving high-risk patient detection by 18%.",
  achievements: ["100K+ records analyzed", "18% improvement in detection", "5 Tableau dashboards"]
};`,
  },
  {
    id: '2',
    title: 'Lung Cancer Detection Using ML',
    description: 'Developed predictive models achieving 90% accuracy and 92% recall to assess lung cancer risk. Applied feature engineering & SMOTE to boost recall by 12% and identified top risk factors: smoking, chest pain, chronic cough.',
    image: '/projects/lung-cancer.jpg',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/hariharan/lung-cancer-detection',
    codeBlock: `const project = {
  name: "Lung Cancer Detection Using ML",
  tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
  description: "Developed predictive models achieving 90% accuracy and 92% recall to assess lung cancer risk. Applied feature engineering & SMOTE to boost recall by 12%.",
  achievements: ["90% accuracy achieved", "92% recall rate", "12% recall boost with SMOTE"]
};`,
  },
  {
    id: '3',
    title: 'Sales Prediction Using ML',
    description: 'Built ML-based daily sales forecasting models using historical retail data. Applied feature engineering, outlier handling, and time-lag features. Evaluated Linear Regression, Random Forest, and XGBoost models.',
    image: '/projects/sales.jpg',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'XGBoost'],
    githubUrl: 'https://github.com/hariharan/sales-prediction',
    codeBlock: `const project = {
  name: "Sales Prediction Using Machine Learning",
  tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "XGBoost"],
  description: "Built ML-based daily sales forecasting models using historical retail data. Applied feature engineering, outlier handling, and time-lag features.",
  models: ["Linear Regression", "Random Forest", "XGBoost"]
};`,
  },
  {
    id: '4',
    title: 'AI Waitress – Voice-Powered Restaurant Order Assistant',
    description: 'Developed a real-time AI voice assistant for automating restaurant phone orders. Built a low-latency FastAPI architecture integrating Speech-to-Text, LLM-based NLP, and Text-to-Speech.',
    image: '/projects/ai-waitress.jpg',
    technologies: ['Python', 'FastAPI', 'LLaMA', 'NLP', 'Speech-to-Text'],
    githubUrl: 'https://github.com/hariharan/ai-waitress',
    codeBlock: `const project = {
  name: "AI Waitress",
  tools: ["Python", "FastAPI", "LLaMA", "NLP", "Speech-to-Text/TTS"],
  description: "Developed a real-time AI voice assistant for automating restaurant phone orders with low-latency FastAPI architecture.",
  features: ["Real-time processing", "POS integration", "Human-like interaction"]
};`,
  },
  {
    id: '5',
    title: 'Seasonality Analysis & Supply Management for Ride-Sharing',
    description: 'Analyzed Uber/Lyft and weather data to correlate six weather attributes with ride demand by zip code. Built predictive models to forecast ride-sharing demand, achieving 74.94% accuracy.',
    image: '/projects/rideshare.jpg',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Data Analysis'],
    githubUrl: 'https://github.com/hariharan/rideshare-analysis',
    codeBlock: `const project = {
  name: "Seasonality Analysis for Ride-Sharing",
  tools: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
  description: "Analyzed Uber/Lyft and weather data to correlate weather attributes with ride demand. Built predictive models with 74.94% accuracy.",
  data: ["Uber/Lyft data", "Weather data", "Zip code analysis"]
};`,
  },
  {
    id: '6',
    title: 'Real-Time Order Processing Pipeline using AWS',
    description: 'Built an event-driven, near real-time order processing pipeline on AWS. Designed serverless validation using S3-triggered Lambda and SQS for decoupled ingestion, automated data transformation with AWS Glue.',
    image: '/projects/aws-pipeline.jpg',
    technologies: ['AWS', 'Lambda', 'Glue', 'Redshift', 'SQS', 'SNS', 'PySpark'],
    githubUrl: 'https://github.com/hariharan/aws-order-pipeline',
    codeBlock: `const project = {
  name: "Real-Time Order Processing Pipeline",
  tools: ["AWS", "Lambda", "Glue", "Redshift", "SQS", "SNS", "PySpark"],
  description: "Built event-driven, near real-time order processing pipeline on AWS with serverless validation and automated data transformation.",
  services: ["S3", "Lambda", "Glue", "Redshift", "SQS", "SNS"]
};`,
  },
  {
    id: '7',
    title: 'Sentiment-Driven Stock Market Analysis',
    description: 'Analyzed 5 years of stock prices and financial news using NLP-based sentiment analysis. Trained a Random Forest model achieving 85% accuracy and 0.65 Pearson correlation.',
    image: '/projects/stock-sentiment.jpg',
    technologies: ['Python', 'NLP', 'Random Forest', 'Flask', 'Tableau'],
    githubUrl: 'https://github.com/hariharan/stock-sentiment',
    codeBlock: `const project = {
  name: "Sentiment-Driven Stock Market Analysis",
  tools: ["Python", "NLP", "Random Forest", "Flask", "Tableau"],
  dataSource: "Yahoo Finance",
  description: "Analyzed 5 years of stock prices and financial news using NLP-based sentiment analysis with 85% accuracy.",
  achievements: ["85% accuracy", "0.65 Pearson correlation", "Flask-based UI"]
};`,
  },
  {
    id: '8',
    title: 'Walmart Market-Basket Data Analysis',
    description: 'Performed large-scale market basket analysis on 30K+ transactions using the Apriori algorithm in PySpark. Generated 500+ association rules with support, confidence, and lift metrics.',
    image: '/projects/market-basket.jpg',
    technologies: ['Apache Spark', 'PySpark', 'Python', 'Tableau'],
    githubUrl: 'https://github.com/hariharan/market-basket-analysis',
    codeBlock: `const project = {
  name: "Walmart Market-Basket Data Analysis",
  tools: ["Apache Spark", "PySpark", "Python", "Tableau"],
  description: "Performed large-scale market basket analysis on 30K+ transactions using Apriori algorithm in PySpark.",
  achievements: ["30K+ transactions", "500+ association rules", "Apriori algorithm"]
};`,
  },
];

export const skills: Skill[] = [
  // HPC & Advanced Systems
  { name: 'High Performance Computing (HPC)', icon: 'Cpu', category: 'hpc' },
  { name: 'In-Memory Computing', icon: 'Cpu', category: 'hpc' },
  { name: 'Distributed Systems', icon: 'Server', category: 'hpc' },
  { name: 'CUDA & GPU Acceleration', icon: 'Zap', category: 'hpc' },
  { name: 'Parallel Computing', icon: 'Layers', category: 'hpc' },

  // Agentic AI & Modern LLMs
  { name: 'Agentic AI Systems', icon: 'Bot', category: 'ai' },
  { name: 'Model Context Protocol (MCP)', icon: 'Workflow', category: 'ai' },
  { name: 'Multi-Agent Orchestration', icon: 'Layers', category: 'ai' },
  { name: 'Large Language Models (LLMs)', icon: 'Brain', category: 'ai' },
  { name: 'RAG (Retrieval-Augmented Gen)', icon: 'Database', category: 'ai' },
  { name: 'LangChain & LangGraph', icon: 'Workflow', category: 'ai' },
  { name: 'PyTorch & Transformers', icon: 'Activity', category: 'ai' },

  // Programming & Core
  { name: 'Python (Pandas, PySpark)', icon: 'Terminal', category: 'languages' },
  { name: 'SQL', icon: 'Database', category: 'languages' },
  { name: 'C/C++', icon: 'Code', category: 'languages' },
  { name: 'Java', icon: 'Code', category: 'languages' },
  { name: 'TypeScript / JavaScript', icon: 'Code', category: 'languages' },

  // Cloud & Big Data
  { name: 'AWS', icon: 'Cloud', category: 'tools' },
  { name: 'GCP', icon: 'Cloud', category: 'tools' },
  { name: 'Azure', icon: 'Cloud', category: 'tools' },
  { name: 'Apache Spark', icon: 'Server', category: 'backend' },
  { name: 'Databricks', icon: 'Database', category: 'backend' },
  { name: 'Snowflake', icon: 'Box', category: 'backend' },
  { name: 'Apache Airflow', icon: 'Workflow', category: 'tools' },
  { name: 'Docker & Kubernetes', icon: 'Container', category: 'tools' },
  { name: 'CI/CD & Terraform', icon: 'GitBranch', category: 'tools' },
  { name: 'Tableau & Power BI', icon: 'BarChart3', category: 'frontend' },
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'The University of Texas at Dallas',
    degree: 'Doctor of Philosophy (Ph.D.)',
    field: 'Electrical and Computer Engineering',
    duration: '2026 - 2029',
    cgpa: '4.0/4.0',
    description: 'Pursuing Ph.D. research in Electrical and Computer Engineering, specializing in High-Performance Computing (HPC), In-Memory Computing architectures, and distributed Agentic AI systems in collaboration with the US Department of Energy (DOE) and Lawrence Berkeley National Laboratory (LBNL).',
    codeBlock: `const education = {
  degree: "Doctor of Philosophy (Ph.D.)",
  field: "Electrical and Computer Engineering",
  institution: "The University of Texas at Dallas",
  duration: "2026 - 2029",
  cgpa: "4.0/4.0",
  collaborations: ["US Department of Energy (DOE)", "Lawrence Berkeley National Lab (LBNL)"],
  focus: ["High-Performance Computing (HPC)", "In-Memory Computing", "Agentic AI Systems"]
};`,
  },
  {
    id: '2',
    institution: 'University of North Texas',
    degree: "Master's degree",
    field: 'Data Science',
    duration: 'August 2024 - May 2026',
    cgpa: '4.0/4.0',
    description: 'Completed Master of Science in Data Science with a perfect 4.0/4.0 CGPA across all semesters. Honored on the Dean\'s List for sustained academic excellence, focusing on scalable machine learning, big data infrastructure, and statistical modeling.',
    codeBlock: `const education = {
  degree: "Master's degree",
  field: "Data Science",
  institution: "University of North Texas",
  duration: "August 2024 - May 2026",
  cgpa: "4.0/4.0",
  honors: "Dean's List (All Semesters)",
  focus: ["Machine Learning", "Big Data Analytics", "Statistical Modeling", "Distributed Systems"]
};`,
  },
  {
    id: '3',
    institution: 'Anna University Chennai',
    degree: "Bachelor's degree",
    field: 'Computer Science and Engineering',
    duration: 'August 2020 - May 2024',
    cgpa: '3.5/4.0',
    description: 'Completed Bachelor of Engineering in Computer Science and Engineering with First Class honors, with deep focus on algorithmic design, software architecture, operating systems, and distributed database engineering.',
    codeBlock: `const education = {
  degree: "Bachelor's degree",
  field: "Computer Science and Engineering",
  institution: "Anna University Chennai",
  duration: "August 2020 - May 2024",
  cgpa: "3.5/4.0",
  honors: "First Class",
  coursework: ["Algorithms", "Data Structures", "Operating Systems", "Database Systems"]
};`,
  },
];

export const certifications: CertificationItem[] = [
  {
    id: 'pmp-member',
    title: 'PMP Dallas Chapter Member',
    organization: 'Project Management Institute (PMI) – Dallas Chapter',
    issueDate: '2026-03-15',
    completedDateDisplay: 'March 2026',
    logo: '/certifications/pmp.png',
    pdfUrl: '/certificates/PMI Member Certificate.pdf',
    verifyUrl: 'https://www.pmi.org/',
    category: 'management',
    featured: true,
    highlightBadge: '⭐ PMP Dallas Chapter Member (Featured)',
  },
  {
    id: 'nvidia-genai-llm',
    title: 'NVIDIA Certified Professional: Generative AI and LLMs',
    organization: 'NVIDIA',
    issueDate: '2026-03-12',
    completedDateDisplay: 'March 12, 2026',
    expirationDate: 'March 12, 2028',
    logo: '/certifications/nvidia-certified-professional-gen-ai-llms.png',
    pdfUrl: '/certificates/NVIDIA-CertifiedProfessionalGenAIandLLMs.pdf',
    verifyUrl: 'https://www.nvidia.com/en-us/training/',
    category: 'ai',
  },
  {
    id: 'mcp-advanced',
    title: 'Model Context Protocol (MCP): Advanced Topics',
    organization: 'Anthropic',
    issueDate: '2026-03-11',
    completedDateDisplay: 'March 11, 2026',
    credentialId: 'z49sgmapok4v',
    logo: '/certifications/anthropic.png',
    pdfUrl: '/certificates/Certificate-Model Context Protocol-2.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/z49sgmapok4v',
    category: 'ai',
  },
  {
    id: 'mcp-intro',
    title: 'Introduction to Model Context Protocol (MCP)',
    organization: 'Anthropic',
    issueDate: '2026-03-11',
    completedDateDisplay: 'March 11, 2026',
    credentialId: 'qnkyegamj8p7',
    logo: '/certifications/anthropic.png',
    pdfUrl: '/certificates/Certificate-Model Context Protocol-1.pdf',
    verifyUrl: 'https://verify.skilljar.com/c/qnkyegamj8p7',
    category: 'ai',
  },
  {
    id: 'nvidia-acc-ds',
    title: 'NVIDIA Certified Professional: Accelerated Data Science',
    organization: 'NVIDIA',
    issueDate: '2026-03-10',
    completedDateDisplay: 'March 10, 2026',
    expirationDate: 'March 10, 2028',
    logo: '/certifications/nvidia-certified-professional-accelerated-data-scie.png',
    pdfUrl: '/certificates/NVIDIACertifiedProfessionalAcceleratedDataScience.pdf',
    verifyUrl: 'https://www.nvidia.com/en-us/training/',
    category: 'ai',
  },
  {
    id: 'astronomer-airflow',
    title: 'Astronomer Certification: DAG Authoring for Apache Airflow 3',
    organization: 'Astronomer',
    issueDate: '2026-03-08',
    completedDateDisplay: 'March 08, 2026',
    logo: '/certifications/astronomer-certification-dag-authoring-for-apache-a.png',
    pdfUrl: '/certificates/AstronomerCertificationDAGAuthoringforApacheAirflow3.pdf',
    verifyUrl: 'https://www.credly.com/go/JCsHNCmg',
    category: 'data',
  },
  {
    id: 'aws-solutions-architect-pro',
    title: 'AWS Certified Solutions Architect – Professional',
    organization: 'Amazon Web Services (AWS)',
    issueDate: '2026-03-06',
    completedDateDisplay: 'March 6, 2026',
    expirationDate: 'March 6, 2029',
    credentialId: '37ced5d16190453d8aae1c2b3e0238ba',
    logo: '/certifications/aws-certified-solutions-architect-professional.png',
    pdfUrl: '/certificates/AWS Certified Solutions Architect - Professional certificate.pdf',
    verifyUrl: 'https://aws.amazon.com/verification',
    category: 'cloud',
  },
  {
    id: 'databricks-data-engineer-pro',
    title: 'Databricks Certified Data Engineer Professional',
    organization: 'Databricks',
    issueDate: '2026-03-06',
    completedDateDisplay: 'March 6, 2026',
    expirationDate: 'March 6, 2028',
    credentialId: '176293065',
    logo: '/certifications/Data Engineer Professional Badge.png',
    pdfUrl: '/certificates/Data Engineer Professional.pdf',
    verifyUrl: 'https://www.databricks.com/learn/certification/data-engineer-professional',
    category: 'data',
  },
];

export const volunteering: Volunteering[] = [
  {
    id: '1',
    role: 'Team Lead Trainer',
    organization: 'Thuvakkam',
    category: 'Education',
    description: 'Led training programs focused on education and skill development for underprivileged students.',
  },
  {
    id: '2',
    role: 'Program Coordinator',
    organization: 'Bhumi',
    category: 'Education',
    description: 'Coordinated educational programs and initiatives, managing volunteer teams and student outreach activities.',
  },
];

export const awards: Award[] = [
  {
    id: '1',
    title: "Dean's List – Master of Science",
    date: 'Dec 2025',
    organization: 'University of North Texas',
    description: 'Achieved a perfect 4.0/4.0 CGPA across Fall 2024, Spring 2025, Summer 2025, and Fall 2025 semesters, earning Dean\'s List distinction for sustained academic excellence and top-tier graduate performance.',
    emoji: '🏅',
  },
  {
    id: '2',
    title: 'Top Score Distinction – NVIDIA Certified Professional (Gen AI & Accelerated DS)',
    date: 'March 2026',
    organization: 'NVIDIA',
    description: 'Demonstrated exceptional mastery in NVIDIA Professional examinations, securing 98% in LLM Architecture, 98% in Fine-Tuning, 98% in Prompt Engineering, 98% in Evaluation, 97% in GPU Computing, and 97% in Machine Learning.',
    emoji: '⚡',
  },
  {
    id: '3',
    title: 'First Class – Bachelor of Engineering',
    date: 'May 2024',
    organization: 'Anna University Chennai',
    description: 'Awarded First Class honors for achieving high academic performance with a CGPA of 3.5/4.0 across the undergraduate program in Computer Science & Engineering.',
    emoji: '🎓',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CTO at TechStart',
    image: '/testimonials/sarah.jpg',
    content: "Hariharan is an exceptional researcher and developer who consistently delivers high-quality architectures. His attention to detail and problem-solving skills in distributed systems and AI are outstanding.",
    date: 'Jan 2024',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Engineering Manager at InnovateCo',
    image: '/testimonials/michael.jpg',
    content: "Working with Hariharan was a pleasure. He not only writes clean, maintainable code but also brings fresh ideas in HPC and Agentic AI to the table. His ability to understand complex requirements is remarkable.",
    date: 'Mar 2023',
  },
  {
    id: '3',
    name: 'Emily Davis',
    role: 'Product Lead at DigitalFirst',
    image: '/testimonials/emily.jpg',
    content: "Hariharan's technical expertise combined with his collaborative nature makes him an invaluable team member. He consistently goes above and beyond to ensure project success. Highly recommended!",
    date: 'Jun 2023',
  },
  {
    id: '4',
    name: 'David Park',
    role: 'Senior Developer at CloudScale',
    image: '/testimonials/david.jpg',
    content: "I've had the pleasure of collaborating with Hariharan, and his growth has been impressive. He asks thoughtful questions, implements feedback well, and always strives to innovate.",
    date: 'Nov 2023',
  },
];
