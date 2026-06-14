import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore Archtek Design Studio's portfolio of residential, commercial, and interior design projects across Pune and Maharashtra.",
  path: "/projects",
  image: "/images/projects/lonavala-residence/01-lonavala.png",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="section-padding pb-8 pt-28 md:pt-32">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Portfolio"
              title="Our work"
              description="Residential homes, commercial buildings, and interior environments — filter by type to explore."
            />
          </FadeIn>
          <ProjectsGrid />
        </div>
      </section>
      <CTABand
        title="Have a project in mind?"
        description="Whether residential or commercial, we'd love to hear about it."
      />
    </>
  );
}
