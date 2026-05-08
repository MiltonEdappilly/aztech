"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/reveal";

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section
      id="story"
      ref={ref}
      className="relative overflow-hidden px-6 py-32 md:px-10 md:py-44"
    >
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <Reveal>
            <span className="eyebrow">— Our philosophy</span>
          </Reveal>
          <div className="mt-6 hidden md:block">
            <motion.div
              style={{ scaleY: lineProgress, transformOrigin: "top" }}
              className="h-40 w-px bg-ink"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="text-balance text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.18] tracking-[-0.02em] text-ink">
            <Reveal>
              <span>Most technology shouts. </span>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="text-muted">We've spent fifteen years learning</span>
            </Reveal>
            <Reveal delay={0.2}>
              <span className="text-muted"> the value of restraint —</span>
            </Reveal>
            <Reveal delay={0.3}>
              <span className="font-serif-italic"> products that fade into the room until you reach for them, </span>
            </Reveal>
            <Reveal delay={0.4}>
              <span> then do exactly what you came for.</span>
            </Reveal>
          </h2>

          <Reveal delay={0.5}>
            <div className="mt-16 grid grid-cols-2 gap-10 border-t border-line pt-10 md:grid-cols-4">
              <Pillar
                index="01"
                title="Designed in-house"
                body="Industrial design, electronics and firmware live under one roof in our Dubai studio."
              />
              <Pillar
                index="02"
                title="Tested to death"
                body="Drop, thermal, accelerated lifecycle. We break a hundred so the one you buy doesn't."
              />
              <Pillar
                index="03"
                title="Repairable by design"
                body="Standard fasteners, modular boards, a published parts catalogue. Five-year promise."
              />
              <Pillar
                index="04"
                title="Quietly sustainable"
                body="Recycled aluminium, PCR plastics, plastic-free packaging. Measured, not marketed."
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Pillar({ index, title, body }: { index: string; title: string; body: string }) {
  return (
    <div>
      <span className="font-serif-italic text-2xl text-accent">{index}</span>
      <h4 className="mt-3 text-[16px] font-medium tracking-tight text-ink">{title}</h4>
      <p className="mt-2 text-[13px] leading-[1.55] text-muted">{body}</p>
    </div>
  );
}
