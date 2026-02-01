import type { SkillBadgeIconInterface } from "./skill-badge";

export interface ServiceInterface {
  number: string;
  name: string;
  description: string;
  features: string[];
  technologies: SkillBadgeIconInterface[];
}

export const services: ServiceInterface[] = [];
