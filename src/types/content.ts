export interface SocialLink {
  label: string;
  url: string;
}

export interface ProfileContent {
  name: string;
  title: string;
  headline: string;
  summary: string;
  about: string[];
  location: string;
  socials: SocialLink[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  externalUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactContent {
  name: string;
  email: string;
  phone: string;
  socials: SocialLink[];
}
