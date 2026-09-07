"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./LanguageToggle";

type Props = { locale: Locale; nav: Dictionary["nav"]; whatsappHref: string };

export function Nav({ locale, nav, whatsappHref }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "on-dark fixed inset-x-0 top-0 z-50 text-cotton transition-[background-color,box-shadow] duration-500 ease-out-expo",
        scrolled || open ? "bg-charcoal shadow-[0_1px_0_0_rgba(232,232,228,0.08)]" : "bg-transparent",
      )}
    >
      <nav
        aria-label={locale === "en" ? "Main" : "Principal"}
        className="mx-auto flex h-16 w-full max-w-[1320px] items-center justify-between px-6 md:h-20 md:px-10"
      >
        <Link href={`/${locale}`} aria-label={nav.homeLabel} className="flex items-center text-[19px] md:text-[21px]" onClick={() => setOpen(false)}>
          <Logo tone="white" />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-sans text-ui font-semibold text-cotton/80 transition-colors duration-500 hover:text-cotton"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-7 lg:flex">
          <LanguageToggle locale={locale} label={nav.switchLocale} className="text-cotton" />
          <ButtonLink href={whatsappHref} tone="dark" icon={<WhatsAppIcon className="h-5 w-5" />} className="min-h-11 px-5">
            {nav.cta}
          </ButtonLink>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <LanguageToggle locale={locale} label={nav.switchLocale} className="text-cotton" />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.menuClose : nav.menuOpen}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-charcoal px-6 pt-10 pb-10 lg:hidden"
      >
        <ul className="flex flex-col gap-2">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-display-m text-cotton"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <ButtonLink href={whatsappHref} tone="dark" icon={<WhatsAppIcon className="h-5 w-5" />} className="w-full">
            {nav.cta}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
