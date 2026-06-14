import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CareersAccordion } from "@/components/contact/CareersAccordion";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Archtek Design Studio in Baner, Pune. Project inquiries, consultations, and careers.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="section-padding pt-28 md:pt-32">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Contact"
              title="Let's talk about your project"
              description="Share your brief and we'll respond within one business day. Or reach us directly by phone or WhatsApp."
            />
          </FadeIn>

          <div className="mt-12 grid gap-12 lg:grid-cols-5">
            <FadeIn className="lg:col-span-3">
              <h2 className="mb-6 text-xl">Project inquiry</h2>
              <InquiryForm />
            </FadeIn>

            <FadeIn delay={100} className="lg:col-span-2">
              <div className="space-y-8">
                <div className="rounded-lg border border-border bg-card p-6 md:p-8">
                  <h3 className="label-caps mb-4">Office</h3>
                  <address className="not-italic space-y-4 text-muted">
                    <p className="leading-relaxed">{siteConfig.address.full}</p>
                    <p>
                      <span className="block text-sm text-sage">Phone</span>
                      <a
                        href={siteConfig.phoneHref}
                        className="font-medium text-foreground hover:text-accent-dark transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                    </p>
                    <p>
                      <span className="block text-sm text-sage">Email</span>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="font-medium text-foreground hover:text-accent-dark transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </p>
                    <p>
                      <span className="block text-sm text-sage">Hours</span>
                      {siteConfig.officeHours}
                    </p>
                  </address>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button href={siteConfig.whatsapp} external size="sm">
                      WhatsApp
                    </Button>
                    <Button href={siteConfig.phoneHref} variant="secondary" size="sm">
                      Call us
                    </Button>
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg border border-border">
                  <div className="relative aspect-[4/3] bg-border/30">
                    <iframe
                      title="Archtek Design Studio office location in Baner, Pune"
                      src="https://maps.google.com/maps?q=Crescent+Park+Baner+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                  <p className="p-4 text-xs text-sage">
                    Crescent Park, Pan Card Club Road, Baner, Pune
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-12">
            <CareersAccordion />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
