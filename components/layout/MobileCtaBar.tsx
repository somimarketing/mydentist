import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import type { Dictionary } from "@/lib/i18n/types";

type Props = { labels: Dictionary["mobileBar"]; whatsappHref: string; telHref: string };

/** Sticky bottom bar, mobile only. WhatsApp is primary. */
export function MobileCtaBar({ labels, whatsappHref, telHref }: Props) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1.6fr_1fr] gap-px border-t border-cotton/10 bg-charcoal p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md bg-cotton font-sans text-ui font-bold text-charcoal"
      >
        <WhatsAppIcon className="h-5 w-5" />
        {labels.whatsapp}
      </a>
      <a
        href={telHref}
        className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-cotton/30 font-sans text-ui font-bold text-cotton"
      >
        <PhoneIcon className="h-5 w-5" />
        {labels.call}
      </a>
    </div>
  );
}
