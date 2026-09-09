"use client";

import { MessageCircle } from "lucide-react";
import { useCopy } from "@/lib/i18n/context";
import { links } from "@/lib/site";
import { useLinks } from "@/lib/i18n/links";

/* Real clinic links. Booking opens WhatsApp until a calendar exists. */

/*
  Phones only. The page has one job, a booked consult, so the two actions
  stay one thumb away no matter how far the visitor has scrolled.
*/
export function MobileCta() {
  const L = useLinks();
  const WHATSAPP_URL = L.whatsapp;
  const BOOKING_URL = L.booking;
  const { t } = useCopy();

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-line bg-ground/95 backdrop-blur-md px-4 pt-3"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-3">
        <a
          href={WHATSAPP_URL}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-md border border-line-strong text-ink text-[15px] font-medium"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
          {t.common.whatsapp}
        </a>
        <a
          href={BOOKING_URL}
          className="flex h-12 flex-[1.3] items-center justify-center rounded-md bg-charcoal text-cotton text-[15px] font-medium dark:bg-cotton dark:text-charcoal"
        >
          {t.common.bookConsult}
        </a>
      </div>
    </div>
  );
}
