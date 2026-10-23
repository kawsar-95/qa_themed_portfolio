"use client";

import { motion } from "framer-motion";
import LogLine from "@/components/LogLine";
import { SECTION_COUNT } from "@/lib/data";

/**
 * Act title card — small eyebrow, display heading, one-line log entry.
 * Subtle scroll reveal on heading; the log line types itself.
 */
export default function SectionTitle({
  n,
  label,
  title,
  accent,
  log,
  align = "left",
}: {
  n: number;
  label: string;
  title: string;
  accent: string;
  log: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mx-auto mb-12 max-w-5xl md:mb-16 ${align === "center" ? "text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`mb-3 flex items-center gap-3 text-xs text-dust ${align === "center" ? "justify-center" : ""}`}
      >
        <span>{String(n).padStart(2, "0")}</span>
        <span className="h-px w-10 bg-faint" />
        <span className="uppercase tracking-[0.1em]">{label}</span>
        <span className={align === "center" ? "" : "ml-auto"}>
          [ {String(n).padStart(2, "0")} / {String(SECTION_COUNT).padStart(2, "0")} ]
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="display-xl text-[clamp(2.25rem,5vw,3.5rem)] text-bone"
      >
        {title} <em className="text-amber">{accent}</em>
      </motion.h2>
      <div className={`mt-3 w-24 border-b border-dashed border-mute ${align === "center" ? "mx-auto" : ""}`} />

      <LogLine
        text={log}
        className={`mt-4 max-w-xl ${align === "center" ? "mx-auto justify-center" : ""}`}
      />
    </div>
  );
}
