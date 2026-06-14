import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface CTABandProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showContact?: boolean;
  className?: string;
}

export function CTABand({
  title = "Tell us about your project",
  description = "Share your brief and we'll respond within one business day.",
  primaryLabel = "Start a project",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  showContact = true,
  className,
}: CTABandProps) {
  return (
    <section
      className={cn(
        "bg-accent-band border-y border-border section-padding",
        className
      )}
    >
      <div className="container-content">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl text-balance">{title}</h2>
            <p className="mt-3 text-lg text-foreground/80 leading-relaxed">{description}</p>
            {showContact && (
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a
                  href={siteConfig.phoneHref}
                  className="font-medium text-foreground transition-colors hover:text-accent-dark"
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-foreground transition-colors hover:text-accent-dark"
                >
                  {siteConfig.email}
                </a>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button
              href={primaryHref}
              size="lg"
              className="border-transparent bg-foreground text-white shadow-card hover:bg-foreground/90"
            >
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="secondary" size="lg">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
