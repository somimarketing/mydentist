"use client";

import type { ReactNode } from "react";
import { TextReveal } from "./text-reveal";
import { useCopy } from "@/lib/i18n/context";

/*
  One display line between the hero and the gallery, scrubbed in by word.
  The copy differs by language on purpose: English answers the cross-border
  patient's fear of being handed off, Spanish answers a local family's fear
  of being a number.
*/
export function Reveal(): ReactNode {
  const { t } = useCopy();

  return (
    <section id="reveal" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <TextReveal
          text={t.reveal.line}
          className="text-3xl font-semibold tracking-tight text-ink-brand sm:text-4xl md:text-5xl lg:text-6xl"
        />
      </div>
    </section>
  );
}
