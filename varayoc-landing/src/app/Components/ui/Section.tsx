import React from "react";

export default function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
}
