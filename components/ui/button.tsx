import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/*
  Same API as the shadcn button, repainted in MyDentist tokens so the header
  never introduces a second color vocabulary.
*/
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-charcoal text-cotton hover:bg-charcoal/90 dark:bg-cotton dark:text-charcoal dark:hover:bg-cotton/90",
        destructive:
          "bg-slate text-cotton hover:bg-slate/90 dark:bg-powder dark:text-charcoal dark:hover:bg-powder/90",
        outline:
          "border border-line-strong bg-transparent text-ink hover:bg-accent-soft/40 dark:hover:bg-cotton/10",
        secondary:
          "bg-accent-soft text-charcoal hover:bg-accent-soft/80 dark:text-charcoal",
        ghost: "text-ink hover:bg-accent-soft/40 dark:hover:bg-cotton/10",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
