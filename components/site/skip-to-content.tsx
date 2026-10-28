"use client";

import type { ReactNode } from "react";
import { useCopy } from "@/lib/i18n/context";

export function SkipToContent(): ReactNode {
  const { t } = useCopy();

  return (
    <a href="#main-content" className="skip-to-content">
      {t.common.skipToContent}
    </a>
  );
}
