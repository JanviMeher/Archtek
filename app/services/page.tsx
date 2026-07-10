import { CTABand } from "@/components/CTABand";
import { EditionCard } from "@/components/EditionCard";
import { FadeIn } from "@/components/FadeIn";
import { FirmIcon } from "@/components/icons/FirmIcons";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  brandAssociations,
  designProcessPayments,
  designSolutions,
  editions,
  projectProcessSteps,
  turnkeyWorkflow,
} from "@/data/firm";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services & Process",
  description:
    "Turnkey interiors, design-only services, curated editions, and end-to-end project process from Archtek Design Studio, Pune.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding pt-28 md:pt-32">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Our design solutions"
              title="Complete interior design services"
              description="Living spaces, bedrooms, kitchens, innovative storage, and home improvement — all under one studio."
            />
          </FadeIn>
        </div>
      </section>

      <section id="solutions" className="section-padding pt-0 scroll-mt-28">
        <div className="container-content">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {designSolutions.map((solution, index) => (
              <FadeIn key={solution.title} delay={index * 60}>
                <div className="h-full rounded-lg border border-border bg-card p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-light text-accent-dark">
                      <FirmIcon name={solution.icon} className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl">{solution.title}</h2>
                  </div>
                  <ul className="space-y-2">
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
        </div>
      </section>

      <section className="border-y border-border bg-card section-padding">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Premium curated editions"
              title="Packages for every home"
              description="Select, Signature, Bespoke, and Commercial editions — each with defined inclusions and starting prices."
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

      <section id="turnkey" className="section-padding scroll-mt-28">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Turnkey projects"
              title="End-to-end delivery workflow"
              description="From consultation to handover — a clear path with defined milestones and payments."
            />
          </FadeIn>
          <div className="mt-12 space-y-4">
            {turnkeyWorkflow.map((step, index) => (
              <FadeIn key={step.title} delay={index * 50}>
                <div className="flex flex-col gap-4 rounded-lg border border-border p-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-dark text-sm font-medium text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg">{step.title}</h3>
                      {"items" in step && step.items && (
                        <ul className="mt-2 space-y-1">
                          {step.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted">
                              <FirmIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  {"payment" in step && step.payment && (
                    <span className="shrink-0 rounded-full bg-accent-light px-4 py-1.5 text-sm font-semibold text-accent-dark">
                      Payment: {step.payment}
                    </span>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-border bg-accent-band section-padding scroll-mt-28">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Project process"
              title="13 stages from booking to handover"
              align="center"
            />
          </FadeIn>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projectProcessSteps.map((step, index) => (
              <FadeIn key={step} delay={(index % 6) * 40}>
                <div className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
                  <span className="font-medium text-accent-dark">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm">{step}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="design-only" className="section-padding scroll-mt-28">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Design only"
              title="Design process & payment schedule"
              description="Transparent milestones for design-only engagements."
            />
          </FadeIn>
          <FadeIn delay={80}>
            <div className="mt-10 overflow-hidden rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-card">
                    <th className="px-6 py-4 font-semibold text-foreground">Stage</th>
                    <th className="px-6 py-4 font-semibold text-foreground">Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {designProcessPayments.map((row, index) => (
                    <tr
                      key={row.stage}
                      className={index % 2 === 0 ? "bg-background" : "bg-card/50"}
                    >
                      <td className="px-6 py-4 text-muted">{row.stage}</td>
                      <td className="px-6 py-4 font-medium text-foreground">{row.payment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="brands" className="border-t border-border bg-card section-padding scroll-mt-28">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Brand associations"
              title="Trusted partners across every category"
              description="We work with leading brands for furniture, finishes, lighting, and bathware."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brandAssociations.map((group, index) => (
              <FadeIn key={group.category} delay={index * 60}>
                <div className="h-full rounded-lg border border-border p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-light text-accent-dark">
                      <FirmIcon name={group.icon} className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.brands.map((brand) => (
                      <span
                        key={brand}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content text-center">
          <FadeIn>
            <Button href="/contact#consultation" size="lg">
              Book a consultation
            </Button>
          </FadeIn>
        </div>
      </section>

      <CTABand
        title="Ready to start your project?"
        description="Share your requirements and we'll guide you to the right edition and process."
        primaryLabel="Book a consultation"
        primaryHref="/contact#consultation"
      />
    </>
  );
}
