import { Reveal } from "@/components/motion/Reveal";
import type { Dictionary } from "@/lib/i18n/types";

export function TrustStrip({ items, label }: { items: Dictionary["trust"]; label: string }) {
  return (
    <section aria-label={label} className="bg-cotton">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-16 md:px-10 md:py-24">
        <Reveal as="div">
          <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-y-0">
            {items.map((t, i) => (
              <div
                key={t.label}
                className={
                  "hairline flex flex-col gap-3 pr-6 lg:px-8 " +
                  (i > 0 ? "lg:border-l " : "") +
                  (i % 2 === 1 ? "border-l pl-6 lg:pl-8 " : "") +
                  (i === 0 ? "lg:pl-0" : "")
                }
              >
                <dd className="order-1 font-display text-display-m text-charcoal">{t.value}</dd>
                <dt className="order-2 max-w-[22ch] text-caption text-slate">{t.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
