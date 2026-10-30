import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { Gallery } from "@/components/gallery";
import { Container } from "@/components/page-hero";
import { CatalogueLabel } from "@/components/profiles";
import { ProjectRows } from "@/components/project-rows";
import {
  captions,
  galleryPhotos,
  getProject,
  materialFromTitle,
  otherProjects,
  projects,
  sameTypeProjects,
  serviceLinks,
} from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  const sentence = captions[project.slug];
  const werk = project.details?.Werkzaamheden;
  const description = [sentence, werk, `${project.type}. Maikel Geurts Metaalbewerking, Eibergen.`]
    .filter(Boolean)
    .join(" ");
  return { title: project.title, description };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const photos = galleryPhotos(project);
  const sentence = captions[project.slug];
  const services = serviceLinks(project);
  const same = sameTypeProjects(project);
  const others = otherProjects(project);
  const material = materialFromTitle(project.title);

  return (
    <>
      <header data-section="pagina" className="border-b-[3px] border-navy">
        <Container className="grid gap-8 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div>
            <CatalogueLabel code={project.type} />
            <p className="mt-4 font-mono text-sm">
              <Link href="/projecten" className="underline decoration-2 underline-offset-4">
                Projecten
              </Link>
            </p>
            <h1 className="mt-3 max-w-[16ch]">{project.title}</h1>
            {sentence ? <p className="mt-5 max-w-[68ch]">{sentence}</p> : null}
          </div>
          <aside className="border-[3px] border-navy p-4">
            <dl>
              <div className="border-b-2 border-navy py-3">
                <dt className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-navy">Type</dt>
                <dd className="mt-1">{project.type}</dd>
              </div>
              {material ? (
                <div className="border-b-2 border-navy py-3">
                  <dt className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-navy">Materiaal</dt>
                  <dd className="mt-1">{material}</dd>
                </div>
              ) : null}
              {project.details
                ? Object.entries(project.details).map(([label, value]) => (
                    <div key={label} className="border-b-2 border-navy py-3">
                      <dt className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-navy">{label}</dt>
                      <dd className="mt-1">{value}</dd>
                    </div>
                  ))
                : null}
              <div className="py-3">
                <dt className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-navy">Werkplaats</dt>
                <dd className="mt-1">
                  {services.map((service, index) => (
                    <span key={service.href}>
                      {index > 0 ? ", " : null}
                      <Link href={service.href} className="underline decoration-2 underline-offset-4">
                        {service.label}
                      </Link>
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <Link href="/offerte" data-cta="offerte" className="btn btn-navy mt-4 w-full">
              Prijs aanvragen
            </Link>
          </aside>
        </Container>
      </header>
      <section data-section="fotos">
        <Container className="py-10">
          <Gallery photos={photos} />
          <p className="mt-6 max-w-[68ch]">
            Wilt u iets in deze richting? Stuur een foto of een schets, met het materiaal en de maten.
          </p>
        </Container>
      </section>
      {same.length > 0 ? (
        <section data-section="zelfde-type" className="border-t-[3px] border-navy">
          <Container className="py-12">
            <h2>{project.type}</h2>
            <div className="mt-6">
              <ProjectRows projects={same} />
            </div>
          </Container>
        </section>
      ) : null}
      <section data-section="gerelateerd" className="border-t-[3px] border-navy">
        <Container className="py-12">
          <h2>Ook uit deze werkplaats</h2>
          <div className="mt-6">
            <ProjectRows projects={others} />
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
