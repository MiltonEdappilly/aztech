"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site-data";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const padY = useTransform(scrollY, [0, 120], [22, 12]);
  const blur = useTransform(scrollY, [0, 120], [0, 14]);
  const bg = useTransform(
    scrollY,
    [0, 120],
    ["rgba(245,244,238,0)", "rgba(245,244,238,0.78)"],
  );
  const border = useTransform(
    scrollY,
    [0, 120],
    ["rgba(13,13,13,0)", "rgba(13,13,13,0.08)"],
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      style={{
        paddingTop: padY,
        paddingBottom: padY,
        backdropFilter: blur.get() ? `saturate(140%) blur(${blur.get()}px)` : undefined,
        WebkitBackdropFilter: blur.get() ? `saturate(140%) blur(${blur.get()}px)` : undefined,
        backgroundColor: bg,
        borderBottom: "1px solid",
        borderBottomColor: border,
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex w-full max-w-[1480px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="group flex items-center gap-2" aria-label="Aztech home">
          <Logomark />
          <span className="text-[15px] font-medium tracking-[-0.01em] text-ink">
            Aztech
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-[13px] font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#shop"
            className="hidden rounded-full border border-ink/15 px-4 py-2 text-[12px] font-medium tracking-wide text-ink transition-all hover:border-ink hover:bg-ink hover:text-paper md:inline-flex"
          >
            Shop now →
          </Link>
          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="relative h-9 w-9 md:hidden"
          >
            <span
              className={`absolute left-1.5 right-1.5 top-3.5 block h-px bg-ink transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-1.5 right-1.5 bottom-3.5 block h-px bg-ink transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden border-t border-line bg-paper md:hidden"
      >
        <div className="flex flex-col gap-1 px-6 py-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-line/70 py-4 text-2xl font-medium tracking-tight text-ink"
            >
              {item.label}
              <span className="text-muted">→</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.header>
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
