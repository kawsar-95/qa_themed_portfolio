"use client";

import { useEffect, useState } from "react";
import { IDENTITY } from "@/lib/data";
import StatusDot from "@/components/StatusDot";

/** Live Dhaka clock. Empty until mounted so server and client markup match. */
function useDhakaTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    tick();
    const id = setInterval(tick, 10_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const PROMPT = (
  <>
    <span className="text-go">➜</span> <span className="text-invert">~</span>
  </>
);

/**
 * Two-column masthead: terminal window beside the intro.
 */
export default function Hero() {
  const time = useDhakaTime();

  return (
    <section
      id="spec"
      className="relative flex min-h-[85svh] flex-col justify-center px-5 py-28 md:px-12 lg:px-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.1em] text-mute">
          <span className="h-px w-8 bg-faint" />
          Portfolio / 2026
        </div>

        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-12">
          <div className="terminal-shell overflow-hidden rounded-xl border border-faint bg-carbon font-mono text-xs">
            <div className="flex items-center gap-1.5 border-b border-faint px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-faint" />
              <span className="h-2.5 w-2.5 rounded-full bg-faint" />
              <span className="h-2.5 w-2.5 rounded-full bg-faint" />
              <span className="ml-auto text-mute">~/kawsar — zsh</span>
            </div>
            <div className="space-y-1 p-4 leading-relaxed text-bone">
              <p>{PROMPT} whoami</p>
              <p className="text-dust">nuruddin_kawsar</p>
              <p className="pt-2">{PROMPT} cat about.json</p>
              <pre className="whitespace-pre-wrap text-dust">{`{
  "name": "Nuruddin Kawsar",
  "role": "SQA Engineer",
  "focus": "Web · API · Automation",
  "status": "open_to_opportunities"
}`}</pre>
              <p className="pt-2">
                {PROMPT} <span className="inline-block h-3.5 w-1.5 translate-y-0.5 animate-blink bg-amber" />
              </p>
            </div>
          </div>

          <div>
            <p className="flex items-start gap-2 text-sm text-bone/90">
              <StatusDot tone="amber" className="mt-2 shrink-0" />
              <span>
                QA Automation Engineer at <span className="text-amber">Shomvob Technologies Ltd.</span>
              </span>
            </p>
            <p className="mt-2 font-mono text-xs leading-relaxed text-dust">
              Playwright | Cypress | Selenium | Postman | K6 | GitHub Actions | Maestro | Web, API &amp; SaaS Testing
            </p>
            <p className="mt-3 text-sm text-dust">I break things before users do.</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${IDENTITY.email}?subject=Let%27s%20talk%20QA`}
                className="inline-flex items-center gap-2 rounded-md bg-amber px-4 py-2 text-sm font-medium text-void transition-opacity hover:opacity-90"
              >
                Get in touch
              </a>
              <a
                href="#report"
                className="inline-flex items-center gap-2 rounded-md border border-faint px-4 py-2 text-sm font-medium text-bone transition-colors hover:bg-steel"
              >
                View work ↗
              </a>
            </div>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-faint pt-5 text-sm md:grid-cols-4">
          {[
            ["Based in", "Dhaka, Bangladesh"],
            ["Local time", time ? `${time} GMT+6` : "—"],
            ["Status", "Open to opportunities"],
            ["Currently", "QA Automation Engineer @ Shomvob"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-[10px] uppercase tracking-[0.1em] text-mute">{k}</dt>
              <dd className="mt-1 text-bone/90">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
