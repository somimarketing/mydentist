"use client";

import { motion } from "motion/react";
import { useCopy } from "@/lib/i18n/context";

/* [DATO] Clinic photography replaces the placeholder art. Copy lives in
   lib/i18n; every number in it stays [DATO] until Daniel confirms it. */
const IMAGES = ["/images/ph-10.jpg", "/images/ph-8.jpg", "/images/ph-9.jpg"];

export default function Features7() {
  const { t } = useCopy();
  const sections = t.proof.map((row, i) => ({ ...row, image: IMAGES[i % IMAGES.length] }));

  return (
    <section
      id="why"
      className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-start py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-ground"
    >
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-24 sm:gap-28">
        {sections.map((s, i) => {
          const flipped = i % 2 === 1;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              <div
                className={`rounded-2xl bg-surface border border-line overflow-hidden aspect-4/3 flex items-center justify-center ${
                  flipped ? "md:order-2" : ""
                }`}
              >
                <img
                  src={s.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className={`flex flex-col gap-3 ${flipped ? "md:order-1" : ""}`}
              >
                <h3 className="text-3xl sm:text-4xl font-medium text-ink leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                  {s.body}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
