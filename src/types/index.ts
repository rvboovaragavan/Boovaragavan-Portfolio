export interface ProfileData {
  name: string;
  headline: string;
  subHeadline: string;
  location: string;
  email: string;
  phone: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUsername: string;
  linkedinUrl: string;
  instagramUrl: string;
  profileImage: string;
  resumePdf: string;
  bio: string;
  rotatingRoles: string[];
  specializations: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface Project {
  id: string;
  title: string;
  date: string;
  category: 'Embedded & IoT' | 'Software & AI' | 'Computer Vision' | 'System Security';
  description: string;
  fullDescription: string;
  technologies: string[];
  keyFeatures: string[];
  architecture?: string[];
  hardwareSpecs?: string[];
  image: string;
  screenshots?: string[];
  githubUrl: string | null; // null means "Repository Link Coming Soon"
  demoUrl?: string | null;
  status: 'Completed' | 'In Progress' | 'Prototype';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  highlight?: boolean;
  techTags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string | null;
  image?: string | null;
  logoUrl?: string;
  skillsLearned: string[];
}

export interface LeadershipItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  responsibilities: string[];
  impactBadge?: string;
  logoUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  details?: string[];
  logoUrl?: string;
}

export interface WebDevLearningArea {
  title: string;
  description: string;
  icon: string;
}

export interface WebDevStep {
  step: number;
  title: string;
  description: string;
  tools: string[];
}
