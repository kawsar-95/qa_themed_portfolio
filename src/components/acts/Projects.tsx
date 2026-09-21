"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ToolIcon, { findToolMentions } from "@/components/ToolIcon";
import CoverageRing from "@/components/devsecops/CoverageRing";
import { CASE_STUDIES, type Artifact } from "@/lib/data";

function StatusLabel({ status }: { status: Artifact["status"] }) {
  const cls =
    status === "LIVE"
      ? "text-go"
      : status === "DEPLOYED" || status === "REDEPLOYING"
        ? "text-amber"
        : "text-dust";
  return <span className={`font-mono text-xs ${cls}`}>{status.toLowerCase()}</span>;
}

function ArtifactLinks({ a }: { a: Artifact }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
      {a.url && (
        <a
          href={a.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber hover:underline"
        >
          {a.url.replace("https://", "")} ↗
        </a>
      )}
      {a.links?.map((l) => (
        <a
          key={l.url}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-invert hover:underline"
        >
          {l.label} ↗
        </a>
      ))}
      {a.repo && (
        <a
          href={a.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dust hover:text-bone"
        >
          source ↗
        </a>
      )}
    </div>
  );
}

/** Case-study card */
function BigCard({ a, i, featured = false }: { a: Artifact; i: number; featured?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`artifact flex flex-col p-6 md:p-7 ${featured ? "artifact-live" : ""}`}
    >
      <div className="mb-4 flex items-center justify-between text-xs text-faint">
        <span className="truncate font-mono">
          {a.id.toLowerCase()}
          <span className="text-amber">:{a.version}</span>
        </span>
        <StatusLabel status={a.status} />
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3
            className="display-xl text-2xl text-bone md:text-3xl"
            aria-label="confidential case study"
          >
            Case file — {a.id.replace("CASE-", "")}
          </h3>
          <div className="mt-1 text-sm text-amber">{a.kind}</div>
        </div>
        {a.coveragePct !== undefined && (
          <CoverageRing
            value={a.coveragePct}
            label="coverage"
            size={48}
            strokeWidth={2}
            tone={featured ? "go" : "amber"}
            className="shrink-0"
          />
        )}
      </div>

      {featured && (
        <div className="mt-3 text-xs text-go">
          Still live in production.
        </div>
      )}

      <p className="mt-4 flex-1 text-sm leading-relaxed text-bone/70">
        {a.description}
      </p>

      <ul className="mt-4 space-y-1 text-sm text-dust">
        {a.proof.map((p) => (
          <li key={p.slice(0, 32)}>
            <span className="mr-2 text-go">✓</span>
            {p}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {a.stack.map((s) => {
          const [slug] = findToolMentions(s);
          return (
            <span
              key={s}
              className="flex items-center gap-1.5 bg-steel px-2 py-0.5 font-mono text-xs text-dust"
            >
              {slug && <ToolIcon tool={slug} size={11} />}
              {s}
            </span>
          );
        })}
      </div>

      <div className="mt-5 border-t border-faint pt-3">
        {a.url || a.repo || a.links?.length ? (
          <ArtifactLinks a={a} />
        ) : (
          <span className="text-xs text-faint">
            client engagement — no public link
          </span>
        )}
      </div>
    </motion.article>
  );
}

/**
 * ACT V — REPORT.
 */
export default function Projects() {
  const live = CASE_STUDIES.filter((a) => a.status === "LIVE");
  const other = CASE_STUDIES.filter((a) => a.status !== "LIVE");

  return (
    <section id="report" className="relative px-5 py-20 md:px-12 md:py-28 lg:px-24">
      <SectionTitle
        act="ACT V"
        title="REPORT"
        log="Four platforms, four different ways to fail. Here's what I caught before anyone else did."
      />

      <div className="mb-6 flex items-center gap-4 text-sm">
        <span className="font-mono text-bone">Case studies</span>
        <span className="h-px flex-1 bg-faint" />
        <span className="text-dust">{CASE_STUDIES.length} platforms tested end to end</span>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {live.map((a, i) => (
          <BigCard key={a.id} a={a} i={i} featured />
        ))}
        {other.map((a, i) => (
          <BigCard key={a.id} a={a} i={i} />
        ))}
      </div>
    </section>
  );
}
