import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow, Section } from "@/components/layout/Section";
import type { Dictionary } from "@/lib/i18n/types";

export function Testimonials({ data }: { data: Dictionary["testimonials"] }) {
  return (
    <Section id="testimonials" labelledBy="testimonials-title">
      <Reveal>
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h2 id="testimonials-title" className="mt-5 max-w-[20ch] font-display text-display-l text-balance">
          {data.headline}
        </h2>
      </Reveal>
      <ul className="mt-16 grid gap-8 md:mt-24 lg:grid-cols-3">
        {data.items.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 0.08} className="flex">
            <figure className="flex w-full flex-col justify-between rounded-lg bg-powder/45 p-8 md:p-10">
              <blockquote className="font-display text-[1.375rem] leading-[1.35] tracking-[-0.01em] text-charcoal">
                <p>{t.quote}</p>
              </blockquote>
              <figcaption className="mt-8 text-caption text-charcoal/80">
                <span className="block font-bold text-charcoal">{t.name}</span>
                <span className="block">
                  {t.place}. {t.treatment}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
