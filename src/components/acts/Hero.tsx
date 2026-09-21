import { IDENTITY } from "@/lib/data";

/**
 * ACT I — SPEC. A clean masthead.
 */
export default function Hero() {
  return (
    <section
      id="spec"
      className="relative flex min-h-[80svh] flex-col items-center justify-center px-5 py-20"
    >
      <div className="flex w-full max-w-2xl flex-col items-center text-center">
        <span className="text-xs text-dust md:text-sm">
          {IDENTITY.role} · {IDENTITY.location}
        </span>

        <h1 className="display-xl mt-6 text-[clamp(2.5rem,8vw,4.5rem)] text-bone">
          {IDENTITY.name}
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-dust md:text-lg">
          {IDENTITY.subRole}
        </p>

        <p className="mt-3 text-sm text-dust md:text-base">
          I break things before users do.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={`mailto:${IDENTITY.email}?subject=Let%27s%20talk%20QA`}
            className="inline-flex items-center gap-2 bg-bone px-5 py-2.5 text-sm font-medium text-void transition-opacity duration-200 hover:opacity-90"
          >
            Get in touch
            <span aria-hidden>→</span>
          </a>
          <a
            href="#report"
            className="inline-flex items-center gap-2 border border-faint px-5 py-2.5 text-sm font-medium text-bone transition-colors duration-200 hover:bg-steel"
          >
            View the work
          </a>
        </div>
      </div>
    </section>
  );
}
