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
  email: "daniel_mcn88@hotmail.com",
  doctors: [
    {
      id: "daniel",
      name: "Dr. Daniel Martínez Corona",
      shortName: "Dr. Daniel",
      phone: "523316068212",
      phoneDisplay: "+52 33 1606 8212",
      email: "daniel_mcn88@hotmail.com",
    },
    {
      id: "carolina",
      name: "Dra. Carolina García Albelais",
      shortName: "Dra. Carolina",
      phone: "523331915965",
      phoneDisplay: "+52 33 3191 5965",
      email: "carogarcia.albelais@gmail.com",
    },
  ],
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

export function whatsappLink(message: string, number: string = site.whatsapp) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function doctorById(id: (typeof site.doctors)[number]["id"]) {
  const doc = site.doctors.find((d) => d.id === id);
  if (!doc) throw new Error(`Unknown doctor id ${id}`);
  return doc;
}

export function telLink() {
  return `tel:+${site.phone}`;
}
