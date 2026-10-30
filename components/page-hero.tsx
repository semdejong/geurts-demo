import type { ReactNode } from "react";
import { CatalogueLabel, type ProfileId } from "@/components/profiles";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1120px] px-5 ${className}`}>{children}</div>;
}

export function PageHero({
  code,
  profile,
  title,
  lede,
  children,
}: {
  code: string;
  profile?: ProfileId;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <header data-section="pagina" className="border-b-[3px] border-navy">
      <Container className="py-12 md:py-16">
        <CatalogueLabel id={profile} code={code} />
        <h1 className="mt-5 max-w-[18ch]">{title}</h1>
        <p className="mt-5 max-w-[68ch]">{lede}</p>
        {children ? <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div> : null}
      </Container>
    </header>
  );
}
