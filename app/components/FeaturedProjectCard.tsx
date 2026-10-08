"use client";

import { ProjectType } from "@/type";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import ProjectThumbnail from "./ProjectThumbnail";

interface Props {
  project: ProjectType;
}

export default function FeaturedProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group bg-purple-custom rounded-lg overflow-hidden text-white font-satoshi ring-1 ring-reddish/30 hover:ring-reddish hover:cursor-pointer transition-shadow duration-300"
      >
        <ProjectThumbnail
          title={project.title}
          image={project.image}
          className="h-48 sm:h-40 w-full"
          imageClassName="object-top transition-transform duration-500 group-hover:scale-105"
        />

        <div className="flex flex-col gap-3 p-6 sm:p-4">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            {project.category && (
              <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-reddish font-semibold">
                <Star className="w-3.5 h-3.5 fill-reddish" />
                {project.category}
              </span>
            )}
            {project.status && (
              <span className="text-xs text-gray-400">{project.status}</span>
            )}
          </div>

          <h2 className="font-inter font-bold text-2xl">{project.title}</h2>
          <p className="text-gray-400">{project.description}</p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="grid grid-cols-4 sm:grid-cols-2 gap-2 mt-1">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="bg-black-high-opacity rounded-lg px-3 py-2"
                >
                  <p className="font-inter font-bold text-reddish text-lg leading-tight">
                    {highlight.value}
                  </p>
                  <p className="text-xs text-gray-400 leading-snug">
                    {highlight.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-end justify-between gap-4 mt-1">
            <p className="flex gap-x-3 gap-y-1 flex-wrap text-sm text-gray-300">
              {project.technologies.slice(0, 6).map((tech) => (
                <span key={tech}>{`#${tech}`}</span>
              ))}
            </p>
            <span className="flex items-center gap-1 shrink-0 text-sm font-medium text-reddish group-hover:gap-2 transition-all duration-200">
              Case study
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
