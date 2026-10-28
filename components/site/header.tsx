"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useCopy } from "@/lib/i18n/context";
import { useLinks } from "@/lib/i18n/links";
import { otherLocale } from "@/lib/i18n";

/*
  The template's header sat in mix-blend-difference over a light hero, which
  inverts to mud over footage. The clinic's hero is Deep Slate video, so the
  bar is Cotton type on a soft scrim that fades out as you scroll past it.

  Language toggle and theme toggle both live here: Spanish is the default and
  the English visitor has to be able to find their way out in one click.
*/

const EASE = [0.22, 1, 0.36, 1] as const;

export function Header(): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const { scrollY } = useScroll();
  const { t, locale } = useCopy();
  const L = useLinks();
  const pathname = usePathname();

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    setIsHidden(latest > previous && latest > 80);
  });

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
    try {
      localStorage.setItem("md-theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable, the theme still toggles for this visit */
    }
  };

  const closeMenu = () => setIsOpen(false);

  /* /es/... <-> /en/... keeping whatever comes after the locale segment. */
  const otherHref = pathname
    ? pathname.replace(`/${locale}`, `/${otherLocale(locale)}`)
    : `/${otherLocale(locale)}`;

  const links = [
    { href: "#pricing", label: t.nav.groups[0]?.title ?? "" },
    { href: "#doctors", label: t.nav.groups[1]?.title ?? "" },
    { href: "#faq", label: t.nav.links[0]?.title ?? "" },
    { href: "#visit", label: t.nav.links[1]?.title ?? "" },
  ].filter((l) => l.label);

  /* Over the hero footage the bar is Cotton; past it, normal ink. */
  const tone = scrolled ? "text-ink" : "text-on-brand";

  return (
    <>
      <motion.header
        className="fixed top-0 z-50 w-full"
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: isHidden && !isOpen ? "-100%" : 0,
          opacity: 1,
        }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div
          className={`absolute inset-0 -z-10 border-b transition-colors duration-300 ${
            scrolled ? "border-line/60 bg-ground/95" : "border-transparent bg-transparent"
          }`}
          aria-hidden="true"
        />

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}`}
            className={`focus-ring flex items-center ${tone}`}
            aria-label={t.common.home}
          >
            {/*
              next/image renders the SVG as an <img>, which isolates it, so a
              currentColor mark would always come out black. Swap the file
              instead: white over the footage, black once the bar goes solid.
            */}
            <Image
              src={
                scrolled
                  ? "/logo/mydentist-horizontal-black.svg"
                  : "/logo/mydentist-horizontal-white.svg"
              }
              alt="MyDentist"
              width={150}
              height={34}
              priority
              className="dark:hidden"
            />
            <Image
              src="/logo/mydentist-horizontal-white.svg"
              alt=""
              width={150}
              height={34}
              aria-hidden="true"
              className="hidden dark:block"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: EASE }}
              >
                <a
                  href={link.href}
                  className={`focus-ring rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ${tone} hover:opacity-70`}
                >
                  {link.label}
                </a>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={otherHref}
              className={`focus-ring label-caps rounded-md px-2 py-2 transition-colors duration-200 ${tone} hover:opacity-70`}
              aria-label={t.common.switchLanguage}
            >
              {otherLocale(locale).toUpperCase()}
            </Link>

            <button
              type="button"
              onClick={toggleTheme}
              className={`focus-ring flex h-10 w-10 cursor-pointer items-center justify-center rounded-md transition-colors duration-200 ${tone} hover:opacity-70`}
              aria-label={dark ? t.common.switchToLight : t.common.switchToDark}
            >
              {dark ? (
                <Sun className="h-5 w-5" strokeWidth={1.6} />
              ) : (
                <Moon className="h-5 w-5" strokeWidth={1.6} />
              )}
            </button>

            <a
              href={L.whatsapp}
              className="focus-ring hidden shrink-0 rounded-full bg-cotton px-5 py-3 text-sm font-semibold text-brand transition-colors duration-200 hover:bg-cotton/90 sm:block"
              style={scrolled ? { background: "var(--brand)", color: "var(--on-brand)" } : undefined}
            >
              {t.common.bookConsult}
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className={`focus-ring relative flex h-10 w-10 items-center justify-center lg:hidden ${tone}`}
              aria-label={isOpen ? t.common.closeMenu : t.common.openMenu}
              aria-expanded={isOpen}
            >
              <span
                className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "-translate-y-1 rotate-0"
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
                  isOpen ? "-rotate-45" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence mode="sync">
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-brand lg:hidden"
          >
            <nav
              className="mx-auto flex h-full max-w-7xl flex-col items-start gap-5 px-4 pt-28 sm:px-6"
              aria-label="Mobile"
            >
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + index * 0.07, ease: EASE }}
                >
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="focus-ring block text-4xl font-semibold text-on-brand sm:text-5xl"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}

              <motion.a
                href={L.whatsapp}
                onClick={closeMenu}
                className="focus-ring mt-6 rounded-full bg-cotton px-7 py-4 text-base font-semibold text-brand"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35, ease: EASE }}
              >
                {t.common.bookConsult}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
