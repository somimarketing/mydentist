"use client";

import { useRef, useState, useEffect, useCallback, type ReactNode } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCopy } from "@/lib/i18n/context";

/*
  The template's testimonial card carried a portrait and three usage stats per
  customer. The clinic has neither: no patient has given permission for their
  photo, and no usage figure exists that is not invented. So the card is
  typographic. The quote does the work, which suits a wall of real Google
  reviews better than a layout built around numbers nobody has.

  Every quote here is verbatim from a real review. Spanish has fewer of them
  than English, and the carousel simply shows fewer rather than padding.
*/

type Review = {
  quote: string;
  name: string;
  meta: string;
};

function ReviewCard({ review, isActive }: { review: Review; isActive: boolean }) {
  return (
    <figure
      className={`flex h-full w-full flex-col justify-between rounded-3xl p-6 transition-colors duration-300 sm:p-10 lg:p-14 ${
        isActive ? "bg-brand-soft/50" : "bg-muted"
      }`}
    >
      <blockquote className="text-xl leading-relaxed font-medium tracking-tight text-foreground sm:text-2xl lg:text-3xl">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <figcaption className="mt-8 border-t border-line/60 pt-6 sm:mt-12">
        <p className="text-base font-semibold text-foreground">{review.name}</p>
        <p className="label-caps mt-1 text-muted-foreground">{review.meta}</p>
      </figcaption>
    </figure>
  );
}

export function Testimonials(): ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [measurements, setMeasurements] = useState({ cardWidth: 0, gap: 24 });
  const { t } = useCopy();

  const seen = new Set<string>();
  const reviews: Review[] = [
    t.wall.featured,
    ...t.reviewsCarousel.items,
    ...t.wall.items.map(({ quote, name, meta }) => ({ quote, name, meta })),
  ].filter((review) => {
    if (seen.has(review.quote)) return false;
    seen.add(review.quote);
    return true;
  });

  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });

  const measure = useCallback(() => {
    if (containerRef.current) {
      setMeasurements({ cardWidth: containerRef.current.offsetWidth, gap: 24 });
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    const { cardWidth, gap } = measurements;
    if (cardWidth > 0) {
      x.set(-currentIndex * (cardWidth + gap));
    }
  }, [currentIndex, measurements, x]);

  const paginate = (direction: number) => {
    setCurrentIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return 0;
      if (next >= reviews.length) return reviews.length - 1;
      return next;
    });
  };

  const { cardWidth, gap } = measurements;

  return (
    <section id="reviews" className="overflow-hidden py-20 md:py-28">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-7xl">
          <p className="label-caps mb-4 text-muted-foreground">
            {t.wall.citiesLabel} · {t.wall.cities.join(" · ")}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            {t.wall.ratingLabel}
          </h2>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="mx-auto max-w-7xl">
          <div className="overflow-visible">
            <motion.div className="flex items-stretch" style={{ x: springX, gap }}>
              {reviews.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="shrink-0"
                  style={{ width: cardWidth || "90%" }}
                  aria-hidden={index !== currentIndex}
                >
                  <ReviewCard review={review} isActive={index === currentIndex} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {reviews.map((review, index) => (
                <button
                  key={`dot-${review.name}-${index}`}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-foreground"
                      : "w-2 bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  aria-label={`${t.reviewsCarousel.next} ${index + 1}`}
                  aria-current={index === currentIndex}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => paginate(-1)}
                disabled={currentIndex === 0}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-muted text-foreground transition-colors duration-200 hover:bg-brand-soft/60 disabled:cursor-not-allowed disabled:opacity-30"
                aria-label={t.reviewsCarousel.previous}
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                disabled={currentIndex === reviews.length - 1}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-muted text-foreground transition-colors duration-200 hover:bg-brand-soft/60 disabled:cursor-not-allowed disabled:opacity-30"
                aria-label={t.reviewsCarousel.next}
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
