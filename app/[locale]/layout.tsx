import type { Metadata } from "next";
import { Ancizar_Serif, Darker_Grotesque } from "next/font/google";
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
  Two families, straight off the brand board.

  Ancizar Serif carries every headline and the "my" / "yours" signature.
  That italic is the logo's own move: serif-italic "My" against the heavier
  grotesque "Dentist". Using it in the copy makes the page and the mark read
  as one thing.
*/
const display = Ancizar_Serif({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  fallback: ["Iowan Old Style", "Palatino Linotype", "Georgia", "serif"],
});

/* Darker Grotesque runs the interface: body, labels, buttons, nav. */
const sans = Darker_Grotesque({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-sans",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

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
    { media: "(prefers-color-scheme: dark)", color: "#343333" },
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
    <html
      lang={htmlLang[locale]}
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
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
