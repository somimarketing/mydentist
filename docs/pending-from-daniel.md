# Pending from Daniel

The single source of truth for every [DATO] on the site. Nothing here is invented. Every line below is a real figure, name, photo or link the page needs before launch, with the file where it drops in. Search the codebase for `[DATO]` to find each placeholder.

## Prices and comparisons
File: components/blocks/pricing-1.tsx, components/blocks/comparison-2.tsx
- Single implant, USD, plus the typical US/Canada price for the struck line
- Full arch / All-on-4, USD, plus the US/Canada price
- Crown, USD, plus the US/Canada price
- Clear aligners, USD, plus the US/Canada price. Or confirm pricing is case by case
- Financing: offered or not, and the terms. Until confirmed the toggle stays hidden (FINANCING_AVAILABLE = false in pricing-1.tsx)

## Trip and timing
File: components/blocks/comparison-2.tsx, features-7.tsx, faq-4.tsx
- Trips required and days per stay for a standard implant case
- Wait to start, from first message to first appointment
- Whether aligner check-ins can be remote

## Warranty
File: how-it-works-6.tsx, comparison-2.tsx, pricing-1.tsx, faq-4.tsx
- Years, on what (implant, crown, materials), what voids it
- Whether you coordinate with a dentist near the patient at home

## Credentials and materials
File: faq-4.tsx, features-7.tsx
- Daniel's schools, years practicing, certifications, associations
- His partner's name, role and credentials
- Sterilization protocol standard you follow
- Implant systems and lab names used

## Proof numbers
File: components/blocks/stats-11.tsx
- Implants placed, and since what year
- Years the clinic has operated in San Carlos
- Percent of patients from the US and Canada, last 12 months
- Clinic founding year for the footer EST. line (footer-2.tsx)

## People and photos
File: about-1.tsx, social-proof-8.tsx, social-proof-16.tsx, showcase-6.tsx, features-7.tsx, how-it-works-6.tsx, cta-2.tsx
- Real photos of Daniel, his partner, and staff
- Three patient quotes with name, city, photo and written permission (social-proof-8)
- One featured quote plus four reviews with name, city and permission (social-proof-16)
- Four before/after cases with treatment, city and date (showcase-6)
- Clinic and San Carlos photography for the three proof rows, four step cards, and the six-image cursor trail
- Cities to list under "Trusted by patients from" (social-proof-16)

## Contact and links
File: every block, plus components/ui/header.tsx
- WhatsApp number as a wa.me link
- Booking calendar link
- Clinic phone number
- Clinic address
- Instagram URL
- Travel logistics: drive time from the Arizona border, nearest airport (faq-4.tsx)

## Decisions flagged for Daniel
1. Financing toggle. Repurposed from monthly/yearly to Pay in full / Financing. Hidden until a real plan exists.
2. "Trusted by patients from" city list. Shown with [DATO] tags. Hide the block if no true list exists at launch.
3. "See more cases" currently points to the contact block until a gallery exists.
