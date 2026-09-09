"use client";

import { motion, type Variants } from "motion/react";
import { BadgeCheck, Star } from "lucide-react";
import { useCopy } from "@/lib/i18n/context";

/* [DATO] A strong quote from a US or Canada patient, with permission.
   Name and city confirmed by Daniel. Placeholder art until real photos. */
/* Avatars are placeholders and cycle independently of the copy, so a
   locale with fewer real reviews still gets an image for each one.
   [DATO] Real patient photos, with written permission. */
const FEATURED_AVATAR = "/images/ph-2-sq.jpg";
const POST_AVATARS = [
  "/images/ph-7-sq.jpg",
  "/images/ph-10-sq.jpg",
  "/images/ph-1-sq.jpg",
  "/images/ph-5-sq.jpg",
];

const panel: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function Stars({ className = "" }: { className?: string }) {
  const { t } = useCopy();

  return (
    <div
      role="img"
      aria-label={t.wall.ratingLabel}
      className={`flex items-center gap-1 ${className}`}
    >
      {[0, 1, 2, 3, 4].map((star) => (
        <Star key={star} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function SocialProof16() {
  const { t } = useCopy();
  const featured = {
    quote: t.wall.featured.quote,
    name: t.wall.featured.name,
    role: t.wall.featured.meta,
    avatar: FEATURED_AVATAR,
  };
  const cities = t.wall.cities;
  const posts = t.wall.items.map((item, i) => ({
    name: item.name,
    city: item.meta,
    date: item.date,
    text: item.quote,
    avatar: POST_AVATARS[i % POST_AVATARS.length],
  }));

  return (
    <section
      id="reviews"
      className="w-full bg-ground px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Charcoal panel on the Cotton ground. In dark mode it lifts to the
            surface step so it still reads as a panel. */}
        <motion.div
          variants={panel}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col rounded-3xl border border-charcoal bg-charcoal text-cotton p-8 dark:border-line dark:bg-surface sm:p-10 lg:col-span-5 lg:p-12"
        >
          <Stars className="text-cotton" />
          <blockquote className="mt-8 text-balance text-2xl font-medium leading-snug text-cotton sm:text-3xl xl:text-4xl tracking-[-0.02em]">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center gap-4 lg:mt-auto lg:pt-10">
            <img
              src={featured.avatar}
              alt=""
              className="h-12 w-12 rounded-full object-cover bg-surface"
            />
            <div>
              <p className="text-sm font-semibold text-cotton">
                {featured.name}
              </p>
              <p className="text-sm text-powder">{featured.role}</p>
            </div>
          </div>
          <div className="mt-10 pt-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-powder/80">
              {t.wall.citiesLabel}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
              {cities.map((city) => (
                <span
                  key={city}
                  className="text-sm font-semibold tracking-wide text-powder"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-6"
        >
          {posts.map((post, i) => (
            <motion.article
              key={i}
              variants={card}
              whileHover={{
                y: -4,
                transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
              }}
              className="flex flex-col rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-line-strong sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={post.avatar}
                    alt=""
                    className="h-10 w-10 rounded-full object-cover bg-accent-soft/40"
                  />
                  <div>
                    <p className="flex items-center gap-1 text-sm font-semibold text-ink">
                      {post.name}
                      <BadgeCheck className="h-3.5 w-3.5 text-accent" />
                    </p>
                    <p className="text-xs text-ink-soft">{post.city}</p>
                  </div>
                </div>
                <span className="text-xs text-ink-soft">{post.date}</span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink sm:text-[15px]">
                {post.text}
              </p>
              <div className="mt-5 flex items-center justify-between gap-6 pt-4 text-ink-soft">
                <Stars className="text-accent" />
                <span className="text-xs">{t.wall.googleReview}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
