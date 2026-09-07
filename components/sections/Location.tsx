import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow, Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/button";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { mapEmbedUrl, mapLink, site, telLink } from "@/lib/site";

type Props = { locale: Locale; data: Dictionary["location"]; whatsappHref: string };

export function Location({ locale, data, whatsappHref }: Props) {
  return (
    <Section id="location" labelledBy="location-title">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-24 [&>*]:min-w-0">
        <Reveal>
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <h2 id="location-title" className="mt-5 max-w-[18ch] font-display text-display-l text-balance">
            {data.headline}
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="eyebrow text-slate">{data.addressLabel}</h3>
              <address className="mt-5 text-body not-italic">
                {site.address.street}
                <br />
                {site.address.area}
                <br />
                {site.address.city}
              </address>
              <a
                href={mapLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-ui font-bold underline decoration-bone underline-offset-[6px] transition-colors duration-500 hover:decoration-charcoal"
              >
                {data.openInMaps}
              </a>
            </div>
            <div>
              <h3 className="eyebrow text-slate">{data.hoursLabel}</h3>
              <table className="mt-5 w-full text-body">
                <tbody className="divide-y divide-bone/70">
                  {site.hours.map((h) => (
                    <tr key={h.days}>
                      <th scope="row" className="py-2.5 pr-4 text-left font-semibold">
                        {data.days[h.days]}
                      </th>
                      <td className="py-2.5 text-right text-slate tabular-nums">
                        {h.open ? `${h.open} - ${h.close}` : data.closed}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={whatsappHref} icon={<WhatsAppIcon className="h-5 w-5" />}>
              {data.whatsapp}
            </ButtonLink>
            <ButtonLink href={telLink()} variant="secondary" icon={<PhoneIcon className="h-5 w-5" />}>
              {data.call}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-powder lg:aspect-auto lg:h-full lg:min-h-[520px]">
            <iframe
              title={data.mapTitle}
              src={mapEmbedUrl(locale)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen={false}
              className="h-full w-full grayscale contrast-[0.9] saturate-0 mix-blend-multiply"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
