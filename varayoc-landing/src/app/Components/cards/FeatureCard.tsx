import React from "react";

export default function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
        {icon}
      </div>
      <h4 className="mb-1 text-base font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
