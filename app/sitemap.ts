import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return locales.flatMap((locale) => [
    {
      url: `${site.url}/${locale}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: `${site.url}/en`, es: `${site.url}/es` } },
    },
  ]);
}
