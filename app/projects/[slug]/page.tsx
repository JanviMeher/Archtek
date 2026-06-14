import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectGallery } from "@/components/ProjectGallery";
import { StickyCTA } from "@/components/StickyCTA";
import { Button } from "@/components/ui/Button";
import { MetadataRow } from "@/components/ui/MetadataRow";
import { getProjectBySlug, getRelatedProjects, projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return createPageMetadata({
    title: project.title,
    description: project.excerpt,
    path: `/projects/${project.slug}`,
    image: project.images.hero,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const relatedProjects = getRelatedProjects(project.relatedSlugs);
  const metadataItems = [project.location, project.typology].filter(Boolean) as string[];

  return (
    <>
      <section className="relative flex min-h-[60vh] items-end pt-20">
        <Image
          src={project.images.hero}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
        <div className="container-content relative z-10 pb-12 pt-32">
          <FadeIn>
            <p className="label-caps mb-3">{project.typology}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">{project.title}</h1>
            <MetadataRow items={metadataItems} className="mt-4" />
          </FadeIn>
        </div>
      </section>

      {(project.description.length > 0 || project.specs.length > 0) && (
        <section className="section-padding pt-12">
          <div className="container-content">
            <div className="grid gap-12 lg:grid-cols-3">
              <FadeIn className={project.specs.length > 0 ? "lg:col-span-2" : "lg:col-span-3"}>
                {project.description.length > 0 && (
                  <>
                    <h2 className="text-2xl md:text-3xl">Overview</h2>
                    <div className="mt-6 space-y-4 text-muted leading-relaxed">
                      {project.description.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                      ))}
                    </div>
                  </>
                )}
              </FadeIn>
              {project.specs.length > 0 && (
                <FadeIn delay={100}>
                  <div className="rounded-lg border border-border bg-card p-6 md:p-8">
                    <h3 className="label-caps mb-4">Project details</h3>
                    <dl className="space-y-4">
                      {project.specs.map((spec) => (
                        <div key={spec.label}>
                          <dt className="text-sm text-sage">{spec.label}</dt>
                          <dd className="mt-1 font-medium">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                    <Button
                      href={`/contact?project=${encodeURIComponent(project.title)}`}
                      className="mt-8 w-full"
                    >
                      Inquire about similar work
                    </Button>
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </section>
      )}

      <section className={`section-padding ${project.description.length > 0 || project.specs.length > 0 ? "pt-0" : "pt-12"}`}>
        <div className="container-content">
          <ProjectGallery gallery={project.images.gallery} />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          <FadeIn>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl md:text-3xl">Related projects</h2>
              <Link
                href="/projects"
                className="hidden text-sm font-medium text-accent-dark hover:text-accent-darker md:inline"
              >
                View all →
              </Link>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((related, index) => (
              <FadeIn key={related.slug} delay={index * 100}>
                <ProjectCard project={related} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="hidden md:block">
        <CTABand
          title="Interested in something similar?"
          description={`Tell us about your project and reference ${project.title} if you'd like.`}
          primaryHref={`/contact?project=${encodeURIComponent(project.title)}`}
        />
      </div>

      <StickyCTA projectTitle={project.title} />
    </>
  );
}
