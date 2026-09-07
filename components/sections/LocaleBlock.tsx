import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow, Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import type { Dictionary } from "@/lib/i18n/types";

/** Same component for both locales. EN passes a price table, ES passes payment plans. */
export function LocaleBlock({ data, whatsappHref }: { data: Dictionary["localeBlock"]; whatsappHref: string }) {
  return (
    <Section id="pricing" labelledBy="pricing-title" tone="charcoal">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 [&>*]:min-w-0">
        <Reveal>
          <Eyebrow className="text-powder">{data.eyebrow}</Eyebrow>
          <h2 id="pricing-title" className="mt-5 max-w-[16ch] font-display text-display-l text-balance">
            {data.headline}
          </h2>
          <p className="mt-6 max-w-[44ch] text-body text-cotton/72">{data.support}</p>
          <dl className="mt-10 max-w-[52ch] divide-y divide-cotton/12 border-y border-cotton/12">
            {data.facts.map((f) => (
              <div key={f.label} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="text-caption font-bold tracking-[0.04em] text-powder uppercase">{f.label}</dt>
                <dd className="text-ui text-cotton/85">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <ButtonLink href={whatsappHref} tone="dark" icon={<WhatsAppIcon className="h-5 w-5" />}>
              {data.cta}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {data.table ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <caption className="sr-only">{data.table.caption}</caption>
                <thead>
                  <tr className="border-b border-cotton/25">
                    {data.table.columns.map((c, i) => (
                      <th
                        key={c}
                        scope="col"
                        className={
                          "pb-4 text-caption font-bold tracking-[0.06em] text-powder uppercase " +
                          (i > 0 ? "pl-6 text-right" : "")
                        }
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-cotton/12">
                  {data.table.rows.map((r) => (
                    <tr key={r.treatment}>
                      <th scope="row" className="py-5 pr-4 font-display text-display-s font-normal text-cotton">
                        {r.treatment}
                      </th>
                      <td className="py-5 pl-6 text-right text-ui text-cotton/70 tabular-nums">{r.us}</td>
                      <td className="py-5 pl-6 text-right font-display text-display-s text-cotton tabular-nums">{r.here}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-6 max-w-[60ch] text-caption text-cotton/70">{data.table.footnote}</p>
            </div>
          ) : null}

          {data.plans ? (
            <ul className="flex flex-col divide-y divide-cotton/12 border-y border-cotton/12">
              {data.plans.map((p, i) => (
                <li key={p.title} className="grid gap-4 py-9 sm:grid-cols-[3rem_1fr]">
                  <span className="font-display text-display-s text-powder tabular-nums" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-display-m">{p.title}</h3>
                    <p className="mt-3 max-w-[46ch] text-body text-cotton/72">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      </div>
    </Section>
  );
}
