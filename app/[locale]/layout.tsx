import type { Metadata, Viewport } from "next";
import { Ancizar_Serif, Darker_Grotesque } from "next/font/google";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales, ogLocale, otherLocale, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import "../globals.css";

const ancizar = Ancizar_Serif({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-ancizar",
  fallback: ["Iowan Old Style", "Palatino Linotype", "Georgia", "serif"],
  adjustFontFallback: true,
});

const grotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-grotesque",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

type Params = Promise<{ locale: string }>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale: Locale = raw;
  const dict = getDictionary(locale);
  const other = otherLocale(locale);
  const ogImage = `/og/og-${locale}-1200x630.jpg`;

  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", es: "/es", "x-default": "/es" },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}`,
      locale: ogLocale[locale],
      alternateLocale: [ogLocale[other]],
      images: [{ url: ogImage, width: 1200, height: 630, alt: dict.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#343333",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

/** Marks the logo intro as already played for this tab, before first paint. */
const introScript = `document.documentElement.classList.add("js");try{if(sessionStorage.getItem("md-intro")){document.documentElement.dataset.intro="done"}else{sessionStorage.setItem("md-intro","1")}}catch(e){}`;

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className={`${ancizar.variable} ${grotesque.variable}`}>
      <head>
        <Script id="md-intro" strategy="beforeInteractive">
          {introScript}
        </Script>
      </head>
      <body className="min-h-svh bg-cotton font-sans text-charcoal antialiased">{children}</body>
    </html>
  );
}
