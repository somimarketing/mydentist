export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

/** San Carlos is a Mexican town: Spanish is the default for anyone unmatched. */
export const defaultLocale: Locale = "es";

export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

export function otherLocale(l: Locale): Locale {
  return l === "en" ? "es" : "en";
}

export const htmlLang: Record<Locale, string> = { en: "en-US", es: "es-MX" };
export const ogLocale: Record<Locale, string> = { en: "en_US", es: "es_MX" };
