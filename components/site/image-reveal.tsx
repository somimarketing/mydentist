"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/*
  The template washed every frame in indigo. The brand's own cool duotone
  goes here instead, so the gallery reads as one material with the rest of
  the page rather than as a second accent colour.
*/
const DUOTONE = "linear-gradient(135deg, #32374B 0%, #B8C6CC 100%)";

interface ImageRevealProps {
  images?: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

/*
  PENDING Clinic and San Carlos photography replaces this placeholder art.
  Alt text stays generic on purpose: nothing here claims to be a patient.
*/
const defaultImages = [
  { src: "/images/ph-1.jpg", alt: "" },
  { src: "/images/ph-2.jpg", alt: "" },
  { src: "/images/ph-3.jpg", alt: "" },
  { src: "/images/ph-4.jpg", alt: "" },
  { src: "/images/ph-5.jpg", alt: "" },
  { src: "/images/ph-6.jpg", alt: "" },
  { src: "/images/ph-7.jpg", alt: "" },
  { src: "/images/ph-8.jpg", alt: "" },
  { src: "/images/ph-9.jpg", alt: "" },
  { src: "/images/ph-10.jpg", alt: "" },
  { src: "/images/ph-1-sq.jpg", alt: "" },
  { src: "/images/ph-6-sq.jpg", alt: "" },
];

export function ImageReveal({
  images = defaultImages,
  className = "",
}: ImageRevealProps): ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);

  const columns: [
    { src: string; alt: string }[],
    { src: string; alt: string }[],
    { src: string; alt: string }[],
  ] = [[], [], []];
  images.forEach((image, index) => {
    columns[index % 3]!.push(image);
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const columnEls = containerRef.current!.querySelectorAll(".column");

      columnEls.forEach((column, columnIndex) => {
        const items = column.querySelectorAll(".column__item");

        items.forEach((item) => {
          const wrapper = item.querySelector(".column__item-imgwrap");
          if (!wrapper) return;

          let xPercentValue: number;
          let scaleXValue: number;
          let scaleYValue: number;
          let transformOrigin: string;
          let filterValue: string;

          switch (columnIndex) {
            case 0:
              xPercentValue = -400;
              transformOrigin = "0% 50%";
              scaleXValue = 6;
              scaleYValue = 0.3;
              filterValue = "blur(10px)";
              break;
            case 1:
              xPercentValue = 0;
              transformOrigin = "50% 50%";
              scaleXValue = 0.7;
              scaleYValue = 0.7;
              filterValue = "blur(5px)";
              break;
            case 2:
              xPercentValue = 400;
              transformOrigin = "100% 50%";
              scaleXValue = 6;
              scaleYValue = 0.3;
              filterValue = "blur(10px)";
              break;
            default:
              xPercentValue = 0;
              transformOrigin = "50% 50%";
              scaleXValue = 1;
              scaleYValue = 1;
              filterValue = "blur(0px)";
          }

          gsap.fromTo(
            wrapper,
            {
              willChange: "filter",
              xPercent: xPercentValue,
              opacity: 0,
              scaleX: scaleXValue,
              scaleY: scaleYValue,
              filter: filterValue,
            },
            {
              startAt: { transformOrigin: transformOrigin },
              scrollTrigger: {
                trigger: item,
                start: "clamp(top bottom)",
                end: "clamp(bottom top)",
                scrub: true,
              },
              xPercent: 0,
              opacity: 1,
              scaleX: 1,
              scaleY: 1,
              filter: "blur(0px)",
            }
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={`overflow-hidden -mt-24 ${className}`}>
      <div
        ref={containerRef}
        className="columns mx-auto grid max-w-7xl grid-cols-3 gap-4 px-4 sm:px-6 md:gap-6 lg:gap-8 lg:px-8"
      >
        <div className="column flex flex-col gap-4 md:gap-6 lg:gap-8">
          {columns[0].map((image, index) => (
            <figure key={`col0-${index}`} className="column__item">
              <div className="column__item-imgwrap relative aspect-3/4 w-full overflow-hidden rounded-xl">
                <div
                  className="column__item-img h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.src})` }}
                  role={image.alt ? "img" : "presentation"}
                  aria-label={image.alt || undefined}
                />
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-color"
                  style={{ background: DUOTONE }}
                  aria-hidden="true"
                />
              </div>
            </figure>
          ))}
        </div>

        <div className="column flex flex-col gap-4 md:gap-6 lg:gap-8">
          {columns[1].map((image, index) => (
            <figure key={`col1-${index}`} className="column__item">
              <div className="column__item-imgwrap relative aspect-3/4 w-full overflow-hidden rounded-xl">
                <div
                  className="column__item-img h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.src})` }}
                  role={image.alt ? "img" : "presentation"}
                  aria-label={image.alt || undefined}
                />
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-color"
                  style={{ background: DUOTONE }}
                  aria-hidden="true"
                />
              </div>
            </figure>
          ))}
        </div>

        <div className="column flex flex-col gap-4 md:gap-6 lg:gap-8">
          {columns[2].map((image, index) => (
            <figure key={`col2-${index}`} className="column__item">
              <div className="column__item-imgwrap relative aspect-3/4 w-full overflow-hidden rounded-xl">
                <div
                  className="column__item-img h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.src})` }}
                  role={image.alt ? "img" : "presentation"}
                  aria-label={image.alt || undefined}
                />
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-color"
                  style={{ background: DUOTONE }}
                  aria-hidden="true"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
