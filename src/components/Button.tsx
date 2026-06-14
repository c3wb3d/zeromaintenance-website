import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  href?: string;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-green text-ink hover:bg-green-deep border-transparent",
  ghost:
    "bg-transparent border-line-2 text-text hover:bg-ink-2 hover:border-line-2",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", href, className, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-[11px] text-[15px] font-semibold transition active:scale-[0.98]",
      variantClasses[variant],
      className,
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
