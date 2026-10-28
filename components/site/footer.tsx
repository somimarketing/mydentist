"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useCopy } from "@/lib/i18n/context";
import { useLinks } from "@/lib/i18n/links";
import { site, mapUrl } from "@/lib/site";

/*
  The template's footer carried three columns of product links, three social
  icons and an indigo wash. A one-page clinic site has none of those: there is
  no blog, no changelog, and no confirmed Instagram. So the footer carries the
  four things a patient might still want at the bottom of the page, the
  rebrand note, and the wordmark.
*/

export function Footer(): ReactNode {
  const { t } = useCopy();
  const L = useLinks();

  const sections = [
    { label: t.nav.groups[0]?.title, href: "#pricing" },
    { label: t.nav.groups[1]?.title, href: "#doctors" },
    { label: t.nav.links[0]?.title, href: "#pricing" },
    { label: t.nav.links[1]?.title, href: "#visit" },
  ].filter((s): s is { label: string; href: string } => Boolean(s.label));

  return (
    <footer className="relative overflow-hidden bg-background px-4 text-foreground sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="grid flex-1 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="label-caps text-muted-foreground">{t.footer.tagline}</h3>
              <ul className="mt-5 space-y-3">
                {sections.map((section) => (
                  <li key={section.label}>
                    <a
                      href={section.href}
                      className="focus-ring text-lg text-foreground transition-colors duration-200 hover:text-ink-soft"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="label-caps text-muted-foreground">
                {t.footer.whatsapp}
              </h3>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={L.whatsapp}
                    className="focus-ring text-lg text-foreground transition-colors duration-200 hover:text-ink-soft"
                  >
                    {site.phoneMxDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={L.phoneUs}
                    className="focus-ring text-lg text-foreground transition-colors duration-200 hover:text-ink-soft"
                  >
                    {site.phoneUsDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={L.booking}
                    className="focus-ring text-lg text-foreground transition-colors duration-200 hover:text-ink-soft"
                  >
                    {t.common.bookConsult}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="label-caps text-muted-foreground">{t.footer.place}</h3>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={mapUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring text-lg text-foreground transition-colors duration-200 hover:text-ink-soft"
                  >
                    {site.address.street}
                  </a>
                </li>
                <li className="text-lg text-muted-foreground">{site.descriptor}</li>
                <li>
                  <a
                    href="#faq"
                    className="focus-ring text-lg text-foreground transition-colors duration-200 hover:text-ink-soft"
                  >
                    {t.faq.headline}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl border-t border-line/60 py-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. {t.footer.rights}
          </p>
          <div className="text-sm text-muted-foreground sm:text-right">
            <p>{t.footer.rebrand}</p>
            <p>{t.footer.descriptor}</p>
            {t.footer.est ? <p>{t.footer.est}</p> : null}
          </div>
        </div>
      </div>

      <div className="relative mx-auto h-28 max-w-338 pb-12 select-none sm:h-36">
        <Image
          src="/logo/mydentist-horizontal-black.svg"
          alt=""
          width={2500}
          height={400}
          className="w-full opacity-10 dark:hidden"
          aria-hidden="true"
        />
        <Image
          src="/logo/mydentist-horizontal-white.svg"
          alt=""
          width={2500}
          height={400}
          className="hidden w-full opacity-10 dark:block"
          aria-hidden="true"
        />
      </div>
    </footer>
  );
}
