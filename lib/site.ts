/**
 * Real clinic facts, from the brand kit (October 2026) and the business card.
 * Anything still unconfirmed stays as PENDING in lib/i18n and is listed in
 * docs/pending-from-daniel.md.
 */

const digits = (v: string) => v.replace(/\D/g, "");

export const site = {
  name: "MyDentist",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mydentist.mx",
  /** The logo lockup is always MyDentist / SAN CARLOS. */
  place: "San Carlos",
  descriptor: "Implant & Cosmetic Center",
  city: "San Carlos, Sonora",
  /** MyDentist is the rebrand of Smile Makers. Same team, same clinic. */
  formerName: "Smile Makers",

  /**
   * Two lines. The Arizona number is the one US and Canadian patients call;
   * the Mexican number is the local one. WhatsApp runs on the Mexican line.
   */
  phoneUs: digits("+1 520-422-8097"),
  phoneUsDisplay: "+1 520-422-8097",
  phoneMx: digits("+52 331-606-8212"),
  phoneMxDisplay: "+52 331-606-8212",

  /** WhatsApp is the booking channel, on the Mexican line. */
  whatsapp: digits("+52 331-606-8212"),

  address: {
    street: "Aurora 299",
    area: "Sector Crestón, Ranchito Campestre",
    city: "85506 San Carlos, Sonora",
    country: "México",
    /** Google geocodes this string for the map link. */
    query: "Aurora 299, Sector Crestón, Ranchito Campestre, 85506 San Carlos, Sonora, México",
  },

  /** Driving time quoted in the brand kit's own hero copy. */
  fromTucson: "four hours",

  /**
   * Three specialists. Specialties are the brand kit's, which correct the
   * earlier guesses: Daniel is prosthodontics and implants, Carolina is
   * orthodontics, Giselle is endodontics.
   */
  doctors: [
    {
      id: "daniel",
      prefix: "Dr.",
      name: "Daniel Martínez",
      fullName: "Dr. Daniel Martínez",
      shortName: "Dr. Martínez",
      /** PENDING Direct line per doctor not confirmed; all use the clinic's. */
      phone: digits("+52 331-606-8212"),
      email: "daniel_mcn88@hotmail.com",
    },
    {
      id: "carolina",
      prefix: "Dra.",
      name: "Carolina García",
      fullName: "Dra. Carolina García",
      shortName: "Dra. García",
      phone: digits("+52 331-606-8212"),
      email: "carogarcia.albelais@gmail.com",
    },
    {
      id: "giselle",
      prefix: "Dra.",
      name: "Giselle Fernanda Ochoa García",
      fullName: "Dra. Giselle Fernanda Ochoa García",
      shortName: "Dra. Ochoa",
      phone: digits("+52 331-606-8212"),
      /** PENDING Email not in the brand kit. */
      email: "",
    },
  ],
} as const;

export type DoctorId = (typeof site.doctors)[number]["id"];

export function whatsappUrl(message: string, number: string = site.whatsapp) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function telUrl(number: string) {
  return `tel:+${number}`;
}

export function mapUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.query)}`;
}
