import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/page-hero";
import { Profile, type ProfileId } from "@/components/profiles";
import { ProjectFilter } from "@/components/project-filter";
import { projectTypes, projects, typeNotes } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projecten",
  description: "Projecten van Maikel Geurts Metaalbewerking: hekwerk, RVS-maatwerk, installaties, constructies en inrichting.",
};

const marks: Record<(typeof projectTypes)[number], ProfileId> = {
  "Trappen, balustrades & hekwerk": "hoek",
  "RVS-maatwerk": "koker",
  "Installaties & kasten": "u",
  "Constructie & montage": "buis",
  Inrichting: "strip",
};

export default function ProjectenPage() {
  return (
    <>
      <PageHero
        profile="hoek"
        code="HOEK 40×40×4 · PROJECTEN"
        title="Projecten"
        lede="Van een tribune tot een tuintafel. Hekwerk, RVS, installaties, constructie en inrichting, uit één atelier."
      />
      <section data-section="soorten" className="border-b-[3px] border-navy">
        <Container className="py-8">
          <ul className="border-t-[3px] border-navy">
            {projectTypes.map((type) => (
              <li key={type} className="grid gap-3 border-b-2 border-navy py-5 md:grid-cols-[3.5rem_minmax(0,1fr)] md:items-start md:gap-6">
                <Profile
                  id={marks[type]}
                  className={marks[type] === "strip" ? "mt-2 h-auto w-12 text-navy" : "h-10 w-auto text-navy"}
                />
                <div>
                  <h2 className="text-[1.75rem]">{type}</h2>
                  <p className="mt-2 max-w-[68ch]">{typeNotes[type]}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section data-section="overzicht">
        <Container className="py-12">
          <h2>Alle projecten</h2>
          <p className="mt-4 max-w-[68ch]">Kies een soort, of bekijk de hele lijst. Elk project opent met foto&apos;s uit de werkplaats of van de plek.</p>
          <div className="mt-6">
            <ProjectFilter projects={projects} />
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
