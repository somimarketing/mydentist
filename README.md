# MyDentist, San Carlos

Bilingual landing page for a dental clinic in San Carlos, Sonora. Next.js App
Router, Tailwind v4, React Bits Pro blocks.

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
| Unconfirmed figures | search `[DATO]`, see `docs/pending-from-daniel.md` |
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

Two families, off the brand board:

- **Ancizar Serif** for every headline, and for the italic signature: "my
  dentist", "Tu sonrisa", "My Dentist". That italic is the logo's own move.
- **Darker Grotesque** for body, labels, buttons and nav.

Both load through `next/font/google` as variable fonts. Darker Grotesque sets
smaller than a normal grotesque at the same nominal size, so the `xs`–`2xl`
text tokens in `globals.css` are bumped about 12% to compensate.

## Colour

Five brand colours and nothing else, in `app/globals.css`. The fixed scale
(`--charcoal`, `--cotton`, `--powder`, `--slate`, `--bone`) never changes; the
semantic tokens (`--ground`, `--ink`, `--accent`, `--line`) flip with `.dark`.

## Before launch

1. Fill the `[DATO]` figures. `docs/pending-from-daniel.md` is the list, and
   it says which file each one lives in.
2. Swap the stock photos in `public/images/` for real clinic photography.
3. Add a booking calendar link and an Instagram URL to `lib/site.ts`. Until
   then every booking CTA opens WhatsApp, which is a reasonable default.
4. Set `NEXT_PUBLIC_SITE_URL` so canonical, hreflang and OpenGraph URLs are
   absolute.
