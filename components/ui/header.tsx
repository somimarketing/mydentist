"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "@/lib/site";
import { useCopy } from "@/lib/i18n/context";
import { otherLocale } from "@/lib/i18n/config";
import { useLinks } from "@/lib/i18n/links";

/* Real clinic links. Booking opens WhatsApp until a calendar exists.
   Until then both point at the contact block so nothing is a dead end. */

type NavItem = {
  title: string;
  description: string;
  href?: string;
  items?: { title: string; href: string }[];
};

function Wordmark({ className = "" }: { className?: string }) {
  /* Masked so the mark inherits the current text color. That keeps it right
     over the video, on Cotton, and on Charcoal with one file. */
  return (
    <span
      role="img"
      aria-label="MyDentist"
      className={`block bg-current ${className}`}
      style={{
        aspectRatio: "376.517 / 71.335",
        maskImage: "url(/logo/mydentist-horizontal-currentcolor.svg)",
        WebkitMaskImage: "url(/logo/mydentist-horizontal-currentcolor.svg)",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

function Header1() {
  const L = useLinks();
  const WHATSAPP_URL = L.whatsapp;
  const BOOKING_URL = L.booking;
  const { locale, t } = useCopy();
  const other = otherLocale(locale);

  /* Two dropdown groups, then the flat links. */
  const navigationItems: NavItem[] = [
    ...t.nav.groups.map((g) => ({
      title: g.title,
      description: g.description,
      items: g.items,
    })),
    ...t.nav.links.map((l) => ({ title: l.title, href: l.href, description: "" })),
  ];

  const [isOpen, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("md-theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable, theme still toggles for this visit */
    }
    setDark(next);
  };

  /* Transparent over the hero footage, solid once the page moves or the
     mobile menu opens. */
  const overVideo = !solid && !isOpen;
  const ghostOverVideo = overVideo ? "text-cotton hover:bg-cotton/15 hover:text-cotton" : "";

  return (
    <header
      className={`w-full z-50 fixed top-0 left-0 transition-colors duration-300 ${
        overVideo
          ? "bg-transparent text-cotton"
          : "bg-ground/90 backdrop-blur-md border-b border-line text-ink"
      }`}
    >
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-8 relative min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-8 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <NavigationMenuLink asChild>
                      <Link href={item.href}>
                        <Button variant="ghost" className={`text-[17px] px-2 ${ghostOverVideo}`}>
                          {item.title}
                        </Button>
                      </Link>
                    </NavigationMenuLink>
                  ) : (
                    <>
                      <NavigationMenuTrigger
                        className={`font-medium text-[17px] px-2 ${
                          overVideo
                            ? "hover:bg-cotton/15 focus:bg-cotton/15 data-[state=open]:bg-cotton/15"
                            : ""
                        }`}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[460px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base text-ink">{item.title}</p>
                              <p className="text-ink-soft text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10" asChild>
                              <a href={BOOKING_URL}>{t.common.bookConsult}</a>
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-accent-soft/40 dark:hover:bg-cotton/10 py-2 px-4 rounded text-ink"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-ink-soft" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex lg:justify-center">
          <a href={`/${locale}`} aria-label={t.common.home} className="flex items-center">
            <Wordmark className="h-5 sm:h-6" />
          </a>
        </div>

        <div className="flex justify-end w-full gap-3 sm:gap-4 items-center">
          <Button variant="ghost" size="sm" asChild className={ghostOverVideo}>
            <Link
              href={`/${other}`}
              hrefLang={other}
              lang={other}
              aria-label={t.common.switchLanguage}
              className="text-[15px] font-bold uppercase tracking-[0.08em]"
            >
              {other}
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={dark ? t.common.switchToLight : t.common.switchToDark}
            className={ghostOverVideo}
          >
            {dark ? <Sun className="w-6 h-6" strokeWidth={1.6} /> : <Moon className="w-6 h-6" strokeWidth={1.6} />}
          </Button>
          <Button
            asChild
            size="lg"
            className={`hidden md:inline-flex h-[52px] px-7 text-[17px] ${
              overVideo ? "bg-cotton text-charcoal hover:bg-cotton/90" : ""
            }`}
          >
            <a href={BOOKING_URL}>{t.common.bookConsult}</a>
          </Button>
        </div>

        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!isOpen)}
            aria-label={isOpen ? t.common.closeMenu : t.common.openMenu}
            aria-expanded={isOpen}
            className={ghostOverVideo}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t border-line flex flex-col w-full left-0 bg-ground shadow-lg py-4 px-4 sm:px-6 gap-6 text-ink">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex justify-between items-center py-1"
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-ink-soft" />
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          onClick={() => setOpen(false)}
                          className="flex justify-between items-center py-1"
                        >
                          <span className="text-ink-soft">{subItem.title}</span>
                          <MoveRight className="w-4 h-4 stroke-1 text-ink-soft" />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <Button variant="ghost" asChild>
                  <Link
                    href={`/${other}`}
                    hrefLang={other}
                    lang={other}
                    onClick={() => setOpen(false)}
                  >
                    {t.common.switchLanguage}
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href={WHATSAPP_URL}>{t.common.whatsapp}</a>
                </Button>
                <Button asChild>
                  <a href={BOOKING_URL}>{t.common.bookConsult}</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export { Header1 };
