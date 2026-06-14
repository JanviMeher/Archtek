import Image from "next/image";
import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";
import { PartnerCard } from "@/components/PartnerCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Button } from "@/components/ui/Button";
import { partners, teamMembers } from "@/data/team";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { getYearsInPractice } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Meet Archtek Design Studio — founded in 2015 in Pune by co-founders Abhishek Badale and Anand Munot. Architecture and interior design with context, function, and craft.",
  path: "/about",
  image: "/images/home/studio.png",
});

const philosophyPillars = [
  {
    title: "Context first",
    text: "Climate, culture, and constraints shape every decision — not trends.",
  },
  {
    title: "Engineering integrated",
    text: "Structure, services, and buildability are part of design, not afterthoughts.",
  },
  {
    title: "Relationships matter",
    text: "Long-term client trust and contractor partnerships deliver better outcomes.",
  },
];

export default function AboutPage() {
  const years = getYearsInPractice(siteConfig.founded);

  return (
    <>
      <section className="section-padding pt-28 md:pt-32">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="About us"
              title="Design rooted in place and people"
              description={`Founded in ${siteConfig.founded} in Baner, Pune — Archtek brings together architecture and interior design under one collaborative studio.`}
            />
          </FadeIn>

          <FadeIn delay={80}>
            <div className="mt-12 max-w-3xl space-y-4 text-muted leading-relaxed">
              <p>
                Archtek Design Studio began when architects Abhishek Badale and Anand Munot
                saw a gap in the market — projects where architecture and interiors were
                designed in silos, losing coherence by the time they reached site.
              </p>
              <p>
                Today, our team of eight works across residential, commercial, and interior
                projects in Pune and beyond. We integrate engineering constraints early,
                maintain close client relationships through every stage, and supervise on
                site so what we draw is what gets built.
              </p>
              <p>
                Sustainability for us is practical: orientation, ventilation, durable
                materials, and designs that age well — not checkbox certifications.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="mt-12 grid grid-cols-3 gap-6 border-y border-border py-8 md:max-w-2xl">
              <div>
                <p className="font-display text-3xl font-medium text-foreground md:text-4xl">
                  {years}+
                </p>
                <p className="mt-1 text-sm text-muted">Years in practice</p>
              </div>
              <div>
                <p className="font-display text-3xl font-medium text-foreground md:text-4xl">8</p>
                <p className="mt-1 text-sm text-muted">Team members</p>
              </div>
              <div>
                <p className="font-display text-3xl font-medium text-foreground md:text-4xl">2</p>
                <p className="mt-1 text-sm text-muted">Co-founding partners</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-border bg-card section-padding">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Co-founders"
              title="Two partners, one studio"
              description="Abhishek and Anand founded Archtek together in 2015 — equal partners leading architecture and interiors from day one."
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            {partners.map((partner, index) => (
              <FadeIn key={partner.name} delay={index * 100} className="h-full">
                <PartnerCard partner={partner} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pb-2 md:pb-4">
        <div className="container-content">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="label-caps mb-4">Philosophy</p>
              <p className="text-2xl leading-snug text-balance md:text-3xl">
                We believe good design listens first — to site, to daily life, and to the
                people who will inhabit what we build.
              </p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {philosophyPillars.map((item, index) => (
              <FadeIn key={item.title} delay={index * 80}>
                <div className="h-full rounded-lg border border-border p-6 md:p-8">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding mt-0 pt-0">
        <div className="container-content">
          <FadeIn>
            <div className="relative overflow-hidden rounded-lg">
              <div className="relative aspect-[21/9] min-h-[220px]">
                <Image
                  src="/images/about/office-culture.jpg"
                  alt="Design team collaborating in a modern office workspace"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                />
                <div className="image-scrim absolute inset-0" aria-hidden="true" />
                <div className="absolute inset-0 flex items-end p-8 md:p-12">
                  <p className="max-w-lg text-lg text-white text-shadow-on-image leading-relaxed">
                    A collaborative studio in Baner where architects and interior designers
                    work side by side — from first sketch to site supervision.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-border bg-accent-band section-padding">
        <div className="container-content">
          <FadeIn>
            <SectionHeading eyebrow="Team" title="The people behind the work" />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <FadeIn key={member.name} delay={(index % 6) * 60} className="h-full">
                <TeamMemberCard member={member} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl">Join our team</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              We&apos;re always interested in talented architects and interior designers.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact#careers" size="lg">
                View careers
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Get in touch
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  );
}
