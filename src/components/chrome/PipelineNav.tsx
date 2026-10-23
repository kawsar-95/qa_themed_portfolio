"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { PIPELINE_STAGES } from "@/lib/data";
import { useLenis } from "@/components/chrome/SmoothScroll";
import { useTheme } from "@/components/ThemeProvider";

/**
 * Top bar + scroll progress. Stages light up as the visitor scrolls.
 */
export default function PipelineNav() {
  const lenis = useLenis();
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState<string>("spec");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    PIPELINE_STAGES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  const activeIndex = PIPELINE_STAGES.findIndex((s) => s.id === active);
  const activeStage = PIPELINE_STAGES[activeIndex];

  return (
    <>
      {/* Floating pill nav */}
      <header className="fixed inset-x-0 top-3 z-[100] flex justify-center px-3">
        <div className="flex max-w-full items-center gap-1 rounded-full border border-faint bg-carbon/85 px-2 py-1.5 backdrop-blur">
          <button onClick={() => goTo("spec")} aria-label="Back to top" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icon.svg" alt="" width={28} height={28} className="h-7 w-7 rounded-full object-cover" />
          </button>

          <nav className="hidden items-center gap-0.5 pl-2 text-xs xl:flex">
            {PIPELINE_STAGES.slice(1).map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(s.id)}
                className={`whitespace-nowrap rounded-full px-2.5 py-1 transition-colors ${
                  active === s.id ? "bg-amber text-void" : "text-dust hover:text-bone"
                }`}
              >
                <span className="opacity-60">{String(i + 1).padStart(2, "0")}</span> {s.label}
              </button>
            ))}
          </nav>

          <span className="px-3 text-xs text-amber xl:hidden">{activeStage?.label}</span>

          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="ml-1 shrink-0 rounded-full p-1.5 text-dust transition-colors hover:text-amber"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </header>

      {/* Bottom progress (mobile) */}
      <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-faint bg-void lg:hidden">
        <div className="flex items-center justify-between px-5 py-2 text-xs">
          <span className="text-amber">{activeStage?.label}</span>
          <span className="text-dust">
            {String(Math.round(progress * 100)).padStart(3, "0")}%
          </span>
        </div>
        <div className="h-px w-full bg-faint">
          <div className="h-px bg-amber" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>

      {/* Desktop scroll progress: hairline on right edge */}
      <div className="fixed bottom-0 right-0 top-0 z-[100] hidden w-px bg-faint lg:block">
        <div className="w-px bg-amber" style={{ height: `${progress * 100}%` }} />
      </div>
    </>
  );
}
