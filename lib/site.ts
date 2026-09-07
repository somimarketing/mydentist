/**
 * Single place for every real-world fact about the clinic.
 * Swap these before launch (see README "What to swap").
 */
const digits = (v: string | undefined, fallback: string) =>
  (v ?? fallback).replace(/\D/g, "");

export const site = {
  name: "MyDentist",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mydentist.mx",
  whatsapp: digits(process.env.NEXT_PUBLIC_WHATSAPP, "523316068212"),
  phone: digits(process.env.NEXT_PUBLIC_PHONE, "523316068212"),
  phoneDisplay: "+52 33 1606 8212",
  email: "hola@mydentist.mx",
  doctor: "Dr. Daniel Martínez",
  address: {
    street: "Aurora 299",
    area: "Sector Crestón, Ranchito Campestre",
    city: "85506 San Carlos, Sonora",
    country: "México",
  },
  /** Google geocodes this string for the embed and the "open in maps" link. */
  mapQuery: "Aurora 299, Sector Crestón, Ranchito Campestre, 85506 San Carlos, Sonora, México",
  mapZoom: 16,
  social: {
    instagram: "https://instagram.com/mydentist.sc",
    facebook: "https://facebook.com/mydentist.sc",
  },
  /** 24h, local time (America/Hermosillo, no DST). */
  hours: [
    { days: "mon-fri", open: "09:00", close: "19:00" },
    { days: "sat", open: "09:00", close: "14:00" },
    { days: "sun", open: null, close: null },
  ] as const,
} as const;

export function mapEmbedUrl(lang: "en" | "es") {
  return `https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=${site.mapZoom}&hl=${lang}&output=embed`;
}

export function mapLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;
}

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:+${site.phone}`;
}
