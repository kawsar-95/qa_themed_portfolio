/** Placeholder for a section that has no content yet. */
export default function EmptyState({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-5xl rounded-xl border border-dashed border-faint px-6 py-12 text-center text-sm text-mute">
      {children}
    </div>
  );
}
