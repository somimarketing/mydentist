/** Shared, locale-independent service ids. Validated server-side. */
export const serviceIds = [
  "implants",
  "crowns",
  "veneers",
  "fullmouth",
  "rootcanal",
  "cleaning",
  "whitening",
  "ortho",
  "kids",
  "other",
] as const;

export type ServiceId = (typeof serviceIds)[number];
