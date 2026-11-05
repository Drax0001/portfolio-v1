"use client";

import { useState } from "react";
import { Copy, Check, Phone, MapPin } from "pixelarticons/react";

const EMAIL = "berthnk@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="font-satoshi">
      <h2 className="font-inter font-extrabold text-4xl md:text-3xl tracking-[-0.03em] text-white">
        Say hello
      </h2>
      <p className="mt-3 text-gray-300 max-w-[44ch]">
        Open to new work. Email is the fastest way to reach me.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className="font-inter font-bold text-3xl md:text-2xl sm:text-xl tracking-[-0.02em] text-white hover:text-reddish transition-colors draw-link break-all"
        >
          {EMAIL}
        </a>
        <button
          onClick={copy}
          className="relative inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-gray-300 ring-1 ring-white/20 hover:ring-white/50 hover:text-white transition-[box-shadow,color] duration-200 active:scale-[0.96]"
          aria-live="polite"
        >
          {copied ? (
            <Check className="w-4 h-4 text-reddish" aria-hidden />
          ) : (
            <Copy className="w-4 h-4" aria-hidden />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-gray-300">
        <li>
          <a
            href="tel:+237673046720"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-5 h-5 text-reddish" aria-hidden />
            <span className="draw-link tabular">+237 673 046 720</span>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-reddish" aria-hidden />
          Douala, Cameroon
        </li>
      </ul>
    </section>
  );
}
