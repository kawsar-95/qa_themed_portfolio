const TONE_STROKE: Record<string, string> = {
  amber: "var(--color-amber)",
  go: "var(--color-go)",
  invert: "var(--color-invert)",
  dust: "var(--color-dust)",
};

/** Inline SVG percentage ring with text inside. */
export default function CoverageRing({
  value,
  size = 48,
  strokeWidth = 2,
  tone = "amber",
  className = "",
}: {
  value: number;
  label?: string;
  size?: number;
  strokeWidth?: number;
  tone?: "amber" | "go" | "invert" | "dust";
  className?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(Math.max(value, 0), 100) / 100);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90 absolute inset-0">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className="fill-none stroke-faint"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          stroke={TONE_STROKE[tone]}
          className="fill-none"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <span className="relative font-mono text-[10px] text-bone">{Math.round(value)}%</span>
    </div>
  );
}
