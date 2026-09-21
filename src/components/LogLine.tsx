"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * LogLine — the act epigraph. Types itself when scrolled into view,
 * then leaves a blinking block cursor. Honors prefers-reduced-motion.
 */
export default function LogLine({
  text,
  className = "",
  speed = 22,
  startDelay = 400,
}: {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    if (!inView) return;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const raf = requestAnimationFrame(() => setCount(text.length));
    return () => cancelAnimationFrame(raf);
  }, [inView, text]);

  useEffect(() => {
    if (!inView || done) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timeout = setTimeout(
      () => setCount((c) => c + 1),
      count === 0 ? startDelay : speed
    );
    return () => clearTimeout(timeout);
  }, [inView, count, done, text, speed, startDelay]);

  return (
    <p ref={ref} className={`text-sm leading-relaxed text-dust md:text-base ${className}`}>
      {text.slice(0, count)}
      <span
        aria-hidden
        className={`ml-0.5 inline-block h-[0.95em] w-[0.5em] translate-y-[0.12em] align-baseline ${
          !inView ? "opacity-0" : done ? "animate-blink bg-amber/80" : "bg-amber/80"
        }`}
      />
    </p>
  );
}
