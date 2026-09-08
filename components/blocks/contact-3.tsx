"use client";

import { motion } from "motion/react";
import { MessageCircle, Video, Phone } from "lucide-react";
import { links, site } from "@/lib/site";

/* WhatsApp and phone are the clinic's real numbers. [DATO] A booking
   calendar does not exist yet, so "book a consult" also opens WhatsApp. */
const WHATSAPP_URL = links.whatsapp;
const BOOKING_URL = links.booking;
const PHONE_URL = links.phone;

export default function Contact3() {
  /* WhatsApp first. The generic Live chat and Email us labels are gone. */
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "We answer in English, usually same day.",
      href: WHATSAPP_URL,
    },
    {
      icon: Video,
      title: "Book a free virtual consult",
      description: "See a dentist before you fly. No cost.",
      href: BOOKING_URL,
    },
    {
      icon: Phone,
      title: "Call the clinic",
      description: site.phoneDisplay,
      href: PHONE_URL,
    },
  ];

  return (
    <section
      id="contact"
      className="w-full bg-ground py-12 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 text-center lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-4 text-4xl font-medium text-ink sm:text-5xl lg:text-6xl"
          >
            Get in touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-sm sm:text-base text-ink-soft"
          >
            Talk to the dentist who will actually treat you.
          </motion.p>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-6 sm:flex-row sm:items-stretch sm:justify-center">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="group flex w-full shrink-0 flex-col items-center justify-between rounded-3xl border border-line bg-surface p-6 transition-all hover:border-line-strong hover:shadow-lg min-h-[280px] sm:w-[240px] sm:min-h-[280px]"
            >
              <div className="flex items-center justify-center mt-6 mb-6 sm:mt-0 sm:flex-1">
                <div className="relative">
                  {/* Layered halos in Accent soft, the tile itself in Accent. */}
                  <div className="absolute inset-0 -m-6 rounded-4xl bg-accent-soft opacity-40" />
                  <div className="absolute inset-0 -m-3 rounded-3xl bg-accent-soft opacity-70" />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-xl bg-accent transition-transform group-hover:scale-110">
                    <method.icon
                      className="h-10 w-10 text-ground"
                      strokeWidth={0.75}
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-base font-medium text-ink">
                  {method.title}
                </h3>
                <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                  {method.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
