import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { Why } from "@/components/sections/Why";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Doctors } from "@/components/sections/Doctors";
import { Process } from "@/components/sections/Process";
import { LocaleBlock } from "@/components/sections/LocaleBlock";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { getDictionary, isLocale } from "@/lib/i18n";
import { site, telLink, whatsappLink } from "@/lib/site";

type Params = Promise<{ locale: string }>;

export default async function LandingPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const wa = whatsappLink(dict.meta.whatsappMessage);
  const waFollowUp = whatsappLink(dict.meta.whatsappFollowUp);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.name,
    url: `${site.url}/${locale}`,
    telephone: `+${site.phone}`,
    email: site.email,
    image: `${site.url}/og/og-${locale}-1200x630.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: "San Carlos",
      addressRegion: "Sonora",
      postalCode: "85506",
      addressCountry: "MX",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
    ],
    employee: site.doctors.map((d) => ({ "@type": "Person", name: d.name, jobTitle: "Dentist", telephone: `+${d.phone}`, email: d.email })),
    sameAs: [site.social.instagram, site.social.facebook],
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-cotton focus:px-4 focus:py-2 focus:text-charcoal"
      >
        {locale === "en" ? "Skip to content" : "Ir al contenido"}
      </a>
      <Nav locale={locale} nav={dict.nav} whatsappHref={wa} />
      <main id="main" className="pb-[76px] md:pb-0">
        <Hero hero={dict.hero} whatsappHref={wa} />
        <TrustStrip items={dict.trust} label={locale === "en" ? "Clinic at a glance" : "El consultorio en números"} />
        <Services data={dict.services} whatsappHref={wa} />
        <Why data={dict.why} />
        <BeforeAfter data={dict.beforeAfter} />
        <Doctors data={dict.doctors} whatsappMessage={dict.meta.whatsappMessage} />
        <Process data={dict.process} />
        <LocaleBlock data={dict.localeBlock} whatsappHref={wa} />
        <Testimonials data={dict.testimonials} />
        <Location locale={locale} data={dict.location} whatsappHref={wa} />
        <Faq data={dict.faq} />
        <FinalCta locale={locale} data={dict.finalCta} whatsappHref={wa} whatsappFollowUpHref={waFollowUp} />
      </main>
      <Footer locale={locale} dict={dict} whatsappHref={wa} />
      <MobileCtaBar labels={dict.mobileBar} whatsappHref={wa} telHref={telLink()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
