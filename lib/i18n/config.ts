export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  es: "es_MX",
};
