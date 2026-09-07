import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow, Section } from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/types";

export function Process({ data }: { data: Dictionary["process"] }) {
  return (
    <Section id="process" labelledBy="process-title">
      <Reveal>
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h2 id="process-title" className="mt-5 max-w-[20ch] font-display text-display-l text-balance">
          {data.headline}
        </h2>
      </Reveal>
      <ol className="mt-16 grid gap-12 md:mt-24 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {data.steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 0.08} className="hairline border-t pt-6">
            <span className="font-display text-display-s text-slate tabular-nums" aria-hidden="true">
              0{i + 1}
            </span>
            <h3 className="mt-6 font-display text-display-s">{s.title}</h3>
            <p className="mt-3 max-w-[34ch] text-body text-slate">{s.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
