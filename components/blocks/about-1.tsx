"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, MessageCircle } from "lucide-react";
import { site, links, messages, whatsappUrl } from "@/lib/site";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  whatsapp: string;
  instagram: string;
}

interface About1Props {
  displayProgressIndicators?: boolean;
}

/* Names and WhatsApp numbers are confirmed. [DATO] Real photos of both
   dentists, plus any further staff, still to come from Daniel. */
const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: site.doctors[0].name,
    role: "Implant and aesthetic dentistry",
    image: "/images/ph-4.jpg",
    whatsapp: whatsappUrl(messages.general, site.doctors[0].phone),
    instagram: links.instagram ?? whatsappUrl(messages.general, site.doctors[0].phone),
  },
  {
    id: 2,
    name: site.doctors[1].name,
    role: "General and family dentistry, clinic partner",
    image: "/images/ph-1.jpg",
    whatsapp: whatsappUrl(messages.general, site.doctors[1].phone),
    instagram: links.instagram ?? whatsappUrl(messages.general, site.doctors[1].phone),
  },
];

const CAROUSEL_CONFIG = {
  autoPlayInterval: 5000,
  animationDuration: 0.4,
  layoutDuration: 2,
  paddingDuration: 0.75,
  easing: [0.32, 0.72, 0, 1] as const,
};

const CAROUSEL_HEIGHT = 450;

