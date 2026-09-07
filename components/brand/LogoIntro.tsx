"use client";

import { useEffect } from "react";
import { LogoIcon } from "./LogoIcon";

/**
 * Hero mark with the draw-on intro. Plays once per session (see the inline
 * script in app/[locale]/layout.tsx that sets data-intro="done").
 */
export function LogoIntro({ className }: { className?: string }) {
  useEffect(() => {
    const html = document.documentElement;
    if (html.dataset.intro === "done") return;
    const t = window.setTimeout(() => {
      html.dataset.intro = "done";
    }, 1600);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <span className={className}>
      <LogoIcon tone="light" intro className="logo-intro h-full w-auto" />
    </span>
  );
}
