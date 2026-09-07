import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow, Section } from "@/components/layout/Section";
import { WhatsAppIcon } from "@/components/icons";
import { Img } from "@/components/ui/img";
import type { Dictionary } from "@/lib/i18n/types";
import { doctorById, whatsappLink } from "@/lib/site";

type Props = { data: Dictionary["doctors"]; whatsappMessage: string };

export function Doctors({ data, whatsappMessage }: Props) {
  return (
    <Section id="doctors" labelledBy="doctors-title" tone="powder">
      <Reveal>
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h2 id="doctors-title" className="mt-5 max-w-[20ch] font-display text-display-l text-balance">
          {data.headline}
        </h2>
      </Reveal>

      <ul className="mt-16 grid gap-16 md:mt-24 lg:grid-cols-2 lg:gap-20">
        {data.items.map((doc, i) => {
          const contact = doctorById(doc.id);
          return (
            <Reveal as="li" key={doc.id} delay={i * 0.1}>
              <article className="grid gap-8 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:gap-10 lg:grid-cols-1 lg:gap-8 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                <figure className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-bone">
                  <Img image={doc.portrait} sizes="(min-width: 1280px) 22vw, (min-width: 640px) 40vw, 100vw" className="h-full w-full object-cover grayscale" />
                </figure>
                <div>
                  <h3 className="font-display text-display-m">{doc.name}</h3>
                  <p className="mt-2 text-body text-charcoal/80">{doc.role}</p>
                  <blockquote className="mt-7 max-w-[40ch] border-l border-charcoal/30 pl-5 font-display text-[1.375rem] leading-[1.3] italic">
                    <p>{doc.quote}</p>
                  </blockquote>
                  <ul className="mt-7 flex flex-col divide-y divide-charcoal/15 border-y border-charcoal/15 text-ui font-semibold text-charcoal/85">
                    {doc.credentials.map((c) => (
                      <li key={c} className="py-3">
                        {c}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(whatsappMessage, contact.phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center gap-2 text-ui font-bold underline decoration-charcoal/30 underline-offset-[6px] transition-colors duration-500 hover:decoration-charcoal"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    {data.contactLabel.replace("{name}", contact.shortName)}
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
