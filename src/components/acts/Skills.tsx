"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import Chip from "@/components/Chip";
import PipelineGate from "@/components/devsecops/PipelineGate";
import { SKILL_LAYERS, PIPELINE_GATE_STEPS } from "@/lib/data";

/**
 * Skills as category cards.
 */
export default function Skills() {
  return (
    <section id="case" className="relative px-5 py-20 md:px-12 md:py-28 lg:px-24">
      <SectionTitle
        n={6}
        label="Skills"
        title="The"
        accent="toolkit."
        log="A suite is built in layers. So is a QA engineer. Here is my toolkit."
      />

      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_LAYERS.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className="artifact p-5"
            >
              <h3 className="text-[10px] font-medium uppercase tracking-[0.12em] text-mute">
                {layer.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {layer.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16"
        >
          <PipelineGate title="~/kawsar/ci — release gate" steps={PIPELINE_GATE_STEPS} />
        </motion.div>
      </div>
    </section>
  );
}
