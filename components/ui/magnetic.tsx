"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

/**
 * Pointer pulls the element a few pixels toward the cursor, then springs back
 * on leave. Used sparingly on the primary CTA — the kind of motion you don't
 * notice consciously but that makes a button feel alive.
 */
export function Magnetic({ children, className, strength = 0.35 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });
  const reduce = useReducedMotion();

  function handleMove(e: MouseEvent<HTMLSpanElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
