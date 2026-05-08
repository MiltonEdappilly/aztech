"use client";

import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/site-data";
import { Reveal } from "@/components/ui/reveal";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-paper px-6 py-20 md:px-10">
      <div className="mx-auto grid w-full max-w-[1480px] grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-4">
          <Reveal>
            <Link href="/" className="flex items-center gap-2">
              <Logomark />
              <span className="text-[18px] font-medium tracking-tight text-ink">Aztech</span>
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 max-w-[34ch] text-[14px] leading-[1.55] text-muted">
              Aztech designs interactive displays, GaN charging, mounts and
              gaming gear from its studio in Dubai. Everyday tech, reimagined —
              since 2008.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex items-center gap-3">
              {["Instagram", "LinkedIn", "YouTube", "X"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-full border border-line px-3 py-1 text-[11px] text-muted transition-colors hover:border-ink hover:text-ink"
                >
                  {s}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="col-span-12 grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-4">
          {Object.entries(FOOTER_LINKS).map(([heading, items]) => (
            <Reveal key={heading} delay={0.05}>
              <div>
                <h4 className="eyebrow">{heading}</h4>
                <ul className="mt-5 space-y-3">
                  {items.map((it) => (
                    <li key={it}>
                      <a
                        href="#"
                        className="text-[14px] text-ink/85 transition-colors hover:text-accent"
                      >
                        {it}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 flex w-full max-w-[1480px] flex-col items-start justify-between gap-6 border-t border-line pt-6 text-[12px] text-muted md:flex-row md:items-center">
        <span>© {year} Aztech Innovations FZ-LLC. All rights reserved.</span>
        <span>
          Designed in Dubai · Built for everywhere · v1.0
        </span>
      </div>

      {/* Massive wordmark */}
      <div
        aria-hidden
        className="mx-auto mt-16 max-w-[1480px] select-none overflow-hidden"
      >
        <div
          className="font-medium leading-none tracking-[-0.06em] text-ink/[0.06]"
          style={{ fontSize: "clamp(96px, 19vw, 320px)" }}
        >
          AZTECH
        </div>
      </div>
    </footer>
  );
}

function Logomark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
      <path
        d="M2 18 L11 3 L20 18 M6.5 14 L15.5 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
}
