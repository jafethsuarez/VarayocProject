"use client";
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
      ? "bg-[#FFF5A5] text-[#34495E] shadow-sm hover:bg-[#FFD6A5] hover:text-[#34495E] active:translate-y-[1px]"
      : "bg-[#A8E6CF] backdrop-blur text-[#FFFFFF] ring-1 ring-violet-200 hover:bg-[#A0D8F1]";
  return (
    <a href={href} className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}