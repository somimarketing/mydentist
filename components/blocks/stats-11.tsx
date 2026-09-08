"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

/* [DATO] Every value below is a placeholder until Daniel confirms it from
   clinic records. The three card grounds are the cool set: Powder tint,
   Bone tint, soft Slate tint. No warm greens or oranges. */
const cards = [
  {
    title: "Implants placed",
    label: "Since [DATO]",
    value: "[DATO]",
    source: "Clinic records",
    bg: "bg-card-a",
  },
  {
    title: "Years caring for smiles",
    label: "In San Carlos",
    value: "[DATO]",
    source: "Practice",
    bg: "bg-card-b",
  },
  {
    title: "Patients from the US and Canada",
    label: "Last 12 months",
    value: "[DATO]%",
    source: "Clinic",
    bg: "bg-card-c",
  },
];

const SHORT = 380;
const TALL = 470;
const CYCLE_MS = 2200;

export default function Stats11() {
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % cards.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [isDesktop]);

  return (
    <section
      id="numbers"
      className="w-full min-h-[var(--rb-section-min-h,100vh)] flex items-start py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-ground"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-ink">
            The numbers
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ink-soft">
            Real results, not marketing.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((c, i) => {
            const isActive = active === i;
            return (
              <div key={i} className="md:h-[470px] flex items-end">
                {/* Height still animates through motion. Text color moves
                    to a class so it follows the token in dark mode. */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={
                    isDesktop
                      ? { height: isActive ? TALL : SHORT }
                      : { height: "auto" }
                  }
                  transition={{
                    opacity: { duration: 0.5, delay: 0.1 * i },
                    y: { duration: 0.5, delay: 0.1 * i },
                    height: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className={`w-full rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-10 overflow-hidden transition-colors duration-700 ${c.bg} ${
                    isActive || !isDesktop ? "text-ink" : "text-ink-soft"
                  }`}
                >
                  <span className="text-xl sm:text-2xl font-medium">
                    {c.title}
                  </span>
                  <div className="flex flex-col gap-2">
                    {c.label && (
                      <span className="text-2xl sm:text-3xl font-medium">
                        {c.label}
                      </span>
                    )}
                    <span className="text-3xl sm:text-4xl md:text-5xl font-medium tabular-nums">
                      {c.value}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs sm:text-sm font-bold">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      {c.source}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
