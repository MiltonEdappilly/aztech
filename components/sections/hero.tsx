"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Magnetic } from "@/components/ui/magnetic";
import { RevealHeading, Reveal } from "@/components/ui/reveal";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const deviceY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const deviceScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden pb-20 pt-[112px] md:pt-[140px]"
    >
      {/* Atmospheric background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-1/3 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,85,44,0.10)_0%,transparent_60%)] blur-2xl" />
        <div className="absolute right-[-20%] top-[20%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(13,13,13,0.06)_0%,transparent_60%)] blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-[1480px] grid-cols-12 gap-6 px-6 md:px-10">
        {/* Left: copy */}
        <motion.div
          style={{ y: copyY, opacity: copyOpacity }}
          className="col-span-12 flex flex-col justify-center pt-4 lg:col-span-7"
        >
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="eyebrow">New · Vista 32 portable display</span>
            </div>
          </Reveal>

          <RevealHeading
            as="h1"
            className="display-xl text-ink"
            text="Everyday tech,"
          />
          <h1 className="display-xl -mt-1 text-ink">
            <span className="overflow-hidden align-bottom inline-block" style={{ paddingBottom: "0.08em" }}>
              <motion.span
                className="inline-block font-serif-italic"
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                reimagined.
              </motion.span>
            </span>
          </h1>

          <Reveal delay={0.7}>
            <p className="mt-8 max-w-[44ch] text-balance text-[17px] leading-[1.55] text-muted md:text-[19px]">
              Interactive displays, GaN charging, mounts and gaming gear —
              engineered with restraint, designed for the way people actually
              live with technology.
            </p>
          </Reveal>

          <Reveal delay={0.85}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href="#shop"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-[13px] font-medium tracking-wide text-paper transition-colors hover:bg-accent"
                >
                  Explore the lineup
                  <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </Magnetic>
              <a
                href="#story"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-4 text-[13px] font-medium tracking-wide text-ink transition-all hover:border-ink"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-accent" />
                </span>
                Watch the film
              </a>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <dl className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
              <Stat value="80+" label="Products shipping" />
              <Stat value="42" label="Markets" />
              <Stat value="2.4M" label="Devices in use" />
            </dl>
          </Reveal>
        </motion.div>

        {/* Right: rendered device */}
        <motion.div
          style={{ y: deviceY, scale: deviceScale }}
          className="relative col-span-12 mt-12 flex items-center justify-center lg:col-span-5 lg:mt-0"
        >
          <DeviceRender />
        </motion.div>
      </div>

      {/* Bottom rail */}
      <div className="mx-auto mt-20 flex w-full max-w-[1480px] items-end justify-between px-6 md:px-10">
        <Reveal delay={1.1}>
          <div className="flex items-center gap-2 text-muted animate-nudge">
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden>
              <rect x="0.5" y="0.5" width="13" height="21" rx="6.5" stroke="currentColor" />
              <rect x="6" y="5" width="2" height="5" rx="1" fill="currentColor" />
            </svg>
            <span className="eyebrow">Scroll</span>
          </div>
        </Reveal>
        <Reveal delay={1.2}>
          <p className="hidden max-w-xs text-right text-[12px] leading-relaxed text-muted md:block">
            Est. 2008 — designing connected experiences from concept to silicon
            in-house.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-serif-italic text-3xl text-ink">{value}</dt>
      <dd className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted">{label}</dd>
    </div>
  );
}

/**
 * CSS-rendered abstraction of a portable display + stand. Stands in for hero
 * imagery until we wire up real product photography. Everything is layered
 * divs and gradients so it scales crisply.
 */
function DeviceRender() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-[420px]">
      {/* Halo */}
      <div className="absolute inset-x-[-15%] bottom-0 top-[10%] -z-10 rounded-[60%] bg-[radial-gradient(ellipse_at_center,rgba(13,13,13,0.18)_0%,transparent_70%)] blur-2xl" />

      {/* Display panel */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="absolute left-1/2 top-[6%] aspect-[4/3] w-[88%] -translate-x-1/2 rounded-2xl bg-ink p-2 shadow-[0_30px_80px_-20px_rgba(13,13,13,0.45)]"
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-[linear-gradient(135deg,#111_0%,#1d1d1d_45%,#0a0a0a_100%)]">
          {/* Screen content */}
          <div className="absolute inset-0 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-paper/60">
                  Vista · 4K
                </span>
              </div>
              <span className="text-[8px] text-paper/40">11:42</span>
            </div>

            <div className="mt-6">
              <div className="font-serif-italic text-[clamp(22px,3.4vw,34px)] leading-none text-paper">
                hello,
              </div>
              <div className="mt-1 text-[clamp(22px,3.4vw,34px)] font-medium leading-none tracking-tight text-paper">
                tomorrow.
              </div>
            </div>

            <div className="absolute inset-x-4 bottom-4">
              {/* Animated waveform */}
              <div className="flex h-8 items-end gap-[3px]">
                {Array.from({ length: 28 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="block w-[3px] rounded-full bg-paper/70"
                    initial={{ scaleY: 0.2 }}
                    animate={{
                      scaleY: [0.25, 0.6 + ((i * 7) % 9) / 18, 0.3, 0.85, 0.4],
                    }}
                    transition={{
                      duration: 2.4 + (i % 5) * 0.15,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.04,
                    }}
                    style={{ height: "100%", transformOrigin: "bottom" }}
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-[8px] uppercase tracking-[0.2em] text-paper/50">
                <span>Now playing</span>
                <span>— · 03:14</span>
              </div>
            </div>
          </div>
          {/* Glare */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_55%,rgba(255,255,255,0.07)_60%,transparent_72%)]" />
        </div>
      </motion.div>

      {/* Stand neck */}
      <div className="absolute left-1/2 top-[60%] h-[14%] w-[6px] -translate-x-1/2 rounded-full bg-gradient-to-b from-ink/80 to-ink" />
      {/* Stand base */}
      <div className="absolute bottom-[6%] left-1/2 h-[8px] w-[60%] -translate-x-1/2 rounded-full bg-ink shadow-[0_10px_20px_-10px_rgba(13,13,13,0.6)]" />

      {/* Floating spec chip */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute -left-2 top-[28%] hidden flex-col rounded-2xl border border-line bg-paper-soft px-4 py-3 shadow-sm md:flex"
      >
        <span className="eyebrow">Battery</span>
        <span className="font-serif-italic text-2xl">9h</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute -right-2 top-[55%] hidden flex-col rounded-2xl border border-line bg-paper-soft px-4 py-3 text-right shadow-sm md:flex"
      >
        <span className="eyebrow">Touch</span>
        <span className="font-serif-italic text-2xl">10-pt</span>
      </motion.div>
    </div>
  );
}
