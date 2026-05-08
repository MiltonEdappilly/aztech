"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

export function Sustainability() {
  return (
    <section className="relative bg-paper-soft px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto grid w-full max-w-[1480px] grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5">
          <Reveal>
            <span className="eyebrow">— Sustainability</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-md mt-4 text-ink">
              A smaller footprint,{" "}
              <span className="font-serif-italic">on purpose.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.55] text-muted">
              Reducing impact is a design constraint, not a marketing line. We
              audit every component, ship in moulded pulp, and publish our
              numbers each quarter.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-3 border-b border-ink/30 pb-1 text-[14px] text-ink hover:border-accent hover:text-accent"
            >
              Read the 2025 impact report →
            </a>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line">
            <Metric value="64%" label="Recycled aluminium" delay={0} />
            <Metric value="0" label="Single-use plastic" delay={0.05} />
            <Metric value="5 yr" label="Repairability promise" delay={0.1} />
            <Metric value="−38%" label="CO₂e per unit, vs 2020" delay={0.15} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className="bg-paper p-8 md:p-10"
    >
      <div className="font-serif-italic text-5xl text-ink md:text-6xl">{value}</div>
      <div className="mt-4 text-[11px] uppercase tracking-[0.18em] text-muted">{label}</div>
    </motion.div>
  );
}
