import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  /** "dark" = charcoal mark with cotton tooth. "light" = cotton mark with charcoal tooth. */
  tone?: "dark" | "light";
  /** Adds the draw-on/fill intro structure (see globals.css .logo-intro). */
  intro?: boolean;
};

const SHAPE =
  "M50 0C86 0 100 14 100 50V62C100 98 86 112 50 112C14 112 0 98 0 62V50C0 14 14 0 50 0Z";
const TOOTH =
  "M34 36C24 36 21 47 24 57C27 67 30 75 32 87C33 94 41 94 42 87L45 75C46 71 54 71 55 75L58 87C59 94 67 94 68 87C70 75 73 67 76 57C79 47 76 36 66 36C60 36 56 40 50 40C44 40 40 36 34 36Z";
const SPARKLE =
  "M76 12C77 19 79 21 86 22C79 23 77 25 76 32C75 25 73 23 66 22C73 21 75 19 76 12Z";

/**
 * MyDentist icon (squircle option). Inline SVG so it can be recolored and animated.
 * Replace the three path constants with the production paths from ./SVG/icon-options when available.
 */
export function LogoIcon({ tone = "dark", intro = false, className, ...rest }: Props) {
  const mark = tone === "dark" ? "var(--color-charcoal)" : "var(--color-cotton)";
  const tooth = tone === "dark" ? "var(--color-cotton)" : "var(--color-charcoal)";
  return (
    <svg
      viewBox="0 0 100 112"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {intro ? (
        <path
          className="logo-outline"
          d={SHAPE}
          pathLength={1}
          fill="none"
          stroke={mark}
          strokeWidth={2.5}
          vectorEffect="non-scaling-stroke"
        />
      ) : null}
      <g className={intro ? "logo-fill" : undefined}>
        <path d={SHAPE} fill={mark} />
        <path d={TOOTH} fill={tooth} />
        <path d={SPARKLE} fill={tooth} />
      </g>
    </svg>
  );
}
