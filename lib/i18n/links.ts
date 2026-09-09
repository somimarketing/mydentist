"use client";

import { site, telUrl, whatsappUrl } from "@/lib/site";
import { useCopy } from "./context";

/**
 * Locale-aware CTA links. The prefilled WhatsApp message has to arrive in the
 * visitor's own language, so the URLs are built from the active dictionary
 * rather than hardcoded once at module scope.
 */
export function useLinks() {
  const { t } = useCopy();

  return {
    whatsapp: whatsappUrl(t.whatsapp.general),
    /** TODO: swap for a real booking calendar when one exists. */
    booking: whatsappUrl(t.whatsapp.consult),
    quote: whatsappUrl(t.whatsapp.quote),
    phone: telUrl(),
    /** [DATO] Instagram handle not confirmed. */
    instagram: null as string | null,
    /** Per-doctor WhatsApp, same language. */
    doctor: (phone: string) => whatsappUrl(t.whatsapp.general, phone),
    site,
  };
}
