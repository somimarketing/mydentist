# Pending from Daniel

Everything the page still needs from the clinic, in one list. Nothing here is
invented, and nothing missing is faked on the live page: where a figure is not
confirmed, the copy promises it **in writing, before treatment** instead of
guessing. That is why the site can ship today and get sharper the day these
land.

**All copy lives in two files:** `lib/i18n/en.ts` and `lib/i18n/es.ts`. A value
usually has to be filled in both. The two files are type-checked against each
other, so a missing key fails the build rather than shipping a blank.

Both languages are live but they are **not translations of each other**. English
sells to US and Canadian patients; Spanish sells to families in San Carlos,
Guaymas and Empalme. Some answers differ by audience, and that is on purpose.

## 1. Prices, the highest-value item
`lib/i18n/*.ts` → `pricing.plans`, `pricing.currency`, `compare.rows`

Right now each plan card shows the **scope** of the treatment ("One tooth",
"Full arch", "Custom plan") and promises a written quote. The moment real
numbers exist:

- Put the figure in `priceFull` and set `pricing.currency` back to `"USD"` /
  `"MXN"`. A non-empty currency makes the unit reappear beside the figure.
- Put the typical US or Canada price in `usPrice`. A non-empty `usPrice` makes
  the struck-through comparison line reappear under the English price. That
  comparison is the whole English pitch.
- Spanish needs the peso price **and** the monthly payment.
- Financing: does it exist, how many months, which cards, any interest. Until
  confirmed, `FINANCING_AVAILABLE = false` in `pricing-1.tsx` keeps the toggle
  hidden.

Needed for: single implant, full arch / All-on-4, crown, clear aligners.

## 2. Warranty
`how.steps`, `compare.rows`, `pricing.plans`, `faq`

- Years, on what (implant, crown, materials), and what voids it.
- Whether you coordinate with a dentist near a patient who has flown home.

The English FAQ currently says the terms are named in the written plan. The
moment the term is fixed, say it on the page. A number beats a promise.

## 3. Credentials and licence numbers
`dentists.licenseLabel`, `dentists.items`, `faq`

`licenseLabel` is an empty string and renders nothing. Fill it and it appears.

- Cédula profesional and university for Daniel, Carolina and Giselle.
- Years practising, certifications, associations.
- Sterilization protocol standard the clinic follows.
- Implant systems and lab names used. (The page says "the same systems your
  dentist at home would". Naming the brand is stronger.)

## 4. Trip and timing
`compare.rows`, `proof`, `faq`, `how.steps`

- Trips required and days per stay for a standard implant case.
- Wait from first message to first appointment.
- Whether aligner check-ins can be remote.
- Clinic hours, including Saturday (the Spanish page leans on "cita esta misma
  semana").
- Nearest airport you actually recommend to a flying patient. The English FAQ
  currently gives the road route from Tucson only.

## 5. Proof numbers
`stats.items`, `footer.est`

The stats band now shows three things that are structurally true: three
specialists, four hours from Tucson, two languages. Swap any of them for a
real number when you have one:

- Implants placed, and since what year.
- Years the clinic has operated in San Carlos.
- English: percent of patients from the US and Canada, last 12 months.
- Spanish: how many families are regular patients.
- Founding year. `footer.est` is an empty string and renders nothing; fill it
  with `EST. 20XX` and the line reappears.

## 6. People and photos
Every block. Photos live in `public/images/` as `ph-1` … `ph-10` (plus `-sq`
square crops) and are **stock placeholders**.

- Real photos of Daniel, Carolina and Giselle, plus any staff.
- Real before/after cases with treatment and date. The showcase section
  currently names treatments, not patients, precisely so no card claims a
  patient it does not have.
- Clinic and San Carlos photography for the three proof rows, the four step
  cards, and the six-image cursor trail in the closing block.
- Written permission to publish patient names and images.

## 7. Reviews
`reviewsCarousel.items`, `wall`

- English uses real Google reviews, verbatim. Nothing needed unless you want
  different ones.
- **Spanish has only two.** Both are real. Ask patients from the region to
  leave a review and this side gets stronger; until then it shows two rather
  than padding with invented ones.

## 8. Contact and links
`lib/site.ts`, `lib/i18n/links.ts`

Confirmed and live: WhatsApp +52 331 606 8212, US line +1 520 422 8097, the
Aurora 299 address, all three doctors.

Still open:
- Booking calendar link. Until one exists, every "book a consult" button opens
  WhatsApp with a prefilled message. Same for "ask about your case".
- Instagram URL. `links.instagram` is `null` and the icon falls back to
  WhatsApp.
- Clinic landline, if different from the WhatsApp number.
- Per-doctor direct lines. All three currently point at the clinic number.
- Email addresses for Carolina and Giselle.

## 9. Brand assets
- **The logo lockup.** The brand kit PDF is raster. The page draws the mark in
  live Bogart type plus a drawn tooth. A production SVG from the designer
  (MyDentist / SAN CARLOS / tooth, in Deep Slate and in Cotton) replaces it.
- Any photography shot to the kit's direction.

## Decisions already made, worth a look
1. **No invented figures, anywhere.** Where a number is unconfirmed the page
   promises a written quote instead. That is a stronger conversion mechanic
   than a fake price anyway: it turns a browse into a WhatsApp conversation.
2. **The comparison table is different in each language.** English compares
   San Carlos against a typical US or Canada clinic, and its right-hand column
   says "Ask them" on purpose. Our column is specific, theirs is a homework
   assignment. Spanish compares paying in full against paying monthly, because
   the US comparison means nothing to a local family.
3. **Spanish is the default language.** `/` sends a visitor to `/es` unless
   their browser asks for English. The clinic is in Sonora.
4. **Bogart is loaded from an Adobe Fonts web kit** (`fql3xen`), set in
   `app/[locale]/layout.tsx`. The kit's domain allowlist has to include the
   production domain or the page falls back to a serif stack.