export default function About1({
  displayProgressIndicators = true,
}: About1Props = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
    }, CAROUSEL_CONFIG.autoPlayInterval);

    return () => clearInterval(interval);
  }, [resetKey]);

  const handleIndexChange = (index: number) => {
    setActiveIndex(index);
    setResetKey((prev) => prev + 1);
  };

  const getVisibleMembers = (): TeamMember[] => {
    return [
      TEAM_MEMBERS[activeIndex],
      TEAM_MEMBERS[(activeIndex + 1) % TEAM_MEMBERS.length],
      TEAM_MEMBERS[(activeIndex + 2) % TEAM_MEMBERS.length],
    ];
  };

  return (
    <section
      id="dentists"
      className="w-full flex items-start lg:items-center py-12 px-4 sm:px-6 lg:px-8 bg-ground"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <TeamMemberList
            activeIndex={activeIndex}
            onIndexChange={handleIndexChange}
          />

          <div className="lg:col-span-9 order-1 lg:order-2">
            <Header />
            <Carousel visibleMembers={getVisibleMembers()} />
            {displayProgressIndicators && (
              <ProgressIndicators
                activeIndex={activeIndex}
                onIndexChange={handleIndexChange}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamMemberList({
  activeIndex,
  onIndexChange,
}: {
  activeIndex: number;
  onIndexChange: (index: number) => void;
}) {
  return (
    <div className="lg:col-span-3 order-2 lg:order-1">
      <div className="space-y-4">
        {TEAM_MEMBERS.map((member, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={member.id}
              onClick={() => onIndexChange(index)}
              className="flex items-center gap-3 w-full text-left group cursor-pointer"
            >
              <div
                className={`w-2 h-2 rounded-full transition-colors ${
                  isActive ? "bg-accent scale-100" : "bg-line scale-75"
                }`}
              />
              <span
                className={`text-sm sm:text-base transition-colors ${
                  isActive
                    ? "text-ink font-medium"
                    : "text-ink-soft group-hover:text-ink"
                }`}
              >
                {member.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-ink mb-1">
        Meet your dentists
      </h2>
      <p className="text-base text-ink-soft">
        The people who will actually treat you.
      </p>
    </motion.div>
  );
}

function Carousel({ visibleMembers }: { visibleMembers: TeamMember[] }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: CAROUSEL_HEIGHT }}
    >
      <div className="flex gap-6 h-full">
        <AnimatePresence mode="sync" initial={false}>
          {visibleMembers.map((member, position) => (
            <CarouselCard key={member.id} member={member} position={position} />
          ))}
        </AnimatePresence>
      </div>

      <div className="hidden lg:block absolute top-0 right-0 w-[200px] h-full bg-linear-to-l from-ground to-transparent pointer-events-none" />
    </div>
  );
}

function CarouselCard({
  member,
  position,
}: {
  member: TeamMember;
  position: number;
}) {
  const isActive = position === 0;
  const isNext = position === 1;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{
        opacity: 0,
        x: -100,
        transition: { duration: CAROUSEL_CONFIG.animationDuration },
      }}
      transition={{
        duration: CAROUSEL_CONFIG.animationDuration,
        ease: CAROUSEL_CONFIG.easing,
        layout: {
          duration: CAROUSEL_CONFIG.layoutDuration,
          ease: CAROUSEL_CONFIG.easing,
        },
      }}
      className="shrink-0 w-[280px] sm:w-[320px] md:w-[400px] h-full"
    >
      <motion.div
        className="relative w-full h-full rounded-2xl overflow-hidden bg-accent-soft/40 dark:bg-surface"
        animate={{ padding: isActive ? "0px" : "4rem" }}
        transition={{ duration: CAROUSEL_CONFIG.paddingDuration }}
      >
        <motion.div
          className="relative w-full h-full"
          layout
          transition={{
            duration: 0.6,
            ease: CAROUSEL_CONFIG.easing,
          }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="absolute inset-0 bg-linear-to-t from-ground/85 via-ground/30 to-transparent rounded-lg" />

          <CardContent member={member} isActive={isActive} isNext={isNext} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function CardContent({
  member,
  isActive,
  isNext,
}: {
  member: TeamMember;
  isActive: boolean;
  isNext: boolean;
}) {
  const paddingClasses = isActive
    ? "p-5 sm:p-6 md:p-8"
    : isNext
      ? "p-4 sm:p-5"
      : "p-3 sm:p-4";

  const titleClasses = isActive
    ? "text-xl sm:text-2xl md:text-3xl"
    : isNext
      ? "text-base sm:text-lg md:text-xl"
      : "text-sm sm:text-base md:text-lg";

  const roleClasses = isActive
    ? "text-sm sm:text-base"
    : isNext
      ? "text-xs sm:text-sm"
      : "text-xs";

  const iconSize = isActive
    ? "w-9 h-9 sm:w-10 sm:h-10"
    : isNext
      ? "w-8 h-8"
      : "w-7 h-7";

  const iconClasses = isActive ? "w-4 h-4" : isNext ? "w-3.5 h-3.5" : "w-3 h-3";

  return (
    <div className={`absolute bottom-0 left-0 right-0 ${paddingClasses}`}>
      <h3 className={`font-bold text-ink mb-1 ${titleClasses}`}>
        {member.name}
      </h3>
      <p className={`text-ink/80 mb-4 ${roleClasses}`}>{member.role}</p>

      {/* WhatsApp and Instagram instead of the stock GitHub and Mail. */}
      <div className="flex items-center gap-2 sm:gap-3">
        <a
          href={member.whatsapp}
          className={`rounded-full bg-surface/60 backdrop-blur-sm hover:bg-surface/90 transition-colors duration-200 flex items-center justify-center ${iconSize}`}
          aria-label={`${member.name} on WhatsApp`}
        >
          <MessageCircle className={`text-ink ${iconClasses}`} />
        </a>
        <a
          href={member.instagram}
          className={`rounded-full bg-surface/60 backdrop-blur-sm hover:bg-surface/90 transition-colors duration-200 flex items-center justify-center ${iconSize}`}
          aria-label={`${member.name} on Instagram`}
        >
          <Instagram className={`text-ink ${iconClasses}`} />
        </a>
      </div>
    </div>
  );
}

function ProgressIndicators({
  activeIndex,
  onIndexChange,
}: {
  activeIndex: number;
  onIndexChange: (index: number) => void;
}) {
  return (
    <div className="flex items-center gap-2 mt-6">
      {TEAM_MEMBERS.map((_, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={index}
            onClick={() => onIndexChange(index)}
            className="group relative h-1 flex-1 bg-line rounded-full overflow-hidden cursor-pointer"
            aria-label={`Go to team member ${index + 1}`}
          >
            <motion.div
              className="absolute inset-0 bg-accent origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isActive ? 1 : 0 }}
              transition={{
                duration: isActive ? 5 : 0.3,
                ease: isActive ? "linear" : "easeOut",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
