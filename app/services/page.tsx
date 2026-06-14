import Image from "next/image";
import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { clientTypes, expandedProcess, services } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Architecture, interior design, and 3D visualization services from Archtek Design Studio in Pune — from concept to site supervision.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding pt-28 md:pt-32">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="What we do"
              title="Integrated design services"
              description="Architecture, interiors, and visualization — one studio, one vision from first sketch to final handover."
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-content space-y-16">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100}>
              <article
                id={service.id}
                className="scroll-mt-28 grid gap-8 overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-2"
              >
                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="label-caps mb-2">{service.tagline}</p>
                  <h2 className="text-3xl">{service.title}</h2>
                  <p className="mt-4 text-muted leading-relaxed">{service.description}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {service.scope.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="process" className="border-y border-border bg-accent-band section-padding scroll-mt-28">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="How we work"
              title="Our process"
              description="A clear path from first conversation to handover — with deliverables at every stage."
              align="center"
            />
          </FadeIn>
          <div className="mt-12 space-y-0">
            {expandedProcess.map((step, index) => (
              <FadeIn key={step.title} delay={index * 80}>
                <div className="relative flex gap-6 border-l-2 border-accent/30 pb-10 pl-8 last:pb-0">
                  <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent-dark text-xs font-medium text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="label-caps text-accent-dark">{step.step}</p>
                    <h3 className="mt-1 text-xl">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted">{step.deliverables}</p>
                  </div>
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
              eyebrow="Clients"
              title="Who we work with"
              description="From individual homeowners to developers and brands across Maharashtra."
            />
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {clientTypes.map((client, index) => (
              <FadeIn key={client.title} delay={index * 100}>
                <div className="rounded-lg border border-border p-6 md:p-8">
                  <h3 className="text-xl">{client.title}</h3>
                  <p className="mt-3 text-muted">{client.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact" size="lg">
              Book a consultation
            </Button>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to start?"
        description="Share your brief and we'll schedule an initial consultation."
        primaryLabel="Book a consultation"
      />
    </>
  );
}
