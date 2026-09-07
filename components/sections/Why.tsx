import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow, Section } from "@/components/layout/Section";
import { Img } from "@/components/ui/img";
import type { Dictionary } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

export function Why({ data }: { data: Dictionary["why"] }) {
  return (
    <Section id="why" labelledBy="why-title" tone="charcoal" bleed className="py-0 md:py-0">
      <div className="mx-auto w-full max-w-[1320px] px-6 pt-24 md:px-10 md:pt-40">
        <Reveal>
          <Eyebrow className="text-powder">{data.eyebrow}</Eyebrow>
          <h2 id="why-title" className="mt-5 max-w-[22ch] font-display text-display-l text-balance">
            {data.headline}
          </h2>
        </Reveal>
      </div>

      <div className="mt-20 flex flex-col gap-24 pb-24 md:mt-32 md:gap-40 md:pb-40">
        {data.items.map((item, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={item.headline}
              className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-0", flip && "lg:[&>*:first-child]:order-2")}
            >
              <Reveal className={cn("w-full", flip ? "lg:pl-0" : "lg:pr-0")}>
                <figure className="duotone aspect-[4/3] w-full">
                  <Img image={item.image} sizes="(min-width: 1024px) 50vw, 100vw" className="h-full w-full object-cover" />
                </figure>
              </Reveal>
              <Reveal className="px-6 md:px-10 lg:px-20 xl:px-28">
                <div className="max-w-[44ch]">
                  <p className="font-display text-display-s italic text-powder">{item.eyebrow}</p>
                  <h3 className="mt-5 font-display text-display-m text-balance">{item.headline}</h3>
                  <p className="mt-6 text-body text-cotton/72">{item.body}</p>
                </div>
              </Reveal>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
