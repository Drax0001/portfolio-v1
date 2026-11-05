import { ProjectType } from "@/type";
import Link from "next/link";
import { ArrowRight } from "pixelarticons/react";
import ProjectThumbnail from "./ProjectThumbnail";

interface Props {
  project: ProjectType;
}

export default function FeaturedProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block font-satoshi text-white"
    >
      <ProjectThumbnail
        title={project.title}
        image={project.image}
        className="aspect-[11/5] w-full rounded-xl bg-plum-deep"
        imageClassName="object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
      />
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-inter font-bold text-2xl tracking-[-0.02em] flex items-center gap-2">
          {project.title}
          <ArrowRight
            className="w-5 h-5 text-reddish opacity-0 -translate-x-2 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-hover:translate-x-0"
            aria-hidden
          />
        </h3>
        {project.year && (
          <span className="tabular text-sm text-gray-400">{project.year}</span>
        )}
      </div>
      <p className="mt-1 text-gray-300">{project.tagline ?? project.description}</p>
      {project.category && (
        <p className="mt-2 text-sm text-gray-400">{project.category}</p>
      )}
    </Link>
  );
}
