import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  labelledBy: string;
  tone?: "cotton" | "charcoal" | "powder";
  className?: string;
  children: ReactNode;
  /** Remove the max-width container (full-bleed sections manage their own). */
  bleed?: boolean;
};

export function Section({ id, labelledBy, tone = "cotton", className, children, bleed }: Props) {
  const toneClass =
    tone === "charcoal"
      ? "on-dark bg-charcoal text-cotton"
      : tone === "powder"
        ? "bg-powder text-charcoal"
        : "bg-cotton text-charcoal";
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn(toneClass, "py-24 md:py-40", className)}>
      {bleed ? children : <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10">{children}</div>}
    </section>
  );
}

export function Eyebrow({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <p id={id} className={cn("eyebrow text-slate", className)}>
      {children}
    </p>
  );
}
