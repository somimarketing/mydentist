import Link from "next/link";
import { otherLocale, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

type Props = { locale: Locale; label: string; className?: string };

/** Switches locale. scroll={false} keeps the current scroll position across the route change. */
export function LanguageToggle({ locale, label, className }: Props) {
  const other = otherLocale(locale);
  return (
    <Link
      href={`/${other}`}
      scroll={false}
      hrefLang={other}
      lang={other}
      className={cn(
        "inline-flex min-h-11 items-center gap-1.5 font-sans text-ui font-bold uppercase tracking-[0.08em] transition-opacity duration-500 hover:opacity-70",
        className,
      )}
    >
      <span className={cn(locale === "en" ? "opacity-100" : "opacity-60")}>EN</span>
      <span className="opacity-50">/</span>
      <span className={cn(locale === "es" ? "opacity-100" : "opacity-60")}>ES</span>
      <span className="sr-only">. {label}</span>
    </Link>
  );
}
