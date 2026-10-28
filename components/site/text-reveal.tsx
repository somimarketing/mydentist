"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/*
  The template revealed this line character by character. The Somi motion rule
  is to animate headings by word unless the whole line is one word, so the
  split is by word here: the same scroll-scrubbed settle, read as language
  rather than as a typewriter.
*/

interface TextRevealProps {
  text: string;
  className?: string;
}

function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}): ReactNode {
  /* Words further from the centre start lower and larger, then settle inward. */
  const mid = (total - 1) / 2;
  const distance = total > 1 ? Math.abs(index - mid) / mid : 0;

  const initialScale = 1 + distance * 0.35;
  const initialY = 24 + distance * 28;

  const normalized = total > 1 ? index / (total - 1) : 0;
  const start = normalized * 0.45;

  const adjusted = useTransform(progress, (p) => {
    const range = 1 - start;
    if (range <= 0) return p;
    return Math.max(0, Math.min(1, (p - start) / range));
  });

  const eased = useTransform(adjusted, (p) => {
    if (p <= 0) return 0;
    if (p >= 1) return 1;
    return p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
  });

  const scale = useTransform(eased, [0, 1], [initialScale, 1]);
  const y = useTransform(eased, [0, 1], [initialY, 0]);
  const opacity = useTransform(eased, [0, 1], [0, 1]);
  const filter = useTransform(eased, (p) => `blur(${(1 - p) * 10}px)`);

  return (
    <motion.span
      className="mr-[0.25em] inline-block will-change-transform"
      style={{ scale, y, opacity, filter, transformOrigin: "50% 100%" }}
    >
      {word}
    </motion.span>
  );
}

export function TextReveal({ text, className = "" }: TextRevealProps): ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 1.4", "start 0.2"],
  });

  const words = text.split(/\s+/).filter(Boolean);

  /* Reduced motion still gets the line, just without the scrubbed settle. */
  if (reduce) {
    return (
      <div ref={containerRef} className="flex min-h-48 items-center justify-center px-4">
        <p className={`text-center ${className}`}>{text}</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="flex min-h-48 items-center justify-center overflow-hidden px-4"
    >
      <p className={`text-center ${className}`}>
        {words.map((word, index) => (
          <Word
            key={`${word}-${index}`}
            word={word}
            index={index}
            total={words.length}
            progress={scrollYProgress}
          />
        ))}
      </p>
    </div>
  );
}
