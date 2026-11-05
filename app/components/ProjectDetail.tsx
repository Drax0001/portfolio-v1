"use client";

import { ProjectType } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Lock,
  ChevronDown,
} from "pixelarticons/react";
import ImageModal from "./ImageModal";
import ProjectThumbnail from "./ProjectThumbnail";
import Footer from "./Footer";

interface Props {
  project: ProjectType;
}

type Shot = { src: any; alt: string };

export default function ProjectDetail({ project }: Props) {
  const [shot, setShot] = useState<Shot | null>(null);

  const hasDemo = project.demoLink && project.demoLink !== "#";
  const meta = [project.category, project.year].filter(Boolean).join(" · ");
  const features = project.features.slice(0, 5);
  const hasDeepDive =
    project.problem ||
    (project.stack && project.stack.length > 0) ||
    (project.challenges && project.challenges.length > 0) ||
    project.outcome ||
    (project.learnings && project.learnings.length > 0);

  return (
    <main className="min-h-screen font-satoshi">
      <div className="px-8 md:px-4 max-w-2xl mx-auto">
        <div className="py-6">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft
              className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1"
              aria-hidden
            />
            <span className="draw-link">All work</span>
          </Link>
        </div>

        <header className="pt-8 md:pt-4">
          {meta && <p className="text-sm text-gray-400">{meta}</p>}
          <h1 className="mt-2 font-inter font-extrabold text-6xl md:text-5xl sm:text-4xl tracking-[-0.03em] leading-[0.95] text-white">
            <span className="reveal-line">
              <span>
                {project.title}
                <span className="text-reddish">.</span>
              </span>
            </span>
          </h1>
          <p className="mt-5 text-xl md:text-lg text-gray-200 max-w-[40ch] leading-snug">
            {project.tagline ?? project.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {hasDemo && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-reddish text-plum-deep font-semibold rounded-full pl-5 pr-4 py-2.5 transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.97]"
              >
                {project.demoLabel || "Live demo"}
                <ExternalLink
                  className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
            )}
            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" aria-hidden />
                <span className="draw-link">Source on GitHub</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm text-gray-400">
                <Lock className="w-5 h-5" aria-hidden />
                {project.privateLabel ?? "Private client work"}
              </span>
            )}
          </div>
        </header>

        <button
          className="mt-12 block w-full cursor-zoom-in"
          onClick={() =>
            project.image && setShot({ src: project.image, alt: project.title })
          }
          disabled={!project.image}
          aria-label={`Enlarge ${project.title} screenshot`}
        >
          <ProjectThumbnail
            title={project.title}
            image={project.image}
            className="aspect-[16/10] w-full rounded-xl bg-plum-deep"
            imageClassName="object-top"
            priority
          />
        </button>

        <section className="mt-14">
          <p className="text-lg md:text-base text-gray-200 leading-relaxed max-w-[65ch]">
            {project.detailedDescription || project.description}
          </p>
          {project.role && (
            <p className="mt-4 text-sm text-gray-400 max-w-[65ch]">
              <span className="text-white">My role:</span> {project.role}
            </p>
          )}
        </section>

        <section className="mt-14">
          <h2 className="font-inter font-bold text-2xl tracking-[-0.02em] text-white">
            What it does
          </h2>
          <ul className="mt-5 border-t border-white/10">
            {features.map((f) => (
              <li
                key={f}
                className="py-3 border-b border-white/10 text-gray-300"
              >
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-400">
            <span className="text-white">Built with</span>{" "}
            {project.technologies.join(", ")}
          </p>
        </section>

        {project.images && project.images.length > 0 && (
          <section className="mt-14 grid grid-cols-2 sm:grid-cols-1 gap-4">
            {project.images.map((image, i) => (
              <button
                key={i}
                onClick={() =>
                  setShot({ src: image, alt: `${project.title} screenshot ${i + 1}` })
                }
                className="group relative aspect-[16/10] rounded-xl overflow-hidden bg-plum-deep cursor-zoom-in"
                aria-label={`Enlarge ${project.title} screenshot ${i + 1}`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(max-width: 639px) 100vw, 336px"
                  className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </button>
            ))}
          </section>
        )}

        {hasDeepDive && (
          <details className="group mt-14 border-y border-white/10">
            <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="font-inter font-bold text-2xl tracking-[-0.02em] text-white">
                Behind the build
              </span>
              <ChevronDown
                className="w-6 h-6 text-reddish transition-transform duration-300 group-open:rotate-180"
                aria-hidden
              />
            </summary>

            <div className="pb-8 flex flex-col gap-8 text-gray-300">
              {project.problem && (
                <div>
                  <h3 className="text-white font-semibold">The problem</h3>
                  <p className="mt-2 leading-relaxed max-w-[65ch]">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.stack && project.stack.length > 0 && (
                <div>
                  <h3 className="text-white font-semibold">Stack</h3>
                  <dl className="mt-2">
                    {project.stack.map((row) => (
                      <div
                        key={row.layer}
                        className="grid grid-cols-[8rem_1fr] sm:grid-cols-1 gap-x-4 py-2 text-sm"
                      >
                        <dt className="text-gray-400">{row.layer}</dt>
                        <dd className="text-gray-200">{row.tech}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <h3 className="text-white font-semibold">Hard parts</h3>
                  <ul className="mt-2 flex flex-col gap-4">
                    {project.challenges.map((c) => (
                      <li key={c.title}>
                        <p className="text-gray-100">{c.title}</p>
                        <p className="mt-1 text-sm leading-relaxed max-w-[65ch] text-gray-400">
                          {c.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(project.outcome ||
                (project.learnings && project.learnings.length > 0)) && (
                <div>
                  <h3 className="text-white font-semibold">What I took away</h3>
                  {project.outcome && (
                    <p className="mt-2 leading-relaxed max-w-[65ch]">
                      {project.outcome}
                    </p>
                  )}
                  {project.learnings && project.learnings.length > 0 && (
                    <ul className="mt-2 flex flex-col gap-2 text-sm text-gray-400">
                      {project.learnings.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </details>
        )}

        <Footer />
      </div>

      <ImageModal
        isOpen={!!shot}
        onClose={() => setShot(null)}
        src={shot?.src}
        alt={shot?.alt || ""}
        title={shot?.alt}
      />
    </main>
  );
}
