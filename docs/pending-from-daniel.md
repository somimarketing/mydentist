# Pending from Daniel

Every `[DATO]` on the site in one list. Nothing here is invented: each line is
a real figure, name, photo or link the page needs before launch.

**All copy now lives in two files:** `lib/i18n/en.ts` and `lib/i18n/es.ts`.
Search either for `[DATO]`. A figure usually has to be filled in both, and the
two files are type-checked against each other, so a missing key fails the
build rather than shipping a blank.

Both languages are live but they are **not translations of each other**. English
sells to US and Canadian patients; Spanish sells to families in San Carlos,
Guaymas and Empalme. Some answers differ by audience, and that is on purpose.

## Prices
`lib/i18n/*.ts` → `pricing.plans`, `compare.rows`

- Single implant, full arch / All-on-4, crown, clear aligners.
- English needs the USD price **and** the typical US or Canada price for the
  struck-through comparison line. That comparison is the whole English pitch.
- Spanish needs the peso price **and** the monthly payment.
- Financing: does it exist, how many months, which cards, any interest.
  Until confirmed, `FINANCING_AVAILABLE = false` in `pricing-1.tsx` keeps the
  toggle hidden, and the Spanish comparison table is the only place monthly
  payments appear.

## Trip and timing
`compare.rows`, `proof`, `faq`

- Trips required and days per stay for a standard implant case.
- Wait from first message to first appointment.
- Whether aligner check-ins can be remote.
- Clinic hours, including whether Saturday is open (the Spanish page leans on
  "cita esta misma semana" and Saturday hours).

## Warranty
`how.steps`, `compare.rows`, `pricing.plans`, `faq`

- Years, on what (implant, crown, materials), and what voids it.
- Whether you coordinate with a dentist near a patient who has flown home.

## Credentials and materials
`faq`, `dentists.roles`

- Daniel's schools, years practising, certifications, associations.
- Carolina's degree, specialty and any certifications. Her role currently
  reads "general and family dentistry, clinic partner" and the Spanish page
  credits her with the children's care. Confirm or correct both.
- Sterilization protocol standard you follow.
- Implant systems and lab names used.

## Proof numbers
`stats.items`, `footer.est`

- Implants placed, and since what year.
- Years the clinic has operated in San Carlos.
- English: percent of patients from the US and Canada, last 12 months.
- Spanish: how many families are regular patients.
- Founding year for the footer EST. line.

## People and photos
Every block. Photos live in `public/images/` as `ph-1` … `ph-10`
(plus `-sq` square crops) and are stock placeholders.

- Real photos of Daniel, Carolina, and any staff.
- Four before/after cases with treatment, city and date (`cases.items`).
- Clinic and San Carlos photography for the three proof rows, the four step
  cards, and the six-image cursor trail in the closing block.
- Cities to list under "Trusted by patients from" / "Pacientes de"
  (`wall.cities`).

## Reviews
`reviewsCarousel.items`, `wall`

- English uses five real Google reviews, verbatim. Nothing needed unless you
  want different ones.
- **Spanish has only two.** Both are real reviews from Spanish-speaking
  patients, restored to Spanish. Ask patients from the region to leave a
  review and this side gets stronger; until then the carousel shows two
  rather than padding with invented ones.
- Written permission to publish names alongside the quotes.

## Contact and links
`lib/site.ts`

Confirmed and already live: WhatsApp +52 33 1606 8212, the Aurora 299
address, both dentists' numbers and emails.

Still open:
- Booking calendar link. Until one exists, every "book a consult" button
  opens WhatsApp with a prefilled message. Same for "see more cases", which
  has no gallery to point at.
- Instagram URL. `links.instagram` is `null` and the icon falls back to
  WhatsApp.
- Clinic landline, if it is different from the WhatsApp number.
- Travel logistics for the English FAQ: drive time from the Arizona border
  and the nearest airport.

## Decisions already made, worth a look
1. **The comparison table is different in each language.** English compares
   San Carlos against a typical US or Canada clinic. Spanish compares paying
   in full against paying monthly, because the US comparison means nothing to
   a local family.
2. **Spanish is the default language.** `/` sends a visitor to `/es` unless
   their browser asks for English. The clinic is in Sonora.
3. **Financing toggle** is repurposed from the stock monthly/yearly switch and
   stays hidden until a real plan exists.
