"use client";

import { VALUES } from "@/lib/site-data";

export function Marquee() {
  // Duplicate so the loop is seamless
  const items = [...VALUES, ...VALUES];
  return (
    <section
      aria-label="Brand values"
      className="border-y border-line bg-paper-soft py-7 overflow-hidden"
    >
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {items.map((v, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-serif-italic text-2xl text-ink md:text-3xl">{v}</span>
            <Star />
          </div>
        ))}
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden className="text-accent">
      <path
        d="M7 0 L8.5 5.5 L14 7 L8.5 8.5 L7 14 L5.5 8.5 L0 7 L5.5 5.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}
