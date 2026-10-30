import Link from "next/link";
import { Photo } from "@/components/photo";
import { coverPhoto, materialFromTitle } from "@/lib/projects";
import type { Project } from "@/lib/types";

export function ProjectRows({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return <p>Geen projecten in deze groep.</p>;
  }

  return (
    <ol className="border-t-[3px] border-navy">
      {projects.map((project, index) => {
        const photo = coverPhoto(project);
        const material = materialFromTitle(project.title);
        return (
          <li key={project.slug} className="group border-b-2 border-navy">
            <Link
              href={`/projecten/${project.slug}`}
              className="relative grid gap-1 py-4 md:min-h-[5.5rem] md:grid-cols-[3.5rem_minmax(0,1fr)_14rem_6.5rem] md:items-center md:gap-4 md:py-0 md:pr-40"
            >
              <span className="font-mono text-sm tabular-nums text-navy">{String(index + 1).padStart(2, "0")}</span>
              <span className="font-display text-[1.65rem] leading-none text-navy">{project.title}</span>
              <span>{project.type}</span>
              <span className="font-mono text-sm uppercase tracking-wide">{material ?? ""}</span>
              <span className="row-photo relative mt-3 block h-24 w-36 overflow-hidden border-[3px] border-navy bg-mist md:absolute md:top-0 md:right-0 md:mt-0 md:h-full md:w-36">
                <Photo src={photo.src} alt={photo.alt} w={photo.w} h={photo.h} fit="cover" sizes="144px" />
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
