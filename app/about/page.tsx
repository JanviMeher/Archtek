import Image from "next/image";
import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";
import { FirmIcon } from "@/components/icons/FirmIcons";
import { PartnerCard } from "@/components/PartnerCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Button } from "@/components/ui/Button";
import { whyArchtek, whyChooseUs } from "@/data/firm";
import { partners, teamMembers } from "@/data/team";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { getYearsInPractice } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Archtek Design Studio — crafting spaces that inspire. Founded in 2015 in Pune. Architecture-led interiors, turnkey delivery, and design without catalogue thinking.",
  path: "/about",
  image: "/images/home/studio.png",
});

export default function AboutPage() {
  const years = getYearsInPractice(siteConfig.founded);

  return (
    <>
      <section className="section-padding pt-28 md:pt-32">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="About us"
              title={siteConfig.tagline}
              description={`Founded in ${siteConfig.founded} in Baner, Pune — Archtek is a vertically integrated design studio delivering architecture-led interiors and turnkey home solutions.`}
            />
          </FadeIn>

          <FadeIn delay={80}>
            <div className="mt-12 max-w-3xl space-y-4 text-muted leading-relaxed">
              <p>
                Archtek Design Studio began when architects Abhishek Badale and Anand Munot
                set out to close the gap between architecture and interiors — where homes
                were often assembled from templates instead of designed from the ground up.
              </p>
              <p>
                Today, we deliver turnkey interiors through curated editions, transparent
                processes, and in-house production. Every space is planned by purpose,
                material, finish, and execution priority — balancing structure, light,
                proportion, and detail.
              </p>
              <p>
                From first consultation to final handover, we create spaces that don&apos;t
                just look good — they feel designed specifically for you.
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
              eyebrow="Why choose us"
              title="Design that starts with you"
              description="Six principles that define how we approach every project."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <FadeIn key={item.id} delay={index * 60}>
                <div className="h-full rounded-lg border border-border p-6 md:p-8">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent-light text-accent-dark">
                    <FirmIcon name={item.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
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
              eyebrow="Why Archtek?"
              title="Transparent. Competitive. Quality-driven."
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whyArchtek.map((item, index) => (
              <FadeIn key={item.title} delay={index * 100}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-light text-accent-dark">
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
                    work side by side — from first sketch to final handover.
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
              <Button href="/contact#consultation" variant="secondary" size="lg">
                Book a consultation
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABand
        title="Let's connect"
        description="If you're looking for a home design experience as unique as you, we'd love to hear from you."
        primaryLabel="Get in touch"
        primaryHref="/contact#connect"
      />
    </>
  );
}
