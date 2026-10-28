"use client";

import { useScroll, useTransform, useSpring, motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import { useCopy } from "@/lib/i18n/context";
import { useLinks } from "@/lib/i18n/links";
import { site, whatsappUrl } from "@/lib/site";

/*
  The template shipped this hero as an AI prompt box: type an idea, an AI
  answers. The clinic's version keeps the interaction and changes what is on
  the other end. Whatever the patient types is handed to WhatsApp as the
  opening message, so the dentist opens the thread already knowing what the
  person wants, and the patient never faces a form.

  Two template devices are gone on purpose. The WebGL fluid cursor and the
  ambient gradient blob were doing the work a real image should do, so the
  clinic's own footage sits behind the copy instead.
*/

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero(): ReactNode {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useCopy();
  const L = useLinks();
  const reduce = useReducedMotion();

  const [message, setMessage] = useState("");

  const { scrollY } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* Gentle parallax on the footage only; the copy stays put so it stays readable. */
  const yRaw = useTransform(scrollY, (value) => value * 0.25);
  const y = useSpring(yRaw, { stiffness: 100, damping: 30 });

  /* An empty box still opens WhatsApp, just with the dictionary's own opener. */
  const href = whatsappUrl(message.trim() || t.whatsapp.general);

  const addChip = (chip: string) => {
    setMessage((prev) => (prev.trim() ? `${prev.trim()}, ${chip.toLowerCase()}` : chip));
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative isolate min-h-dvh w-full overflow-hidden bg-brand"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 will-change-transform"
        style={reduce ? undefined : { y }}
        aria-hidden="true"
      >
        <video
          className="h-[115%] w-full object-cover"
          poster="/video/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/video/hero-960.mp4" media="(max-width: 768px)" type="video/mp4" />
          <source src="/video/hero-1080.mp4" type="video/mp4" />
        </video>
        {/* Deep Slate wash so Cotton type clears AA contrast over any frame. */}
        <div className="absolute inset-0 bg-brand/70" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-ground to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-4xl flex-col items-start justify-center gap-8 px-4 py-28 sm:px-6 lg:px-8 lg:pt-44">
        <motion.p
          className="label-caps text-on-brand-muted"
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          className="text-4xl font-semibold tracking-tight text-on-brand sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: reduce ? 0 : 20, filter: reduce ? "none" : "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
        >
          <span className="block">{t.hero.headlineLead}</span>
          <span className="sig-on-dark block">{t.hero.headlineSig}</span>
        </motion.h1>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: reduce ? 0 : 30, filter: reduce ? "none" : "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        >
          <div className="rounded-3xl border border-line/40 bg-surface p-3 shadow-[0_8px_32px_rgba(50,55,75,0.18)]">
            <label htmlFor="hero-message" className="sr-only">
              {t.composer.placeholder}
            </label>
            <textarea
              id="hero-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.composer.placeholder}
              rows={3}
              className="no-focus-ring mx-3 my-2 min-h-28 w-[calc(100%-1.5rem)] resize-none bg-transparent text-base text-ink placeholder:text-ink-soft sm:min-h-20"
            />

            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <div
                className="flex flex-wrap items-center gap-2"
                role="group"
                aria-label={t.composer.chipsLabel}
              >
                {t.composer.chips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => addChip(chip)}
                    className="focus-ring cursor-pointer rounded-full border border-line/60 px-4 py-2 text-sm text-ink-soft transition-colors duration-200 hover:border-line-strong hover:text-ink"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              <a
                href={href}
                className="focus-ring flex h-12 shrink-0 items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-on-brand transition-colors duration-200 hover:bg-brand/90"
                aria-label={t.composer.sendLabel}
              >
                <span>{t.composer.send}</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
              </a>
            </div>
          </div>

          <p className="mt-4 text-sm text-on-brand-muted">{t.composer.note}</p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-on-brand-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
        >
          <a href={L.phoneUs} className="focus-ring transition-colors hover:text-on-brand">
            {site.phoneUsDisplay}
          </a>
          <a href={L.phoneMx} className="focus-ring transition-colors hover:text-on-brand">
            {site.phoneMxDisplay}
          </a>
          <a href="#doctors" className="focus-ring underline underline-offset-4 transition-colors hover:text-on-brand">
            {t.hero.secondary}
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#reveal"
        className="focus-ring absolute inset-x-0 bottom-28 z-10 mx-auto hidden w-fit flex-col items-center gap-1 text-on-brand-muted sm:flex"
        aria-label={t.hero.scrollLabel}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
      >
        <ArrowDown className="h-8 w-8" strokeWidth={1} />
        <span className="label-caps">{t.hero.scroll}</span>
      </motion.a>
    </section>
  );
}
