"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  /** Delay in seconds, used for a quiet stagger between siblings. */
  delay?: number;
  as?: "div" | "li";
  className?: string;
  style?: CSSProperties;
  id?: string;
};

/**
 * Scroll-in reveal: 20px rise, 700ms, ease-out-expo, once.
 * CSS-driven (see .reveal in globals.css); reduced-motion users get the static page.
 */
export function Reveal({ children, delay = 0, as = "div", className, style, id }: Props) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref}
      id={id}
      className={cn("reveal", shown && "is-shown", className)}
      style={{ ...style, transitionDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </Tag>
  );
}
