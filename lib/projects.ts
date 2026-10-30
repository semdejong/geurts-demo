import projectData from "@/data/projecten.json";
import imageData from "@/data/beelden.json";
import referenceData from "@/data/referenties.json";
import type { Photo, Project } from "@/lib/types";

export const projects = projectData as Project[];
export const references = referenceData as string[];
export const images = imageData as Photo[];

export const projectTypes = [
  "Trappen, balustrades & hekwerk",
  "RVS-maatwerk",
  "Installaties & kasten",
  "Constructie & montage",
  "Inrichting",
] as const;

/** Alleen wat de projecten zelf laten zien. */
export const typeNotes: Record<(typeof projectTypes)[number], string> = {
  "Trappen, balustrades & hekwerk": "Hekken, leuningen, trappen en balustrades. Aan een woning en langs een brug.",
  "RVS-maatwerk": "Maatwerk in roestvast staal: een tuintafel, een rollenhouder, een beslagmolen en werk voor de horeca.",
  "Installaties & kasten": "Filterkasten, een filterinstallatie, een afzuigingsunit en kantelbare mengsilo's.",
  "Constructie & montage": "Tribunes tussen de bomen en een stalen spantconstructie van een rijhal.",
  Inrichting: "Een paardenstal en de inrichting van een vrachtwagen of een bedrijfsbus.",
};

/** Eén neutrale zin: alleen wat op de foto's te zien is. */
export const captions: Record<string, string> = {
  "openluchttheater-eibergen": "Nieuwe tribunes tussen de bomen.",
  "filterinstallatie-vdl": "Een groene filterinstallatie met ventilator in een fabriekshal.",
  "filterkast-zinkbad-nedcoat": "Een grote filterkast in een bedrijfshal.",
  "rijhal-leusink": "Een stalen spantconstructie van een rijhal in aanbouw.",
  "rvs-tuintafel": "Een RVS tafelframe met een donker blad.",
  "rvs-rollenhouder": "Een RVS frame met ronde houders, gefotografeerd in de werkplaats.",
  "trap-balustrade-met-rvs-leuning": "Een stalen trap met balustrade in een hal.",
  "balkonhekken-en-leuningen": "Balkonhekken en leuningen aan woningen en gebouwen.",
  "frans-balkonhek": "Een Frans balkon in de gevel van een woning.",
  "balustrade-met-rvs-kabel": "Een balustrade met RVS-kabels langs een gevel.",
  "brugleuning-eerbeek": "Een stalen leuning langs een brug over het water.",
  "paardenstal-vrachtwageninrichting": "Een paardenstal en de inrichting van een vrachtwagen.",
  bedrijfswageninrichting: "Stellingen met schappen in een bedrijfsbus.",
  filterkast: "Een stalen kast met trechter, gefotografeerd buiten de werkplaats.",
  afzuigingsunit: "Een afzuigingsunit met een klepmechanisme.",
  "kantelbare-mengsilos": "Kantelbare mengsilo's op een stalen frame, met de bijbehorende 3D-tekeningen.",
  "rvs-beslagmolen": "Een RVS beslagmolen in de werkplaats.",
  "horeca-rvs": "Een RVS spoeltafel en wandschappen in een keuken.",
};

export const particulierSlugs = [
  "balkonhekken-en-leuningen",
  "frans-balkonhek",
  "balustrade-met-rvs-kabel",
  "trap-balustrade-met-rvs-leuning",
  "rvs-tuintafel",
];

export const zakelijkSlugs = [
  "openluchttheater-eibergen",
  "filterinstallatie-vdl",
  "filterkast-zinkbad-nedcoat",
  "rijhal-leusink",
  "afzuigingsunit",
  "filterkast",
  "kantelbare-mengsilos",
  "bedrijfswageninrichting",
  "paardenstal-vrachtwageninrichting",
  "brugleuning-eerbeek",
  "horeca-rvs",
  "rvs-beslagmolen",
  "rvs-rollenhouder",
];

export function beeld(src: string): Photo {
  const found = images.find((item) => item.src === src);
  if (!found) {
    throw new Error(`Onbekend beeld: ${src}`);
  }
  return found;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function projectsBySlugs(slugs: string[]): Project[] {
  return slugs.flatMap((slug) => {
    const project = getProject(slug);
    return project ? [project] : [];
  });
}

/** Laat de dunne 687×333-banner weg als er echtere foto's zijn. */
export function galleryPhotos(project: Project): Photo[] {
  const rest = project.photos.filter((photo) => !(photo.w === 687 && photo.h === 333));
  return rest.length > 0 ? rest : project.photos;
}

export function coverPhoto(project: Project): Photo {
  const photos = galleryPhotos(project);
  return photos.reduce((best, photo) => (photo.w > best.w ? photo : best));
}

/** Materiaal alleen als het in de titel staat. */
export function materialFromTitle(title: string): string | null {
  const value = title.toLowerCase();
  if (value.includes("rvs")) return "RVS";
  if (value.includes("staal")) return "Staal";
  if (value.includes("aluminium") || value.includes("alu")) return "Aluminium";
  return null;
}

export function serviceLinks(project: Project): { href: string; label: string }[] {
  if (project.slug === "kantelbare-mengsilos") {
    return [
      { href: "/3d-tekenen", label: "3D tekenen" },
      { href: "/lassen", label: "Lassen" },
    ];
  }
  return [{ href: "/lassen", label: "Lassen" }];
}

export function sameTypeProjects(project: Project): Project[] {
  return projects.filter((item) => item.slug !== project.slug && item.type === project.type);
}

export function otherProjects(project: Project, limit = 3): Project[] {
  return projects.filter((item) => item.slug !== project.slug && item.type !== project.type).slice(0, limit);
}

export function relatedProjects(project: Project, limit = 3): Project[] {
  return [...sameTypeProjects(project), ...otherProjects(project, limit)].slice(0, limit);
}
