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
    <div className="group rounded-2xl border border-[#E8ECF1] bg-[#FDFCF9] p-5 shadow-[0_2px_6px_rgba(52,73,94,0.08)] transition hover:shadow-md">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#A0D8F1]/20 text-[#34495E]">
        {icon}
      </div>
      
      <h4 className="mb-1 text-base font-semibold text-[#34495E]">
        {title}
      </h4>
      
      <p className="text-sm text-[#4A4A4A]">
        {desc}
      </p>
    </div>
  );
  
}
