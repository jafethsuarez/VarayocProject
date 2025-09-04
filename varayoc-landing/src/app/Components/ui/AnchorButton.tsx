import React from "react";

type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function AnchorButton({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: AnchorButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all";
  const styles =
    variant === "primary"
      ? "bg-violet-600 text-white shadow-sm hover:bg-violet-700 active:translate-y-[1px]"
      : "bg-white/70 backdrop-blur text-violet-700 ring-1 ring-violet-200 hover:bg-white";
  return (
    <a href={href} className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}