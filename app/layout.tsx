import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/*
  Inter is the only family on this site.
  The variable file covers every roman weight. Real italic files carry the
  "my" / "yours" signature, so the browser never has to fake an oblique.
*/
const inter = localFont({
  src: [
    { path: "../public/fonts/inter-var.woff2", weight: "100 900", style: "normal" },
    { path: "../public/fonts/inter-italic-300.woff2", weight: "300", style: "italic" },
    { path: "../public/fonts/inter-italic-500.woff2", weight: "500", style: "italic" },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="antialiased bg-ground text-ink">{children}</body>
    </html>
  );
}
