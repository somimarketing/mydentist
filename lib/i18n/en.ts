/**
 * English copy: US and Canadian dental-tourism patients.
 *
 * Their decision turns on three fears, in this order: is a clinic in Mexico
 * actually safe, will I be stuck flying back and forth, and what does it
 * really cost against my quote at home. Every section answers one of those.
 *
 * This file is the shape the Spanish dictionary must satisfy, so keep it
 * complete. [DATO] marks a real figure only Daniel can confirm; see
 * docs/pending-from-daniel.md. Never replace one with an invented number.
 */
export const en = {
  meta: {
    title: "MyDentist | Implants and dental care in San Carlos, Mexico",
    description:
      "World-class implants, crowns and clear aligners in San Carlos, Sonora. The same treatment you would get in the US, for a fraction of the price. Free virtual consult in English before you travel.",
    ogTitle: "MyDentist | Implants and dental care in San Carlos, Mexico",
    ogDescription:
      "The same implants you would get in the US, for a fraction of the price. A short drive from Arizona.",
  },

  /** Prefilled WhatsApp openers, written as the visitor would type them. */
  whatsapp: {
    general: "Hi MyDentist, I'd like to ask about treatment in San Carlos.",
    consult:
      "Hi MyDentist, I'd like to book a free virtual consult in English before I travel.",
    quote: "Hi MyDentist, I'd like a written quote. I can send photos or an x-ray.",
  },

  common: {
    bookConsult: "Book your consult",
    whatsapp: "WhatsApp",
    freeInEnglish: "Free, in English",
    messageTheClinic: "Message the clinic",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "MyDentist home",
    switchLanguage: "Ver esta página en español",
  },

  nav: {
    groups: [
      {
        title: "Treatments",
        description: "Implants, crowns and aligners, planned around a single trip.",
        items: [
          { title: "Dental implants", href: "#pricing" },
          { title: "Full arch, All-on-4", href: "#pricing" },
          { title: "Crowns", href: "#pricing" },
          { title: "Clear aligners", href: "#pricing" },
        ],
      },
      {
        title: "Why MyDentist",
        description: "How the trip works, what it costs, and who treats you.",
        items: [
          { title: "How it works", href: "#how" },
          { title: "Compare the cost", href: "#compare" },
          { title: "Real cases", href: "#cases" },
          { title: "Meet your dentists", href: "#dentists" },
        ],
      },
    ],
    links: [
      { title: "Pricing", href: "#pricing" },
      { title: "FAQ", href: "#faq" },
    ],
  },

  hero: {
    /* Three parts so the signature italic can sit anywhere in the line. */
    headlineLead: "Say hello to",
    headlineSig: "my",
    headlineTail: "dentist.",
    support:
      "World-class dental care in San Carlos. The same implants you would get in the US, for a fraction of the price.",
    scroll: "Scroll",
    scrollLabel: "Scroll to the next section",
  },

  /* social-proof-8: real Google reviews from US patients. */
  reviewsCarousel: {
    next: "Next",
    items: [
      {
        quote:
          "He is professional, kind and speaks very good English. The rest of the small team are no less amazing. My spouse is having implants and is thrilled and amazed at the care he has received to date.",
        name: "Brenda Chadwell",
        meta: "Google review",
      },
      {
        quote:
          "From what we have seen the office is totally up to US standards in a pleasant atmosphere. Daniel & Carolina are outstanding, caring people.",
        name: "Bill and Cherie Mollison",
        meta: "Fowlerville, Michigan",
      },
      {
        quote:
          "Had to have an ER dental procedure done. I saw Dr Daniel Martinez Corona. He was great!! Painless, inexpensive and competent. I recommend.",
        name: "Mary McCarthy",
        meta: "Google review",
      },
    ],
  },

  /* features-7: the three proof rows. */
  proof: [
    {
      title: "One trip. One new smile.",
      body:
        "Most implant cases are completed in [DATO] visits over a single stay. We plan it so you fly once.",
    },
    {
      title: "The same brands your dentist at home uses.",
      body:
        "[DATO] implant systems and [DATO] labs. World-class materials, San Carlos price.",
    },
    {
      title: "You talk to the dentist. Not a call center.",
      body:
        "Daniel answers your questions directly, in English, before and after you travel.",
    },
  ],

  how: {
    eyebrow: "How it works",
    headline: "Four steps from your first message to your new smile",
    support:
      "A calm, planned trip. You talk to the dentist at every step, not a call center.",
    steps: [
      {
        title: "Send us your case",
        body: "A few photos and your questions. That is all we need to start.",
      },
      {
        title: "Free video consult",
        body: "Meet Daniel face to face, in English, before you book anything. No cost.",
      },
      {
        title: "Come to San Carlos",
        body: "A short drive or flight from Arizona. We handle the plan, you handle the trip.",
      },
      {
        title: "Leave with your smile",
        body: "Walk out with treatment done and a [DATO]-year warranty in hand.",
      },
    ],
  },

  compare: {
    headline: "MyDentist, San Carlos vs a typical US or Canada clinic",
    support:
      "The same treatment, the same materials, at a fraction of the cost. Here is the honest comparison.",
    treatmentsLabel: "Compare treatments",
    colOurs: { name: "San Carlos", sub: "MyDentist" },
    colTheirs: { name: "US / Canada", sub: "Typical clinic" },
    tabs: [
      { id: "implant", label: "Implant", inSentence: "single implant" },
      { id: "crown", label: "Crown", inSentence: "crown" },
      { id: "aligners", label: "Aligners", inSentence: "clear aligner treatment" },
    ],
    rows: [
      {
        title: "Price (USD)",
        /* {treatment} is replaced with the selected tab's inSentence. */
        description: "What a {treatment} costs, all in, before you travel",
        ours: "$[DATO]",
        theirs: "$[DATO]",
      },
      {
        title: "Wait to start",
        description: "From first message to your first appointment",
        ours: "[DATO]",
        theirs: "[DATO]",
      },
      {
        title: "Trips required",
        description: "How many times you need to travel for the full treatment",
        ours: "[DATO]",
        theirs: "[DATO]",
      },
      {
        title: "Warranty",
        description: "What is covered, and for how long",
        ours: "[DATO] years",
        theirs: "[DATO]",
      },
      {
        title: "Premium brands",
        description: "The same implant systems and lab materials used in the US",
        ours: true,
        theirs: true,
      },
      {
        title: "English-speaking dentist",
        description: "Every consult and every visit, with the dentist who treats you",
        ours: true,
        theirs: "Varies",
      },
    ],
  },

  cases: {
    headlineLead: "Real smiles,",
    headlineAccent: "real patients.",
    support:
      "Every case here is a real patient who traveled, treated, and went home. No stock photos.",
    cta: "See more cases",
    items: [
      { label: "Full-arch implants · [DATO city]", meta: "[DATO]" },
      { label: "Single implant · [DATO city]", meta: "[DATO]" },
      { label: "Clear aligners · [DATO city]", meta: "[DATO]" },
      { label: "Crowns · [DATO city]", meta: "[DATO]" },
    ],
  },

  stats: {
    headline: "The numbers",
    support: "Real results, not marketing.",
    items: [
      { label: "Implants placed", sub: "Since [DATO]", value: "[DATO]", source: "Clinic records" },
      { label: "Years caring for smiles", sub: "In San Carlos", value: "[DATO]", source: "Practice" },
      {
        label: "Patients from the US and Canada",
        sub: "Last 12 months",
        value: "[DATO]%",
        source: "Clinic",
      },
    ],
  },

  dentists: {
    headline: "Meet your dentists",
    support: "The people who will actually treat you.",
    roles: {
      daniel: "Implant and aesthetic dentistry",
      carolina: "General and family dentistry, clinic partner",
    },
  },

  /* social-proof-16: one featured quote plus a wall of reviews. */
  wall: {
    citiesLabel: "Trusted by patients from",
    cities: ["Phoenix, AZ [DATO]", "Tucson, AZ [DATO]", "Calgary, AB [DATO]"],
    ratingLabel: "Rated 5 out of 5 stars",
    googleReview: "Google review",
    featured: {
      quote:
        "I found Dr. Daniel to be THE BEST dentist I have ever had work on my teeth. He is thorough and thoughtful in his explanation of what he feels is the right way to help you retain your healthy teeth.",
      name: "Brenda Chadwell",
      meta: "Google review",
    },
    items: [
      {
        quote:
          "Just finished my annual dentist visit with Dr Daniel. Fantastic service and amazing results. Worth checking him and his wife Dr Carolina for your next visit.",
        name: "Al Dadswell",
        meta: "Google review",
        date: "",
      },
      {
        quote:
          "We are so happy Daniel is active with the San Carlos Rotary and proud that he and Carolina do charity dental care. They are dedicated to their patients, two of whom we met.",
        name: "Cherie Mollison",
        meta: "Fowlerville, Michigan",
        date: "Dec 2024",
      },
      {
        quote:
          "Thank you so much for your attention, Dr. Carolina. I'm very happy with my teeth whitening!",
        name: "Elsa Noelia Ruiz Suchilt",
        meta: "Google review",
        date: "",
      },
      {
        quote:
          "Excellent service, kind and professional team with a very comfortable and enjoyable atmosphere.",
        name: "Guillermo Soberon",
        meta: "Google review",
        date: "",
      },
    ],
  },

  pricing: {
    headline: "Clear pricing, in US dollars.",
    support: "What you would pay at home, and what you pay here.",
    consultNote: "Free virtual consult before you travel.",
    consultSub: "No cost, no pressure.",
    financingToggle: { label: "Toggle financing", full: "Pay in full", financing: "Financing" },
    currency: "USD",
    /* Second line under the price. Struck through in English because it is
       the price the visitor is beating. */
    compare: { prefix: "vs", suffix: "in the US", strike: true },
    plans: [
      {
        name: "Single implant",
        blurb: "One tooth, replaced for good.",
        priceFull: "$[DATO]",
        priceFinancing: "$[DATO]",
        usPrice: "$[DATO]",
        features: [
          "Premium implant brand [DATO]",
          "Crown included [DATO]",
          "[DATO]-year warranty",
        ],
        cta: "Book your consult",
      },
      {
        name: "Full arch / All-on-4",
        blurb: "A full arch of fixed teeth, planned around one stay.",
        priceFull: "$[DATO]",
        priceFinancing: "$[DATO]",
        usPrice: "$[DATO]",
        features: [
          "[DATO] implants per arch",
          "Fixed, non-removable teeth [DATO]",
          "[DATO]-year warranty",
        ],
        cta: "Book your consult",
      },
      {
        name: "Clear aligners",
        blurb: "A custom smile plan. Pricing depends on your case.",
        priceFull: "$[DATO]",
        priceFinancing: "$[DATO]",
        usPrice: "$[DATO]",
        features: [
          "Full treatment plan [DATO]",
          "Remote check-ins [DATO]",
          "Retainers included [DATO]",
        ],
        cta: "Schedule a call",
      },
    ],
  },

  faq: {
    headline: "Your questions, answered.",
    support:
      "The questions every US and Canada patient asks before booking a flight. Anything else, message us on WhatsApp.",
    items: [
      {
        q: "Is dental care in Mexico actually safe?",
        a: "Yes, when the clinic holds itself to the standard you expect at home. We follow [DATO] sterilization protocols, Daniel holds [DATO] credentials, and we place the same implant brands used in the US, [DATO].",
      },
      {
        q: "How many trips will I need?",
        a: "[DATO]. We plan around one stay whenever the case allows, and tell you exactly how many days you need before you book anything.",
      },
      {
        q: "How much will I really save?",
        a: "Roughly [DATO] versus a US clinic, with no hidden fees. You get your full quote in writing before you travel.",
      },
      {
        q: "What if something goes wrong after I fly home?",
        a: "Every treatment carries a [DATO]-year warranty, and we coordinate with a dentist near you if follow-up is needed [DATO].",
      },
      {
        q: "Do you speak English?",
        a: "Yes. Every consult and every visit is in English, with Daniel himself, not a call center.",
      },
      {
        q: "How do I get to San Carlos?",
        a: "[DATO] from the Arizona border by car, or fly into [DATO]. We tell you the simplest route for where you are coming from.",
      },
    ],
  },

  finalCta: {
    /* Rendered as: <sig>{headlineSig}</sig> {headlineRest} / {headlineLine2} */
    headlineSig: "Your",
    headlineRest: "new smile",
    headlineLine2: "starts with a message.",
    place: "San Carlos, Sonora",
  },

  contact: {
    headline: "Get in touch",
    support: "Talk to the dentist who will actually treat you.",
    methods: [
      {
        title: "WhatsApp",
        description: "We answer in English, usually same day.",
      },
      {
        title: "Book a free virtual consult",
        description: "See a dentist before you fly. No cost.",
      },
      { title: "Call the clinic", description: "" },
    ],
  },

  footer: {
    city: "San Carlos",
    rights: "All rights reserved.",
    tagline: "DENTAL & AESTHETIC",
    place: "SAN CARLOS, SONORA",
    est: "EST. [DATO]",
    bookConsult: "BOOK YOUR CONSULT",
    whatsapp: "WHATSAPP",
    instagram: "Instagram",
    mark: "MyDentist mark",
  },
};

export type Dictionary = typeof en;
