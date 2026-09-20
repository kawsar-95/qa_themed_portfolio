"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { IDENTITY } from "@/lib/data";
import { useTheme } from "@/components/ThemeProvider";

const Tesseract = dynamic(() => import("@/components/three/Tesseract"), {
  ssr: false,
});

/**
 * ACT I — SPEC.
 *
 * Dark: the tesseract hangs in the void; the name descends like a title
 * over black, letterbox bars holding the 2.39:1 frame.
 *
 * Light: none of that. The WebGL scene, the vignette and the letterbox
 * are all devices for making text legible over a dark moving image — on
 * white paper there is no image and nothing to fight, so light mode
 * renders a plain centred masthead instead: label, name, one line of
 * what and where, two buttons. The canvas is skipped rather than hidden,
 * so light mode never pays for a Three.js scene it doesn't show.
 *
 * Reveals in both modes are CSS-driven off the `booted` class — zero
 * hydration risk.
 */
export default function Hero({ booted }: { booted: boolean }) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [letterboxed, setLetterboxed] = useState(true);

  useEffect(() => {
    const onScroll = () => setLetterboxed(window.scrollY < window.innerHeight * 0.4);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // bars are a dark-mode device; never let them latch on in light
    document.documentElement.classList.toggle("letterboxed", letterboxed && booted && !isLight);
    return () => document.documentElement.classList.remove("letterboxed");
  }, [letterboxed, booted, isLight]);

  if (isLight) {
    return (
      <section
        id="spec"
        className={`relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden px-5 py-28 ${
          booted ? "booted" : ""
        }`}
      >
        {/* the page's only piece of depth — a faint wash off the top edge */}
        <div className="hero-vignette pointer-events-none absolute inset-0" />

        <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
          <div className="boot-fade" style={{ transitionDelay: "0.25s" }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-faint bg-steel px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-dust md:text-[11px]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-go" />
              {IDENTITY.role} · {IDENTITY.location}
            </span>
          </div>

          <h1 className="display-xl mt-7 text-[clamp(2.75rem,9vw,5.25rem)] text-bone">
            <span className="line-mask">
              <span className="line-inner" style={{ transitionDelay: "0.4s" }}>
                {IDENTITY.name}
              </span>
            </span>
          </h1>

          <p
            className="boot-fade mt-5 max-w-xl text-base leading-relaxed text-dust md:text-lg"
            style={{ transitionDelay: "0.6s" }}
          >
            {IDENTITY.subRole}
          </p>

          <p
            className="boot-fade mt-3 font-mono text-[11px] tracking-[0.14em] text-dust md:text-xs"
            style={{ transitionDelay: "0.72s" }}
          >
            I break things before users do.
          </p>

          <div
            className="boot-fade mt-10 flex flex-col items-center gap-3 sm:flex-row"
            style={{ transitionDelay: "0.85s" }}
          >
            <a
              href={`mailto:${IDENTITY.email}?subject=Let%27s%20talk%20QA`}
              data-cursor="SEND"
              className="inline-flex items-center gap-2 rounded-md bg-bone px-6 py-3 text-sm font-medium text-void transition-opacity duration-200 hover:opacity-90"
            >
              Get in touch
              <span aria-hidden>→</span>
            </a>
            <a
              href="#report"
              data-cursor="OPEN"
              className="inline-flex items-center gap-2 rounded-md border border-faint px-6 py-3 text-sm font-medium text-bone transition-colors duration-200 hover:bg-steel"
            >
              View the work
            </a>
          </div>
        </div>

        <div
          className="boot-fade absolute bottom-10 left-0 right-0 flex justify-center"
          style={{ transitionDelay: "1.1s" }}
        >
          <span className="kicker">SCROLL TO EXECUTE</span>
        </div>
      </section>
    );
  }

  return (
    <section
      id="spec"
      className={`relative flex h-[100svh] min-h-[640px] flex-col overflow-hidden ${booted ? "booted" : ""}`}
    >
      {/* the fourth dimension, rendered */}
      <div className="absolute inset-0 opacity-90">
        <Tesseract theme={theme} />
      </div>
      <div className="hero-vignette pointer-events-none absolute inset-0" />

      {/* frame content */}
      <div
        className="relative z-10 flex h-full flex-col justify-between px-5 pb-24 pt-24 md:px-12 lg:px-24"
        style={{ textShadow: "var(--hero-text-shadow)" }}
      >
        <div className="pointer-events-none select-none">
          <h1 className="display-xl text-[clamp(4rem,14.5vw,13.5rem)]">
            <span className="line-mask">
              <span className="line-inner text-bone" style={{ transitionDelay: "0.4s" }}>
                NURUDDIN
              </span>
            </span>
            <span className="line-mask">
              <span className="line-inner text-amber" style={{ transitionDelay: "0.52s" }}>
                KAWSAR
              </span>
            </span>
          </h1>

          <div
            className="boot-fade mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 md:mt-9"
            style={{ transitionDelay: "0.9s" }}
          >
            <span className="font-mono text-xs font-bold tracking-[0.4em] text-bone md:text-sm">
              {IDENTITY.role}
            </span>
            <span className="hidden h-3 w-px bg-amber md:block" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-dust md:text-xs">
              I BREAK THINGS BEFORE USERS DO
            </span>
          </div>
        </div>

        <div className="boot-fade flex items-end justify-between" style={{ transitionDelay: "1.15s" }}>
          <div className="font-mono text-[9px] leading-relaxed tracking-[0.2em] text-dust md:text-[10px]">
            <div>spec: QA-0001 — status: PASSED</div>
            <div>Author: kawsar · {IDENTITY.email}</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="kicker animate-pulse-soft">SCROLL TO EXECUTE</span>
            <motion.span
              className="block h-10 w-px bg-gradient-to-b from-amber to-transparent"
              animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
