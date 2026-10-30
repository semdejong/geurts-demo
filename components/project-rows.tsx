import Link from "next/link";
import { Photo } from "@/components/photo";
import { Profile, type ProfileId } from "@/components/profiles";
import { coverPhoto, materialFromTitle } from "@/lib/projects";
import type { Project } from "@/lib/types";

const typeMark: Record<string, ProfileId> = {
  "Trappen, balustrades & hekwerk": "hoek",
  "RVS-maatwerk": "koker",
  "Installaties & kasten": "u",
  "Constructie & montage": "buis",
  Inrichting: "strip",
};

export function ProjectRows({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return <p>Geen projecten in deze groep.</p>;
  }

  return (
    <ol className="border-t-[3px] border-navy">
      {projects.map((project) => {
        const photo = coverPhoto(project);
        const material = materialFromTitle(project.title);
        return (
          <li key={project.slug} className="group border-b-2 border-navy">
            <Link
              href={`/projecten/${project.slug}`}
              className="relative grid gap-1 py-4 md:min-h-[5.5rem] md:grid-cols-[2.5rem_minmax(0,1fr)_14rem_6.5rem] md:items-center md:gap-4 md:py-0 md:pr-40"
            >
              <span className="flex h-8 w-10 items-center overflow-hidden text-navy" aria-hidden>
                <Profile
                  id={typeMark[project.type] ?? "koker"}
                  className={typeMark[project.type] === "strip" ? "h-auto w-10" : "h-8 w-auto"}
                />
              </span>
              <span className="min-w-0 font-display text-[1.65rem] leading-none text-navy">{project.title}</span>
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
