"use client";
import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { RiDoubleQuotesL } from "react-icons/ri";

export type StoryItem = { image: string; quote: string; author?: string };

export default function StoriesCarousel({ items }: { items: StoryItem[] }) {
  const [index, setIndex] = useState(0);
  const clamp = (i: number) => (i + items.length) % items.length;
  const go = (dir: number) => setIndex((i) => clamp(i + dir));

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, []);

  const item = items[index];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <img src={item.image} alt="Historia real" className="h-64 w-full object-cover sm:h-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <div className="flex items-start gap-2">
          <RiDoubleQuotesL className="text-2xl" />
          <p className="text-sm sm:text-base">{item.quote}</p>
        </div>
        {item.author && <p className="mt-2 text-xs opacity-90">— {item.author}</p>}
      </div>
      <button
        aria-label="Prev"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
      >
        <FiChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
      >
        <FiChevronRight className="h-5 w-5" />
      </button>
      <div className="pointer-events-none absolute bottom-3 right-4 rounded-full bg-black/40 px-3 py-1 text-xs text-white">
        {index + 1}/{items.length}
      </div>
    </div>
  );
}
