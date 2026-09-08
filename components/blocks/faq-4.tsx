"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

/* Six objection killers, one per fear a cross-border patient has before
   booking a flight. [DATO] marks every number and credential that Daniel
   still has to confirm. Nothing here is invented. */
const faqs = [
  {
    q: "Is dental care in Mexico actually safe?",
    a: "Yes, when the clinic holds itself to the standard you expect at home. We follow [DATO] sterilization protocols, Daniel holds [DATO] credentials, and we place the same implant brands used in the US, [DATO].",
  },
  {
    q: "How many trips will I need?",
    a: "[DATO]. We plan around one stay whenever the case allows, and tell you exactly how many days you need before you book anything.",
  },
  {
    q: "How much will I really save?",
    a: "Roughly [DATO] versus a US clinic, with no hidden fees. You get your full quote in writing before you travel.",
  },
  {
    q: "What if something goes wrong after I fly home?",
    a: "Every treatment carries a [DATO]-year warranty, and we coordinate with a dentist near you if follow-up is needed [DATO].",
  },
  {
    q: "Do you speak English?",
    a: "Yes. Every consult and every visit is in English, with Daniel himself, not a call center.",
  },
  {
    q: "How do I get to San Carlos?",
    a: "[DATO] from the Arizona border by car, or fly into [DATO]. We tell you the simplest route for where you are coming from.",
  },
];

export default function Faq4() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="relative w-full min-h-[var(--rb-section-min-h,100vh)] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-ground overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 right-0 px-4 sm:px-6 lg:px-8"
      >
        <div className="relative max-w-[1400px] mx-auto w-full h-full">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-10 lg:gap-20 h-full">
            <div className="relative hidden lg:block">
              <div className="absolute inset-y-0 left-0 w-px border-l border-dashed border-line-strong" />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 w-px border-l border-dashed border-line-strong" />
              <div className="absolute inset-y-0 right-0 w-px border-l border-dashed border-line-strong" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-10 lg:gap-20">
          <div className="relative flex flex-col gap-6 pl-6">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative text-xs tracking-[0.2em] uppercase text-ink-soft"
            >
              <span
                aria-hidden
                className="hidden lg:block absolute -left-[27px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent"
              />
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-medium text-ink leading-[1.05]"
            >
              Your questions, answered.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-ink-soft leading-relaxed max-w-sm"
            >
              The questions every US and Canada patient asks before booking a
              flight. Anything else, message us on WhatsApp.
            </motion.p>
          </div>

          <div className="relative">
            <div className="flex flex-col">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                    className={`relative py-7 sm:py-9 pl-6 pr-4 ${
                      i !== faqs.length - 1
                        ? "border-b border-dashed border-line-strong"
                        : ""
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-start gap-4 sm:gap-6 text-left cursor-pointer"
                    >
                      <span className="relative text-[11px] text-ink-soft mt-1.5 tabular-nums tracking-wider">
                        <span
                          aria-hidden
                          className={`absolute -left-[27px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-colors ${
                            isOpen ? "bg-accent" : "bg-line-strong"
                          }`}
                        />
                        Q{i + 1}
                      </span>
                      <span className="flex-1 text-base sm:text-lg font-medium text-ink">
                        {faq.q}
                      </span>
                      <span className="w-9 h-9 rounded-md bg-accent-soft/40 dark:bg-surface flex items-center justify-center shrink-0">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-ink" />
                        ) : (
                          <Plus className="w-4 h-4 text-ink" />
                        )}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="flex items-start gap-4 sm:gap-6 pt-4">
                            <span
                              aria-hidden
                              className="text-[11px] mt-1.5 tabular-nums tracking-wider invisible"
                            >
                              Q{i + 1}
                            </span>
                            <p className="flex-1 pr-12 text-sm sm:text-base text-ink-soft leading-relaxed max-w-3xl">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
