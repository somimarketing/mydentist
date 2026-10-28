"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useCopy } from "@/lib/i18n/context";
import { useLinks } from "@/lib/i18n/links";

/*
  Three things changed from the template's pricing block.

  The animated blurred orbs behind the featured card are gone: ambient glow
  is the clearest tell that a page was decorated rather than designed, and it
  was doing nothing a border could not.

  The per-plan icons are gone too. A rocket does not tell a patient anything
  about an implant.

  And the headline figure carries the scope of the treatment until Daniel
  confirms real numbers, with the promise being the written quote. An empty
  currency drops the unit; an empty usPrice drops the comparison line. Fill
  either in lib/i18n and it reappears with no change here.
*/

const EASE = [0.22, 1, 0.36, 1] as const;

type Plan = {
  name: string;
  blurb: string;
  priceFull: string;
  priceFinancing: string;
  usPrice: string;
  features: string[];
  cta: string;
};

function PricingCard({ plan, index }: { plan: Plan; index: number }): ReactNode {
  const { t } = useCopy();
  const L = useLinks();
  const featured = index === 1;

  return (
    <motion.div
      className={`relative flex h-full flex-col rounded-3xl bg-background p-3 ${
        featured ? "ring-2 ring-brand" : "border border-line/60"
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
    >
      <div className="p-5">
        <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{plan.blurb}</p>

        <div className="mt-6 flex items-baseline gap-1.5">
          <span className="text-4xl font-semibold tracking-tight text-foreground tabular-nums">
            {plan.priceFull}
          </span>
          {t.pricing.currency ? (
            <span className="text-lg text-muted-foreground">{t.pricing.currency}</span>
          ) : null}
        </div>

        {plan.usPrice ? (
          <p className="mt-1 text-sm text-muted-foreground">
            {t.pricing.compare.prefix}{" "}
            {t.pricing.compare.strike ? (
              <s className="tabular-nums">{plan.usPrice}</s>
            ) : (
              <span className="tabular-nums">{plan.usPrice}</span>
            )}{" "}
            {t.pricing.compare.suffix}
          </p>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col rounded-2xl bg-muted p-6">
        <ul className="flex-1 space-y-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={2.2} />
              <span className="text-base text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={L.booking}
          className={`mt-8 w-full rounded-full py-4 text-center text-base font-semibold transition-colors duration-200 ${
            featured
              ? "bg-brand text-on-brand hover:bg-brand/90"
              : "border border-line-strong text-foreground hover:bg-brand-soft/40"
          }`}
        >
          {plan.cta}
        </a>
      </div>
    </motion.div>
  );
}

export function Pricing(): ReactNode {
  const { t } = useCopy();
  const L = useLinks();

  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            {t.pricing.headline}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.pricing.support}</p>
        </div>

        <div className="mb-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-line/60 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-semibold text-foreground">
              {t.pricing.consultNote}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{t.pricing.consultSub}</p>
          </div>
          <a
            href={L.whatsapp}
            className="focus-ring shrink-0 rounded-full bg-brand px-6 py-3 text-base font-semibold text-on-brand transition-colors duration-200 hover:bg-brand/90"
          >
            {t.common.bookConsult}
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {t.pricing.plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
