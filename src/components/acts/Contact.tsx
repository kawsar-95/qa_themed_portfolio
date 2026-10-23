"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { IDENTITY } from "@/lib/data";

const CHANNELS = [
  { label: "email", value: IDENTITY.email, href: `mailto:${IDENTITY.email}` },
  { label: "phone", value: IDENTITY.phone, href: `tel:${IDENTITY.phone.replace(/\s|\*/g, "")}` },
  { label: "github", value: `github.com/${IDENTITY.githubHandle}`, href: IDENTITY.github },
  { label: "linkedin", value: "Nuruddin Kawsar", href: IDENTITY.linkedin },
];

/**
 * ACT VII — SIGNOFF.
 */
export default function Contact() {
  return (
    <section
      id="signoff"
      className="relative flex min-h-[50svh] flex-col"
    >
      <div className="relative flex flex-1 flex-col items-center justify-center px-5 py-16 text-center md:px-12">
        <SectionTitle
          n={6}
          label="Contact"
          title="Let's ship something"
          accent="together."
          log="Open to QA and automation roles. Say hello."
          align="center"
        />

        {/* channels */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-px bg-faint sm:grid-cols-2"
        >
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto") || c.href.startsWith("tel") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-void px-5 py-3 transition-colors hover:bg-steel"
            >
              <span className="text-xs text-dust">{c.label}</span>
              <span className="text-sm text-bone/80">
                {c.value} <span className="text-mute">↗</span>
              </span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* footer */}
      <footer className="border-t border-faint px-5 py-5 md:px-12">
        <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-mute md:flex-row md:text-left">
          <span>© 2026 Nuruddin Kawsar</span>
          <span>All suites passing — tested from Dhaka</span>
          <span>Last updated Oct 2026</span>
        </div>
      </footer>
    </section>
  );
}
