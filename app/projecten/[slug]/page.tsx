import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { Gallery } from "@/components/gallery";
import { Container } from "@/components/page-hero";
import { CatalogueLabel } from "@/components/profiles";
import { ProjectRows } from "@/components/project-rows";
import { captions, galleryPhotos, getProject, projects, relatedProjects, serviceLinks } from "@/lib/projects";

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
  const related = relatedProjects(project);

  return (
    <>
      <header data-section="pagina" className="border-b-[3px] border-navy">
        <Container className="py-12 md:py-16">
          <CatalogueLabel code={project.type} />
          <p className="mt-4 font-mono text-sm">
            <Link href="/projecten" className="underline decoration-2 underline-offset-4">
              Projecten
            </Link>
          </p>
          <h1 className="mt-3 max-w-[16ch]">{project.title}</h1>
          {sentence ? <p className="mt-5 max-w-[68ch]">{sentence}</p> : null}
        </Container>
      </header>
      <section data-section="fotos">
        <Container className="py-10">
          <Gallery photos={photos} />
          {project.details ? (
            <dl className="facts mt-8 max-w-3xl">
              {Object.entries(project.details).map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="btn btn-line">
                {service.label}
              </Link>
            ))}
            <Link href="/offerte" data-cta="offerte" className="btn btn-navy">
              Prijs aanvragen
            </Link>
          </div>
        </Container>
      </section>
      <section data-section="gerelateerd" className="border-t-[3px] border-navy">
        <Container className="py-12">
          <h2>Ander werk</h2>
          <div className="mt-6">
            <ProjectRows projects={related} />
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
