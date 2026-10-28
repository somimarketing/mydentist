import type { Metadata } from "next";
import "../globals.css";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/lib/i18n/context";
import {
  getDictionary,
  htmlLang,
  isLocale,
  locales,
  ogLocale,
  otherLocale,
  type Locale,
} from "@/lib/i18n";
import { site } from "@/lib/site";

/*
  Bogart (Zetafonts) is the whole type system, served from the brand's own
  Adobe Fonts kit. It is not on Google Fonts, so next/font cannot host it;
  the kit is loaded as a stylesheet and preconnected so it is not a render
  blocker. Swap FONT_KIT_ID if the kit is ever recreated.
*/
const FONT_KIT_ID = "fql3xen";

type Params = Promise<{ locale: string }>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale: Locale = raw;
  const t = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      /* x-default points at Spanish: the clinic is in Sonora. */
      languages: { en: "/en", es: "/es", "x-default": "/es" },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      url: `/${locale}`,
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      locale: ogLocale[locale],
      alternateLocale: [ogLocale[otherLocale(locale)]],
    },
  };
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e8e8e4" },
    { media: "(prefers-color-scheme: dark)", color: "#32374B" },
  ],
};

/*
  Sets the theme before first paint so there is no flash, and respects the
  visitor's system setting until they choose for themselves.
*/
const themeInit = `(function(){try{var s=localStorage.getItem("md-theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={htmlLang[locale]} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="" />
        <link rel="stylesheet" href={`https://use.typekit.net/${FONT_KIT_ID}.css`} />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="antialiased bg-ground text-ink">
        <LocaleProvider locale={locale} dictionary={getDictionary(locale)}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
