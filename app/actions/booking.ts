"use server";

import { z } from "zod";
import { locales } from "@/lib/i18n/config";
import { serviceIds } from "@/lib/i18n/services";

export type BookingField = "name" | "phone" | "service" | "date";

export type BookingState =
  | { status: "idle" }
  | { status: "success"; name: string }
  | { status: "error"; fieldErrors: Partial<Record<BookingField, true>>; generic?: true };

const today = () => new Date().toISOString().slice(0, 10);

const schema = z.object({
  locale: z.enum(locales),
  name: z.string().trim().min(2).max(80),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/[\s().-]/g, ""))
    .pipe(z.string().regex(/^\+?\d{10,15}$/)),
  service: z.enum(serviceIds),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .refine((d) => d >= today()),
  /** Honeypot. Must stay empty. */
  company: z.string().max(0),
});

export type BookingInput = z.infer<typeof schema>;

export async function submitBooking(_prev: BookingState, formData: FormData): Promise<BookingState> {
  const raw = {
    locale: formData.get("locale"),
    name: formData.get("name"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    date: formData.get("date"),
    company: formData.get("company") ?? "",
  };

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<BookingField, true>> = {};
    let generic: true | undefined;
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "name" || key === "phone" || key === "service" || key === "date") fieldErrors[key] = true;
      else generic = true;
    }
    return { status: "error", fieldErrors, generic };
  }

  const booking = parsed.data;

  try {
    await deliver(booking);
  } catch {
    return { status: "error", fieldErrors: {}, generic: true };
  }

  return { status: "success", name: booking.name };
}

/**
 * TODO: wire the real delivery channel.
 * Options: email via Resend, a CRM webhook, a Google Sheet, or the WhatsApp Business API.
 * The clinic should get: name, phone, service id, preferred date and locale.
 */
async function deliver(booking: BookingInput): Promise<void> {
  if (process.env.NODE_ENV !== "production") {
    console.info("[booking] stubbed delivery", { ...booking, company: undefined });
  }
}
