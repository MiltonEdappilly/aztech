"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="career"
      className="relative isolate overflow-hidden bg-ink px-6 py-32 text-paper md:px-10 md:py-40"
    >
      {/* Background mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <span
          className="font-serif-italic text-paper/[0.04] select-none"
          style={{ fontSize: "clamp(280px, 45vw, 720px)", lineHeight: 1 }}
        >
          aztech
        </span>
      </div>

      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7">
          <Reveal>
            <span className="eyebrow text-paper/60">— Stay close</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg mt-4 text-paper">
              Quiet news.{" "}
              <span className="font-serif-italic">Worth opening.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[48ch] text-[16px] leading-[1.55] text-paper/70">
              One letter a month. New launches, the studio's work-in-progress,
              and the occasional behind-the-scenes essay. No coupons. No churn.
            </p>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-5">
          <Reveal delay={0.2}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
              className="group relative mt-8 flex w-full items-center border-b border-paper/30 pb-3 transition-colors focus-within:border-paper md:mt-24"
            >
              <input
                type="email"
                required
                placeholder="you@somewhere.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-[18px] text-paper placeholder:text-paper/30 focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="ml-4 inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2 text-[12px] font-medium text-ink transition-colors hover:bg-accent hover:text-paper"
              >
                Subscribe →
              </button>
            </form>
            <p className="mt-3 text-[12px] text-paper/40">
              {submitted
                ? "Thanks — we'll be in touch."
                : "We'll never share your address. Unsubscribe in one click."}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
