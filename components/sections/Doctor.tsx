import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow, Section } from "@/components/layout/Section";
import { Img } from "@/components/ui/img";
import type { Dictionary } from "@/lib/i18n/types";

export function Doctor({ data }: { data: Dictionary["doctor"] }) {
  return (
    <Section id="doctor" labelledBy="doctor-title" tone="powder">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <figure className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-bone">
            <Img image={data.portrait} sizes="(min-width: 1024px) 36vw, 100vw" className="h-full w-full object-cover grayscale" />
          </figure>
        </Reveal>
        <Reveal>
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <h2 id="doctor-title" className="mt-5 font-display text-display-l">
            {data.name}
          </h2>
          <p className="mt-3 text-body text-charcoal/80">{data.role}</p>
          <blockquote className="mt-10 max-w-[40ch] border-l border-charcoal/30 pl-6 font-display text-display-m italic leading-[1.25]">
            <p>{data.quote}</p>
          </blockquote>
          <ul className="mt-10 flex max-w-[52ch] flex-col divide-y divide-charcoal/15 border-y border-charcoal/15 text-ui font-semibold text-charcoal/85">
            {data.credentials.map((c) => (
              <li key={c} className="py-3.5">
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
