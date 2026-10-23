"use client";

import SectionTitle from "@/components/SectionTitle";
import EmptyState from "@/components/EmptyState";
import { EDUCATION } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative px-5 py-20 md:px-12 md:py-28 lg:px-24">
      <SectionTitle
        n={3}
        label="Education"
        title="Where I've"
        accent="learned."
        log="The origin commit."
      />

      {EDUCATION.length === 0 ? (
        <EmptyState>Education details coming soon.</EmptyState>
      ) : (
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {EDUCATION.map((e) => (
            <article key={e.degree} className="artifact p-6 md:p-7">
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-mute">{e.period}</div>
              <h3 className="display-xl mt-3 text-2xl text-bone">{e.degree}</h3>
              <div className="mt-1 text-sm text-amber">{e.school}</div>
              <div className="mt-1 text-xs text-mute">{e.place}</div>
              {e.note && <p className="mt-4 text-sm text-dust">{e.note}</p>}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
