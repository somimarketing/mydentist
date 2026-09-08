"use client";

import { motion } from "motion/react";

/* [DATO] Clinic photography replaces the placeholder art. Every number in
   the copy stays [DATO] until Daniel confirms it. */
const sections = [
  {
    title: "One trip. One new smile.",
    body: [
      "Most implant cases are completed in [DATO] visits over a single stay. We plan it so you fly once.",
    ],
    image: "/images/ph-10.jpg",
  },
  {
    title: "The same brands your dentist at home uses.",
    body: [
      "[DATO] implant systems and [DATO] labs. World-class materials, San Carlos price.",
    ],
    image: "/images/ph-8.jpg",
  },
  {
    title: "You talk to the dentist. Not a call center.",
    body: [
      "Daniel answers your questions directly, in English, before and after you travel.",
    ],
    image: "/images/ph-9.jpg",
  },
];

export default function Features7() {
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
                {s.body.map((p, pi) => (
                  <p
                    key={pi}
                    className="text-sm sm:text-base text-ink-soft leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
