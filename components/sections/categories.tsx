"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import { CATEGORIES, type Category } from "@/lib/site-data";
import { Reveal, RevealHeading } from "@/components/ui/reveal";

export function Categories() {
  return (
    <section id="shop" className="relative px-6 pb-32 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto w-full max-w-[1480px]">
        <div className="mb-16 grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <span className="eyebrow">— The catalogue</span>
            </Reveal>
            <RevealHeading
              as="h2"
              delay={0.05}
              className="display-lg mt-4 text-ink"
              text="Four categories."
            />
            <h2 className="display-lg text-ink">
              <span className="overflow-hidden inline-block align-bottom" style={{ paddingBottom: "0.08em" }}>
                <motion.span
                  className="inline-block font-serif-italic"
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  One philosophy.
                </motion.span>
              </span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <Reveal delay={0.2}>
              <p className="text-[16px] leading-[1.55] text-muted">
                Hardware that respects the room it's in. Software that gets out
                of your way. A short, deliberate catalogue — every product earns
                its slot.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line md:grid-cols-2">
          {CATEGORIES.map((c, i) => (
            <CategoryCard key={c.id} category={c} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category, delay }: { category: Category; delay: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50, active: false });

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      active: true,
    });
  }

  return (
    <motion.a
      ref={ref}
      href={`#${category.id}`}
      id={category.id}
      onMouseMove={onMove}
      onMouseLeave={() => setPos((p) => ({ ...p, active: false }))}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className="group relative isolate overflow-hidden bg-paper p-8 transition-colors duration-700 md:p-12"
    >
      {/* Cursor-following spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${pos.x}% ${pos.y}%, ${category.hue}10, transparent 60%)`,
        }}
      />

      <div className="flex items-start justify-between">
        <span className="font-serif-italic text-2xl text-muted">{category.index}</span>
        <span className="rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-muted">
          {category.count} products
        </span>
      </div>

      <div className="mt-24 md:mt-40">
        <h3 className="display-md text-ink">{category.name}</h3>
        <p className="mt-4 max-w-[40ch] text-[15px] leading-[1.55] text-muted">
          {category.blurb}
        </p>
      </div>

      <div className="mt-10 flex items-center gap-3 text-[13px] font-medium text-ink">
        <span>Browse {category.name.toLowerCase()}</span>
        <span className="inline-block h-px w-10 bg-ink transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-16 group-hover:bg-accent" />
        <span className="text-muted transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1 group-hover:text-accent">→</span>
      </div>

      {/* Decorative motif per card */}
      <div aria-hidden className="pointer-events-none absolute right-8 top-24 h-32 w-32 opacity-50 md:right-12 md:top-28 md:h-44 md:w-44">
        <CategoryMotif id={category.id} />
      </div>
    </motion.a>
  );
}

function CategoryMotif({ id }: { id: string }) {
  switch (id) {
    case "displays":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full text-ink">
          <rect x="10" y="14" width="80" height="56" rx="3" stroke="currentColor" strokeWidth="0.8" fill="none" />
          <path d="M50 70 V84 M30 86 H70" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="50" cy="42" r="14" stroke="currentColor" strokeWidth="0.8" fill="none" />
        </svg>
      );
    case "charging":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full text-ink">
          <path d="M55 14 L40 50 H55 L42 86 L70 46 H55 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
          <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 3" fill="none" />
        </svg>
      );
    case "mounts":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full text-ink">
          <rect x="20" y="16" width="60" height="40" rx="2" stroke="currentColor" strokeWidth="0.8" fill="none" />
          <path d="M50 56 V72 M40 84 H60 M30 80 L50 72 L70 80" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      );
    case "gaming":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full text-ink">
          <path d="M28 38 H72 Q86 38 86 56 Q86 70 72 70 L62 60 H38 L28 70 Q14 70 14 56 Q14 38 28 38 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
          <circle cx="62" cy="54" r="2.5" fill="currentColor" />
          <circle cx="70" cy="46" r="2.5" fill="currentColor" />
          <path d="M30 50 H38 M34 46 V54" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    default:
      return null;
  }
}
