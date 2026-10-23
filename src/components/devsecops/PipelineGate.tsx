import { CircleCheck, CircleX, CircleDashed, TriangleAlert } from "lucide-react";
import type { GateStep } from "@/lib/data";

const STATUS_ICON: Record<GateStep["status"], React.ReactNode> = {
  pass: <CircleCheck size={15} className="text-go" />,
  fail: <CircleX size={15} className="text-danger" />,
  running: <CircleCheck size={15} className="text-amber" />,
  pending: <CircleDashed size={15} className="text-mute" />,
  warn: <TriangleAlert size={15} className="text-amber" />,
};

const STATUS_TEXT: Record<GateStep["status"], string> = {
  pass: "text-go",
  fail: "text-danger",
  running: "text-amber",
  pending: "text-mute",
  warn: "text-amber",
};

/**
 * CI-style sequential check run. Horizontal row, scrolls on narrow viewports.
 */
export default function PipelineGate({
  title,
  steps,
  className = "",
}: {
  title: string;
  steps: GateStep[];
  className?: string;
}) {
  return (
    <div className={`artifact overflow-hidden ${className}`}>
      <div className="flex items-center justify-between border-b border-faint px-5 py-3 font-mono text-xs">
        <span className="text-dust">{title}</span>
        <span className="text-mute">{steps.length} checks</span>
      </div>

      <div className="overflow-x-auto p-5 md:p-8">
        <div className="flex min-w-max items-start gap-0">
          {steps.map((step, i) => {
            const last = i === steps.length - 1;
            const nextDone = !last && steps[i + 1].status === "pass";
            return (
              <div key={step.id} className="flex items-start">
                <div className="flex w-[88px] flex-col items-center gap-2 text-center">
                  {STATUS_ICON[step.status]}
                  <div>
                    <div className={`font-mono text-xs ${STATUS_TEXT[step.status]}`}>
                      {step.label}
                    </div>
                    {step.detail && (
                      <div className="mt-0.5 font-mono text-[10px] leading-tight text-mute">
                        {step.detail}
                      </div>
                    )}
                  </div>
                </div>
                {!last && (
                  <div
                    className={`gate-connector mt-[7px] w-4 shrink-0 md:w-6 ${nextDone ? "done" : ""}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
