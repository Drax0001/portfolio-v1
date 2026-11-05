import { Chess } from "pixelarticons/react";

export default function Footer() {
  return (
    <footer className="mt-24 md:mt-16 py-8 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap font-satoshi text-sm text-gray-400">
      <p className="flex items-center gap-2">
        <Chess className="w-4 h-4 text-reddish" aria-hidden />
        Berthold&apos;s Corner · 2026
      </p>
      <a
        href="https://www.chess.com/member/berthold_draxler"
        target="_blank"
        rel="noopener noreferrer"
        className="draw-link hover:text-white transition-colors"
      >
        Fancy a game of chess?
      </a>
    </footer>
  );
}
