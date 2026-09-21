"use client";

import { motion } from "framer-motion";
import LogLine from "@/components/LogLine";

/**
 * Act title card — small eyebrow, display heading, one-line log entry.
 * Subtle scroll reveal on heading; the log line types itself.
 */
export default function SectionTitle({
  act,
  title,
  log,
  align = "left",
}: {
  act: string;
  title: string;
  log: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`mb-3 flex items-center gap-3 text-xs text-dust ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span>{act}</span>
        <span className="h-px w-10 bg-faint" />
        <span>{title}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="display-xl text-[clamp(2.25rem,5vw,3.5rem)] text-bone"
      >
        {title}
      </motion.h2>

      <LogLine
        text={log}
        className={`mt-4 max-w-xl ${align === "center" ? "mx-auto justify-center" : ""}`}
      />
    </div>
  );
}
