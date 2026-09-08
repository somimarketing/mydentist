# Untitled landing page

Generated with the [React Bits Pro](https://pro.reactbits.dev) Landing Builder.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What's inside

| File | Block |
| --- | --- |
| `components/blocks/hero-9.tsx` | Hero9 |
| `components/blocks/social-proof-8.tsx` | SocialProof8 |
| `components/blocks/features-7.tsx` | Features7 |
| `components/blocks/how-it-works-6.tsx` | HowItWorks6 |
| `components/blocks/comparison-2.tsx` | Comparison2 |
| `components/blocks/showcase-6.tsx` | Showcase6 |
| `components/blocks/stats-11.tsx` | Stats11 |
| `components/blocks/about-1.tsx` | About1 |
| `components/blocks/social-proof-16.tsx` | SocialProof16 |
| `components/blocks/pricing-1.tsx` | Pricing1 |
| `components/blocks/faq-4.tsx` | Faq4 |
| `components/blocks/cta-2.tsx` | Cta2 |
| `components/blocks/contact-3.tsx` | Contact3 |
| `components/blocks/footer-2.tsx` | Footer2 |

Each block is a standalone, self-contained component. It takes no props: edit
the file directly to change copy, styling or layout.

## Section heights

`app/page.tsx` sets `--rb-section-min-h: 0px` on the page wrapper. Blocks that
would otherwise fill the viewport (`min-h-[var(--rb-section-min-h,100vh)]`)
collapse to their natural height when composed into a page. Use a block on its
own (outside that wrapper) and it reverts to full-screen, which is what a
standalone hero or 404 page wants.

## Dependencies

- `gsap`
- `lucide-react`
- `motion`
- `next`
- `react`
- `react-dom`

## Tailwind

This project uses Tailwind CSS v4 with the PostCSS plugin. There is no
`tailwind.config`: configuration lives in `app/globals.css`.
