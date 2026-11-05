import { Download } from "pixelarticons/react";

const timeline = [
  {
    when: "2025 – now",
    what: "Software Developer",
    where: "ServAll Solutions, Douala",
  },
  {
    when: "2024 – 2025",
    what: "Software Developer",
    where: "Swagg, Buea",
  },
  {
    when: "2021 – 2025",
    what: "B.Tech, Software Engineering",
    where: "University of Buea",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="font-satoshi">
      <h2 className="font-inter font-extrabold text-4xl md:text-3xl tracking-[-0.03em] text-white">
        Resume
      </h2>

      <dl className="mt-8 border-t border-white/10">
        {timeline.map((row) => (
          <div
            key={row.when + row.where}
            className="grid grid-cols-[8rem_1fr] sm:grid-cols-1 gap-x-6 gap-y-1 py-4 border-b border-white/10"
          >
            <dt className="tabular text-sm text-gray-400 pt-0.5">{row.when}</dt>
            <dd>
              <span className="block text-white font-medium">{row.what}</span>
              <span className="block text-sm text-gray-400">{row.where}</span>
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-6 text-sm text-gray-400">
        French (native) · English (C1–C2)
      </p>

      <a
        href="/CV-Berthold.pdf"
        download="CV-Berthold.pdf"
        className="group mt-6 inline-flex items-center gap-2 bg-reddish text-plum-deep font-semibold rounded-full pl-4 pr-5 py-2.5 transition-[transform,filter] duration-200 hover:brightness-110 active:scale-[0.97]"
      >
        <Download
          className="w-5 h-5 transition-transform duration-200 group-hover:translate-y-0.5"
          aria-hidden
        />
        Download full CV
      </a>
    </section>
  );
}
