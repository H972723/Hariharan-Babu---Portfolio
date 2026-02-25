import type { Experience, Project, Skill, Education, SocialLink, Testimonial, Volunteering, Award } from '../types';

export const personalInfo = {
  name: 'Hariharan Babu',
  title: 'Data Engineer & ML Specialist',
  email: 'hariharanbabu.ms@gmail.com',
  phone: '+1 (555) 123-4567',
  location: 'Dallas, TX, USA',
  tagline: 'I Turn Ideas into Code.',
  heroDescription: 'const developer = {\n  name: "Hariharan Babu",\n  skills: ["React", "Node.js", "TypeScript", "Python", "AWS", "Docker"],\n  hardWorker: true,\n  quickLearner: true,\n  problemSolver: true,\n  hireable: function() {\n    return this.hardWorker && this.problemSolver;\n  }\n};',
  description: "Hey there, I'm Hariharan Babu! I'm that developer who gets unreasonably excited about clean code and stays up way too late debugging. When not chasing the perfect solution, I'm probably exploring some shiny new tech that caught my attention. My learning style? Dive in headfirst and figure out how to swim while falling!\n\nMy code is so meticulously organized they make my sock drawer look chaotic—I've been known to refactor perfectly working functions at 2 AM just because the indentation felt wrong. My superpower? Making complex systems look so simple your grandmother could use them.",
  heroTexts: [
    'Full Stack Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Problem Solver',
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
];

export const experiences: Experience[] = [
  {
    id: '0',
    company: 'University of North Texas',
    role: 'Graduate Student Research Assistant',
    duration: 'January 2025 - Present (1 year 2 months)',
    description: [
      'Advanced statistical learning and large-scale data research by engineering scalable ML pipelines and distributed workflows, strengthening model robustness and improving experimental reproducibility by 32%.',
      'Designed and evaluated agentic AI systems capable of autonomous reasoning and multi-step orchestration, reducing manual research intervention by 46% while enhancing execution reliability.',
      'Optimized big data processing for semi-structured and high-dimensional datasets through feature abstraction and dimensionality strategies, increasing downstream predictive stability by 28%.',
      'Led end-to-end career readiness initiatives for 600+ graduate students, architecting workshops on résumé strategy, LinkedIn positioning, interview performance, and strategic networking to elevate market competitiveness.',
      'Delivered structured mentorship, faculty collaboration, and performance-based feedback frameworks, strengthening professional branding quality and improving interview preparedness across student cohorts.',
    ],
    technologies: ['Python', 'Machine Learning', 'Agentic AI Systems', 'Large Language Models (LLMs)', 'Deep Learning', 'Distributed Computing', 'Statistical Modeling', 'Data Engineering', 'Model Validation', 'Career Coaching'],
    codeBlock: `const job = {
  myRole: "Graduate Student Research Assistant",
  company: "University of North Texas",
  duration: "January 2025 - Present (1 year 2 months)",
  location: "Dallas, TX",
  type: "Research & Teaching",
  tools: ["Python", "Machine Learning", "Agentic AI Systems", "Large Language Models (LLMs)", "Deep Learning", "Distributed Computing"],
  description: "Advanced statistical learning research. Improved experimental reproducibility by 32% and reduced manual research intervention by 46%. Led career readiness for 600+ graduate students."
};`,
  },
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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
    id: '4',
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
  { name: 'React', icon: 'React', category: 'frontend' },
  { name: 'TypeScript', icon: 'Code', category: 'languages' },
  { name: 'Next.js', icon: 'Globe', category: 'frontend' },
  { name: 'Vue.js', icon: 'Layers', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'Palette', category: 'frontend' },
  { name: 'Node.js', icon: 'Server', category: 'backend' },
  { name: 'Python', icon: 'Terminal', category: 'languages' },
  { name: 'PostgreSQL', icon: 'Database', category: 'backend' },
  { name: 'MongoDB', icon: 'Database', category: 'backend' },
  { name: 'GraphQL', icon: 'Share2', category: 'backend' },
  { name: 'Docker', icon: 'Container', category: 'tools' },
  { name: 'AWS', icon: 'Cloud', category: 'tools' },
  { name: 'Git', icon: 'GitBranch', category: 'tools' },
  { name: 'Figma', icon: 'Figma', category: 'tools' },
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'University of North Texas',
    degree: "Master's degree",
    field: 'Data Science',
    duration: 'August 2024 - May 2026',
    cgpa: '4.0/4.0',
    description: 'Pursuing advanced studies in Data Science with focus on machine learning, big data analytics, and statistical modeling.',
    codeBlock: `const education = {
  degree: "Master's degree",
  field: "Data Science",
  institution: "University of North Texas",
  duration: "August 2024 - May 2026",
  cgpa: "4.0/4.0",
  focus: ["Machine Learning", "Big Data Analytics", "Statistical Modeling"]
};`,
  },
  {
    id: '2',
    institution: 'Anna University Chennai',
    degree: "Bachelor's degree",
    field: 'Computer Science',
    duration: 'August 2020 - May 2024',
    cgpa: '3.5/4.0',
    description: 'Completed undergraduate studies in Computer Science with comprehensive coursework in software development, algorithms, and data structures.',
    codeBlock: `const education = {
  degree: "Bachelor's degree",
  field: "Computer Science",
  institution: "Anna University Chennai",
  duration: "August 2020 - May 2024",
  cgpa: "3.5/4.0",
  coursework: ["Software Development", "Algorithms", "Data Structures", "Database Systems"]
};`,
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
    title: 'First Class – Bachelor of Engineering',
    date: 'May 2024',
    organization: 'Anna University Chennai',
    description: 'Awarded First Class honors for achieving high academic performance with a CGPA of 3.5/4.0 across the undergraduate program.',
    emoji: '🎓',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CTO at TechStart',
    image: '/testimonials/sarah.jpg',
    content: "Hariharan is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills are outstanding. He transformed our legacy system into a modern, scalable architecture.",
    date: 'Jan 2024',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Engineering Manager at InnovateCo',
    image: '/testimonials/michael.jpg',
    content: "Working with Hariharan was a pleasure. He not only writes clean, maintainable code but also brings fresh ideas to the table. His ability to understand complex requirements and translate them into elegant solutions is remarkable.",
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
    content: "I've had the pleasure of mentoring Hariharan, and his growth has been impressive. He asks thoughtful questions, implements feedback well, and always strives to improve. A true professional.",
    date: 'Nov 2023',
  },
];
