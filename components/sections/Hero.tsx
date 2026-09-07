import { LogoIntro } from "@/components/brand/LogoIntro";
import { WhatsAppIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Img } from "@/components/ui/img";
import type { Dictionary } from "@/lib/i18n/types";

type Props = { hero: Dictionary["hero"]; whatsappHref: string };

export function Hero({ hero, whatsappHref }: Props) {
  return (
    <section
      aria-labelledby="hero-title"
      className="on-dark relative flex min-h-svh items-center bg-charcoal pt-28 pb-24 text-cotton md:pt-36 md:pb-32"
    >
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-14 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="max-w-[640px]">
          <LogoIntro className="block h-14 w-14 md:h-16 md:w-16" />
          <h1 id="hero-title" className="mt-10 font-display text-display-xl text-balance">
            {hero.headline}
          </h1>
          <p className="mt-7 max-w-[46ch] text-body-l text-cotton/75">{hero.support}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink href={whatsappHref} tone="dark" icon={<WhatsAppIcon className="h-5 w-5" />}>
              {hero.primary}
            </ButtonLink>
            <ButtonLink href={hero.secondary.href} tone="dark" variant="link" arrow>
              {hero.secondary.label}
            </ButtonLink>
          </div>
        </div>

        <figure className="duotone aspect-[4/5] w-full rounded-lg sm:aspect-[3/2] lg:aspect-[4/5]">
          <Img
            image={hero.image}
            priority
            fetchPriority="high"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-full w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
