import { cn } from "@/lib/utils";
import { LogoIcon } from "./LogoIcon";

type Props = {
  /** "white" renders the horizontal white lockup (for charcoal), "black" the charcoal one (for cotton). */
  tone: "white" | "black";
  className?: string;
};

/**
 * Horizontal lockup: icon + "My" (Ancizar Serif italic) + "Dentist" (Darker Grotesque 800).
 * Mirrors mydentist-horizontal-white.svg / mydentist-horizontal-black.svg.
 * The wordmark is live type so it stays crisp at every size and in every language.
 */
export function Logo({ tone, className }: Props) {
  const ink = tone === "white" ? "text-cotton" : "text-charcoal";
  return (
    <span className={cn("inline-flex items-center gap-2.5", ink, className)}>
      <LogoIcon tone={tone === "white" ? "light" : "dark"} className="h-[1.55em] w-auto shrink-0" />
      <span className="flex items-baseline leading-none" aria-hidden="true">
        <span className="font-display text-[1.32em] italic tracking-[-0.02em]">My</span>
        <span className="font-sans text-[1.42em] font-extrabold tracking-[-0.025em]">Dentist</span>
      </span>
      <span className="sr-only">MyDentist</span>
    </span>
  );
}
