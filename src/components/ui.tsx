import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-wrap px-6", className)}>{children}</div>
  );
}

export function SectionHead({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-[60ch] text-center">
      <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-green">
        {label}
      </p>
      <h2 className="font-display text-[clamp(30px,4.5vw,46px)] font-bold leading-[1.05] tracking-[-0.02em]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3.5 text-lg text-muted">{description}</p>
      ) : null}
    </div>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "font-display text-[22px] font-extrabold tracking-[-0.02em]",
        className,
      )}
    >
      Zero<span className="text-green">Maintenance</span>
    </div>
  );
}
