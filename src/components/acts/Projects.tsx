"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import Chip from "@/components/Chip";
import { CASE_STUDIES, type Artifact } from "@/lib/data";

function Links({ a }: { a: Artifact }) {
  const links = [
    a.url && { label: "Live", url: a.url },
    ...(a.links ?? []),
    a.repo && { label: "Code", url: a.repo },
  ].filter(Boolean) as { label: string; url: string }[];

  if (links.length === 0)
    return <span className="text-xs text-mute">client engagement — no public link</span>;

  return (
    <div className="flex gap-2">
      {links.map((l) => (
        <a
          key={l.url}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-faint px-3 py-1 text-xs text-bone transition-colors hover:bg-steel"
        >
          {l.label} ↗
        </a>
      ))}
    </div>
  );
}

/**
 * Case studies as numbered rows.
 */
export default function Projects() {
  return (
    <section id="report" className="relative px-5 py-20 md:px-12 md:py-28 lg:px-24">
      <SectionTitle
        n={4}
        label="Projects"
        title="Things I've"
        accent="tested."
        log="Four platforms, four different ways to fail. Here's what I caught before anyone else did."
      />

      <div className="mx-auto max-w-5xl divide-y divide-faint border-y border-faint">
        {CASE_STUDIES.map((a, i) => (
          <motion.article
            key={a.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 py-8 md:grid-cols-[4rem_1fr] md:gap-6"
          >
            <div className="display-xl text-4xl text-faint md:text-5xl">
              {String(i + 1).padStart(2, "0")}
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3
                  className="display-xl text-2xl text-bone md:text-3xl"
                  aria-label="confidential case study"
                >
                  Case file — {a.id.replace("CASE-", "")}
                </h3>
                <span className="text-xs text-amber">{a.kind}</span>
                <span className={`font-mono text-xs ${a.status === "LIVE" ? "text-go" : "text-mute"}`}>
                  {a.status.toLowerCase()}
                </span>
              </div>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-bone/70 md:text-base">
                {a.description}
              </p>

              <ul className="mt-3 space-y-1 text-sm text-amber/90">
                {a.proof.map((p) => (
                  <li key={p.slice(0, 32)} className="flex gap-2">
                    <span>›</span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {a.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
                <Links a={a} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
