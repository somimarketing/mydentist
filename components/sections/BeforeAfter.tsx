"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow, Section } from "@/components/layout/Section";
import { Img } from "@/components/ui/img";
import type { Dictionary } from "@/lib/i18n/types";

type Data = Dictionary["beforeAfter"];

export function BeforeAfter({ data }: { data: Data }) {
  return (
    <Section id="results" labelledBy="results-title">
      <Reveal>
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h2 id="results-title" className="mt-5 max-w-[20ch] font-display text-display-l text-balance">
          {data.headline}
        </h2>
        <p className="mt-6 max-w-[48ch] text-body text-slate">{data.support}</p>
      </Reveal>

      <ul className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-3 lg:gap-8">
        {data.cases.map((c, i) => (
          <Reveal as="li" key={c.title} delay={i * 0.08}>
            <CompareSlider item={c} labels={data} />
            <h3 className="mt-6 font-display text-display-s">{c.title}</h3>
            <p className="mt-2 text-caption text-slate">{c.detail}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

function CompareSlider({ item, labels }: { item: Data["cases"][number]; labels: Data }) {
  const [pos, setPos] = useState(50);
  const id = useId();

  return (
    <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-powder select-none">
      <Img image={item.after} sizes="(min-width: 1024px) 33vw, 100vw" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Img image={item.before} sizes="(min-width: 1024px) 33vw, 100vw" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      </div>

      <span className="pointer-events-none absolute top-4 left-4 rounded-sm bg-charcoal/80 px-2.5 py-1 font-sans text-[13px] font-bold tracking-[0.08em] text-cotton uppercase">
        {labels.beforeLabel}
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-sm bg-cotton/85 px-2.5 py-1 font-sans text-[13px] font-bold tracking-[0.08em] text-charcoal uppercase">
        {labels.afterLabel}
      </span>

      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-px bg-cotton" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-cotton text-charcoal shadow-[0_2px_12px_rgba(52,51,51,0.25)]">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
          </svg>
        </span>
      </div>

      <label htmlFor={id} className="sr-only">
        {labels.sliderLabel}: {item.title}
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        step={1}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-valuetext={`${pos}% ${labels.beforeLabel}`}
        className="compare-range absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-slate"
      />
    </figure>
  );
}
