"use client";

import { useEffect, useState } from "react";
import { IDENTITY } from "@/lib/data";

const ABOUT_JSON = `{
  "name": "Nuruddin Kawsar",
  "role": "SQA Engineer",
  "focus": "Web · API · Automation",
  "status": "open_to_opportunities"
}`;

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

/**
 * Terminal-window masthead.
 */
export default function Hero() {
  const time = useDhakaTime();
  const meta = [
    ["Based in", "Dhaka, Bangladesh"],
    ["Local time", time ? `${time} GMT+6` : "—"],
    ["Status", "Open to opportunities"],
  ];

  return (
    <section
      id="spec"
      className="relative flex min-h-[80svh] flex-col items-center justify-center px-5 py-24"
    >
      <div className="terminal-shell w-full max-w-2xl border border-faint bg-void font-mono text-sm">
        <div className="flex items-center justify-between border-b border-faint px-4 py-2 text-xs text-dust">
          <span>Portfolio / 2026</span>
          <span>~/kawsar — zsh</span>
        </div>

        <div className="space-y-1 px-4 py-5 leading-relaxed text-bone">
          <p>
            <span className="text-go">➜</span> <span className="text-invert">~</span> whoami
          </p>
          <p className="text-amber">nuruddin_kawsar</p>
          <p className="pt-3">
            <span className="text-go">➜</span> <span className="text-invert">~</span> cat about.json
          </p>
          <pre className="whitespace-pre-wrap text-dust">{ABOUT_JSON}</pre>
          <p className="pt-3 text-bone/85">{IDENTITY.subRole}</p>
          <p className="text-dust">I break things before users do.</p>
        </div>

        <dl className="grid grid-cols-1 gap-px border-t border-faint bg-faint sm:grid-cols-3">
          {meta.map(([k, v]) => (
            <div key={k} className="bg-void px-4 py-3">
              <dt className="text-xs text-dust">{k}</dt>
              <dd className="text-bone">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <a
          href={`mailto:${IDENTITY.email}?subject=Let%27s%20talk%20QA`}
          className="inline-flex items-center gap-2 bg-bone px-5 py-2.5 text-sm font-medium text-void transition-opacity duration-200 hover:opacity-90"
        >
          Get in touch
          <span aria-hidden>→</span>
        </a>
        <a
          href="#report"
          className="inline-flex items-center gap-2 border border-faint px-5 py-2.5 text-sm font-medium text-bone transition-colors duration-200 hover:bg-steel"
        >
          View the work
        </a>
      </div>
    </section>
  );
}
