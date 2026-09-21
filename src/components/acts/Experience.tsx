"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ToolIcon, { slugifyTool } from "@/components/ToolIcon";
import { MISSIONS } from "@/lib/data";

const TONE_TEXT: Record<string, string> = {
  prod: "text-go",
  stage: "text-amber",
  cert: "text-invert",
  dev: "text-dust",
};

/**
 * ACT IV — RUN. A career as a series of test runs.
 */
export default function Experience() {
  return (
    <section id="run" className="relative px-5 py-20 md:px-12 md:py-28 lg:px-24">
      <SectionTitle
        act="ACT IV"
        title="RUN"
        log="Before a release reaches production, it survives staging. So did every role that got me here."
      />

      <div className="relative mx-auto max-w-5xl">
        {/* the rail */}
        <div className="absolute bottom-0 left-[7px] top-2 w-px bg-faint md:left-[9px]" />

        <div className="space-y-16">
          {MISSIONS.map((m, i) => {
            const tone = TONE_TEXT[m.envTone];
            const featured = m.log.length > 0;
            return (
              <motion.article
                key={m.role + m.org}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-8 md:pl-12"
              >
                {/* node */}
                <span
                  className={`absolute left-0 top-2.5 h-2 w-2 border border-void bg-current ${tone}`}
                />

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-faint">
                  <span className={`font-mono ${tone}`}>{m.env}</span>
                  <span>·</span>
                  <span className="font-mono">{m.period}</span>
                </div>

                <h3 className="display-xl mt-3 text-2xl text-bone md:text-3xl">
                  {m.role}
                </h3>
                <div className="mt-1 text-sm text-dust md:text-base">
                  @ {m.org}
                </div>

                <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-bone/75 md:text-base">
                  {m.brief}
                </p>

                {featured && (
                  <ul className="mt-5 space-y-2 border-l border-faint pl-4 text-sm text-dust">
                    {m.log.map((entry) => (
                      <li key={entry.slice(0, 40)}>{entry}</li>
                    ))}
                  </ul>
                )}

                {m.tools && m.tools.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 pl-4">
                    {m.tools.map((t) => {
                      const slug = slugifyTool(t);
                      return (
                        <span
                          key={t}
                          className="flex items-center gap-1.5 border border-faint px-2 py-0.5 font-mono text-xs text-dust"
                        >
                          {slug && <ToolIcon tool={slug} size={11} />}
                          {t}
                        </span>
                      );
                    })}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
