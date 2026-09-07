# MyDentist San Carlos

Bilingual (EN/ES) landing page for MyDentist, San Carlos, Sonora. Next.js 15 App Router, TypeScript strict, Tailwind v4, Radix (shadcn-style accordion), zod server action.

The two locales are two different pitches, not a translation:

- `/en` speaks to US and Canadian dental-tourism patients: safety, credentials, USD pricing vs US averages, one-trip treatment, travel logistics.
- `/es` speaks to Sonoran families: mensualidades sin intereses, cita la misma semana, niños, seguros, WhatsApp.

## Run

```bash
npm install
cp .env.example .env.local   # then edit
npm run dev                  # http://localhost:3000 redirects to /en or /es by Accept-Language
npm run build && npm start
npm run typecheck && npm run lint
```

Measured on the production build (Lighthouse 12, Chromium): performance 95 to 96 mobile and 100 desktop, accessibility 100, best practices 100, SEO 100, zero console warnings on both locales.

## What to swap before launch

| What | Where |
|---|---|
| WhatsApp number | `NEXT_PUBLIC_WHATSAPP` in `.env.local` (digits only, `52` + 10 digits). Fallback lives in `lib/site.ts`. |
| Phone for `tel:` links and the display string | `NEXT_PUBLIC_PHONE` and `site.phoneDisplay` in `lib/site.ts` |
| Public URL for canonical, hreflang, OpenGraph, sitemap | `NEXT_PUBLIC_SITE_URL` |
| Street address, email, social links | `site.address`, `site.email`, `site.social` in `lib/site.ts` |
| Map location | `site.mapQuery` in `lib/site.ts` (an address string Google geocodes; the embed and the "Open in Google Maps" link both read it) |
| Opening hours (also feeds the JSON-LD) | `site.hours` in `lib/site.ts` and the `openingHoursSpecification` block in `app/[locale]/page.tsx` |
| Form delivery | `deliver()` in `app/actions/booking.ts` (marked `TODO`). Wire Resend, a CRM webhook, a Sheet, or the WhatsApp Business API. Validation, honeypot and success/error states are already done. |
| Prefilled WhatsApp messages | `meta.whatsappMessage` and `meta.whatsappFollowUp` in `lib/i18n/en.ts` and `lib/i18n/es.ts` |
| All copy | `lib/i18n/en.ts` and `lib/i18n/es.ts`. The shape is enforced by `lib/i18n/types.ts`, so a missing key fails `npm run typecheck`. |
| Logo | `components/brand/LogoIcon.tsx` (three path constants) and `components/brand/Logo.tsx` (wordmark). `app/icon.svg` is the favicon. |
| React Bits Pro blocks | Add `REACTBITS_LICENSE_KEY` to `.env.local`; registries are already configured in `components.json`. Then `npx shadcn@latest add @reactbits-pro/<block>`. |

## Images

Placeholders live in `public/placeholder/` and are neutral tonal fills in the brand palette. Replace each file keeping the same name, or change the `src` in the dictionaries. After swapping, regenerate width, height and blur data:

```bash
npm run placeholders -- --manifest-only
```

(`npm run placeholders` without the flag regenerates the placeholder fills themselves.)

| File | Size | Used for |
|---|---|---|
| `hero-clinic-2400x1600.jpg` | 2400 x 1600 | Hero, duotoned to charcoal/powder by CSS (any photo works, the treatment is applied on render) |
| `why-sterilization-1600x1200.jpg` | 1600 x 1200 | EN "Why" block 1 |
| `why-one-trip-1600x1200.jpg` | 1600 x 1200 | EN "Why" block 2 |
| `why-location-1600x1200.jpg` | 1600 x 1200 | EN "Why" block 3 |
| `why-schedule-1600x1200.jpg` | 1600 x 1200 | ES "Why" block 1 |
| `why-payments-1600x1200.jpg` | 1600 x 1200 | ES "Why" block 2 |
| `why-family-1600x1200.jpg` | 1600 x 1200 | ES "Why" block 3 |
| `ba-veneers-before/after-1200x900.jpg` | 1200 x 900 | Before/after case 1 |
| `ba-implant-before/after-1200x900.jpg` | 1200 x 900 | Before/after case 2 |
| `ba-whitening-before/after-1200x900.jpg` | 1200 x 900 | Before/after case 3 |
| `doctor-portrait-1200x1500.jpg` | 1200 x 1500 | Dr. Martínez portrait (rendered grayscale) |
| `public/og/og-en-1200x630.jpg`, `og-es-1200x630.jpg` | 1200 x 630 | OpenGraph / Twitter cards per locale |

The "Why" photos are duotoned by the `.duotone` utility in `app/globals.css`, so a real photo drops into the palette automatically.

## Structure

```
app/[locale]/           layout (fonts, metadata, hreflang), page, privacidad, not-found
app/actions/booking.ts  typed server action with zod
lib/i18n/               config, types, en.ts, es.ts, services.ts
lib/site.ts             every real-world fact about the clinic
lib/images.ts           generated image manifest (dimensions + blur)
components/brand/       LogoIcon, Logo, LogoIntro (draw-on animation)
components/layout/      Nav, LanguageToggle, MobileCtaBar, Footer, Section
components/sections/    one file per page section
components/forms/       BookingForm (useActionState)
components/motion/      Reveal (IntersectionObserver + CSS, reduced-motion safe)
middleware.ts           / redirects to /en or /es by Accept-Language
```

## Facts that were assumed and should be confirmed

- Trust strip numbers (12 years, 4,000+ patients, 5-year guarantee).
- EN price table: US ranges are published national averages; MyDentist "from" prices are placeholders.
- Dr. Martínez's credentials in both dictionaries.
- Payment plan terms (3, 6, 12 months), accepted insurers, guarantee terms in the FAQ.
- Testimonials are written as samples and should be replaced with real, consented reviews.
- Travel times (Hermosillo 90 min, Nogales 4.5 h) are approximate.
