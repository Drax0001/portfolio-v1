import { ReactNode } from "react"

export type ProjectType = {
  title: string
  description: string
  image: any
  technologies: string[]
  features: string[]
  demoLink: string
  githubLink: string
}

export type SkillType = {
  name: string
  icon?: ReactNode
  proficiency: number
}

export type SkillCategoryType = {
  name: string
  skills: SkillType[]
}

export type ContactFormType = {
  name: string
  email: string
  message: string
}
