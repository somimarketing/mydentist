"use client";

import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useCopy } from "@/lib/i18n/context";
import { useLinks } from "@/lib/i18n/links";

/* [DATO] Gallery link once real cases are published. Falls back to contact. */
/* [DATO] No case gallery exists yet, so this opens WhatsApp. */

/* [DATO] Every card is a real patient who traveled, treated, and went home.
   Real before/after images only, with permission. Placeholder art until then.
   Captions and dates come from lib/i18n. */
const CASE_ART = [
  { image: "/images/ph-3-sq.jpg", tilt: -4, lift: "lg:mt-12" },
  { image: "/images/ph-6-sq.jpg", tilt: 2.5, lift: "lg:mt-2" },
  { image: "/images/ph-7-sq.jpg", tilt: -2, lift: "lg:mt-16" },
  { image: "/images/ph-10-sq.jpg", tilt: 3.5, lift: "lg:mt-6" },
];

const headerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stripVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48, rotate: 0 },
  visible: (tilt: number) => ({
    opacity: 1,
    y: 0,
    rotate: tilt,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Showcase6() {
  const L = useLinks();
  const CASES_URL = L.whatsapp;
  const { t } = useCopy();
  const moments = t.cases.items.map((item, i) => ({
    caption: item.label,
    date: item.meta,
    image: CASE_ART[i % CASE_ART.length].image,
    tilt: CASE_ART[i % CASE_ART.length].tilt,
    lift: CASE_ART[i % CASE_ART.length].lift,
  }));

  return (
    <section
      id="cases"
      className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-ground overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-start"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.98] text-ink text-balance">
              {t.cases.headlineLead}{" "}
              <span className="text-ink-soft">{t.cases.headlineAccent}</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="lg:pt-2 lg:justify-self-end lg:max-w-sm"
          >
            <p className="text-base sm:text-lg leading-relaxed text-ink-soft text-pretty">
              {t.cases.support}
            </p>
            <a
              href={CASES_URL}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal text-cotton dark:bg-cotton dark:text-charcoal text-sm font-medium hover:bg-charcoal/90 dark:hover:bg-cotton/90 transition-colors duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {t.cases.cta}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stripVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:flex lg:justify-center lg:gap-0"
        >
          {moments.map((moment) => (
            <motion.a
              key={moment.caption}
              href={CASES_URL}
              custom={moment.tilt}
              variants={cardVariants}
              whileHover={{ rotate: 0, y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative block lg:w-[28%] lg:-ml-14 lg:first:ml-0 ${moment.lift} cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`}
            >
              <div className="rounded-2xl bg-surface border border-line p-3 sm:p-3.5 shadow-[0_18px_45px_-20px_rgba(52,51,51,0.28)] group-hover:shadow-[0_30px_70px_-28px_rgba(52,51,51,0.4)] transition-shadow duration-300">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-accent-soft/30">
                  <img
                    src={moment.image}
                    alt={moment.caption}
                    loading="lazy"
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-3 pt-4 pb-1.5 px-1">
                  <span className="text-[11px] uppercase tracking-[0.12em] text-ink-soft truncate">
                    {moment.caption}
                  </span>
                  <span className="text-[11px] tracking-[0.12em] text-ink-soft/80 shrink-0 tabular-nums">
                    {moment.date}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Showcase6;
