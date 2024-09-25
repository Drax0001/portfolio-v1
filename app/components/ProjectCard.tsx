"use client"

import { ProjectType } from "@/type"
import Image from "next/image"
import Link from "next/link"
import { arrowRight } from "@/constants/images"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface Props {
  title: string
  description: string
  image: any
  technologies: string[]
  features?: string[]
  demoLink?: string
  githubLink: string
}

export default function ProjectCard({
  description,
  title,
  technologies,
  image,
  githubLink,
}: Props) {
  return (
    <Link href={githubLink} target="_blank">
      <motion.div
        transition={{ duration: 0.9, ease: "linear" }}
        className="flex items-center gap-4 px-6 py-4 bg-purple-custom rounded-lg w-full max-w-4xl mx-auto p-4 hover:cursor-pointer hover:brightness-110 md:p-6 text-white font-satoshi md:flex-col"
      >
        <div className="h-24 w-24 rounded-lg bg-gray-500">
          <Image
            src={image}
            className="h-full w-full object-cover rounded-lg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-1.5 flex-1 md:items-center">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="text-gray-400 md:text-center">{description}</p>
          <p className="flex gap-4  flex-wrap md:justify-center">
            {technologies.map((tech) => (
              <span key={tech} className="">{`#${tech}`}</span>
            ))}
          </p>
        </div>
        <div className="bg-black-high-opacity p-2.5 rounded-md ">
          <ArrowRight className="w-6 h-6" />
        </div>
      </motion.div>
    </Link>
  )
}
