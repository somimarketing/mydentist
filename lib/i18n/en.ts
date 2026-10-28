/**
 * English copy: US and Canadian dental-tourism patients.
 *
 * Their decision turns on three fears, in this order: is a clinic in Mexico
 * actually safe, will I be stuck flying back and forth, and what does it
 * really cost against my quote at home. Every section answers one of those.
 *
 * This file is the shape the Spanish dictionary must satisfy, so keep it
 * complete. Nothing here states a figure the clinic has not confirmed: where
 * a number is still pending, the copy promises a written quote instead of
 * guessing. docs/pending-from-daniel.md lists what to drop in once Daniel
 * confirms it. Never replace one of those with an invented number.
 */
export const en = {
  meta: {
    title: "MyDentist San Carlos | Implant & Cosmetic Center in Sonora, Mexico",
    description:
      "Implants, orthodontics and endodontics from three specialists in San Carlos, Sonora, four hours from Tucson. Every treatment starts with a plan you can read and a written price.",
    ogTitle: "MyDentist San Carlos | Implant & Cosmetic Center",
    ogDescription:
      "Implants with a clear plan and a written price. Three specialists, four hours from Tucson.",
  },

  /** Prefilled WhatsApp openers, written as the visitor would type them. */
  whatsapp: {
    general: "Hi MyDentist, I'd like to ask about treatment in San Carlos.",
    consult:
      "Hi MyDentist, I'd like to book a free virtual consult in English before I travel.",
    quote: "Hi MyDentist, I'd like a written quote. I can send photos or an x-ray.",
  },

  common: {
    /* The brand kit's own button label. */
    bookConsult: "Book on WhatsApp",
    whatsapp: "WhatsApp",
    freeInEnglish: "Free, in English",
    messageTheClinic: "Message the clinic",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "MyDentist home",
    switchLanguage: "Ver esta página en español",
    drag: "Drag",
    skipToContent: "Skip to main content",
  },

  nav: {
    groups: [
      {
        title: "Treatments",
        description: "Implants, orthodontics and endodontics, planned around one trip.",
        items: [
          { title: "Dental implants", href: "#pricing" },
          { title: "Full arch, All-on-4", href: "#pricing" },
          { title: "Orthodontics", href: "#pricing" },
          { title: "Root canals", href: "#pricing" },
        ],
      },
      {
        title: "Doctors",
        description: "Three specialists, and how the trip actually works.",
        items: [
          { title: "Meet the doctors", href: "#dentists" },
          { title: "How it works", href: "#how" },
          { title: "Compare the cost", href: "#compare" },
          { title: "Real cases", href: "#cases" },
        ],
      },
    ],
    links: [
      { title: "Prices", href: "#pricing" },
      { title: "Visit us", href: "#faq" },
    ],
  },

  hero: {
    /* The brand kit's own hero. The accent phrase drops to Powder Mist,
       which is how the kit sets a display line, since Bogart has no italic. */
    eyebrow: "Implant & Cosmetic Center · San Carlos, Sonora",
    headlineLead: "Implants with a clear plan",
    headlineSig: "and a written price.",
    headlineTail: "",
    support:
      "Personal care from three specialists, four hours from Tucson. Every treatment starts with a plan you can read.",
    secondary: "Meet the doctors",
    scroll: "Scroll",
    scrollLabel: "Scroll to the next section",
  },

  /*
    The hero composer. The template shipped this as an AI prompt box; here it
    is the clinic's front door. Whatever the visitor types is handed to
    WhatsApp as the opening message, so the first thing the dentist sees is
    the patient's own words rather than a form submission.
  */
  composer: {
    placeholder:
      "Tell us what is going on. A missing tooth, a US quote you want checked, a pain that will not quit.",
    chips: [
      "Single implant",
      "Full arch",
      "Orthodontics",
      "Check my US quote",
      "Something hurts",
    ],
    send: "Send on WhatsApp",
    sendLabel: "Send this message to the clinic on WhatsApp",
    note: "Goes straight to the clinic on WhatsApp. A dentist answers, not a call centre.",
    chipsLabel: "Common reasons people write in",
  },

  /* The one display line between the hero and the gallery. */
  reveal: {
    line: "The dentist who plans your case is the one who does it.",
  },

  /* The scroll-driven gallery. Placeholder art until clinic photography lands. */
  gallery: {
    eyebrow: "Inside the clinic",
    headline: "What a visit actually looks like",
    support: "San Carlos, Sonora.",
  },

  /* social-proof-8: real Google reviews from US patients. */
  reviewsCarousel: {
    next: "Next review",
    previous: "Previous review",
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
        "We plan implant cases around a single stay whenever the case allows, and tell you the exact number of days before you book a flight.",
    },
    {
      title: "The same brands your dentist at home uses.",
      body:
        "We place the same implant systems and use the same lab materials your dentist at home would. World-class work, San Carlos price.",
    },
    {
      title: "Three specialists, under one roof.",
      body:
        "Prosthodontics, orthodontics and endodontics in the same clinic, so your case never gets handed off to a stranger across town.",
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
        body: "Meet your specialist face to face, in English, before you book anything. No cost.",
      },
      {
        title: "Come to San Carlos",
        body: "Four hours from Tucson by road. We send you the route, the parking and where to stay. You just drive.",
      },
      {
        title: "Leave with your smile",
        body: "Walk out with the work done, your aftercare in writing, and your dentist\u2019s own WhatsApp.",
      },
    ],
  },

  compare: {
    headline: "MyDentist, San Carlos vs a typical US or Canada clinic",
    support:
      "The same treatment, the same materials, the same brands. The honest comparison is the one where our column is specific, so go ask them the same four questions.",
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
        title: "Your price",
        /* {treatment} is replaced with the selected tab's inSentence. */
        description: "What a {treatment} costs, all in, before you travel",
        ours: "In writing, up front",
        theirs: "Ask them",
      },
      {
        title: "Who plans your case",
        description: "The person who decides what gets done, and does it",
        ours: "The specialist treating you",
        theirs: "Ask them",
      },
      {
        title: "Specialists on site",
        description: "Whether your case gets referred out mid-treatment",
        ours: "Prostho, ortho, endo",
        theirs: "Ask them",
      },
      {
        title: "Getting here",
        description: "What it takes to reach the chair",
        ours: "Four hours from Tucson",
        theirs: "Around the corner",
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
    headlineLead: "What we do,",
    headlineAccent: "under one roof.",
    support:
      "Implants, full-arch restorations, aligners and crowns. Planned, placed and followed up in the same clinic, by the same doctors.",
    cta: "Ask about your case",
    items: [
      { label: "Full-arch implants", meta: "All-on-4" },
      { label: "Single implant", meta: "Crown included" },
      { label: "Clear aligners", meta: "Orthodontics" },
      { label: "Crowns & veneers", meta: "Cosmetic" },
    ],
  },

  stats: {
    headline: "The short version",
    support: "What you are actually driving to.",
    items: [
      {
        label: "Specialists, one clinic",
        sub: "Under one roof",
        value: "3",
        source: "MyDentist San Carlos",
      },
      {
        label: "Hours from Tucson",
        sub: "By road",
        value: "4",
        source: "Drive time",
      },
      {
        label: "Languages, every visit",
        sub: "English and Spanish",
        value: "2",
        source: "Clinic",
      },
    ],
  },

  dentists: {
    headline: "Three doctors, one standard of care.",
    support: "Prosthodontics, orthodontics and endodontics in one place.",
    /* Rendered only when filled. Licence numbers and universities for all
       three are still pending; see docs/pending-from-daniel.md. */
    licenseLabel: "",
    bookWith: "Book with",
    items: [
      {
        id: "daniel",
        specialty: "Prosthodontics & implants",
        bio: "Rebuilds complete smiles with implants and fixed prosthetics. Plans every case in writing, in a single consultation.",
      },
      {
        id: "carolina",
        specialty: "Orthodontics",
        bio: "Braces and clear aligners for children and adults, with close follow-up at every visit.",
      },
      {
        id: "giselle",
        specialty: "Endodontics",
        bio: "Root canal treatment with a minimally invasive technique, to keep your natural tooth.",
      },
    ],
  },

  /* social-proof-16: one featured quote plus a wall of reviews. */
  wall: {
    citiesLabel: "Trusted by patients from",
    cities: ["Arizona", "Michigan", "Sonora"],
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
    headline: "Your price, in writing.",
    support:
      "Send photos or an x-ray and we return the full plan and the full number in US dollars, before you book anything.",
    consultNote: "Free virtual consult before you travel.",
    consultSub: "No cost, no pressure.",
    financingToggle: { label: "Toggle financing", full: "Pay in full", financing: "Financing" },
    /* Empty hides the unit beside the headline figure, and an empty usPrice
       hides the comparison line under it. Both come back the day Daniel
       confirms real numbers. */
    currency: "",
    compare: { prefix: "vs", suffix: "in the US", strike: true },
    plans: [
      {
        name: "Single implant",
        blurb: "One tooth, replaced for good.",
        priceFull: "One tooth",
        priceFinancing: "One tooth",
        usPrice: "",
        features: [
          "Implant, abutment and crown",
          "Planned in one consult",
          "Quoted in writing before you travel",
        ],
        cta: "Book your consult",
      },
      {
        name: "Full arch / All-on-4",
        blurb: "A full arch of fixed teeth, planned around one stay.",
        priceFull: "Full arch",
        priceFinancing: "Full arch",
        usPrice: "",
        features: [
          "Fixed teeth, not a removable plate",
          "Planned around a single stay",
          "Quoted in writing before you travel",
        ],
        cta: "Book your consult",
      },
      {
        name: "Clear aligners",
        blurb: "A custom smile plan. Pricing depends on your case.",
        priceFull: "Custom plan",
        priceFinancing: "Custom plan",
        usPrice: "",
        features: [
          "Braces or clear aligners",
          "Checked by Dr. Carolina at every visit",
          "Quoted in writing before you travel",
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
        a: "Judge the clinic, not the country. Ask who is treating you, what brand is going in your mouth, and what happens if it fails. Then ask the same of your clinic at home. Here you get all three in writing, from the specialist who does the work, before you spend a peso.",
      },
      {
        q: "How many trips will I need?",
        a: "We plan around one stay whenever the case allows. You get the exact number of days, and the exact number of visits, before you book a flight or a room.",
      },
      {
        q: "How much will I really save?",
        a: "Enough that people drive four hours for it. We will not quote you a percentage off a clinic we have never seen. Send us your US quote and your x-ray, and we will send back our number beside it, in writing.",
      },
      {
        q: "What if something goes wrong after I fly home?",
        a: "You message the doctor who treated you, directly, on WhatsApp. We tell you what we cover and for how long in the same written plan you get before treatment starts, and we will talk to a dentist near you if one needs to see it.",
      },
      {
        q: "Does an implant hurt?",
        a: "With local anaesthetic most people feel only pressure, not pain. We talk you through each step before it happens, and you decide the pace.",
      },
      {
        q: "How do I get to San Carlos?",
        a: "Four hours from Tucson by road, straight down Mexico 15. Tell us where you are coming from and we will send the route, the border crossing and where to stay.",
      },
    ],
  },

  finalCta: {
    /* Rendered as: <sig>{headlineSig}</sig> {headlineRest} / {headlineLine2} */
    headlineSig: "Smile here.",
    headlineRest: "",
    headlineLine2: "Save there.",
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
        description: "Meet your specialist before you fly. No cost.",
      },
      { title: "Call the clinic", description: "" },
    ],
  },

  footer: {
    /* Smile Makers is now MyDentist San Carlos. Same team, same clinic. */
    rebrand: "Smile Makers is now MyDentist San Carlos.",
    descriptor: "Implant & Cosmetic Center",
    city: "San Carlos",
    rights: "All rights reserved.",
    tagline: "IMPLANT & COSMETIC CENTER",
    place: "SAN CARLOS, SONORA",
    est: "",
    bookConsult: "BOOK YOUR CONSULT",
    whatsapp: "WHATSAPP",
    instagram: "Instagram",
    mark: "MyDentist mark",
  },
};

export type Dictionary = typeof en;
