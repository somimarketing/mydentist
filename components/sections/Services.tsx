import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow, Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import type { Dictionary } from "@/lib/i18n/types";

export function Services({ data, whatsappHref }: { data: Dictionary["services"]; whatsappHref: string }) {
  return (
    <Section id="services" labelledBy="services-title">
      <Reveal>
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h2 id="services-title" className="mt-5 max-w-[20ch] font-display text-display-l text-balance">
          {data.headline}
        </h2>
      </Reveal>

      <ul className="mt-16 grid gap-px md:mt-24 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((s, i) => (
          <Reveal as="li" key={s.id} delay={Math.min(i, 5) * 0.06} className="group">
            <article className="hairline relative flex h-full flex-col border-t py-8 pr-6 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 md:py-10 md:pr-10">
              <span
                aria-hidden="true"
                className="absolute top-[-1px] left-0 h-px w-0 bg-slate transition-[width] duration-700 ease-out-expo group-hover:w-full"
              />
              <h3 className="font-display text-display-s">{s.name}</h3>
              <p className="mt-4 max-w-[38ch] text-body text-slate">{s.description}</p>
            </article>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-14 md:mt-20">
        <ButtonLink href={whatsappHref} variant="secondary" icon={<WhatsAppIcon className="h-5 w-5" />}>
          {data.cta}
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
