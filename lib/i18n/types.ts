import type { ServiceId } from "./services";

export type ImageRef = {
  /** Path under /public */
  src: string;
  alt: string;
};

export type NavLink = { href: `#${string}`; label: string };

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
    /** Prefilled WhatsApp message for the primary CTA. */
    whatsappMessage: string;
    /** Prefilled message used after a successful form submission. */
    whatsappFollowUp: string;
  };

  nav: {
    links: NavLink[];
    cta: string;
    menuOpen: string;
    menuClose: string;
    switchLocale: string;
    homeLabel: string;
  };

  hero: {
    headline: string;
    support: string;
    primary: string;
    secondary: { label: string; href: `#${string}` };
    image: ImageRef;
  };

  trust: { value: string; label: string }[];

  services: {
    eyebrow: string;
    headline: string;
    items: { id: ServiceId; name: string; description: string }[];
    cta: string;
  };

  why: {
    eyebrow: string;
    headline: string;
    items: {
      eyebrow: string;
      headline: string;
      body: string;
      image: ImageRef;
    }[];
  };

  beforeAfter: {
    eyebrow: string;
    headline: string;
    support: string;
    beforeLabel: string;
    afterLabel: string;
    sliderLabel: string;
    cases: {
      title: string;
      detail: string;
      before: ImageRef;
      after: ImageRef;
    }[];
  };

  doctors: {
    eyebrow: string;
    headline: string;
    /** Label for the per-doctor WhatsApp link, e.g. "Message Dr. Daniel". `{name}` is replaced. */
    contactLabel: string;
    items: {
      /** Matches an entry in site.doctors by id. */
      id: "daniel" | "carolina";
      name: string;
      role: string;
      credentials: string[];
      quote: string;
      portrait: ImageRef;
    }[];
  };

  process: {
    eyebrow: string;
    headline: string;
    steps: { title: string; body: string }[];
  };

  localeBlock: {
    eyebrow: string;
    headline: string;
    support: string;
    /** Free-form key facts shown as a hairline list. */
    facts: { label: string; value: string }[];
    /** Optional comparison table (used by EN). */
    table?: {
      caption: string;
      columns: [string, string, string];
      rows: { treatment: string; us: string; here: string }[];
      footnote: string;
    };
    /** Optional plan blocks (used by ES). */
    plans?: { title: string; body: string }[];
    cta: string;
  };

  testimonials: {
    eyebrow: string;
    headline: string;
    items: { quote: string; name: string; place: string; treatment: string }[];
  };

  location: {
    eyebrow: string;
    headline: string;
    addressLabel: string;
    hoursLabel: string;
    days: { "mon-fri": string; sat: string; sun: string };
    closed: string;
    mapTitle: string;
    openInMaps: string;
    whatsapp: string;
    call: string;
  };

  faq: {
    eyebrow: string;
    headline: string;
    items: { q: string; a: string }[];
  };

  finalCta: {
    headline: string;
    support: string;
    whatsapp: string;
    whatsappHint: string;
    form: {
      title: string;
      name: string;
      phone: string;
      service: string;
      servicePlaceholder: string;
      date: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successBody: string;
      successWhatsapp: string;
      errorTitle: string;
      errors: {
        name: string;
        phone: string;
        service: string;
        date: string;
        generic: string;
      };
      privacy: string;
    };
    serviceOptions: { id: ServiceId; label: string }[];
  };

  mobileBar: { whatsapp: string; call: string };

  footer: {
    tagline: string;
    nav: string;
    contact: string;
    legal: string;
    privacy: string;
    rights: string;
    instagram: string;
    facebook: string;
  };

  privacy: {
    title: string;
    updated: string;
    body: string[];
  };
};
