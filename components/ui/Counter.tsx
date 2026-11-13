"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type Props = { to: number; decimals?: number; suffix?: string };

export function Counter({ to, decimals = 0, suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const format = (v: number) => `${v.toFixed(decimals)}${suffix}`;

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return;
    if (reduce) {
      node.textContent = format(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (node.textContent = format(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, to]);

  return (
    <>
      <span ref={ref} aria-hidden className="tabular-nums">
        {format(0)}
      </span>
      <span className="sr-only">{format(to)}</span>
    </>
  );
}
