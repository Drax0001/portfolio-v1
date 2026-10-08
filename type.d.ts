import { ReactNode } from "react";

export type ProjectType = {
  title: string;
  slug: string;
  description: string;
  detailedDescription?: string;
  // Thumbnail; when missing a branded placeholder is rendered instead
  image?: any;
  images?: any[];
  technologies: string[];
  features: string[];
  demoLink: string;
  demoLabel?: string;
  // Omit for private client work
  githubLink?: string;
  // Case study fields, used by featured projects
  featured?: boolean;
  category?: string;
  role?: string;
  timeline?: string;
  status?: string;
  highlights?: ProjectHighlightType[];
  problem?: string;
  stack?: ProjectStackRowType[];
  challenges?: ProjectChallengeType[];
  outcome?: string;
  learnings?: string[];
};

export type ProjectHighlightType = {
  value: string;
  label: string;
};

export type ProjectStackRowType = {
  layer: string;
  tech: string;
  detail?: string;
};

export type ProjectChallengeType = {
  title: string;
  description: string;
};

export type SkillType = {
  name: string;
  icon?: ReactNode;
  proficiency: number;
};

export type SkillCategoryType = {
  name: string;
  skills: SkillType[];
};

export type ContactFormType = {
  name: string;
  email: string;
  message: string;
};
