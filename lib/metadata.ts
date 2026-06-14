import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface PageMetadataOptions {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "",
  image = "/images/home/hero.png",
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title: `${title} | ${siteConfig.shortName}`,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.shortName}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.shortName}`,
      description,
      images: [image],
    },
  };
}
