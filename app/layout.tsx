import type { Metadata } from "next";
import { Ancizar_Serif, Darker_Grotesque } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "MyDentist | Implants and dental care in San Carlos, Mexico",
  description:
    "World-class implants, crowns and clear aligners in San Carlos, Sonora. The same treatment you would get in the US, for a fraction of the price. Free virtual consult in English before you travel.",
  openGraph: {
    title: "MyDentist | Implants and dental care in San Carlos, Mexico",
    description:
      "The same implants you would get in the US, for a fraction of the price. A short drive from Arizona.",
    type: "website",
  },
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="antialiased bg-ground text-ink">{children}</body>
    </html>
  );
}
