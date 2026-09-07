"use client";

import { useActionState, useId } from "react";
import { submitBooking, type BookingState } from "@/app/actions/booking";
import { WhatsAppIcon } from "@/components/icons";
import { Button, ButtonLink } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

type Props = {
  locale: Locale;
  form: Dictionary["finalCta"]["form"];
  services: Dictionary["finalCta"]["serviceOptions"];
  whatsappFollowUpHref: string;
};

const initial: BookingState = { status: "idle" };

const fieldClass =
  "w-full rounded-md border border-cotton/25 bg-transparent px-4 py-3.5 text-ui font-semibold text-cotton placeholder:text-cotton/60 transition-colors duration-500 focus:border-cotton focus:outline-none aria-[invalid=true]:border-powder";

export function BookingForm({ locale, form, services, whatsappFollowUpHref }: Props) {
  const [state, action, pending] = useActionState(submitBooking, initial);
  const id = useId();
  const today = new Date().toISOString().slice(0, 10);
  const errors = state.status === "error" ? state.fieldErrors : {};

  if (state.status === "success") {
    return (
      <div role="status" aria-live="polite" className="rounded-lg border border-cotton/20 p-8 md:p-10">
        <h3 className="font-display text-display-m">{form.successTitle}</h3>
        <p className="mt-4 max-w-[46ch] text-body text-cotton/72">{form.successBody}</p>
        <div className="mt-8">
          <ButtonLink href={whatsappFollowUpHref} tone="dark" icon={<WhatsAppIcon className="h-5 w-5" />}>
            {form.successWhatsapp}
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="rounded-lg border border-cotton/20 p-8 md:p-10" aria-describedby={`${id}-privacy`}>
      <h3 className="font-display text-display-s">{form.title}</h3>

      <input type="hidden" name="locale" value={locale} />
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      {state.status === "error" && (state.generic || Object.keys(errors).length > 0) ? (
        <div role="alert" className="mt-6 border-l-2 border-powder pl-4 text-ui text-cotton/85">
          <p className="font-bold">{form.errorTitle}</p>
          {state.generic ? <p className="mt-1">{form.errors.generic}</p> : null}
        </div>
      ) : null}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field id={`${id}-name`} label={form.name} error={errors.name ? form.errors.name : undefined}>
          <input id={`${id}-name`} name="name" type="text" autoComplete="name" required maxLength={80} aria-invalid={errors.name ? true : undefined} className={fieldClass} />
        </Field>
        <Field id={`${id}-phone`} label={form.phone} error={errors.phone ? form.errors.phone : undefined}>
          <input id={`${id}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" required aria-invalid={errors.phone ? true : undefined} className={fieldClass} />
        </Field>
        <Field id={`${id}-service`} label={form.service} error={errors.service ? form.errors.service : undefined}>
          <select id={`${id}-service`} name="service" required defaultValue="" aria-invalid={errors.service ? true : undefined} className={cn(fieldClass, "appearance-none bg-charcoal")}>
            <option value="" disabled>
              {form.servicePlaceholder}
            </option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id={`${id}-date`} label={form.date} error={errors.date ? form.errors.date : undefined}>
          <input id={`${id}-date`} name="date" type="date" min={today} required aria-invalid={errors.date ? true : undefined} className={cn(fieldClass, "[color-scheme:dark]")} />
        </Field>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <Button type="submit" tone="dark" disabled={pending} aria-busy={pending} className="w-full sm:w-auto sm:self-start">
          {pending ? form.submitting : form.submit}
        </Button>
        <p id={`${id}-privacy`} className="text-caption text-cotton/70">
          {form.privacy}
        </p>
      </div>
    </form>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-caption font-bold tracking-[0.04em] text-powder uppercase">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-caption text-cotton/80">
          {error}
        </p>
      ) : null}
    </div>
  );
}
