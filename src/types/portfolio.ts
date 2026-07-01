export type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'data_ai';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: ProjectCategory;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  year: string;
  title: string;
  institution: string;
  description: string;
  skills: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; description: string }[];
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  skillsCategories: SkillCategory[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  complementaryEducation: Education[];
}
