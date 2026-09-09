"use client";

import { createContext, useContext } from "react";
import type { Locale } from "./config";
import type { Dictionary } from "./en";

type Value = { locale: Locale; t: Dictionary };

const LocaleContext = createContext<Value | null>(null);

export function LocaleProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, t: dictionary }}>
      {children}
    </LocaleContext.Provider>
  );
}

/**
 * Every block reads its own slice of the dictionary from here, so no copy
 * is threaded through props and no block hardcodes a language.
 */
export function useCopy(): Value {
  const v = useContext(LocaleContext);
  if (!v) throw new Error("useCopy must be used inside <LocaleProvider>");
  return v;
}
