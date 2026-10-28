"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useCopy } from "@/lib/i18n/context";
import { useLinks } from "@/lib/i18n/links";
import { site, mapUrl } from "@/lib/site";

/*
  The template closed on an email waitlist. The clinic has no waitlist and no
  mailing list; it has a WhatsApp number a dentist answers. So the closing
  block asks for the one action that is actually available, and puts the
  address and both phone lines next to it for the people who would rather
  drive or call.
*/

const EASE = [0.22, 1, 0.36, 1] as const;

export function BottomCTA(): ReactNode {
  const { t } = useCopy();
  const L = useLinks();

  return (
    <section id="visit" className="px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-brand px-8 py-14 sm:px-12 sm:py-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-4xl font-semibold tracking-tight text-on-brand sm:text-5xl lg:text-6xl">
              <span className="sig-on-dark block">{t.finalCta.headlineSig}</span>
              <span className="block">{t.finalCta.headlineLine2}</span>
            </h2>

            <p className="mt-6 max-w-md text-lg text-on-brand-muted">
              {t.contact.support}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={L.whatsapp}
                className="focus-ring rounded-full bg-cotton px-7 py-4 text-base font-semibold text-brand transition-colors duration-200 hover:bg-cotton/90"
              >
                {t.common.bookConsult}
              </a>
              <a
                href={L.phoneMx}
                className="focus-ring rounded-full border border-on-brand-muted/50 px-7 py-4 text-base font-semibold text-on-brand transition-colors duration-200 hover:border-on-brand"
              >
                {site.phoneMxDisplay}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="label-caps text-on-brand-muted">{t.finalCta.place}</p>

            <address className="mt-4 text-lg leading-relaxed text-on-brand not-italic">
              {site.address.street}
              <br />
              {site.address.area}
              <br />
              {site.address.city}
            </address>

            <a
              href={mapUrl()}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-5 inline-block border-b border-on-brand-muted/60 pb-0.5 text-base font-semibold text-on-brand transition-colors duration-200 hover:border-on-brand"
            >
              {t.contact.methods[2]?.title ?? site.address.city}
            </a>

            <div className="mt-10 flex flex-col gap-2 border-t border-on-brand-muted/25 pt-8">
              <a
                href={L.phoneUs}
                className="focus-ring text-base text-on-brand-muted transition-colors duration-200 hover:text-on-brand"
              >
                {site.phoneUsDisplay}
              </a>
              <a
                href={L.phoneMx}
                className="focus-ring text-base text-on-brand-muted transition-colors duration-200 hover:text-on-brand"
              >
                {site.phoneMxDisplay}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
