"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import GradientText from "@/components/react-bits/GradientText";

/* [DATO] Real clinic links once Daniel confirms. Both fall back to the
   contact block so nothing is a dead end today. */
const WHATSAPP_URL = "#contact";
const BOOKING_URL = "#contact";

export function Hero9() {
  /* Browsers ignore media attributes on video sources, so the lighter
     mobile encode is chosen here. Reduced motion gets the still frame. */
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sizeQuery = window.matchMedia("(max-width: 767px)");
    const pick = () => {
      setReduced(motionQuery.matches);
      setVideoSrc(sizeQuery.matches ? "/video/hero-960.mp4" : "/video/hero-1080.mp4");
    };
    pick();
    motionQuery.addEventListener("change", pick);
    sizeQuery.addEventListener("change", pick);
    return () => {
      motionQuery.removeEventListener("change", pick);
      sizeQuery.removeEventListener("change", pick);
    };
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-charcoal">
      {!reduced && videoSrc ? (
        <video
          key={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/video/hero-poster.jpg"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <img
          src="/video/hero-poster.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Deeper than the stock block so the Cotton headline stays readable
          over the footage. Charcoal-tinted in dark mode. */}
      <div className="absolute inset-0 bg-black/40 dark:bg-charcoal/55" />

      {/* Single left column, vertically centered, per the approved hero mockup. */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-28">
        <div className="max-w-[1560px] mx-auto w-full">
          <div className="max-w-xl flex flex-col items-start">
            {/* One soft blur-in for the whole headline, then the React Bits
                gradient runs continuously with the approved settings. */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(14px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-[5.75rem] xl:text-[7rem] font-medium leading-[0.95]">
                <GradientText
                  colors={["#ffffff", "#c1cbdc", "#7a95ab"]}
                  animationSpeed={6}
                  direction="horizontal"
                  yoyo={true}
                  pauseOnHover={false}
                  showBorder={false}
                >
                  <span className="block">Say hello to</span>
                  <span className="block">
                    <span className="sig">my</span> dentist.
                  </span>
                </GradientText>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 sm:mt-10 max-w-[480px] text-lg sm:text-xl lg:text-2xl leading-snug text-cotton/90"
            >
              World-class dental care in San Carlos. The same implants you
              would get in the US, for a fraction of the price.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-9 sm:mt-11 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href={BOOKING_URL}
                className="inline-flex items-center justify-center rounded-md bg-cotton px-9 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg lg:text-xl font-medium text-charcoal transition-colors hover:bg-cotton/90 cursor-pointer"
              >
                Book your consult
              </a>
              <a
                href={WHATSAPP_URL}
                className="inline-flex items-center justify-center rounded-md border border-cotton/80 bg-transparent px-9 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg lg:text-xl font-medium text-cotton transition-colors hover:bg-cotton/10 cursor-pointer"
              >
                WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue: bare arrow over the word, centered at the bottom edge. */}
      <motion.a
        href="#patients"
        aria-label="Scroll to the next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-cotton/90 hover:text-cotton transition-colors cursor-pointer"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex"
        >
          <ArrowDown className="w-6 h-6" strokeWidth={1.75} />
        </motion.span>
        <span className="text-sm">Scroll</span>
      </motion.a>
    </section>
  );
}

export default Hero9;
