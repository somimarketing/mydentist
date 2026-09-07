import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { getDictionary, isLocale, locales } from "@/lib/i18n";

type Params = Promise<{ locale: string }>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: `${dict.privacy.title} | MyDentist`,
    alternates: {
      canonical: `/${locale}/privacidad`,
      languages: { en: "/en/privacidad", es: "/es/privacidad", "x-default": "/es/privacidad" },
    },
    robots: { index: false, follow: true },
  };
}

export default async function PrivacyPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <main className="mx-auto w-full max-w-[720px] px-6 py-16 md:py-24">
      <Link href={`/${locale}`} aria-label={dict.nav.homeLabel} className="inline-flex text-[21px]">
        <Logo tone="black" />
      </Link>
      <h1 className="mt-16 font-display text-display-l">{dict.privacy.title}</h1>
      <p className="mt-4 text-caption text-slate">{dict.privacy.updated}</p>
      <div className="mt-10 flex flex-col gap-6 text-body">
        {dict.privacy.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <Link href={`/${locale}`} className="mt-12 inline-block text-ui font-bold underline underline-offset-[6px]">
        {locale === "en" ? "Back to the site" : "Volver al sitio"}
      </Link>
    </main>
  );
}
