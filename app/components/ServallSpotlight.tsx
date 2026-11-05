import Link from "next/link";
import { ExternalLink } from "pixelarticons/react";
import {
  clientExpressHero,
  iziboshThumbnail,
  kordineThumbnail,
} from "@/constants/images";
import ProjectIndex from "./ProjectIndex";

const products = [
  {
    href: "/projects/client-express",
    title: "ClientExpress",
    tagline: "AI assistant that answers customers from your own documents.",
    meta: "Live",
    image: clientExpressHero,
  },
  {
    href: "/projects/izibosh",
    title: "Izibosh",
    tagline: "Exam practice with live duels and an AI tutor.",
    meta: "Live",
    image: iziboshThumbnail,
  },
  {
    href: "/projects/kordine",
    title: "Kordine",
    tagline: "School management, with fees paid by Mobile Money.",
    meta: "Live",
    image: kordineThumbnail,
  },
];

export default function ServallSpotlight() {
  return (
    <section
      id="servall"
      className="font-satoshi -mx-8 md:-mx-4 px-8 md:px-4 py-14 md:py-10 bg-servall-ink text-white rounded-2xl md:rounded-xl"
    >
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <h2 className="font-inter font-extrabold text-5xl md:text-4xl tracking-[-0.03em] leading-none">
          ServAll
          <br />
          Solutions<span className="text-servall-lime">.</span>
        </h2>
        <p className="text-sm text-servall-lime/80 max-w-[18ch] text-right sm:text-left">
          Co-founder and sole developer
        </p>
      </div>

      <p className="mt-6 text-lg md:text-base text-[#cfe3d6] max-w-[52ch] leading-relaxed">
        Useful software, built to last. We build and run our own SaaS
        products, and build for clients to the same standard: made for patchy
        networks, Mobile Money and two languages.
      </p>

      <div className="mt-10">
        <ProjectIndex items={products} tone="servall" />
      </div>

      <p className="mt-6 text-sm text-[#a9c4b4]">
        Client work includes the official{" "}
        <Link href="/projects/vizball" className="text-white draw-link">
          Vizball platform
        </Link>{" "}
        and its browser game.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href="https://servallsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 bg-servall-lime text-servall-ink font-semibold rounded-full pl-5 pr-4 py-2.5 transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.97]"
        >
          servallsolutions.com
          <ExternalLink
            className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </a>
        <a
          href="mailto:contact@servallsolutions.com"
          className="text-sm text-[#cfe3d6] hover:text-white draw-link"
        >
          contact@servallsolutions.com
        </a>
      </div>
    </section>
  );
}
