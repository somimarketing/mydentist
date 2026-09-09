/**
 * Real clinic facts. Everything here is confirmed.
 * Anything still unconfirmed stays as [DATO] in the blocks and is listed
 * in docs/pending-from-daniel.md.
 */

const digits = (v: string) => v.replace(/\D/g, "");

export const site = {
  name: "MyDentist",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mydentist.mx",
  city: "San Carlos, Sonora",

  /** Primary booking channel. */
  whatsapp: digits("+52 33 1606 8212"),
  phoneDisplay: "+52 33 1606 8212",

  address: {
    street: "Aurora 299",
    area: "Sector Crestón, Ranchito Campestre",
    city: "85506 San Carlos, Sonora",
    country: "México",
    /** Google geocodes this string for the map link. */
    query: "Aurora 299, Sector Crestón, Ranchito Campestre, 85506 San Carlos, Sonora, México",
  },

  doctors: [
    {
      id: "daniel",
      name: "Dr. Daniel Martínez Corona",
      shortName: "Dr. Daniel",
      phone: digits("+52 33 1606 8212"),
      phoneDisplay: "+52 33 1606 8212",
      email: "daniel_mcn88@hotmail.com",
    },
    {
      id: "carolina",
      name: "Dra. Carolina García Albelais",
      shortName: "Dra. Carolina",
      phone: digits("+52 33 3191 5965"),
      phoneDisplay: "+52 33 3191 5965",
      email: "carogarcia.albelais@gmail.com",
    },
  ],
} as const;

/** Deep-links WhatsApp with the message already typed. */
export function whatsappUrl(message: string, number: string = site.whatsapp) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function telUrl(number: string = site.whatsapp) {
  return `tel:+${number}`;
}

export function mapUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.query)}`;
}

/**
 * The prefilled openers. English only for now; the Spanish set lands with
 * the /es route.
 */
export const messages = {
  general: "Hi MyDentist, I'd like to ask about treatment in San Carlos.",
  consult:
    "Hi MyDentist, I'd like to book a free virtual consult in English before I travel.",
  quote:
    "Hi MyDentist, I'd like a written quote. I can send photos or an x-ray.",
} as const;

/** Every CTA on the page resolves through these. */
export const links = {
  whatsapp: whatsappUrl(messages.general),
  /** TODO: swap for a real booking calendar when one exists. */
  booking: whatsappUrl(messages.consult),
  quote: whatsappUrl(messages.quote),
  phone: telUrl(),
  map: mapUrl(),
  /** [DATO] Instagram handle not confirmed. */
  instagram: null as string | null,
} as const;
