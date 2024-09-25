"use client"

import Progress from "./Progress"
import { skillCategories } from "@/constants/skills"
import { motion } from "framer-motion"

export default function SkillsSection() {
  return (
    // <div className="w-full max-w-4xl mx-auto py-12 px-4 bg-gray-900">
    //   <h2 className="text-3xl font-bold text-center mb-8 text-white">Skills</h2>
    //   <p className="text-center text-gray-400 mb-12">
    //     The tools and technologies I use to bring my projects to life, along
    //     with my proficiency levels.
    //   </p>
    <div className="relative font-satoshi flex flex-wrap justify-between gap-y-6 md:flex-col ">
      {skillCategories.map((category) => (
        <motion.div
          whileHover={{
            // position: "absolute",
            scale: 1.25, // scale up slightly on hover
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          key={category.name}
          className="bg-purple-custom w-[48%] rounded-lg p-4 border-gray-700 md:w-full"
        >
          <div>
            <h1 className="text-lg font-medium text-white mb-2">
              {category.name}
            </h1>
          </div>
          <div className="space-y-4">
            {category.skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {skill.icon && skill.icon}
                    <span className="text-sm text-gray-300">{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {skill.proficiency}%
                  </span>
                </div>
                <Progress
                  value={skill.proficiency}
                  ariaLabel={`${skill.name} proficiency`}
                />
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
    // </div>
  )
}
