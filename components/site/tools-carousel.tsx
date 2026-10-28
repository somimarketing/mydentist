"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, type PanInfo } from "motion/react";
import Image from "next/image";
import { useCopy } from "@/lib/i18n/context";

/*
  The template's four product steps, carrying the clinic's four instead. Copy
  comes from lib/i18n so each language tells its own version: the English
  steps plan a trip, the Spanish ones plan a week.

  PENDING Clinic and San Carlos photography replaces this placeholder art.
*/
const STEP_ART = [
  "/images/ph-8.jpg",
  "/images/ph-5.jpg",
  "/images/ph-7.jpg",
  "/images/ph-2.jpg",
];

export function ToolsCarousel(): ReactNode {
  const { t } = useCopy();
  const tools = t.how.steps.map((step, i) => ({
    title: step.title,
    description: step.body,
    image: STEP_ART[i % STEP_ART.length] as string,
  }));

  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && wrapperRef.current) {
        const containerWidth = containerRef.current.scrollWidth;
        const wrapperWidth = wrapperRef.current.offsetWidth;
        const maxDrag = Math.min(0, -(containerWidth - wrapperWidth));
        setConstraints({ left: maxDrag, right: 0 });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      cursorX.set(e.clientX - rect.left + 16);
      cursorY.set(e.clientY - rect.top - 16);
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);

    const velocity = info.velocity.x;
    const currentX = x.get();
    const momentumDistance = velocity * 0.3;
    let targetX = currentX + momentumDistance;

    if (targetX > 0) {
      targetX = 0;
    } else if (targetX < constraints.left) {
      targetX = constraints.left;
    }

    x.set(targetX);
  };



  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="label-caps mb-4 text-ink-soft">{t.how.eyebrow}</p>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            {t.how.headline}
          </h2>
          <p className="mb-12 max-w-2xl text-base text-ink-soft">{t.how.support}</p>
        </div>
      </div>

      <div
        ref={wrapperRef}
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          ref={containerRef}
          className="flex cursor-grab gap-2.5 pr-48 active:cursor-grabbing pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100vw-85rem)/2+2rem))]"
          style={{ x }}
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.15}
          dragTransition={{
            power: 0.3,
            timeConstant: 200,
            modifyTarget: (target) =>
              Math.max(constraints.left, Math.min(0, target)),
          }}
          onDragEnd={handleDragEnd}
          onDragStart={() => setIsDragging(true)}
          whileDrag={{ cursor: "grabbing" }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              className="group flex w-80 shrink-0 flex-col rounded-xl border border-line/50 bg-surface px-6 pt-6 transition-colors duration-300 hover:border-line-strong sm:w-96 md:w-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="label-caps mb-3 text-ink-soft">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
                {tool.title}
              </h3>
              <p className="mt-2 text-base leading-snug tracking-tight text-muted-foreground">
                {tool.description}
              </p>

              <div className="relative mt-6 aspect-3/4 w-full h-80 overflow-hidden">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  fill
                  className="scale-100 object-cover object-center"
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, 420px"
                  draggable={false}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent md:w-48"
          aria-hidden="true"
        />

        <motion.div
          className="label-caps pointer-events-none absolute top-0 left-0 z-50 flex items-center justify-center rounded-full bg-brand px-4 py-2 text-on-brand"
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovering && !isDragging ? 1 : 0,
            scale: isHovering && !isDragging ? 1 : 0.8,
          }}
          transition={{ duration: 0.15 }}
        >
          {t.common.drag}
        </motion.div>
      </div>
    </section>
  );
}
