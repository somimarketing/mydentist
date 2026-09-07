import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "MyDentist San Carlos | Dental care in Sonora, Mexico for US and Canadian patients",
    description:
      "American-standard dentistry in San Carlos, Sonora. Implants, crowns and veneers finished in one trip, with transparent USD pricing, inspectable sterilization and an English-speaking team.",
    ogAlt: "MyDentist clinic in San Carlos, Sonora",
    whatsappMessage:
      "Hi MyDentist, I'm interested in a treatment quote. I'm visiting from the US/Canada.",
    whatsappFollowUp:
      "Hi MyDentist, I just sent a booking request through your website and wanted to confirm the details.",
  },

  nav: {
    links: [
      { href: "#services", label: "Treatments" },
      { href: "#pricing", label: "USD pricing" },
      { href: "#doctor", label: "Dr. Martínez" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "Get a quote on WhatsApp",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    switchLocale: "Cambiar a español",
    homeLabel: "MyDentist, back to top",
  },

  hero: {
    headline: "Your whole treatment. One trip. A third of the price.",
    support:
      "A private dental clinic in San Carlos, Sonora, run to the standard you expect at home. Sterilization you can inspect, prices you can compare, and a doctor who speaks your language.",
    primary: "Get a written quote on WhatsApp",
    secondary: { label: "See USD pricing", href: "#pricing" },
    image: {
      src: "/placeholder/hero-clinic-2400x1600.jpg",
      alt: "Treatment room at MyDentist, San Carlos, Sonora",
    },
  },

  trust: [
    { value: "12", label: "years in practice" },
    { value: "4,000+", label: "patients treated, a third from the US and Canada" },
    { value: "3D", label: "imaging and in-house CAD/CAM lab" },
    { value: "5-year", label: "written guarantee on crowns and implants" },
  ],

  services: {
    eyebrow: "Treatments",
    headline: "The work that brings people across the border.",
    items: [
      {
        id: "implants",
        name: "Dental implants",
        description:
          "Titanium implants from the same Swiss and German brands your dentist at home uses. Placed and restored here, no second trip.",
      },
      {
        id: "crowns",
        name: "Crowns and bridges",
        description:
          "Zirconia and E.max crowns milled in our own lab, so a full arch fits in a single visit instead of three weeks of waiting.",
      },
      {
        id: "veneers",
        name: "Porcelain veneers",
        description:
          "Hand-layered porcelain, designed digitally before we touch a tooth. You approve the smile on screen first.",
      },
      {
        id: "fullmouth",
        name: "Full-mouth restoration",
        description:
          "Implants, crowns and grafting planned as one case with one written price. Most cases finish in five to seven days.",
      },
      {
        id: "rootcanal",
        name: "Root canals",
        description:
          "Microscope-assisted endodontics, completed in one appointment whenever the tooth allows.",
      },
      {
        id: "whitening",
        name: "Professional whitening",
        description:
          "In-office whitening in ninety minutes, with a take-home kit to hold the shade through your trip home.",
      },
    ],
    cta: "Ask about a treatment on WhatsApp",
  },

  why: {
    eyebrow: "Why MyDentist",
    headline: "The three questions every patient from the north asks first.",
    items: [
      {
        eyebrow: "Is it safe?",
        headline: "Walk in and inspect the sterilization yourself.",
        body:
          "Every instrument is autoclaved and pouched with a dated indicator strip you can read. Handpieces are single-patient sterilized, not wiped. The clinic is COFEPRIS-licensed and Dr. Martínez completed his advanced training in implantology in the US. Ask to see the autoclave log. We will show you.",
        image: {
          src: "/placeholder/why-sterilization-1600x1200.jpg",
          alt: "Sterilization room with pouched instruments at MyDentist",
        },
      },
      {
        eyebrow: "Will I have to come back?",
        headline: "Planned before you fly. Finished before you leave.",
        body:
          "Send us your x-rays or photos on WhatsApp and you get a written treatment plan with USD pricing before you book a flight. Crowns and veneers are milled in our own CAD/CAM lab the same day, so a case that takes three US appointments takes one stay here.",
        image: {
          src: "/placeholder/why-one-trip-1600x1200.jpg",
          alt: "In-house dental lab milling a crown",
        },
      },
      {
        eyebrow: "How do I get there?",
        headline: "A beach town, not a border town.",
        body:
          "San Carlos sits on the Sea of Cortez, ninety minutes from Hermosillo International or a straight run down Highway 15 from Nogales. Your recovery days are spent on the water, not in a waiting room. We will send you a hotel shortlist and airport transfer options with your quote.",
        image: {
          src: "/placeholder/why-location-1600x1200.jpg",
          alt: "San Carlos bay and the Tetakawi hills at dusk",
        },
      },
    ],
  },

  beforeAfter: {
    eyebrow: "Results",
    headline: "Real cases, treated here.",
    support:
      "Drag the handle to compare. Every case shown was completed at MyDentist within a single visit to San Carlos.",
    beforeLabel: "Before",
    afterLabel: "After",
    sliderLabel: "Compare before and after",
    cases: [
      {
        title: "Eight porcelain veneers",
        detail: "Upper arch, five days, patient from Tucson",
        before: { src: "/placeholder/ba-veneers-before-1200x900.jpg", alt: "Smile before veneers" },
        after: { src: "/placeholder/ba-veneers-after-1200x900.jpg", alt: "Smile after eight porcelain veneers" },
      },
      {
        title: "Single implant and crown",
        detail: "Front tooth, immediate placement, patient from Phoenix",
        before: { src: "/placeholder/ba-implant-before-1200x900.jpg", alt: "Missing front tooth before implant" },
        after: { src: "/placeholder/ba-implant-after-1200x900.jpg", alt: "Restored front tooth after implant and crown" },
      },
      {
        title: "In-office whitening",
        detail: "Ninety minutes, patient from Calgary",
        before: { src: "/placeholder/ba-whitening-before-1200x900.jpg", alt: "Teeth before whitening" },
        after: { src: "/placeholder/ba-whitening-after-1200x900.jpg", alt: "Teeth after professional whitening" },
      },
    ],
  },

  doctor: {
    eyebrow: "Your dentist",
    name: "Dr. Daniel Martínez",
    role: "General and cosmetic dentistry, clinic director",
    credentials: [
      "DDS, Universidad Autónoma de Guadalajara",
      "Advanced implantology residency, New York University College of Dentistry",
      "Member, Asociación Dental Mexicana and American Academy of Cosmetic Dentistry",
      "Licensed by COFEPRIS, Mexico's federal health authority",
    ],
    quote:
      "I trained in New York and I could have stayed. I came home to San Carlos because I wanted to build the clinic I would send my own family to. If you fly in, you will meet me on your first day and on your last.",
    portrait: {
      src: "/placeholder/doctor-portrait-1200x1500.jpg",
      alt: "Portrait of Dr. Daniel Martínez",
    },
  },

  process: {
    eyebrow: "How it works",
    headline: "Four steps from your first message to your flight home.",
    steps: [
      {
        title: "Send us photos or x-rays",
        body: "On WhatsApp. Within one business day you get a written plan with USD pricing and how many days to book.",
      },
      {
        title: "Fly in and meet the doctor",
        body: "Your first appointment is the day you land. We take 3D scans, confirm the plan and the price in writing, then start.",
      },
      {
        title: "Treatment, two to seven days",
        body: "Crowns and veneers milled here the same day. Implants placed and, when possible, restored on the same trip.",
      },
      {
        title: "Fly home with a guarantee",
        body: "Your file, x-rays and written five-year guarantee go with you. Follow-up is on WhatsApp, with the doctor, not a call center.",
      },
    ],
  },

  localeBlock: {
    eyebrow: "Your treatment in one trip",
    headline: "What it costs. What it costs at home.",
    support:
      "Prices below are typical starting prices at MyDentist in US dollars, next to published US national averages. Your written quote is fixed before you fly and does not change on arrival.",
    facts: [
      { label: "Nearest airport", value: "Hermosillo International (HMO), 90 minutes by road" },
      { label: "By car from the border", value: "Nogales, AZ to San Carlos on Highway 15, about 4.5 hours" },
      { label: "Where to stay", value: "We send a shortlist of three hotels within ten minutes of the clinic with your quote" },
      { label: "Payment", value: "USD cash, US credit cards, wire transfer. Itemized receipts for your insurance claim" },
    ],
    table: {
      caption: "Typical pricing in USD",
      columns: ["Treatment", "US average", "MyDentist"],
      rows: [
        { treatment: "Dental implant with crown", us: "$4,500 to $6,000", here: "from $1,650" },
        { treatment: "Zirconia crown", us: "$1,300 to $2,500", here: "from $450" },
        { treatment: "Porcelain veneer, per tooth", us: "$1,200 to $2,500", here: "from $420" },
        { treatment: "Root canal, molar", us: "$1,200 to $1,800", here: "from $320" },
        { treatment: "Full-arch implant restoration", us: "$25,000 to $35,000", here: "from $9,800" },
        { treatment: "In-office whitening", us: "$500 to $1,000", here: "from $220" },
      ],
      footnote:
        "US averages are published national ranges without insurance. MyDentist prices are starting prices for standard cases and are confirmed in writing after reviewing your x-rays.",
    },
    cta: "Send x-rays for a fixed quote",
  },

  testimonials: {
    eyebrow: "From patients",
    headline: "What people say when they get home.",
    items: [
      {
        quote:
          "I had a quote of $31,000 in Scottsdale for the same work. The plan here was $9,800, itemized, and it did not move a dollar. The sterilization room was cleaner than my own dentist's.",
        name: "Karen W.",
        place: "Tucson, Arizona",
        treatment: "Full-arch implants",
      },
      {
        quote:
          "We drove down from Phoenix, stayed four nights on the marina and Linda flew home with eight veneers. Dr. Martínez called us himself two days later to check in.",
        name: "Mike and Linda R.",
        place: "Phoenix, Arizona",
        treatment: "Veneers",
      },
      {
        quote:
          "Two implants, one trip, no second flight. They emailed the full plan in English before I booked anything. I have already sent two friends from work.",
        name: "Doug P.",
        place: "Calgary, Alberta",
        treatment: "Implants",
      },
    ],
  },

  location: {
    eyebrow: "The clinic",
    headline: "On the main boulevard in San Carlos, ten minutes from the marina.",
    addressLabel: "Address",
    hoursLabel: "Hours, Sonora time",
    days: { "mon-fri": "Monday to Friday", sat: "Saturday", sun: "Sunday" },
    closed: "Closed",
    mapTitle: "Map showing MyDentist in San Carlos, Sonora",
    openInMaps: "Open in Google Maps",
    whatsapp: "Message us on WhatsApp",
    call: "Call the clinic",
  },

  faq: {
    eyebrow: "Questions",
    headline: "What patients ask before they book.",
    items: [
      {
        q: "Is a dental clinic in Mexico really as safe as one in the US?",
        a: "Ours is. We use the same implant brands, the same autoclave sterilization cycle with dated indicator strips, and single-use materials for every patient. The clinic is licensed and inspected by COFEPRIS, Mexico's federal health authority. You are welcome to see the sterilization room before treatment starts.",
      },
      {
        q: "Does the staff speak English?",
        a: "Yes. Dr. Martínez trained in New York and the front desk and assistants all speak English. Your treatment plan, consent forms and receipts are in English.",
      },
      {
        q: "How do I get a price before I travel?",
        a: "Send photos or a recent panoramic x-ray on WhatsApp. Within one business day you receive a written plan with USD prices and the number of days to book. That price is fixed unless the 3D scan on arrival shows something the x-ray could not.",
      },
      {
        q: "Can it really be done in one trip?",
        a: "Crowns, veneers, root canals, whitening and most single implants, yes. Some implant cases need the bone to heal for three to four months before the final crown, and we tell you that in the written plan so you can decide between a temporary and a second short visit.",
      },
      {
        q: "What guarantee do I get?",
        a: "A written five-year guarantee on crowns, bridges and implants, and two years on fillings and veneers, covering repair or replacement at the clinic. Your x-rays and full file go home with you.",
      },
      {
        q: "What is the closest airport and how do I get to San Carlos?",
        a: "Hermosillo International (HMO) is about ninety minutes by road, with direct flights from Phoenix and Los Angeles. We arrange a private transfer or you can rent a car. Driving from Nogales, Arizona takes about four and a half hours on Highway 15, a modern toll road.",
      },
      {
        q: "Can I pay with a US card or use my insurance?",
        a: "We accept USD cash, Visa, Mastercard, American Express and wire transfers. We are out of network for US insurers, but we give you itemized receipts with procedure codes, which most PPO plans reimburse in part.",
      },
      {
        q: "What if something goes wrong after I go home?",
        a: "You message Dr. Martínez directly on WhatsApp and he answers. Minor adjustments can usually be handled by a local dentist and we cover the cost under the guarantee. Anything larger, you come back and the correction is done at no charge.",
      },
    ],
  },

  finalCta: {
    headline: "Send a photo today. Have a price by tomorrow.",
    support:
      "The fastest way is WhatsApp. Dr. Martínez's team replies within one business day with a written plan in USD.",
    whatsapp: "Message us on WhatsApp",
    whatsappHint: "Opens WhatsApp with a message ready to send",
    form: {
      title: "Or leave your details and we will message you",
      name: "Your name",
      phone: "Phone or WhatsApp number",
      service: "What do you need?",
      servicePlaceholder: "Choose a treatment",
      date: "Preferred dates",
      submit: "Request my written quote",
      submitting: "Sending your request",
      successTitle: "Got it. We will message you within one business day.",
      successBody:
        "Want an answer sooner? Send us a photo or x-ray on WhatsApp and we will start your plan now.",
      successWhatsapp: "Continue on WhatsApp",
      errorTitle: "Something needs a second look",
      errors: {
        name: "Please tell us your name.",
        phone: "Enter a phone number we can reach you on, with country code.",
        service: "Choose the treatment you are asking about.",
        date: "Choose a date from today onward.",
        generic: "We could not send that. Please try again or message us on WhatsApp.",
      },
      privacy: "We only use this to reply to you. No newsletters.",
    },
    serviceOptions: [
      { id: "implants", label: "Dental implants" },
      { id: "crowns", label: "Crowns and bridges" },
      { id: "veneers", label: "Porcelain veneers" },
      { id: "fullmouth", label: "Full-mouth restoration" },
      { id: "rootcanal", label: "Root canal" },
      { id: "whitening", label: "Whitening" },
      { id: "cleaning", label: "Cleaning and check-up" },
      { id: "other", label: "Something else" },
    ],
  },

  mobileBar: { whatsapp: "WhatsApp", call: "Call" },

  footer: {
    tagline: "Dental care in San Carlos, Sonora, for patients from both sides of the border.",
    nav: "Sections",
    contact: "Contact",
    legal: "Legal",
    privacy: "Privacy notice",
    rights: "All rights reserved.",
    instagram: "MyDentist on Instagram",
    facebook: "MyDentist on Facebook",
  },

  privacy: {
    title: "Privacy notice",
    updated: "Last updated September 2026",
    body: [
      "MyDentist, located in San Carlos Nuevo Guaymas, Sonora, Mexico, is responsible for the personal data you share through this website, WhatsApp, phone or in person.",
      "We collect your name, phone number, email, the treatment you are asking about and any clinical images you send us. We use them only to reply to you, prepare a treatment plan, schedule appointments and provide dental care.",
      "Your clinical records are kept under Mexican federal law (NOM-004-SSA3-2012 and the Ley Federal de Protección de Datos Personales en Posesión de los Particulares). We do not sell or share your data with third parties for marketing.",
      "You can ask to access, correct, cancel or oppose the use of your data (ARCO rights) by writing to hola@mydentist.mx. We answer within twenty business days.",
    ],
  },
};
