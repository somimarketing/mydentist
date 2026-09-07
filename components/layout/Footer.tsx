import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { site, telLink } from "@/lib/site";

type Props = { locale: Locale; dict: Dictionary; whatsappHref: string };

export function Footer({ locale, dict, whatsappHref }: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark border-t border-cotton/10 bg-charcoal text-cotton">
      <div className="mx-auto grid w-full max-w-[1320px] gap-14 px-6 py-20 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-10 md:py-24">
        <div className="max-w-[34ch]">
          <Link href={`/${locale}`} aria-label={dict.nav.homeLabel} className="inline-flex text-[21px]">
            <Logo tone="white" />
          </Link>
          <p className="mt-6 text-body text-cotton/70">{dict.footer.tagline}</p>
          <ul className="mt-8 flex gap-3">
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.footer.instagram}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-cotton/20 text-cotton/80 transition-colors duration-500 hover:border-cotton hover:text-cotton"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.footer.facebook}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-cotton/20 text-cotton/80 transition-colors duration-500 hover:border-cotton hover:text-cotton"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label={dict.footer.nav}>
          <p className="eyebrow text-cotton/70">{dict.footer.nav}</p>
          <ul className="mt-6 flex flex-col gap-3">
            {dict.nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-ui font-semibold text-cotton/80 transition-colors duration-500 hover:text-cotton">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-cotton/70">{dict.footer.contact}</p>
          <ul className="mt-6 flex flex-col gap-3 text-ui font-semibold text-cotton/80">
            <li>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="transition-colors duration-500 hover:text-cotton">
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={telLink()} className="transition-colors duration-500 hover:text-cotton">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors duration-500 hover:text-cotton">
                {site.email}
              </a>
            </li>
            <li className="text-cotton/70">
              {site.address.street}
              <br />
              {site.address.area}
              <br />
              {site.address.city}
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-cotton/70">{dict.footer.legal}</p>
          <ul className="mt-6 flex flex-col gap-3 text-ui font-semibold text-cotton/80">
            <li>
              <Link href={`/${locale}/privacidad`} className="transition-colors duration-500 hover:text-cotton">
                {dict.footer.privacy}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1320px] px-6 pb-10 md:px-10">
        <p className="border-t border-cotton/10 pt-6 text-caption text-cotton/70">
          {year} {site.name}. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
