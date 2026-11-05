"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "pixelarticons/react";

export type IndexItem = {
  href: string;
  title: string;
  tagline: string;
  meta?: string;
  image?: StaticImageData;
};

interface Props {
  items: IndexItem[];
  tone?: "plum" | "servall";
}

// A list of projects as rows. On devices with a mouse, the row's screenshot
// follows the cursor; on touch devices it sits inline at the start of the row.
export default function ProjectIndex({ items, tone = "plum" }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const preview = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  // The follow loop only runs while a row is hovered
  const following = active !== null;
  useEffect(() => {
    if (!following) return;
    let raf = 0;
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (preview.current) {
        preview.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -110%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [following]);

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    target.current = { x: e.clientX, y: e.clientY };
    if (active === null) {
      // Snap to the cursor on entry instead of gliding in from the last spot
      pos.current = { ...target.current };
      if (preview.current) {
        preview.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -110%)`;
      }
    }
  };

  const accent = tone === "servall" ? "text-servall-lime" : "text-reddish";
  const hoverAccent =
    tone === "servall"
      ? "group-hover:text-servall-lime"
      : "group-hover:text-reddish";
  const rule = "border-white/10";
  const current = active !== null ? items[active] : null;

  return (
    <div onPointerMove={onMove} onPointerLeave={() => setActive(null)}>
      <ul className={`border-t ${rule}`}>
        {items.map((item, i) => (
          <li key={item.href} className={`border-b ${rule}`}>
            <Link
              href={item.href}
              onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
              onFocus={() => setActive(null)}
              className="group grid grid-cols-[1fr_auto] items-center gap-4 py-5 font-satoshi"
            >
              <span className="flex items-center gap-4 min-w-0">
                {item.image && (
                  <span className="hidden [@media(hover:none)]:block relative w-16 h-12 shrink-0 rounded-md overflow-hidden bg-black/20">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover object-top"
                    />
                  </span>
                )}
                <span className="min-w-0">
                  <span
                    className={`block font-inter font-bold text-2xl md:text-xl text-white tracking-[-0.02em] transition-[color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 ${hoverAccent}`}
                  >
                    {item.title}
                  </span>
                  <span className="block text-gray-400 text-sm mt-1 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                    {item.tagline}
                  </span>
                </span>
              </span>
              <span className="flex items-center gap-3 text-sm text-gray-400">
                {item.meta && <span className="tabular sm:hidden">{item.meta}</span>}
                <ArrowRight
                  className={`w-5 h-5 ${accent} -translate-x-1 opacity-60 transition-[transform,opacity] duration-300 group-hover:translate-x-0 group-hover:opacity-100`}
                  aria-hidden
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div
        ref={preview}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-50 w-72 aspect-[16/10] [@media(hover:none)]:hidden"
      >
        <div
          className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.55)] transition-[clip-path,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            clipPath: current?.image
              ? "inset(0% 0% 0% 0% round 12px)"
              : "inset(50% 50% 50% 50% round 12px)",
            opacity: current?.image ? 1 : 0,
          }}
        >
          {items.map(
            (item, i) =>
              item.image && (
                <Image
                  key={item.href}
                  src={item.image}
                  alt=""
                  fill
                  sizes="288px"
                  className="object-cover object-top transition-opacity duration-300"
                  style={{ opacity: active === i ? 1 : 0 }}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}
