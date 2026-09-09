"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FEATURED, PRODUCTS } from "@/lib/site-data";
import { Reveal, RevealHeading } from "@/components/ui/reveal";

export function Featured() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section className="relative bg-ink px-6 py-32 text-paper md:px-10 md:py-40">
      <div className="mx-auto w-full max-w-[1480px]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <span className="eyebrow text-paper/60">— In focus</span>
            </Reveal>
            <RevealHeading
              as="h2"
              delay={0.05}
              className="display-lg mt-4 text-paper"
              text={FEATURED.name.split(" ").slice(0, 2).join(" ")}
            />
            <h2 className="display-lg text-paper">
              <span className="overflow-hidden inline-block align-bottom" style={{ paddingBottom: "0.08em" }}>
                <motion.span
                  className="inline-block font-serif-italic"
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  smart display.
                </motion.span>
              </span>
            </h2>

            <Reveal delay={0.6}>
              <p className="mt-8 max-w-[40ch] text-[17px] leading-[1.55] text-paper/70">
                A 32-inch portable studio with on-board Android, all-day battery
                and concert-grade stereo. Lift it, mount it, take it.
              </p>
            </Reveal>

            <Reveal delay={0.8}>
              <ul className="mt-10 space-y-3 border-t border-paper/10 pt-6">
                {FEATURED.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-baseline justify-between gap-4 border-b border-paper/10 pb-3 text-[14px] text-paper/85"
                  >
                    <span className="font-serif-italic text-paper/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={1}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 rounded-full bg-paper px-7 py-4 text-[13px] font-medium text-ink transition-colors hover:bg-accent hover:text-paper"
                >
                  Configure — {FEATURED.price}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <span className="text-[12px] uppercase tracking-[0.16em] text-paper/50">
                  {FEATURED.tag}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Product visual */}
          <div ref={ref} className="col-span-12 mt-12 md:col-span-7 md:mt-0">
            <motion.div style={{ y: imgY }} className="relative aspect-[4/5] w-full">
              <ProductVisual />
            </motion.div>
          </div>
        </div>

        {/* Smaller cards strip */}
        <div className="mt-32 border-t border-paper/10 pt-12">
          <div className="mb-10 flex items-end justify-between">
            <Reveal>
              <h3 className="display-md text-paper">More to discover.</h3>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href="#"
                className="hidden items-center gap-2 text-[13px] text-paper/70 transition-colors hover:text-paper md:inline-flex"
              >
                See all 80+ products <span>→</span>
              </a>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <a
                  href="#"
                  className="group block rounded-2xl border border-paper/10 bg-paper/[0.02] p-5 transition-colors hover:border-paper/30"
                >
                  <div className="mb-6 aspect-square overflow-hidden rounded-xl bg-paper/5">
                    <MiniVisual id={p.id} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-paper/40">
                      {p.tag}
                    </span>
                    <span className="text-[13px] text-paper/85">{p.price}</span>
                  </div>
                  <h4 className="mt-2 text-[18px] font-medium tracking-tight text-paper">
                    {p.name}
                  </h4>
                  <p className="text-[12px] text-paper/50">{p.category}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductVisual() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,85,44,0.18)_0%,transparent_60%),radial-gradient(ellipse_at_80%_80%,rgba(255,255,255,0.06)_0%,transparent_60%)]" />
      <div className="absolute inset-6 overflow-hidden rounded-[20px] border border-paper/10 bg-[linear-gradient(160deg,#141414_0%,#1d1d1d_50%,#0a0a0a_100%)]">
        {/* Big number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-serif-italic text-paper/8 select-none"
            style={{ fontSize: "clamp(220px, 38vw, 520px)", lineHeight: 1 }}
          >
            32
          </span>
        </div>

        {/* Floating panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute left-1/2 top-1/2 aspect-[4/3] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-ink p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-xl bg-[linear-gradient(135deg,#0d0d0d,#1a1a1a)]">
            <div className="absolute inset-0 p-6 text-paper">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-paper/40">
                <span>Vista 32</span>
                <span>4K · Touch · Battery</span>
              </div>
              <div className="mt-12 max-w-[80%]">
                <div className="font-serif-italic text-4xl text-paper">untethered.</div>
                <div className="mt-1 text-3xl font-medium tracking-tight text-paper">
                  uncompromised.
                </div>
              </div>
              <div className="absolute inset-x-6 bottom-6 flex items-center justify-between">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1 w-8 rounded-full bg-paper/20"
                      style={i === 0 ? { background: "#e8552c" } : undefined}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-paper/40">01 / 03</span>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_55%,rgba(255,255,255,0.06)_60%,transparent_72%)]" />
          </div>
        </motion.div>

        {/* Spec callouts */}
        <Callout className="left-6 top-10" label="Refresh" value="120 Hz" />
        <Callout className="right-6 top-1/3" label="Audio" value="2.1 ch" />
        <Callout className="left-10 bottom-10" label="Weight" value="3.2 kg" />
      </div>
    </div>
  );
}

function Callout({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className={`absolute flex items-center gap-3 rounded-full border border-paper/15 bg-paper/[0.04] px-4 py-2 backdrop-blur-md ${className}`}
    >
      <span className="text-[9px] uppercase tracking-[0.2em] text-paper/50">{label}</span>
      <span className="font-serif-italic text-base text-paper">{value}</span>
    </motion.div>
  );
}

function MiniVisual({ id }: { id: string }) {
  // Each mini gets a tiny abstract motif
  const motif: Record<string, React.ReactElement> = {
    "vista-32": (
      <div className="grid h-full w-full place-items-center">
        <div className="aspect-[5/4] w-3/4 rounded-md border border-paper/20 bg-[linear-gradient(135deg,#1a1a1a,#0a0a0a)]" />
      </div>
    ),
    "pulse-140": (
      <div className="grid h-full w-full place-items-center">
        <div className="relative aspect-square w-1/2 rounded-2xl bg-[linear-gradient(135deg,#1a1a1a,#0a0a0a)] shadow-inner">
          <div className="absolute left-1/2 top-1/2 h-1.5 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
        </div>
      </div>
    ),
    "atlas-arm": (
      <svg viewBox="0 0 100 100" className="h-full w-full text-paper/70">
        <rect x="20" y="20" width="60" height="38" rx="3" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <path d="M50 58 Q70 70 80 80 M80 80 H70 M80 80 V70" stroke="currentColor" strokeWidth="0.8" fill="none" />
      </svg>
    ),
    "core-1000": (
      <svg viewBox="0 0 100 100" className="h-full w-full text-paper/70">
        <rect x="18" y="32" width="64" height="36" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <circle cx="40" cy="50" r="10" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <path d="M40 40 V60 M30 50 H50 M33 43 L47 57 M47 43 L33 57" stroke="currentColor" strokeWidth="0.6" />
      </svg>
    ),
  };
  return motif[id] ?? null;
}
