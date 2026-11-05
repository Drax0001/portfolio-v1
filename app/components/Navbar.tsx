"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Chess } from "pixelarticons/react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#servall", label: "ServAll" },
  { href: "/#resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

function useDoualaTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Africa/Douala",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Navbar() {
  const time = useDoualaTime();

  return (
    <header className="sticky top-0 z-40 -mx-8 md:-mx-4 px-8 md:px-4 bg-purple-custom/85 backdrop-blur-md">
      <nav className="flex items-center justify-between gap-4 py-4 font-satoshi text-sm">
        <Link
          href="/"
          className="flex items-center gap-2 font-inter font-bold text-white"
          aria-label="Berthold's Corner, home"
        >
          <Chess className="w-6 h-6 text-reddish" aria-hidden />
          <span className="sm:hidden">Berthold&apos;s Corner</span>
        </Link>

        <ul className="flex items-center gap-5 sm:gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="draw-link text-gray-300 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <p
          className="tabular text-gray-400 md:hidden"
          aria-label="Local time in Douala"
        >
          Douala{" "}
          <span className="text-white">{time ?? "--:--"}</span>
        </p>
      </nav>
    </header>
  );
}
