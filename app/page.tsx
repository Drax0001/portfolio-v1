"use client"

import Image from "next/image"
import ProfileCard from "./components/ProfileCard"
import Navbar from "./components/Navbar"
import { projects } from "@/constants/projects"
import ProjectCard from "./components/ProjectCard"
import SkillsSection from "./components/SkillsSection"
import Resume from "./components/ResumeSection"
import { motion } from "framer-motion"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
// import { Phone } from "lucide-react"
import { MdEmail, MdMyLocation, MdPhone } from "react-icons/md"

export default function Home() {
  return (
    <main className="bg-purple-custom min-h-screen ">
      <div className="px-8 max-w-2xl mx-auto flex flex-col gap-y-8">
        <Navbar />

        <motion.div
          className="flex flex-col gap-y-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* PROFILE CARD */}
          <ProfileCard />

          {/* PROJECTS SECTION */}
          <div
            id="projects"
            className="bg-black-high-opacity px-10 py-8 rounded-lg"
          >
            <h1 className="text-2xl text-reddish font-inter font-bold mb-4">
              Projects
            </h1>
            <div className="flex flex-col gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  description={project.description}
                  title={project.title}
                  technologies={project.technologies}
                  image={project.image}
                  githubLink={project.githubLink}
                />
              ))}
            </div>
          </div>

          {/* SKILLS SECTION */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            id="skills"
            className="bg-black-high-opacity px-10 py-8 rounded-lg"
          >
            <h1 className="text-2xl text-reddish font-inter font-bold mb-4">
              Skills
            </h1>
            <SkillsSection />
          </motion.div>

          {/* RESUME SECTION */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            id="resume"
            className="bg-black-high-opacity px-10 py-8 rounded-lg"
          >
            <h1 className="text-2xl text-reddish font-inter font-bold mb-4">
              Resume
            </h1>
            <Resume />
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            id="contact"
            className="bg-black-high-opacity px-10 py-8 rounded-lg"
          >
            <h1 className="text-2xl text-reddish font-inter font-bold mb-4">
              Contact
            </h1>
            <ContactForm />
            <div className="font-satoshi bg-purple-custom px-4 py-2 rounded-lg mt-6">
              <h1 className="text-xl font-inter font-bold mb-4">
                Personal Details
              </h1>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <MdPhone className="text-green-500" size={20} />
                  <span>Phone: +237673046720</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdEmail className="text-red-500" size={20} />
                  <span>Email: berthnk@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdMyLocation className="text-yellow-500" size={20} />
                  <span>Address: Buea, SouthWest - Cameroon</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <Footer />
        </motion.div>
      </div>
    </main>
  )
}
