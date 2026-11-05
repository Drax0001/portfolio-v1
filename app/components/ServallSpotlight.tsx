"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const stats = [
  { value: "3", label: "SaaS products live" },
  { value: "FR + EN", label: "bilingual by design" },
  { value: "MoMo", label: "MTN & Orange Money built in" },
  { value: "Offline", label: "first, for weak networks" },
];

const products = [
  {
    name: "ClientExpress",
    tagline: "AI assistant that answers customers from a business's own documents.",
    tags: ["RAG", "Next.js", "Voice"],
    live: "https://clientexpress.servallsolutions.com",
    study: "/projects/client-express",
  },
  {
    name: "Izibosh",
    tagline:
      "Quiz practice for Cameroonian secondary students, with live duels and an AI tutor.",
    tags: ["PWA", "Offline", "AI tutor"],
    live: "https://izibosh.servallsolutions.com",
    study: "/projects/izibosh",
  },
  {
    name: "Kordine",
    tagline:
      "A private school's whole year in one tool: grades, report cards, fees and Mobile Money.",
    tags: ["NestJS", "Next.js", "Mobile Money"],
    live: "https://kordine.servallsolutions.com",
    study: "/projects/kordine",
  },
];

export default function ServallSpotlight() {
  return (
    <motion.section
      id="servall"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-satoshi rounded-lg overflow-hidden text-white ring-1 ring-[#8be21b]/40 bg-gradient-to-br from-[#06231a] via-[#04170f] to-[#04170f]"
    >
      <div className="px-8 sm:px-5 py-8 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="self-start text-xs uppercase tracking-wider font-semibold text-[#04170f] bg-[#8be21b] rounded-full px-3 py-1">
            Co-founder · Sole developer
          </span>
          <h2 className="font-inter font-bold text-3xl leading-tight">
            ServAll Solutions
          </h2>
          <p className="font-inter text-lg font-semibold text-[#8be21b]">
            Useful software, built to last.
          </p>
          <p className="text-gray-300">
            A software agency I co-founded in Cameroon. I build, deploy and
            run everything we ship: three SaaS products we operate ourselves,
            and custom software for clients, made for patchy networks, Mobile
            Money and two languages.
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-2 gap-2">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 rounded-lg px-3 py-2">
              <p className="font-inter font-bold text-[#8be21b] text-lg leading-tight">
                {s.value}
              </p>
              <p className="text-xs text-gray-400 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-inter font-semibold text-white">
            Products we build and run
          </h3>
          {products.map((p) => (
            <div
              key={p.name}
              className="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-4 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h4 className="font-inter font-bold text-xl">{p.name}</h4>
                <span className="flex items-center gap-1.5 text-xs text-[#8be21b]">
                  <span className="h-2 w-2 rounded-full bg-[#8be21b] animate-pulse" />
                  Live
                </span>
              </div>
              <p className="text-gray-300 text-sm">{p.tagline}</p>
              <p className="flex gap-x-3 flex-wrap text-xs text-gray-400">
                {p.tags.map((t) => (
                  <span key={t}>{`#${t}`}</span>
                ))}
              </p>
              <div className="flex gap-4 flex-wrap text-sm font-medium mt-1">
                <Link
                  href={p.study}
                  className="flex items-center gap-1 text-[#8be21b] hover:gap-2 transition-all"
                >
                  Case study <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-white"
                >
                  Visit live <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-400">
          For clients, ServAll also built the official{" "}
          <Link
            href="/projects/vizball"
            className="text-[#8be21b] underline underline-offset-2"
          >
            Vizball platform
          </Link>{" "}
          and its browser game.
        </p>

        <div className="flex gap-3 flex-wrap">
          <a
            href="https://servallsolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#8be21b] text-[#04170f] font-semibold rounded-lg px-4 py-2 hover:brightness-110 transition"
          >
            Visit servallsolutions.com <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="mailto:contact@servallsolutions.com"
            className="rounded-lg px-4 py-2 ring-1 ring-white/20 text-gray-200 hover:text-white hover:ring-white/50 transition"
          >
            Start a project
          </a>
        </div>
      </div>
    </motion.section>
  );
}
