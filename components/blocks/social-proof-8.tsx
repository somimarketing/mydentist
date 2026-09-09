"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useCopy } from "@/lib/i18n/context";

/* Verbatim excerpts from public Google reviews of the clinic.
   Photos are stock placeholders until real patient photos arrive with permission. */
/* Portraits cycle independently of the copy, so a locale with fewer real
   reviews still gets a matching image for each one. */
const REVIEW_ART = ["/images/ph-3-sq.jpg", "/images/ph-9-sq.jpg", "/images/ph-6-sq.jpg"];

export function SocialProof8() {
  const { t } = useCopy();
  const testimonials = t.reviewsCarousel.items.map((item, i) => ({
    quote: item.quote,
    name: item.name,
    role: item.meta,
    image: REVIEW_ART[i % REVIEW_ART.length],
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <section
      id="patients"
      className="w-full py-24 bg-ground overflow-hidden flex items-center justify-start select-none px-4 sm:px-6 lg:px-8"
    >
      <div
        ref={containerRef}
        className="max-w-[1400px] mx-auto w-full relative cursor-none"
        onClick={nextSlide}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.15 }}
              style={{
                translateX: cursorX,
                translateY: cursorY,
                position: "absolute",
                top: -20,
                left: -40,
                zIndex: 50,
              }}
              className="pointer-events-none"
            >
              <div className="bg-charcoal text-cotton dark:bg-cotton dark:text-charcoal px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-xl whitespace-nowrap">
                {t.reviewsCarousel.next}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-6">
            <div className="w-full md:w-1/3 shrink-0">
              <div className="relative aspect-[1] w-full max-w-[260px] mx-auto md:mr-auto border border-line rounded-2xl overflow-hidden shadow-sm h-full bg-surface">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>

            <div className="w-full md:w-2/3 flex flex-col justify-between">
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <blockquote className="text-2xl md:text-3xl text-ink leading-[1.15] tracking-[-0.02em]">
                      &ldquo;{testimonials[currentIndex].quote}&rdquo;
                    </blockquote>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h4 className="text-xl font-medium text-ink mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-ink-soft text-base">
                      {testimonials[currentIndex].role}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-end gap-3 pointer-events-none pb-2">
                  {testimonials.map((_, idx) => (
                    <div
                      key={idx}
                      className="relative h-0.5 w-12 bg-line overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-accent"
                        initial={{ width: 0 }}
                        animate={{
                          width: idx === currentIndex ? "100%" : "0%",
                        }}
                        transition={{
                          duration: idx === currentIndex ? 10 : 0,
                          ease: "linear",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialProof8;
