/**
 * Single place for every real-world fact about the clinic.
 * Swap these before launch (see README "What to swap").
 */
const digits = (v: string | undefined, fallback: string) =>
  (v ?? fallback).replace(/\D/g, "");

export const site = {
  name: "MyDentist",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mydentist.mx",
  whatsapp: digits(process.env.NEXT_PUBLIC_WHATSAPP, "526220000000"),
  phone: digits(process.env.NEXT_PUBLIC_PHONE, "526220000000"),
  phoneDisplay: "+52 622 000 0000",
  email: "hola@mydentist.mx",
  doctor: "Dr. Daniel Martínez",
  address: {
    street: "Blvd. Manlio Fabio Beltrones 123, Local 4",
    area: "Sector Creston, San Carlos Nuevo Guaymas",
    city: "Guaymas, Sonora 85506",
    country: "México",
  },
  /** San Carlos, Sonora. Replace with the clinic pin. */
  map: {
    lat: 27.9614,
    lng: -111.0475,
    zoom: 16,
  },
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
  const { lat, lng, zoom } = site.map;
  return `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&hl=${lang}&output=embed`;
}

export function mapLink() {
  const { lat, lng } = site.map;
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:+${site.phone}`;
}
