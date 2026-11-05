"use client";

import ProfileCard from "./components/ProfileCard";
import Navbar from "./components/Navbar";
import { projects } from "@/constants/projects";
import ProjectCard from "./components/ProjectCard";
import FeaturedProjectCard from "./components/FeaturedProjectCard";
import ProjectFilter from "./components/ProjectFilter";
import SkillsSection from "./components/SkillsSection";
import Resume from "./components/ResumeSection";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import { useState, useMemo } from "react";
import { MdEmail, MdMyLocation, MdPhone } from "react-icons/md";

export default function Home() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );

  // Extract unique technologies from all projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on selected technologies
  const filteredProjects = useMemo(() => {
    if (selectedTechnologies.length === 0) {
      return projects;
    }
    return projects.filter((project) =>
      project.technologies.some((tech) => selectedTechnologies.includes(tech))
    );
  }, [selectedTechnologies]);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

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

            <ProjectFilter
              technologies={allTechnologies}
              selectedTechnologies={selectedTechnologies}
              onFilterChange={setSelectedTechnologies}
            />

            <div className="flex flex-col gap-8">
              {filteredProjects.length > 0 ? (
                <>
                  {featuredProjects.length > 0 && (
                    <div className="flex flex-col gap-6">
                      <h2 className="text-lg font-inter font-semibold text-white">
                        Featured Work
                      </h2>
                      {featuredProjects.map((project) => (
                        <FeaturedProjectCard
                          key={project.title}
                          project={project}
                        />
                      ))}
                    </div>
                  )}

                  {otherProjects.length > 0 && (
                    <div className="flex flex-col gap-8">
                      {featuredProjects.length > 0 && (
                        <h2 className="text-lg font-inter font-semibold text-white">
                          More Projects
                        </h2>
                      )}
                      {otherProjects.map((project) => (
                        <ProjectCard
                          key={project.title}
                          description={project.description}
                          title={project.title}
                          slug={project.slug}
                          technologies={project.technologies}
                          image={project.image}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400 text-lg font-satoshi">
                    No projects found matching the selected technologies.
                  </p>
                  <button
                    onClick={() => setSelectedTechnologies([])}
                    className="mt-4 px-4 py-2 bg-reddish text-white rounded-lg hover:bg-opacity-80 transition-colors duration-200 font-satoshi"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
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
            <p className="font-satoshi text-gray-400 mb-4">
              Open to new opportunities. The quickest way to reach me is by
              email or phone.
            </p>
            <div className="font-satoshi bg-purple-custom p-5 rounded-lg flex flex-col gap-4">
              <a
                href="mailto:berthnk@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white"
              >
                <MdEmail className="text-red-500 shrink-0" size={22} />
                <span>berthnk@gmail.com</span>
              </a>
              <a
                href="tel:+237673046720"
                className="flex items-center gap-3 text-gray-300 hover:text-white"
              >
                <MdPhone className="text-green-500 shrink-0" size={22} />
                <span>+237 673 046 720</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MdMyLocation className="text-yellow-500 shrink-0" size={22} />
                <span>Douala, Cameroon</span>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <Footer />
        </motion.div>
      </div>
    </main>
  );
}
