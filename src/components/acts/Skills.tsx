"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ToolIcon, { slugifyTool } from "@/components/ToolIcon";
import PipelineGate from "@/components/devsecops/PipelineGate";
import { SKILL_LAYERS, PIPELINE_GATE_STEPS } from "@/lib/data";

/**
 * ACT III — CASE. Skills as layers of a test manifest.
 */
export default function Skills() {
  let lineNo = 0;

  return (
    <section id="case" className="relative px-5 py-20 md:px-12 md:py-28 lg:px-24">
      <SectionTitle
        n={4}
        label="Skills"
        title="The"
        accent="toolkit."
        log="A suite is built in layers. So is a QA engineer. Here is my test manifest."
      />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="artifact overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-faint px-5 py-3 text-xs text-dust">
            <span className="font-mono">~/kawsar/test-manifest.yml</span>
            <span className="text-mute">8 suites</span>
          </div>

          <div className="p-5 md:p-9">
            {SKILL_LAYERS.map((layer, i) => {
              const current = ++lineNo;
              return (
                <motion.div
                  key={layer.directive}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.04 }}
                  className="border-l border-faint py-5 pl-5 first:pt-0 last:pb-0 md:pl-8"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-sm md:text-base">
                    <span className="w-6 select-none text-right text-xs text-mute">
                      {current}
                    </span>
                    <span className="text-amber">{layer.directive.split(" ")[0]}</span>
                    <span className="text-bone">
                      {layer.directive.split(" ").slice(1).join(" ")}
                    </span>
                    <span className="text-xs italic text-mute">
                      # {layer.comment}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 pl-6 md:pl-9">
                    {layer.items.map((item) => {
                      const slug = slugifyTool(item);
                      return (
                        <span
                          key={item}
                          className="flex items-center gap-1.5 border border-faint px-2 py-0.5 font-mono text-xs text-dust"
                        >
                          {slug && <ToolIcon tool={slug} size={11} />}
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 border-t border-faint pt-6 font-mono text-xs leading-loose md:text-sm"
            >
              <div className="text-dust">[8/8] running final_checks --zero-defects</div>
              <div className="text-go">
                ✓ all suites green — <span className="text-bone">kawsar/sqa-engineer:latest</span>
              </div>
              <div className="text-go">
                ✓ coverage report published —{" "}
                <span className="text-bone">kawsar/sqa-engineer:signed-off</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8"
        >
          <PipelineGate title="~/kawsar/ci — release gate" steps={PIPELINE_GATE_STEPS} />
        </motion.div>
      </div>
    </section>
  );
}
