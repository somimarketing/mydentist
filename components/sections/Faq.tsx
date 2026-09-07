import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow, Section } from "@/components/layout/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Dictionary } from "@/lib/i18n/types";

export function Faq({ data }: { data: Dictionary["faq"] }) {
  return (
    <Section id="faq" labelledBy="faq-title">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <h2 id="faq-title" className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
            {data.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="hairline border-t">
            {data.items.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>
                  <p className="max-w-[60ch]">{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
