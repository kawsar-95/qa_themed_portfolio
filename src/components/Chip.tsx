import ToolIcon, { slugifyTool } from "@/components/ToolIcon";

/** Small rounded tag, with a tool icon when the name is a known tool. */
export default function Chip({ children }: { children: string }) {
  const slug = slugifyTool(children);
  return (
    <span className="inline-flex items-center gap-1.5 rounded border border-faint bg-steel px-2 py-0.5 font-mono text-xs text-dust">
      {slug && <ToolIcon tool={slug} size={11} />}
      {children}
    </span>
  );
}
