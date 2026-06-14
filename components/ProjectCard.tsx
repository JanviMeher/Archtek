import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { MetadataRow } from "@/components/ui/MetadataRow";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  className?: string;
}

export function ProjectCard({ project, priority, className }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group block overflow-hidden rounded-lg border border-border bg-card shadow-soft",
        "transition-all duration-300 motion-safe:hover:scale-[1.02] motion-safe:hover:shadow-hover",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.images.hero}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 motion-safe:group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition-all duration-300 motion-safe:group-hover:translate-y-0 motion-safe:group-hover:opacity-100">
          <span className="label-caps text-white text-shadow-on-image">{project.typology}</span>
        </div>
      </div>
      <div className="p-5 md:p-6">
        <h3 className="text-xl md:text-2xl">{project.title}</h3>
        <MetadataRow
          items={[project.location, project.typology].filter(Boolean) as string[]}
          className="mt-2"
        />
        <p className="mt-3 text-sm text-muted line-clamp-2">{project.excerpt}</p>
      </div>
    </Link>
  );
}
