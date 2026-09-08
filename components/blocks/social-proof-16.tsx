"use client";

import { motion, type Variants } from "motion/react";
import { BadgeCheck, Star } from "lucide-react";

/* [DATO] A strong quote from a US or Canada patient, with permission.
   Name and city confirmed by Daniel. Placeholder art until real photos. */
const featured = {
  quote:
    "I found Dr. Daniel to be THE BEST dentist I have ever had work on my teeth. He is thorough and thoughtful in his explanation of what he feels is the right way to help you retain your healthy teeth.",
  name: "Brenda Chadwell",
  role: "Google review",
  avatar: "/images/ph-2-sq.jpg",
};

/* [DATO] Cities appear only once there are real patients to back them. */
const cities = ["Phoenix, AZ [DATO]", "Tucson, AZ [DATO]", "Calgary, AB [DATO]"];

/* [DATO] Four real reviews, styled like Google reviews: name and city
   instead of a handle, five stars, and the text as written. */
const posts = [
  {
    name: "Al Dadswell",
    city: "Google review",
    date: "",
    text: "Just finished my annual dentist visit with Dr Daniel. Fantastic service and amazing results. Worth checking him and his wife Dr Carolina for your next visit.",
    avatar: "/images/ph-7-sq.jpg",
  },
  {
    name: "Cherie Mollison",
    city: "Fowlerville, Michigan",
    date: "Dec 2024",
    text: "We are so happy Daniel is active with the San Carlos Rotary and proud that he and Carolina do charity dental care. They are dedicated to their patients, two of whom we met.",
    avatar: "/images/ph-10-sq.jpg",
  },
  {
    name: "Elsa Noelia Ruiz Suchilt",
    city: "Google review",
    date: "",
    text: "Thank you so much for your attention, Dr. Carolina. I'm very happy with my teeth whitening!",
    avatar: "/images/ph-1-sq.jpg",
  },
  {
    name: "Guillermo Soberon",
    city: "Google review",
    date: "",
    text: "Excellent service, kind and professional team with a very comfortable and enjoyable atmosphere.",
    avatar: "/images/ph-5-sq.jpg",
  },
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
  return (
    <div
      role="img"
      aria-label="Rated 5 out of 5 stars"
      className={`flex items-center gap-1 ${className}`}
    >
      {[0, 1, 2, 3, 4].map((star) => (
        <Star key={star} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function SocialProof16() {
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
              Trusted by patients from
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
                <span className="text-xs">Google review</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
