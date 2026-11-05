"use client";

import Image from "next/image";
import { useState } from "react";
import { Github, Linkedin, TwitterBird, Download } from "pixelarticons/react";
import { profilePic } from "@/constants/images";
import ImageModal from "./ImageModal";

const socials = [
  { href: "https://github.com/Drax0001", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/nkengni-berthold-46685b244/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "https://x.com/BertholdNkengni", label: "X", Icon: TwitterBird },
];

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="pt-14 pb-16 md:pt-8 md:pb-12 font-satoshi">
      <button
        onClick={() => setOpen(true)}
        className="group block w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/80 hover:ring-reddish transition-[box-shadow,transform] duration-300 hover:-rotate-3 mb-8"
        aria-label="Open profile picture"
      >
        <Image
          src={profilePic}
          alt="Mboneng N. Berthold"
          className="w-full h-full object-cover"
          priority
        />
      </button>

      <h1 className="font-inter font-extrabold text-white text-7xl md:text-[3.25rem] leading-[0.95] tracking-[-0.03em]">
        <span className="reveal-line">
          <span>Mboneng N.</span>
        </span>
        <span className="reveal-line">
          <span>
            Berthold<span className="text-reddish">.</span>
          </span>
        </span>
      </h1>

      <p className="mt-6 text-xl md:text-lg text-gray-200 max-w-[34ch] leading-snug">
        Fullstack web and mobile developer in Douala. I co-founded{" "}
        <a href="#servall" className="text-servall-lime draw-link">
          ServAll Solutions
        </a>{" "}
        and write every line of code we ship.
      </p>

      <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        {socials.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Icon
                className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5"
                aria-hidden
              />
              <span className="draw-link">{label}</span>
            </a>
          </li>
        ))}
        <li>
          <a
            href="/CV-Berthold.pdf"
            download="CV-Berthold.pdf"
            className="group flex items-center gap-2 text-reddish hover:text-white transition-colors"
          >
            <Download
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-y-0.5"
              aria-hidden
            />
            <span className="draw-link">Download CV</span>
          </a>
        </li>
      </ul>

      <ImageModal
        isOpen={open}
        onClose={() => setOpen(false)}
        src={profilePic}
        alt="Mboneng N. Berthold"
        title="Mboneng N. Berthold"
      />
    </section>
  );
}
