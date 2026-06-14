import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-soft",
        "transition-all duration-300 motion-safe:hover:scale-[1.02] motion-safe:hover:shadow-hover",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="label-caps mb-2">{service.tagline}</p>
        <h3 className="text-2xl">{service.title}</h3>
        <p className="mt-3 flex-1 text-muted leading-relaxed">{service.description}</p>
        <Link
          href={`/services#${service.id}`}
          className="mt-6 inline-flex items-center text-sm font-medium text-accent-dark transition-colors hover:text-accent-darker"
        >
          Learn more
          <span className="ml-2 transition-transform motion-safe:group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
