"use client";

import { motion } from "framer-motion";

/** Interlude — a centered statement between acts. */
export default function Interlude() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex min-h-[30vh] items-center justify-center px-5 py-20 md:px-12"
    >
      <div className="text-center">
        <p className="display-xl text-[clamp(1.75rem,4vw,2.75rem)] leading-tight text-bone">
          Time is <span className="text-dust">relative.</span>{" "}
          <span className="text-amber">Coverage is absolute.</span>
        </p>
      </div>
    </motion.div>
  );
}
