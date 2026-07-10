import { FadeIn } from "@/components/FadeIn";
import { EditionCard } from "@/components/EditionCard";
import { SectionHeading } from "@/components/SectionHeading";
import { editions } from "@/data/firm";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Premium Curated Editions",
  description:
    "Select, Signature, Bespoke, and Commercial interior design editions from Archtek Design Studio — starting from ₹7 Lakhs.",
  path: "/editions",
});

export default function EditionsPage() {
  return (
    <>
      <section className="section-padding pt-28 md:pt-32">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Premium curated editions"
              title="Packages designed for every home"
              description={`${siteConfig.name} offers four curated editions — each with defined room inclusions, transparent pricing, and architecture-led design.`}
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
    </>
  );
}
