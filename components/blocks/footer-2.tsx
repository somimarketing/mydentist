"use client";

import { motion } from "motion/react";
import { Instagram, MessageCircle } from "lucide-react";
import { links } from "@/lib/site";
import { useCopy } from "@/lib/i18n/context";
import { useLinks } from "@/lib/i18n/links";

/* Real clinic links. Booking opens WhatsApp until a calendar exists. */

export default function Footer2() {
  const L = useLinks();
  const WHATSAPP_URL = L.whatsapp;
  const BOOKING_URL = L.booking;
  const INSTAGRAM_URL = L.instagram ?? L.whatsapp;
  const { t } = useCopy();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 bg-charcoal">
      {/* [DATO] A still from the hero footage holds this until a clinic or
          San Carlos photo is chosen. */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src="/video/hero-poster.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      <div className="relative">
        <div className="h-32 sm:h-40 md:h-48" />

        <div className="relative bg-ground">
          {/* The angular cut stays. Fill follows the ground token. */}
          <div className="absolute left-0 top-0 z-10 -translate-y-full">
            <svg
              width="614"
              height="153"
              viewBox="0 0 614 153"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-[250px] relative top-px"
            >
              <path
                d="M0 0H451.601C467.78 0 483.071 7.75893 491.954 21.2815C558.518 122.612 538.359 153.074 614 153H0V0Z"
                className="fill-ground"
              />
            </svg>
          </div>

          <div className="absolute right-0 top-0 z-10 -translate-y-full">
            <svg
              width="614"
              height="153"
              viewBox="0 0 614 153"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-[250px] scale-x-[-1] relative top-px"
            >
              <path
                d="M0 0H451.601C467.78 0 483.071 7.75893 491.954 21.2815C558.518 122.612 538.359 153.074 614 153H0V0Z"
                className="fill-ground"
              />
            </svg>
          </div>

          <div className="mx-auto w-full max-w-[1400px] py-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center space-y-8 sm:space-y-10 md:space-y-12"
            >
              <motion.div
                variants={itemVariants}
                className="text-center flex flex-col items-center"
              >
                {/* Tooth mark, masked so it inherits the ink color. */}
                <span
                  role="img"
                  aria-label={t.footer.mark}
                  className="block bg-current text-ink h-10 w-10 sm:h-12 sm:w-12 mb-5"
                  style={{
                    maskImage: "url(/logo/mydentist-icon-currentcolor.svg)",
                    WebkitMaskImage:
                      "url(/logo/mydentist-icon-currentcolor.svg)",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
                <h2 className="text-4xl font-bold text-ink sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="sig">My</span>Dentist
                </h2>
                <p className="mt-2 text-xl font-medium text-ink sm:text-2xl md:text-3xl">
                  {t.footer.city}
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center gap-3 text-sm text-ink sm:gap-4 sm:text-base tracking-wider"
              >
                <a
                  href={BOOKING_URL}
                  className="transition-colors hover:text-accent"
                >
                  {t.footer.bookConsult}
                </a>
                <span className="text-ink-soft">·</span>
                <a
                  href={WHATSAPP_URL}
                  className="transition-colors hover:text-accent"
                >
                  {t.footer.whatsapp}
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-6"
              >
                <a
                  href={INSTAGRAM_URL}
                  className="text-ink transition-colors hover:text-accent"
                  aria-label={t.footer.instagram}
                >
                  <Instagram className="h-6 w-6 sm:h-7 sm:w-7" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  className="text-ink transition-colors hover:text-accent"
                  aria-label={t.common.whatsapp}
                >
                  <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex w-full flex-col items-center justify-between gap-6 border-t border-line pt-8 text-center sm:flex-row sm:text-left md:pt-10 px-4 sm:px-0"
              >
                <div className="text-xs text-ink-soft sm:text-sm">
                  <p>
                    © {new Date().getFullYear()} MyDentist. {t.footer.rights}
                  </p>
                </div>

                <div className="text-xs text-ink-soft sm:text-right sm:text-sm tracking-wider">
                  <p>{t.footer.tagline}</p>
                  <p>{t.footer.place}</p>
                  <p>{t.footer.est}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
