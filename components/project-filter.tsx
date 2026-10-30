"use client";

import { useState } from "react";
import { ProjectRows } from "@/components/project-rows";
import { projectTypes } from "@/lib/projects";
import type { Project } from "@/lib/types";

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [type, setType] = useState<string>("Alles");
  const shown = type === "Alles" ? projects : projects.filter((project) => project.type === type);
  const options = ["Alles", ...projectTypes];

  return (
    <div data-section="projectfilter">
      <div className="flex flex-col gap-2 md:flex-row md:flex-wrap" role="group" aria-label="Filter op type">
        {options.map((option) => {
          const selected = option === type;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => setType(option)}
              className={`min-h-11 border-2 border-navy px-3 text-left font-mono text-[0.82rem] uppercase tracking-wide ${
                selected ? "bg-navy text-white" : "bg-paper text-navy"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      <div className="mt-8">
        <ProjectRows projects={shown} />
      </div>
    </div>
  );
}
