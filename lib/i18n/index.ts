import { en } from "./en";
import { es } from "./es";
import type { Locale } from "./config";
import type { Dictionary } from "./en";

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary } from "./en";
export * from "./config";
