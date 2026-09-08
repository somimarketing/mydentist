"use client";

import { motion } from "motion/react";
import { Check, X, Anchor, Crown, Smile } from "lucide-react";
import { useState } from "react";

/* [DATO] Booking link once Daniel confirms it. */
const BOOKING_URL = "#contact";

type Cell = string | boolean;
type Row = { title: string; description: string; brand1: Cell; brand2: Cell };

export default function Comparison2() {
  const [selectedPlan, setSelectedPlan] = useState("implant");

  /* The stock Individual / Team / Enterprise toggle maps cleanly onto the
     three treatments a cross-border patient is actually comparing. */
  const plans = [
    { id: "implant", icon: Anchor, label: "Implant" },
    { id: "crown", icon: Crown, label: "Crown" },
    { id: "aligners", icon: Smile, label: "Aligners" },
  ];

  /* [DATO] Every price, wait time, trip count and warranty term below is a
     placeholder until Daniel confirms it in writing. Do not invent figures. */
  const rows = (treatment: string): Row[] => [
    {
      title: "Price (USD)",
      description: `What a ${treatment} costs, all in, before you travel`,
      brand1: "$[DATO]",
      brand2: "$[DATO]",
    },
    {
      title: "Wait to start",
      description: "From first message to your first appointment",
      brand1: "[DATO]",
      brand2: "[DATO]",
    },
    {
      title: "Trips required",
      description: "How many times you need to travel for the full treatment",
      brand1: "[DATO]",
      brand2: "[DATO]",
    },
    {
      title: "Warranty",
      description: "What is covered, and for how long",
      brand1: "[DATO] years",
      brand2: "[DATO]",
    },
    {
      title: "Premium brands",
      description: "The same implant systems and lab materials used in the US",
      brand1: true,
      brand2: true,
    },
    {
      title: "English-speaking dentist",
      description: "Every consult and every visit, with the dentist who treats you",
      brand1: true,
      brand2: "Varies",
    },
  ];

  const planData: Record<string, Row[]> = {
    implant: rows("single implant"),
    crown: rows("crown"),
    aligners: rows("clear aligner treatment"),
  };

  const features = planData[selectedPlan];

  const YesMark = ({ large = false }: { large?: boolean }) => (
    <div
      className={`flex items-center justify-center rounded-full bg-accent ${
        large ? "h-10 w-10" : "h-8 w-8"
      }`}
    >
      <Check
        className={`text-ground ${large ? "h-6 w-6" : "h-5 w-5"}`}
        strokeWidth={3}
      />
    </div>
  );

  const NoMark = ({ large = false }: { large?: boolean }) => (
    <div
      className={`flex items-center justify-center rounded-full bg-line ${
        large ? "h-10 w-10" : "h-8 w-8"
      }`}
    >
      <X
        className={`text-ink-soft ${large ? "h-6 w-6" : "h-5 w-5"}`}
        strokeWidth={3}
      />
    </div>
  );

  const renderCell = (value: Cell, emphasized: boolean, large = false) => {
    if (typeof value === "boolean") {
      return value ? <YesMark large={large} /> : <NoMark large={large} />;
    }
    return (
      <span
        className={`${large ? "text-lg" : ""} text-center font-semibold ${
          emphasized ? "text-ink" : "text-ink-soft"
        }`}
      >
        {value}
      </span>
    );
  };

  return (
    <section
      id="compare"
      className="relative w-full bg-ground px-4 py-20 sm:px-6 lg:px-8 md:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-3xl font-medium text-ink sm:text-4xl md:text-5xl lg:text-6xl text-balance">
            MyDentist, San Carlos vs a typical US or Canada clinic
          </h2>
          <p className="mx-auto mb-6 max-w-2xl px-4 text-sm leading-relaxed text-ink-soft sm:mb-8 sm:px-0 sm:text-base md:text-lg">
            The same treatment, the same materials, at a fraction of the cost.
            Here is the honest comparison.
          </p>
          <motion.a
            href={BOOKING_URL}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block rounded-full bg-charcoal px-8 py-4 text-base font-medium text-cotton transition-colors hover:bg-charcoal/90 dark:bg-cotton dark:text-charcoal dark:hover:bg-cotton/90"
          >
            Book your consult
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl bg-accent-soft/40 p-1 dark:bg-surface"
        >
          <div className="flex flex-col gap-4 lg:hidden">
            <div className="rounded-2xl bg-surface p-6 dark:bg-ground">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-ink">
                  Compare treatments
                </h3>
                <p className="text-sm text-ink-soft">
                  {plans.find((plan) => plan.id === selectedPlan)?.label}
                </p>
              </div>
              <div className="flex gap-3">
                {plans.map((plan) => {
                  const Icon = plan.icon;
                  return (
                    <motion.button
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      whileTap={{ scale: 0.95 }}
                      aria-label={plan.label}
                      aria-pressed={selectedPlan === plan.id}
                      className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors cursor-pointer ${
                        selectedPlan === plan.id
                          ? "bg-charcoal text-cotton dark:bg-cotton dark:text-charcoal"
                          : "bg-accent-soft/40 text-ink-soft dark:bg-surface"
                      }`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {features.map((feature, index) => (
              <motion.div
                key={`${selectedPlan}-${feature.title}-mobile`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="overflow-hidden rounded-2xl bg-surface dark:bg-ground"
              >
                <div className="border-b border-line p-6">
                  <div className="text-lg font-bold text-ink">
                    {feature.title}
                  </div>
                  <div className="mt-1 text-sm text-ink-soft">
                    {feature.description}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-px bg-line">
                  <div className="bg-surface p-6 dark:bg-ground">
                    <div className="mb-3 text-base font-bold text-ink">
                      San Carlos
                    </div>
                    <div className="flex items-center justify-start">
                      {renderCell(feature.brand1, true, true)}
                    </div>
                  </div>

                  <div className="bg-surface p-6 dark:bg-ground">
                    <div className="mb-3 text-base font-bold text-ink">
                      US / Canada
                    </div>
                    <div className="flex items-center justify-start">
                      {renderCell(feature.brand2, false, true)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-[2fr_1fr_1fr] gap-1 border-b-4 border-accent-soft/40 dark:border-surface">
              <div className="flex gap-6 items-center justify-between rounded-tl-3xl bg-surface p-8 dark:bg-ground">
                <div>
                  <h3 className="mb-1 text-lg font-bold text-ink">
                    Compare treatments
                  </h3>
                  <p className="text-sm text-ink-soft">
                    {plans.find((plan) => plan.id === selectedPlan)?.label}
                  </p>
                </div>
                <div className="flex gap-2">
                  {plans.map((plan) => {
                    const Icon = plan.icon;
                    return (
                      <motion.button
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={plan.label}
                        aria-pressed={selectedPlan === plan.id}
                        className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors cursor-pointer ${
                          selectedPlan === plan.id
                            ? "bg-charcoal text-cotton dark:bg-cotton dark:text-charcoal"
                            : "bg-accent-soft/40 text-ink-soft hover:bg-accent-soft/70 dark:bg-surface dark:hover:bg-cotton/10"
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* The stock purple radial is now the brand accent, one gradient
                  that reads correctly in both modes because the tokens flip. */}
              <div className="relative overflow-hidden px-12 py-8">
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    background:
                      "radial-gradient(165% 165% at 50% 90%, var(--surface) 40%, var(--accent-soft) 100%)",
                  }}
                />
                <div className="relative z-10 text-center">
                  <div className="mb-1 text-2xl font-bold text-ink">
                    San Carlos ↗
                  </div>
                  <div className="text-sm font-medium text-ink-soft uppercase tracking-wider">
                    MyDentist
                  </div>
                </div>
              </div>

              <div className="rounded-tr-3xl bg-surface px-12 py-8 dark:bg-ground">
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-ink">
                    US / Canada
                  </div>
                  <div className="text-sm font-medium text-ink-soft uppercase tracking-wider">
                    Typical clinic
                  </div>
                </div>
              </div>
            </div>

            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="grid grid-cols-[2fr_1fr_1fr] gap-1"
              >
                <div
                  className={`bg-surface p-8 dark:bg-ground ${
                    index === features.length - 1 ? "rounded-bl-3xl" : ""
                  }`}
                >
                  <div className="font-semibold text-ink">
                    {feature.title}
                  </div>
                  <div className="mt-1 max-w-xs text-sm text-ink-soft">
                    {feature.description}
                  </div>
                </div>

                <div className="bg-surface px-12 py-8 dark:bg-ground">
                  <motion.div
                    key={`${selectedPlan}-brand1-${feature.title}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center"
                  >
                    {renderCell(feature.brand1, true)}
                  </motion.div>
                </div>

                <div
                  className={`bg-surface px-12 py-8 dark:bg-ground ${
                    index === features.length - 1 ? "rounded-br-3xl" : ""
                  }`}
                >
                  <motion.div
                    key={`${selectedPlan}-brand2-${feature.title}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center"
                  >
                    {renderCell(feature.brand2, false)}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
