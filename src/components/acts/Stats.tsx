"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { STATS } from "@/lib/data";

export default function Stats() {
  return (
    <section id="stats" className="relative px-5 py-20 md:px-12 md:py-28 lg:px-24">
      <SectionTitle
        n={5}
        label="By the numbers"
        title="The"
        accent="numbers."
        log="Five years of testing, counted."
      />

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.mono}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            className="artifact p-5"
          >
            <div className="display-xl text-5xl text-amber">{s.value}</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-mute">{s.mono}</div>
            <p className="mt-3 text-xs leading-relaxed text-dust">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
