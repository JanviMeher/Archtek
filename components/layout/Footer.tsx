import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-content section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center" aria-label={`${siteConfig.name} home`}>
              <Logo className="h-10 md:h-11" />
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Architecture and interior design studio in Pune, founded {siteConfig.founded}.
            </p>
          </div>

          <div>
            <h3 className="label-caps mb-4">Navigate</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/projects" className="text-sm text-muted hover:text-accent-dark transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted hover:text-accent-dark transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted hover:text-accent-dark transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted hover:text-accent-dark transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="label-caps mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-sm text-muted">
              <p className="leading-relaxed">{siteConfig.address.full}</p>
              <p>
                <a href={siteConfig.phoneHref} className="hover:text-accent-dark transition-colors">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-dark transition-colors">
                  {siteConfig.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="label-caps mb-4">Hours</h3>
            <p className="text-sm text-muted">{siteConfig.officeHours}</p>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent-dark hover:text-accent-darker transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted hover:text-accent-dark transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-sage">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-sage">
            Pune, Maharashtra · Est. {siteConfig.founded}
          </p>
        </div>
      </div>
    </footer>
  );
}
