"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { useCopy } from "@/lib/i18n/context";

/*
  The template filled this slot with a swapping wall of invented client logos.
  A clinic has no logos to show and inventing them would be a lie about who
  its patients are, so the slot carries the three things that are true without
  anyone having to confirm a figure: how many specialists work here, how far
  it is, and what languages you will be spoken to in.

  Each card's ground comes from the brand's three cool tints, so the row reads
  as one material rather than as a row of differently coloured tiles.
*/

const GROUNDS = ["bg-card-a", "bg-card-b", "bg-card-c"];

export function TrustedBy(): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useCopy();

  return (
    <section id="numbers" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            {t.stats.headline}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">{t.stats.support}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3 md:gap-6">
          {t.stats.items.map((item, index) => (
            <motion.div
              key={item.label}
              className={`flex flex-col justify-between rounded-2xl p-6 md:p-8 ${GROUNDS[index % GROUNDS.length]}`}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-base text-ink-soft">{item.label}</p>

              <div className="mt-16 md:mt-24">
                <p className="text-5xl font-semibold tracking-tight text-ink-brand tabular-nums md:text-6xl">
                  {item.value}
                </p>
                <p className="mt-2 text-lg font-medium tracking-tight text-ink">
                  {item.sub}
                </p>
                <p className="label-caps mt-5 text-ink-soft">{item.source}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
