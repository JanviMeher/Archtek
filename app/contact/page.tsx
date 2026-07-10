import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CareersAccordion } from "@/components/contact/CareersAccordion";
import { ConsultationForm } from "@/components/contact/ConsultationForm";
import { ConnectForm } from "@/components/contact/ConnectForm";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Book a consultation or get in touch with Archtek Design Studio in Baner, Pune. Turnkey interiors and design-led home solutions.",
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
              title="Let's connect"
              description="Begin your home design journey with a dedicated ARCHTEK expert — or reach us directly by phone, email, or WhatsApp."
            />
          </FadeIn>

          <div id="consultation" className="mt-16 scroll-mt-28">
            <FadeIn>
              <div className="grid gap-12 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <h2 className="mb-2 text-2xl">Book a consultation</h2>
                  <p className="mb-6 text-muted">
                    Begin your home design journey with a dedicated ARCHTEK expert.
                  </p>
                  <ConsultationForm />
                </div>
                <div className="lg:col-span-2">
                  <div className="rounded-lg border border-border bg-card p-6 md:p-8">
                    <h3 className="label-caps mb-4">{siteConfig.name}</h3>
                    <address className="not-italic space-y-4 text-muted">
                      <p className="leading-relaxed">
                        <span className="block font-medium text-foreground">Address</span>
                        {siteConfig.address.line1}
                        <br />
                        {siteConfig.address.line2}
                        <br />
                        {siteConfig.address.city} – {siteConfig.address.pincode}
                      </p>
                      <p>
                        <span className="block text-sm text-sage">Website</span>
                        <a
                          href={siteConfig.url}
                          className="font-medium text-foreground hover:text-accent-dark transition-colors"
                        >
                          www.archtekds.com
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
                        <span className="block text-sm text-sage">Instagram</span>
                        <a
                          href={siteConfig.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-foreground hover:text-accent-dark transition-colors"
                        >
                          {siteConfig.social.instagramHandle}
                        </a>
                      </p>
                      <p>
                        <span className="block text-sm text-sage">Phone</span>
                        <a
                          href={siteConfig.phoneHref}
                          className="font-medium text-foreground hover:text-accent-dark transition-colors"
                        >
                          {siteConfig.phone}
                        </a>
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
                </div>
              </div>
            </FadeIn>
          </div>

          <div id="connect" className="mt-20 scroll-mt-28 border-t border-border pt-16">
            <FadeIn>
              <div className="grid gap-12 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <h2 className="mb-2 text-2xl">Let&apos;s connect</h2>
                  <p className="mb-6 text-muted">
                    If you&apos;re looking for a home design experience as unique as you,
                    we&apos;d love to hear from you.
                  </p>
                  <ConnectForm />
                </div>
                <div className="lg:col-span-2">
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
                      Crescent Park, Pancard Club Road, Baner, Pune
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-16">
            <CareersAccordion />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
