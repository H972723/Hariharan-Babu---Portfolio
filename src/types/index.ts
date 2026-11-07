export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
  codeBlock?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  codeBlock?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages' | 'ai' | 'hpc';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  cgpa?: string;
  description?: string;
  codeBlock?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  issueDate: string; // ISO date for sorting: 'YYYY-MM-DD'
  completedDateDisplay: string;
  expirationDate?: string;
  credentialId?: string;
  logo: string;
  pdfUrl?: string;
  verifyUrl?: string;
  category?: 'cloud' | 'data' | 'ai' | 'management';
  featured?: boolean;
  highlightBadge?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  date: string;
}

export interface Volunteering {
  id: string;
  role: string;
  organization: string;
  category: string;
  description?: string;
}

export interface Award {
  id: string;
  title: string;
  date: string;
  organization: string;
  description: string;
  emoji: string;
}

export interface OrganizationInfo {
  name: string;
  logo: string;
  tagline: string;
  founder: string;
  founderTitle: string;
  email: string;
  website: string;
  description: string;
  mission: string;
  highlights: string[];
}
