import Image from "next/image";
import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { EditionCard } from "@/components/EditionCard";
import { FadeIn } from "@/components/FadeIn";
import { FirmIcon } from "@/components/icons/FirmIcons";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  designSolutions,
  editions,
  projectProcessSteps,
  whyArchtek,
} from "@/data/firm";
import { getFeaturedProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { getYearsInPractice } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Crafting Spaces That Inspire | Interior Design, Pune",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const years = getYearsInPractice(siteConfig.founded);

  return (
    <>
      <section className="relative flex min-h-[85vh] items-end overflow-hidden">
        <Image
          src="/images/home/hero.png"
          alt="Archtek Design Studio — Crafting Spaces That Inspire"
          fill
          priority
          sizes="100vw"
          className="object-cover motion-safe:animate-[scale-in_20s_ease-out_forwards]"
        />
        <div className="absolute inset-0 bg-foreground/15" aria-hidden="true" />
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />
        <div className="container-content relative z-10 pb-16 pt-32 md:pb-24 md:pt-40">
          <FadeIn>
            <p className="label-caps mb-4 text-foreground/70">Pune · Est. {siteConfig.founded}</p>
            <h1 className="max-w-3xl text-4xl font-medium text-foreground md:text-5xl lg:text-6xl text-balance">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/85 leading-relaxed">
              Architecture-led interiors and turnkey home design — shaped uniquely for how
              you live, not assembled from catalogues.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact#consultation" size="lg" className="shadow-card">
                Book a consultation
              </Button>
              <Button
                href="/editions"
                variant="secondary"
                size="lg"
                className="border-foreground/35 bg-background/85 shadow-soft backdrop-blur-sm hover:bg-background"
              >
                View editions
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Archtek?"
              title="Design you can trust, end to end"
              description="Transparent process, competitive pricing, and vertically integrated quality — from first sketch to final handover."
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whyArchtek.map((item, index) => (
              <FadeIn key={item.title} delay={index * 100}>
                <div className="rounded-lg border border-border p-6 md:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-light text-accent-dark">
                    <FirmIcon name={item.icon} />
                  </div>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card section-padding">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Premium curated editions"
              title="Packages designed for every home"
              description="Select, Signature, and Bespoke editions — plus Commercial solutions for workspaces."
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {editions.map((edition, index) => (
              <FadeIn key={edition.slug} delay={index * 80}>
                <EditionCard edition={edition} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Our design solutions"
              title="Every room, thoughtfully planned"
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {designSolutions.map((solution, index) => (
              <FadeIn key={solution.title} delay={index * 60}>
                <div className="h-full rounded-lg border border-border p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-light text-accent-dark">
                      <FirmIcon name={solution.icon} className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg">{solution.title}</h3>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {solution.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <FirmIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services#solutions" variant="secondary">
              Explore all services
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Featured work"
              title="Spaces we've crafted"
              description="Residential, commercial, and interior environments across Pune and Maharashtra."
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 100}>
                <ProjectCard project={project} priority={index === 0} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/projects" variant="secondary">
              View all projects
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-accent-band section-padding">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Project process"
              title="From booking to handover"
              description="A clear, segmented path through design, manufacturing, installation, and finishing."
              align="center"
            />
          </FadeIn>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {projectProcessSteps.map((step, index) => (
              <FadeIn key={step} delay={(index % 6) * 40}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm">
                  <span className="font-medium text-accent-dark">{String(index + 1).padStart(2, "0")}</span>
                  {step}
                </span>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services#process"
              className="text-sm font-semibold text-foreground underline decoration-accent-dark/45 underline-offset-4 transition-colors hover:decoration-accent-dark"
            >
              See full process & payments →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          <FadeIn>
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="text-center">
                <p className="font-display text-4xl font-medium text-foreground md:text-5xl">{years}+</p>
                <p className="mt-2 text-sm text-muted">Years in practice</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-medium text-foreground md:text-5xl">
                  {siteConfig.projectCount}+
                </p>
                <p className="mt-2 text-sm text-muted">Projects delivered</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-medium text-foreground md:text-5xl">3</p>
                <p className="mt-2 text-sm text-muted">Curated home editions</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABand
        title="Begin your home design journey"
        description="Book a consultation with a dedicated ARCHTEK expert."
        primaryLabel="Book a consultation"
        primaryHref="/contact#consultation"
      />
    </>
  );
}
