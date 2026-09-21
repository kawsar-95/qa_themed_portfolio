const TONE_BG: Record<string, string> = {
  go: "bg-go",
  amber: "bg-amber",
  danger: "bg-danger",
  invert: "bg-invert",
  dust: "bg-dust",
};

export type StatusTone = "go" | "amber" | "danger" | "invert" | "dust";

/** Status dot — `pulse` opts into a soft breathing animation. */
export default function StatusDot({
  tone,
  pulse = false,
  className = "",
}: {
  tone: StatusTone;
  pulse?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-block h-1.5 w-1.5 rounded-full ${TONE_BG[tone]} ${
        pulse ? "animate-pulse-soft" : ""
      } ${className}`}
    />
  );
}
