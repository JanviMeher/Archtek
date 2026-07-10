import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABand } from "@/components/CTABand";
import { FadeIn } from "@/components/FadeIn";
import { FirmIcon } from "@/components/icons/FirmIcons";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { editions, getEditionBySlug } from "@/data/firm";
import { createPageMetadata } from "@/lib/metadata";

interface EditionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return editions.map((edition) => ({ slug: edition.slug }));
}

export async function generateMetadata({ params }: EditionPageProps) {
  const { slug } = await params;
  const edition = getEditionBySlug(slug);
  if (!edition) return {};

  return createPageMetadata({
    title: edition.name,
    description: `${edition.tagline} — starting from ${edition.startingPrice}. ${edition.suitableFor.join(", ")}.`,
    path: `/editions/${slug}`,
  });
}

export default async function EditionDetailPage({ params }: EditionPageProps) {
  const { slug } = await params;
  const edition = getEditionBySlug(slug);

  if (!edition) notFound();

  const otherEditions = editions.filter((e) => e.slug !== slug);

  return (
    <>
      <section className="section-padding pt-28 md:pt-32">
        <div className="container-content">
          <FadeIn>
            <p className="label-caps mb-4 text-accent-dark">Starting from {edition.startingPrice}</p>
            <h1 className="text-4xl md:text-5xl">{edition.name}</h1>
            <p className="mt-4 max-w-2xl text-lg text-muted leading-relaxed">{edition.tagline}</p>
            {edition.highlight && (
              <p className="mt-3 text-sm font-medium text-accent-dark">{edition.highlight}</p>
            )}
            <div className="mt-6 flex flex-wrap gap-2">
              {edition.suitableFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/contact#consultation" size="lg">
                Book a consultation
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-border bg-card section-padding">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Inclusions"
              title="What's included"
              description="Room-by-room scope for this edition."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {edition.rooms.map((room, index) => (
              <FadeIn key={room.name} delay={index * 50}>
                <div className="h-full rounded-lg border border-border bg-background p-6 md:p-8">
                  <h2 className="text-xl">{room.name}</h2>
                  <ul className="mt-4 space-y-2">
                    {room.items.map((item) => (
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

      {otherEditions.length > 0 && (
        <section className="section-padding">
          <div className="container-content">
            <FadeIn>
              <SectionHeading eyebrow="Other editions" title="Explore more packages" />
            </FadeIn>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherEditions.map((other, index) => (
                <FadeIn key={other.slug} delay={index * 60}>
                  <Link
                    href={`/editions/${other.slug}`}
                    className="block rounded-lg border border-border p-6 transition-colors hover:border-accent-dark/40 hover:bg-card"
                  >
                    <p className="text-sm text-accent-dark">From {other.startingPrice}</p>
                    <h3 className="mt-1 text-lg">{other.name}</h3>
                    <p className="mt-2 text-sm text-muted">{other.tagline}</p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        title={`Interested in the ${edition.name}?`}
        description="Book a consultation and our team will walk you through scope, timeline, and pricing."
        primaryLabel="Book a consultation"
        primaryHref="/contact#consultation"
      />
    </>
  );
}
