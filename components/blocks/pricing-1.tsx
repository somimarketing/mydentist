"use client";

import { Check, Info } from "lucide-react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useState, useRef } from "react";

/* [DATO] Real clinic links once Daniel confirms them. */
const BOOKING_URL = "#contact";

/* [DATO] DECISION FOR DANIEL. The stock block has a monthly / yearly toggle,
   which does not fit one-time dental work. It is repurposed here as
   "Pay in full / Financing". Until Daniel confirms a financing plan exists,
   both states are equal and the toggle stays hidden. Flip this to true and
   fill the financing prices only when he does. Do not invent a plan. */
const FINANCING_AVAILABLE = false;

const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}) => {
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time: number) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x,
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y,
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

/* [DATO] Every price and feature figure below is a placeholder until Daniel
   confirms it. The US comparison line under each price is the whole
   business, so it stays visible with [DATO] in place. */
type Plan = {
  name: string;
  blurb: string;
  priceFull: string;
  priceFinancing: string;
  usPrice: string;
  features: string[];
  cta: string;
};

const PLANS: Plan[] = [
  {
    name: "Single implant",
    blurb: "One tooth, replaced for good.",
    priceFull: "$[DATO]",
    priceFinancing: "$[DATO]",
    usPrice: "$[DATO]",
    features: [
      "Premium implant brand [DATO]",
      "Crown included [DATO]",
      "[DATO]-year warranty",
    ],
    cta: "Book your consult",
  },
  {
    name: "Full arch / All-on-4",
    blurb: "A full arch of fixed teeth, planned around one stay.",
    priceFull: "$[DATO]",
    priceFinancing: "$[DATO]",
    usPrice: "$[DATO]",
    features: [
      "[DATO] implants per arch",
      "Fixed, non-removable teeth [DATO]",
      "[DATO]-year warranty",
    ],
    cta: "Book your consult",
  },
  {
    name: "Clear aligners",
    blurb: "A custom smile plan. Pricing depends on your case.",
    priceFull: "$[DATO]",
    priceFinancing: "$[DATO]",
    usPrice: "$[DATO]",
    features: [
      "Full treatment plan [DATO]",
      "Remote check-ins [DATO]",
      "Retainers included [DATO]",
    ],
    cta: "Schedule a call",
  },
];

function PayToggle({
  financing,
  onChange,
}: {
  financing: boolean;
  onChange: (v: boolean) => void;
}) {
  if (!FINANCING_AVAILABLE) return null;
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-medium text-ink">
        {financing ? "Financing" : "Pay in full"}
      </span>
      <button
        onClick={() => onChange(!financing)}
        aria-label="Toggle financing"
        aria-pressed={financing}
        className={`relative w-11 h-6 rounded-full transition-colors duration-200 cursor-pointer ${
          financing ? "bg-accent" : "bg-line"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-surface rounded-full transition-transform duration-200 ${
            financing ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

function Price({ plan, financing }: { plan: Plan; financing: boolean }) {
  const price = financing ? plan.priceFinancing : plan.priceFull;
  return (
    <div className="mb-6">
      <p className="text-ink-soft text-sm sm:text-base mb-4">{plan.blurb}</p>
      <div className="flex items-baseline gap-1.5">
        <span className="text-3xl sm:text-4xl font-bold text-ink tabular-nums">
          {price}
        </span>
        <span className="text-ink-soft text-sm">USD</span>
      </div>
      <p className="mt-1 text-sm text-ink-soft">
        vs <s className="tabular-nums">{plan.usPrice}</s> in the US
      </p>
    </div>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3 mb-6">
      {items.map((f) => (
        <div key={f} className="flex items-start gap-3">
          <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <span className="text-ink text-sm sm:text-base">{f}</span>
        </div>
      ))}
    </div>
  );
}

const primaryBtn =
  "w-full px-6 py-3 rounded-lg bg-charcoal text-cotton dark:bg-cotton dark:text-charcoal font-medium text-sm sm:text-base hover:bg-charcoal/90 dark:hover:bg-cotton/90 transition-colors duration-200 text-center block";

export default function Pricing1() {
  const [implantFinancing, setImplantFinancing] = useState(false);
  const [archFinancing, setArchFinancing] = useState(false);
  const [alignerFinancing, setAlignerFinancing] = useState(false);
  const [implant, arch, aligners] = PLANS;

  return (
    <section
      id="pricing"
      className="relative w-full bg-ground py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1400px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-ink leading-tight mb-2">
            Clear pricing, in US dollars.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-ink-soft max-w-2xl mx-auto">
            What you would pay at home, and what you pay here.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl mx-auto mb-16"
        >
          <div className="relative overflow-hidden p-0.5 rounded-3xl">
            <div
              className="absolute inset-0"
              style={{ borderRadius: "1.5rem" }}
            >
              <MovingBorder duration={5000} rx="30%" ry="30%">
                <div
                  className="h-48 w-48 opacity-70"
                  style={{
                    background:
                      "radial-gradient(var(--accent) 15%, transparent 80%)",
                  }}
                />
              </MovingBorder>
            </div>
            <div className="relative bg-surface border border-line rounded-3xl pl-6 pr-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-ink mb-1">
                    Free virtual consult before you travel.
                  </h3>
                  <div className="flex items-center gap-2 text-ink-soft">
                    <span className="text-xs">No cost, no pressure.</span>
                    <Info className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <a
                href={BOOKING_URL}
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-charcoal text-cotton dark:bg-cotton dark:text-charcoal font-medium text-sm hover:bg-charcoal/90 dark:hover:bg-cotton/90 transition-colors duration-200 text-center"
              >
                Book your consult
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface border border-line rounded-3xl p-5 flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-ink">
                {implant.name}
              </h3>
              <PayToggle
                financing={implantFinancing}
                onChange={setImplantFinancing}
              />
            </div>

            <Price plan={implant} financing={implantFinancing} />

            <div className="flex-1" />

            <div className="mt-8">
              <FeatureList items={implant.features} />
            </div>

            <a href={BOOKING_URL} className={primaryBtn}>
              {implant.cta}
            </a>
          </motion.div>

          {/* The hero treatment. The stock emerald glow is now the brand
              accent, one gradient that resolves correctly in both modes. */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl p-5 flex flex-col relative overflow-hidden border border-accent/40"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(125% 125% at 50% 10%, var(--surface) 40%, var(--accent-soft) 100%)",
              }}
            />

            <div className="relative z-10 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-ink">
                  {arch.name}
                </h3>
                <PayToggle
                  financing={archFinancing}
                  onChange={setArchFinancing}
                />
              </div>

              <Price plan={arch} financing={archFinancing} />

              <div className="flex-1" />

              <div className="mt-8">
                <FeatureList items={arch.features} />
              </div>

              <a href={BOOKING_URL} className={primaryBtn}>
                {arch.cta}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-surface border border-line rounded-3xl p-5 flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-ink">
                {aligners.name}
              </h3>
              <PayToggle
                financing={alignerFinancing}
                onChange={setAlignerFinancing}
              />
            </div>

            <Price plan={aligners} financing={alignerFinancing} />

            <div className="flex-1" />

            <div className="mt-8">
              <FeatureList items={aligners.features} />
            </div>

            <a href={BOOKING_URL} className={primaryBtn}>
              {aligners.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
