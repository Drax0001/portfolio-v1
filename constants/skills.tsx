import { SkillCategoryType } from "@/type"
import {
  SiJavascript,
  SiTypescript,
  SiKotlin,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiCanva,
  SiChatbot,
} from "react-icons/si"
import { Brain, Clock, Figma, Lightbulb, Users } from "lucide-react"
import { chatgpt } from "./images"
import Image from "next/image"

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
        name: "Kotlin",
        icon: <SiKotlin className="w-6 h-6 " color="#a855f7" />,
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
        name: "ChatGPT",
        icon: <Image src={chatgpt} className="w-7 h-7 " alt="" />,
        proficiency: 90,
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
  {
    name: "Design",
    skills: [
      {
        name: "Figma",
        icon: <SiFigma className="w-6 h-6 " color="#c084fc" />,
        proficiency: 70,
      },
      {
        name: "Canva",
        icon: <SiCanva className="w-6 h-6 " color="#3b82f6" />,
        proficiency: 75,
      },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      {
        name: "Problem Solving",
        icon: <Brain className="w-6 h-6" color="#4ade80" />,
        proficiency: 90,
      },
      {
        name: "Teamwork",
        icon: <Users className="w-6 h-6" color="#60a5fa" />,
        proficiency: 95,
      },
      {
        name: "Creativity",
        icon: <Lightbulb className="w-6 h-6 " color="#facc15" />,
        proficiency: 80,
      },
      {
        name: "Time Management",
        icon: <Clock className="w-6 h-6" color="#f87171" />,
        proficiency: 75,
      },
    ],
  },
]
