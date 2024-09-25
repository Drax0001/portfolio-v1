import { ProjectType } from "@/type"
import { alumConnect, elvaBookshop, plantDoctor } from "./images"

export const projects: ProjectType[] = [
  {
    title: "AlumConnect",
    description:
      "Alumni Mentorship Platform for the University of Buea (Unofficial)",
    image: alumConnect,
    technologies: ["Next.js", "Typescript", "PostgreSQL"],
    features: ["Event Management", "Responsive design", "Easy to use"],
    demoLink: "#",
    githubLink: "https://github.com/Drax0001/AlumConnect",
  },
  {
    title: "The Plant Doctor",
    description:
      "plant disease disease detection app. Also a plant solution app",
    image: plantDoctor,
    technologies: ["Kotlin", "Firebase"],
    features: [
      "Plant Disease Detection",
      "Disease Encyclopedia",
      "Connection with Doctors",
    ],
    demoLink: "#",
    githubLink: "https://github.com/Drax0001/The-Plant-Doctor",
  },
  {
    title: "Elva Bookshop",
    description: "Bookshop solution for a local business (Elva Bookshop)",
    image: elvaBookshop,
    technologies: ["React.js", "Express.js", "MongoDB"],
    features: [
      "AI-powered resume generation",
      "Custom templates",
      "ATS optimization",
    ],
    demoLink: "#",
    githubLink: "https://github.com/Drax0001/Elva-Bookshop-Frontend",
  },
]
