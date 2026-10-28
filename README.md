# MyDentist, San Carlos

Bilingual landing page for MyDentist — Implant & Cosmetic Center (formerly
Smile Makers) in San Carlos, Sonora. Three specialists: prosthodontics and
implants, orthodontics, endodontics. Next.js App Router, Tailwind v4, React
Bits Pro blocks.

```bash
npm install
npm run dev   # http://localhost:3000 redirects to /es or /en
```

## Two audiences, two pitches

`/en` and `/es` are not translations of each other.

- **English** sells dental tourism to US and Canadian patients. Their
  decision turns on whether a clinic in Mexico is safe, whether they will be
  flying back and forth, and how the price compares to their quote at home.
- **Spanish** sells to families in San Carlos, Guaymas and Empalme. They
  already trust the idea of a dentist. What stops them is cost, not knowing
  what they will be charged, and finding an hour without missing work.

Where this shows up most is the comparison table: in English it compares
MyDentist against a typical US clinic, in Spanish it compares paying in full
against paying monthly.

## Where things live

| What | Where |
| --- | --- |
| All copy, both languages | `lib/i18n/en.ts`, `lib/i18n/es.ts` |
| Clinic facts (phone, address, dentists) | `lib/site.ts` |
| WhatsApp deep links | `lib/i18n/links.ts` (`useLinks()`) |
| What the clinic still owes us | `docs/pending-from-daniel.md` |
| Page composition | `app/[locale]/page.tsx` |
| Locale routing | `middleware.ts`, `lib/i18n/config.ts` |
| Blocks | `components/blocks/` |
| Photos | `public/images/` (`ph-1` … `ph-10`, `-sq` = square) |
| Hero video | `public/video/` (1080 desktop, 960 mobile, poster still) |
| Logo | `public/logo/` (horizontal, stacked, icon; black, white, currentcolor) |

`en.ts` defines the copy and derives the `Dictionary` type. `es.ts` is typed
against it, so a missing or misnamed key fails the build instead of shipping a
blank. Every block reads its own slice through `useCopy()`.

## Adding or changing copy

Edit both dictionaries. Nothing else. No block contains a language.

To add a key: add it to `en.ts`, then TypeScript will tell you `es.ts` is
missing it.

## Type

One family, per the October 2026 brand kit: **Bogart**, set in Deep Slate,
used for headlines and body alike. It loads from an Adobe Fonts web kit
(`fql3xen`, wired up in `app/[locale]/layout.tsx`), not from `next/font`.

Two consequences worth knowing:

- **The kit has a domain allowlist.** The production domain has to be on it or
  the page silently falls back to the serif stack in `--font-sans`. The
  fallback is deliberate and looks fine; it is just not the brand.
- **Bogart has no italic on Adobe Fonts.** The accent phrase in a headline
  (`.sig`) therefore shifts colour to Powder Mist rather than sloping. The
  `.swash` class turns on `ss01` / `swsh` where a flourish is wanted.

Bogart sets larger than a grotesque at the same nominal size, so the
`xs`–`2xl` text tokens in `globals.css` are set against it directly.

## Colour

Deep Slate `#32374B` on Cotton `#E8E8E4`, in `app/globals.css`. The primitive
slate and neutral scales never change; the semantic tokens (`--ground`,
`--surface`, `--brand`, `--ink`, `--ink-brand`, `--accent`, `--line`,
`--on-brand`) flip between the light Cotton theme and the `.dark` Deep Slate
theme.

## What is deliberately not on the page

No figure the clinic has not confirmed. Where a number is still pending —
prices, warranty term, trip count, licence numbers — the copy promises it **in
writing, before treatment** instead of guessing. Empty values degrade rather
than print half a sentence: an empty `pricing.currency` drops the unit, an
empty `usPrice` drops the comparison line, an empty `licenseLabel` or
`footer.est` renders nothing at all. Fill them and they reappear.

`docs/pending-from-daniel.md` is the list, in priority order.

## Before launch

1. Add the production domain to the Adobe Fonts kit `fql3xen`, or Bogart will
   not load.
2. Fill the prices. That is item 1 in `docs/pending-from-daniel.md` and the
   single biggest lift available to this page.
3. Swap the stock photos in `public/images/` for real clinic photography, and
   drop in the production logo SVG.
4. Add a booking calendar link and an Instagram URL to `lib/site.ts`. Until
   then every booking CTA opens WhatsApp, which is a reasonable default.
5. Set `NEXT_PUBLIC_SITE_URL` so canonical, hreflang and OpenGraph URLs are
   absolute.
