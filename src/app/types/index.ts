export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  color: string;
}

export type SectionId = "home" | "sobre" | "skills" | "projetos" | "contato";