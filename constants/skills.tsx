import { SkillCategoryType } from "@/type";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiPython,
} from "react-icons/si";

export const skillCategories: SkillCategoryType[] = [
  {
    name: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="w-6 h-6" color="#facc15" />,
        proficiency: 90,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-6 h-6 " color="#60a5fa" />,
        proficiency: 85,
      },
      {
        name: "Python",
        icon: <SiPython className="w-6 h-6 " color="#60a5fa" />,
        proficiency: 75,
      },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      {
        name: "React.js",
        icon: <SiReact className="w-6 h-6 " color="#22d3ee" />,
        proficiency: 90,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-6 h-6 " color="#fff" />,
        proficiency: 85,
      },
      {
        name: "React Native",
        icon: <SiReact className="w-6 h-6 " color="#22d3ee" />,
        proficiency: 85,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="w-6 h-6 " color="#9ca3af" />,
        proficiency: 80,
      },
    ],
  },
  {
    name: "Tools",
    skills: [
      {
        name: "Git",
        icon: <SiGit className="w-6 h-6 " color="#f97316" />,
        proficiency: 80,
      },

      {
        name: "GitHub",
        icon: <SiGithub className="w-6 h-6 " color="#fff" />,
        proficiency: 80,
      },
      {
        name: "Figma",
        icon: <SiFigma className="w-6 h-6 " color="#c084fc" />,
        proficiency: 70,
      },
    ],
  },
  {
    name: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-6 h-6 " color="#22c55e" />,
        proficiency: 80,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-6 h-6 " color="#60a5fa" />,
        proficiency: 75,
      },
    ],
  },
];
