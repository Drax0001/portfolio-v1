"use client";

import { ProjectType } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ImageModal from "./ImageModal";
import ProjectThumbnail from "./ProjectThumbnail";

interface Props {
  project: ProjectType;
}

export default function ProjectDetail({ project }: Props) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<{
    src: any;
    alt: string;
    title: string;
  } | null>(null);

  const handleBackClick = () => {
    router.back();
  };

  const isDemoAvailable = project.demoLink && project.demoLink !== "#";

  const openImageModal = (src: any, alt: string, title: string) => {
    setSelectedImage({ src, alt, title });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Animation variants for staggered content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Shared styles for the case study sections
  const sectionClass =
    "bg-black-high-opacity px-10 py-8 rounded-lg md:px-6 md:py-6 sm:px-4 sm:py-4";
  const sectionHover = {
    boxShadow: "0px 0px 20px rgba(241, 81, 82, 0.1)",
    transition: { duration: 0.3 },
  };
  const headingClass =
    "text-2xl font-inter font-bold text-reddish mb-4 md:text-xl";

  return (
    <main className="bg-purple-custom min-h-screen">
      <div className="px-8 max-w-2xl mx-auto md:px-6 sm:px-4">
        {/* Header with back navigation */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-8 md:py-6"
        >
          <div className="flex items-center justify-between mb-6 md:flex-col md:gap-4 md:items-start">
            <motion.button
              onClick={handleBackClick}
              className="flex items-center gap-2 text-white hover:text-reddish transition-colors duration-300 font-satoshi"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </motion.button>

            <div className="flex items-center gap-4 md:w-full md:justify-start sm:flex-col sm:gap-3">
              {project.githubLink ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-black-high-opacity hover:bg-opacity-40 text-white px-4 py-2 rounded-lg transition-all duration-300 font-satoshi sm:w-full sm:justify-center"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </Link>
                </motion.div>
              ) : (
                <div className="flex items-center gap-2 bg-black-high-opacity text-gray-300 px-4 py-2 rounded-lg font-satoshi sm:w-full sm:justify-center">
                  <Lock className="w-5 h-5" />
                  Private Client Work
                </div>
              )}

              {isDemoAvailable ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-reddish hover:bg-opacity-80 text-white px-4 py-2 rounded-lg transition-all duration-300 font-satoshi sm:w-full sm:justify-center"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {project.demoLabel || "Live Demo"}
                  </Link>
                </motion.div>
              ) : (
                <div className="flex items-center gap-2 bg-gray-600 text-gray-300 px-4 py-2 rounded-lg font-satoshi cursor-not-allowed sm:w-full sm:justify-center">
                  <ExternalLink className="w-5 h-5" />
                  Demo Coming Soon
                </div>
              )}
            </div>
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-inter font-bold text-white mb-2 md:text-3xl sm:text-2xl"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg font-satoshi md:text-base"
          >
            {project.description}
          </motion.p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <div
            className={`w-full rounded-lg overflow-hidden shadow-lg ${
              project.image ? "cursor-pointer" : ""
            }`}
            onClick={() =>
              project.image &&
              openImageModal(
                project.image,
                project.title,
                `${project.title} - Main Image`
              )
            }
          >
            <ProjectThumbnail
              title={project.title}
              image={project.image}
              className="w-full h-80 md:h-64 sm:h-48 bg-black-high-opacity"
              imageClassName="object-top transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 pb-8"
        >
          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="bg-black-high-opacity px-10 py-8 rounded-lg md:px-6 md:py-6 sm:px-4 sm:py-4"
            whileHover={{
              boxShadow: "0px 0px 20px rgba(241, 81, 82, 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <h2 className="text-2xl font-inter font-bold text-reddish mb-4 md:text-xl">
              About This Project
            </h2>
            <p className="text-gray-300 font-satoshi leading-relaxed md:text-sm">
              {project.detailedDescription || project.description}
            </p>
          </motion.div>

          {/* At a glance */}
          {(project.role || project.timeline || project.highlights) && (
            <motion.div
              variants={itemVariants}
              className={sectionClass}
              whileHover={sectionHover}
            >
              <h2 className={headingClass}>At a Glance</h2>
              {project.highlights && project.highlights.length > 0 && (
                <div className="grid grid-cols-4 sm:grid-cols-2 gap-3 mb-6">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight.label}
                      className="bg-purple-custom rounded-lg px-4 py-3"
                    >
                      <p className="font-inter font-bold text-reddish text-2xl leading-tight md:text-xl">
                        {highlight.value}
                      </p>
                      <p className="text-sm text-gray-400 font-satoshi leading-snug">
                        {highlight.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <dl className="flex flex-col gap-3 font-satoshi md:text-sm">
                {[
                  { term: "Role", value: project.role },
                  { term: "Timeline", value: project.timeline },
                  { term: "Status", value: project.status },
                ]
                  .filter((row) => row.value)
                  .map((row) => (
                    <div
                      key={row.term}
                      className="grid grid-cols-[6rem_1fr] gap-3 sm:grid-cols-1 sm:gap-0"
                    >
                      <dt className="text-white font-semibold">{row.term}</dt>
                      <dd className="text-gray-300">{row.value}</dd>
                    </div>
                  ))}
              </dl>
            </motion.div>
          )}

          {/* The Problem */}
          {project.problem && (
            <motion.div
              variants={itemVariants}
              className={sectionClass}
              whileHover={sectionHover}
            >
              <h2 className={headingClass}>The Problem</h2>
              <p className="text-gray-300 font-satoshi leading-relaxed md:text-sm">
                {project.problem}
              </p>
            </motion.div>
          )}

          {/* Technologies */}
          <motion.div
            variants={itemVariants}
            className="bg-black-high-opacity px-10 py-8 rounded-lg md:px-6 md:py-6 sm:px-4 sm:py-4"
            whileHover={{
              boxShadow: "0px 0px 20px rgba(241, 81, 82, 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <h2 className="text-2xl font-inter font-bold text-reddish mb-4 md:text-xl">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-purple-custom text-white px-4 py-2 rounded-lg font-satoshi text-sm cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            {project.stack && project.stack.length > 0 && (
              <div className="mt-6 flex flex-col divide-y divide-white/10 font-satoshi md:text-sm">
                {project.stack.map((row) => (
                  <div
                    key={row.layer}
                    className="grid grid-cols-[8rem_1fr] gap-3 py-3 sm:grid-cols-1 sm:gap-1"
                  >
                    <p className="text-reddish font-semibold">{row.layer}</p>
                    <div>
                      <p className="text-white">{row.tech}</p>
                      {row.detail && (
                        <p className="text-gray-400 text-sm">{row.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="bg-black-high-opacity px-10 py-8 rounded-lg md:px-6 md:py-6 sm:px-4 sm:py-4"
            whileHover={{
              boxShadow: "0px 0px 20px rgba(241, 81, 82, 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <h2 className="text-2xl font-inter font-bold text-reddish mb-4 md:text-xl">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex items-start gap-3 text-gray-300 font-satoshi md:text-sm"
                >
                  <motion.span
                    className="text-reddish mt-1 text-lg"
                    whileHover={{ scale: 1.2 }}
                  >
                    •
                  </motion.span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <motion.div
              variants={itemVariants}
              className={sectionClass}
              whileHover={sectionHover}
            >
              <h2 className={headingClass}>Challenges & Solutions</h2>
              <div className="flex flex-col gap-5">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={challenge.title}
                    className="border-l-2 border-reddish pl-4 font-satoshi"
                  >
                    <h3 className="text-white font-semibold mb-1">
                      <span className="text-reddish mr-2">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {challenge.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed md:text-sm">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Outcome & Lessons */}
          {(project.outcome || project.learnings) && (
            <motion.div
              variants={itemVariants}
              className={sectionClass}
              whileHover={sectionHover}
            >
              <h2 className={headingClass}>Outcome & Lessons</h2>
              {project.outcome && (
                <p className="text-gray-300 font-satoshi leading-relaxed md:text-sm mb-4">
                  {project.outcome}
                </p>
              )}
              {project.learnings && project.learnings.length > 0 && (
                <ul className="space-y-3">
                  {project.learnings.map((learning) => (
                    <li
                      key={learning}
                      className="flex items-start gap-3 text-gray-300 font-satoshi md:text-sm"
                    >
                      <span className="text-reddish mt-1 text-lg">•</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          )}

          {/* Project Gallery */}
          {project.images && project.images.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="bg-black-high-opacity px-10 py-8 rounded-lg md:px-6 md:py-6 sm:px-4 sm:py-4"
              whileHover={{
                boxShadow: "0px 0px 20px rgba(241, 81, 82, 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <h2 className="text-2xl font-inter font-bold text-reddish mb-4 md:text-xl">
                Project Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative h-48 md:h-40 sm:h-32 rounded-lg overflow-hidden bg-black-high-opacity cursor-pointer"
                    onClick={() =>
                      openImageModal(
                        image,
                        `${project.title} - Image ${index + 1}`,
                        `${project.title} - Gallery Image ${index + 1}`
                      )
                    }
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover object-top transition-transform duration-300 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Links Section */}
          <motion.div
            variants={itemVariants}
            className="bg-black-high-opacity px-10 py-8 rounded-lg md:px-6 md:py-6 sm:px-4 sm:py-4"
            whileHover={{
              boxShadow: "0px 0px 20px rgba(241, 81, 82, 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <h2 className="text-2xl font-inter font-bold text-reddish mb-4 md:text-xl">
              Project Links
            </h2>
            <div className="flex flex-col sm:flex-col gap-4">
              {project.githubLink ? (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-purple-custom hover:bg-opacity-80 text-white px-6 py-3 rounded-lg transition-all duration-300 font-satoshi w-full"
                  >
                    <Github className="w-5 h-5" />
                    View Source Code
                  </Link>
                </motion.div>
              ) : (
                <div className="flex items-center justify-center gap-2 bg-purple-custom text-gray-300 px-6 py-3 rounded-lg font-satoshi w-full">
                  <Lock className="w-5 h-5" />
                  Source code is private client work
                </div>
              )}

              {isDemoAvailable ? (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-reddish hover:bg-opacity-80 text-white px-6 py-3 rounded-lg transition-all duration-300 font-satoshi w-full"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {project.demoLabel || "Try Live Demo"}
                  </Link>
                </motion.div>
              ) : (
                <div className="flex items-center justify-center gap-2 bg-gray-600 text-gray-300 px-6 py-3 rounded-lg font-satoshi cursor-not-allowed w-full">
                  <ExternalLink className="w-5 h-5" />
                  Demo Coming Soon
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeImageModal}
        src={selectedImage?.src}
        alt={selectedImage?.alt || ""}
        title={selectedImage?.title}
      />
    </main>
  );
}
