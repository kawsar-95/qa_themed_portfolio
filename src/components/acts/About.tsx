"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const EASE = [0.22, 1, 0.36, 1] as const;

/** A centered statement. */
function Principle({
  label,
  lines,
}: {
  label: string;
  lines: { text: string; className: string }[];
}) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mx-auto mt-20 max-w-3xl text-center md:mt-24"
    >
      <div className="mb-3 text-xs uppercase tracking-[0.1em] text-dust">{label}</div>
      {lines.map((l) => (
        <p
          key={l.text}
          className={`display-xl text-[clamp(1.5rem,3.5vw,2.5rem)] leading-tight ${l.className}`}
        >
          {l.text}
        </p>
      ))}
    </motion.blockquote>
  );
}

/**
 * ACT II — PLAN.
 */
export default function About() {
  return (
    <section id="plan" className="relative px-5 py-20 md:px-12 md:py-28 lg:px-24">
      <SectionTitle
        act="ACT II"
        title="PLAN"
        log="Every release has a test plan. This is the one that started mine."
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="max-w-3xl space-y-6 text-lg font-light leading-relaxed text-bone/85 md:text-xl"
      >
        <p>
          I exist in the space between <span className="font-mono text-amber">shipped</span> and{" "}
          <span className="font-mono text-amber">safe</span> — the layer where
          product decisions become trust, or don&apos;t. Five years of
          testing the systems people hand their money, their data, and
          their week to, mostly before anyone else has to find out what
          they were really shipping.
        </p>
        <p>
          What I&apos;m known for isn&apos;t finding bugs. It&apos;s building
          the gate that stops them from coming back — the UAT process,
          the pipelines, the automation that turns one engineer&apos;s
          vigilance into something the next release inherits for free.
          A team I built, a release cadence I shaped, and a quality
          bar the product has to clear before I let it out the door.
        </p>
      </motion.div>

      <Principle
        label="Principle 01"
        lines={[
          { text: "Quality is not a feature.", className: "text-dust" },
          { text: "It is the standard.", className: "text-amber" },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="mx-auto mt-20 max-w-3xl text-center md:mt-24"
      >
        <p className="text-base font-light leading-relaxed text-bone/80 md:text-lg">
          When something breaks — and it always does — I don&apos;t just log
          it and move on. Every bug gets documented in enough detail that
          a developer can fix it without a follow-up question, and every
          pattern gets folded back into the process: a new regression
          check, a new line on the UAT gate, a rule the next release
          inherits for free. Because in QA, the closest thing to{" "}
          <span className="italic text-bone">bending time</span> is
          preventing the future:
        </p>
      </motion.div>

      <Principle
        label="Principle 02"
        lines={[
          { text: "Catch it in staging,", className: "text-bone" },
          { text: "or meet it in production.", className: "text-amber" },
        ]}
      />

      <p className="mx-auto mt-8 max-w-2xl text-center text-base font-light leading-relaxed text-bone/80 md:text-lg">
        The whole craft bends toward that one outcome. Every regression
        suite, every UAT gate, every line of automation I&apos;ve ever
        written is just an attempt to move the moment of failure earlier
        — out of the customer&apos;s hands and into mine, where the cost
        is a Jira ticket and not a Friday-night war room. Staging is
        where I do my best work. Production is where I do the kind of
        work I&apos;d rather not.
      </p>
    </section>
  );
}
