export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string;
  image: string;
  githubUrl?: string;
  externalUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  iconType?: 'boxicon' | 'iconify' | 'image';
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

