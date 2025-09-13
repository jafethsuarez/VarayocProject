"use client";
import React from "react";

export default function Section({
  id,
  className = "",
  children,
  fullBleed = false,
  contentClassName = "",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullBleed?: boolean;
  contentClassName?: string;
}) {
  const contentBase = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
  if (fullBleed) {
    return (
      <section id={id} className={className}>
        <div className={`${contentBase} ${contentClassName}`}>
          {children}
        </div>
      </section>
    );
  }
  return (
    <section
      id={id}
      className={`${contentBase} ${className}`}
    >
      {children}
    </section>
  );
}