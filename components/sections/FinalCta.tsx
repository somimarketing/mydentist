import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { BookingForm } from "@/components/forms/BookingForm";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type Props = {
  locale: Locale;
  data: Dictionary["finalCta"];
  whatsappHref: string;
  whatsappFollowUpHref: string;
};

export function FinalCta({ locale, data, whatsappHref, whatsappFollowUpHref }: Props) {
  return (
    <Section id="book" labelledBy="book-title" tone="charcoal">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24 [&>*]:min-w-0">
        <Reveal>
          <h2 id="book-title" className="max-w-[14ch] font-display text-display-l text-balance">
            {data.headline}
          </h2>
          <p className="mt-6 max-w-[42ch] text-body-l text-cotton/72">{data.support}</p>
          <div className="mt-10">
            <ButtonLink href={whatsappHref} tone="dark" icon={<WhatsAppIcon className="h-5 w-5" />} className="min-h-14 px-8 text-[1.125rem]">
              {data.whatsapp}
            </ButtonLink>
            <p className="mt-3 text-caption text-cotton/70">{data.whatsappHint}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <BookingForm locale={locale} form={data.form} services={data.serviceOptions} whatsappFollowUpHref={whatsappFollowUpHref} />
        </Reveal>
      </div>
    </Section>
  );
}
