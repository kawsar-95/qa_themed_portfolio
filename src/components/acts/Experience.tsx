"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import Chip from "@/components/Chip";
import { MISSIONS } from "@/lib/data";

/**
 * Work history as cards.
 */
export default function Experience() {
  return (
    <section id="run" className="relative px-5 py-20 md:px-12 md:py-28 lg:px-24">
      <SectionTitle
        n={2}
        label="Work"
        title="Where I've"
        accent="shipped."
        log="Before a release reaches production, it survives staging. So did every role that got me here."
      />

      <div className="mx-auto max-w-5xl space-y-5">
        {MISSIONS.map((m, i) => (
          <motion.article
            key={m.role + m.org}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
            className="artifact p-6 md:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="display-xl text-2xl text-bone md:text-3xl">{m.role}</h3>
                <div className="mt-1 text-sm">
                  <span className="text-amber">{m.org}</span>
                </div>
                <div className="mt-1 font-mono text-xs text-mute">{m.period}</div>
              </div>
              {m.envTone === "prod" && (
                <span className="rounded-full border border-go/40 px-2.5 py-0.5 font-mono text-xs text-go">
                  current
                </span>
              )}
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-bone/75 md:text-base">
              {m.brief}
            </p>

            {m.log.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm text-dust">
                {m.log.map((entry) => (
                  <li key={entry.slice(0, 40)} className="flex gap-2">
                    <span className="text-amber">›</span>
                    {entry}
                  </li>
                ))}
              </ul>
            )}

            {m.tools && m.tools.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {m.tools.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
