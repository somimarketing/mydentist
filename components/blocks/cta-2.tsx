"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "motion/react";
import { links } from "@/lib/site";

/* Real clinic links. Booking opens WhatsApp until a calendar exists. */
const WHATSAPP_URL = links.whatsapp;
const BOOKING_URL = links.booking;

/* [DATO] Six clinic and smile photos replace the placeholder art. The
   six-image trail mechanic stays exactly as shipped. */
const trailImages = [
  "/images/ph-1.jpg",
  "/images/ph-2.jpg",
  "/images/ph-4.jpg",
  "/images/ph-5.jpg",
  "/images/ph-10.jpg",
  "/images/ph-7.jpg",
];

export default function CTA2() {
  const trailerRef = useRef<HTMLDivElement>(null);
  const currentImageIndex = useRef(0);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastImageTime = useRef(0);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const movementThreshold = 100;
    const delayBetween = 70;

    const createImageTrail = (e: MouseEvent) => {
      if (!trailerRef.current || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < movementThreshold) return;

      const now = Date.now();
      if (
        lastImageTime.current !== 0 &&
        now - lastImageTime.current < delayBetween
      )
        return;

      const img = document.createElement("img");
      img.src = trailImages[currentImageIndex.current];
      img.alt = "";
      img.className = "absolute pointer-events-none rounded-sm object-cover";
      img.style.width = "150px";
      img.style.height = "225px";
      img.style.left = `${relativeX - 75}px`;
      img.style.top = `${relativeY - 112.5}px`;

      trailerRef.current.appendChild(img);

      currentImageIndex.current =
        (currentImageIndex.current + 1) % trailImages.length;

      gsap.fromTo(
        img,
        {
          opacity: 1,
          scale: 0,
          rotation: gsap.utils.random(-20, 20),
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(2)",
        },
      );

      gsap.to(img, {
        opacity: 1,
        scale: 0,
        duration: 0.6,
        delay: 0.6,
        ease: "power2.in",
        onComplete: () => img.remove(),
      });

      lastMousePos.current = { x: e.clientX, y: e.clientY };
      lastImageTime.current = now;
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", createImageTrail);
      return () => section.removeEventListener("mousemove", createImageTrail);
    }
  }, []);

  /* Pills: Ink with an Accent hover, both modes. */
  const pill =
    "px-4 sm:px-6 py-2 sm:py-2.5 rounded-[5px] bg-charcoal text-cotton dark:bg-cotton dark:text-charcoal font-medium text-sm sm:text-base hover:bg-accent hover:text-ground dark:hover:bg-accent dark:hover:text-ground hover:scale-105";

  return (
    <section
      id="book"
      ref={sectionRef}
      className="relative w-full h-screen bg-ground overflow-hidden"
    >
      <div
        ref={trailerRef}
        className="absolute inset-0 pointer-events-none z-9999"
      />

      <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-ink text-center mb-8 sm:mb-10 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="sig">Your</span> new smile
          <br />
          starts with a message.
        </motion.h2>

        <motion.a
          href={BOOKING_URL}
          className="px-8 sm:px-10 py-4 rounded-md bg-charcoal text-cotton dark:bg-cotton dark:text-charcoal font-medium text-base sm:text-lg hover:bg-charcoal/90 dark:hover:bg-cotton/90"
          style={{ transition: "background-color 200ms, transform 200ms" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Book your consult
        </motion.a>
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="text-xs sm:text-sm text-ink-soft uppercase tracking-wider">
          San Carlos, Sonora
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto hidden md:flex items-center justify-between sm:justify-center gap-4 sm:gap-6 md:gap-32 bg-surface pr-2 pl-4 py-2 rounded-md border border-line shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
      >
        <a
          href={WHATSAPP_URL}
          className="text-sm sm:text-base text-ink-soft hover:text-ink transition-colors duration-200 font-medium sm:hidden"
        >
          WhatsApp
        </a>

        <div className="hidden sm:flex items-center gap-2">
          <span className="text-base sm:text-lg font-medium text-ink">
            <span className="sig">My</span>Dentist
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3 sm:gap-4 whitespace-nowrap">
          <a
            href={WHATSAPP_URL}
            className="text-sm sm:text-base text-ink-soft hover:text-ink transition-colors duration-200 font-medium"
          >
            WhatsApp
          </a>
          <a
            href={BOOKING_URL}
            className={pill}
            style={{ transition: "background-color 200ms, transform 200ms, color 200ms" }}
          >
            Book your consult
          </a>
        </div>

        <a
          href={BOOKING_URL}
          className={`${pill} sm:hidden`}
          style={{ transition: "background-color 200ms, transform 200ms, color 200ms" }}
        >
          Book your consult
        </a>
      </motion.div>
    </section>
  );
}
