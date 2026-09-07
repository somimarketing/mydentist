import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "@/components/icons";

type Variant = "primary" | "secondary" | "link";
type Tone = "light" | "dark";

const baseClass =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md px-6 font-sans text-ui font-bold tracking-[0.005em] transition-[background-color,color,border-color,transform,opacity] duration-500 ease-out-expo";

function variantClass(variant: Variant, tone: Tone) {
  if (variant === "primary") {
    return tone === "dark"
      ? "bg-cotton text-charcoal hover:bg-powder"
      : "bg-charcoal text-cotton hover:bg-slate";
  }
  if (variant === "secondary") {
    return tone === "dark"
      ? "border border-cotton/40 text-cotton hover:border-cotton hover:bg-cotton/5"
      : "border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal/5";
  }
  return cn(
    "min-h-0 gap-1.5 rounded-none px-0 underline-offset-[6px] hover:underline",
    tone === "dark" ? "text-cotton" : "text-charcoal",
  );
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  tone?: Tone;
  icon?: ReactNode;
  arrow?: boolean;
  external?: boolean;
};

export function ButtonLink({
  href,
  variant = "primary",
  tone = "light",
  icon,
  arrow,
  external,
  className,
  children,
  ...rest
}: LinkProps) {
  const cls = cn(baseClass, variantClass(variant, tone), className);
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow ? <ArrowIcon className="h-[1.1em] w-[1.1em]" /> : null}
    </>
  );
  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  tone?: Tone;
};

export function Button({ variant = "primary", tone = "light", className, ...rest }: BtnProps) {
  return <button className={cn(baseClass, variantClass(variant, tone), "disabled:opacity-60", className)} {...rest} />;
}
