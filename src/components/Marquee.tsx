import ToolIcon, { slugifyTool } from "@/components/ToolIcon";

const TOOLS = [
  "PLAYWRIGHT", "CYPRESS", "SELENIUM", "POSTMAN", "K6", "JMETER",
  "GITHUB ACTIONS", "JENKINS", "JIRA", "TESTRAIL", "MAESTRO", "GRAPHQL",
  "JAVASCRIPT", "JAVA", "DOCKER", "GIT", "SCRUM", "KANBAN",
];

/** Toolchain strip — the toolset. */
export default function Marquee() {
  return (
    <div className="border-y border-faint px-5 py-4 md:px-12 lg:px-24">
      <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-dust md:gap-x-6">
        {TOOLS.map((tool) => {
          const slug = slugifyTool(tool);
          return (
            <li key={tool} className="flex items-center gap-1.5">
              {slug && <ToolIcon tool={slug} size={12} className="text-dust" />}
              {tool}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
