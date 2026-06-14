import Image from "next/image";
import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/Button";
import { getFeaturedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { philosophyPillars, processSteps, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { getYearsInPractice } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Architecture & Interior Design Studio, Pune",
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
          alt="Private Residence, Lonavala — Archtek Design Studio"
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
              Archtek Design Studio creates architecture and interiors rooted in context,
              function, and craft — from hillside retreats to commercial landmarks.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" size="lg" className="shadow-card">
                Start a project
              </Button>
              <Button
                href="/projects"
                variant="secondary"
                size="lg"
                className="border-foreground/35 bg-background/85 shadow-soft backdrop-blur-sm hover:bg-background"
              >
                View work
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Featured work"
              title="Projects that define our practice"
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

      <section className="border-y border-border bg-card section-padding">
        <div className="container-content">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="label-caps mb-4">Philosophy</p>
              <p className="text-2xl md:text-3xl leading-snug text-balance">
                We believe good design listens first — to site, to daily life, and to the
                people who will inhabit what we build.
              </p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {philosophyPillars.map((pillar, index) => (
              <FadeIn key={pillar.title} delay={index * 100}>
                <div className="rounded-lg border border-border p-6 md:p-8">
                  <h3 className="text-xl">{pillar.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{pillar.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Services"
              title="What we do"
              description="Integrated architecture, interiors, and visualization under one studio."
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 100}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-accent-band section-padding">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Process"
              title={
                <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:flex-nowrap">
                  {processSteps.map((step, index) => (
                    <span
                      key={step.title}
                      className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap"
                    >
                      {index > 0 ? (
                        <span className="text-foreground/45" aria-hidden="true">
                          →
                        </span>
                      ) : null}
                      <span>{step.title}</span>
                    </span>
                  ))}
                </span>
              }
              align="center"
              className="max-w-none w-full"
              titleClassName="text-xl sm:text-2xl md:text-[clamp(1.125rem,2.2vw,1.75rem)] md:text-nowrap"
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 80}>
                <div className="text-center">
                  <span className="label-caps text-foreground/72">{step.step}</span>
                  <h3 className="mt-2 text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services#process"
              className="text-sm font-semibold text-foreground underline decoration-accent-dark/45 underline-offset-4 transition-colors hover:decoration-accent-dark"
            >
              See full process →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          <FadeIn>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <blockquote className="text-2xl md:text-3xl leading-snug">
                  &ldquo;Archtek understood our brief from the first site visit. The home
                  feels tailored to how we actually live.&rdquo;
                </blockquote>
                <p className="mt-4 text-sm text-muted">— Residential client, Pune</p>
              </div>
              <div className="grid grid-cols-3 gap-6">
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
                  <p className="font-display text-4xl font-medium text-foreground md:text-5xl">2</p>
                  <p className="mt-2 text-sm text-muted">Design partners</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-content">
          <FadeIn>
            <div className="relative overflow-hidden rounded-lg">
              <div className="relative aspect-[21/9] min-h-[240px]">
                <Image
                  src="/images/home/studio.png"
                  alt="Archtek Design Studio"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                />
                <div className="image-scrim absolute inset-0" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white text-shadow-on-image">
                    <h2 className="text-3xl font-medium md:text-4xl">Inside the studio</h2>
                    <p className="mt-3 max-w-md mx-auto text-white">
                      A collaborative team of architects and interior designers in Baner, Pune.
                    </p>
                    <Button
                      href="/about"
                      size="lg"
                      className="mt-6 border-transparent bg-white text-foreground shadow-card hover:bg-white/90 hover:text-foreground"
                    >
                      Meet the team
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  );
}
