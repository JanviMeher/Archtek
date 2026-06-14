"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/Button";
import { FilterChips } from "@/components/ui/FilterChips";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";
import { projectCategories } from "@/data/site";

type FilterValue = ProjectCategory | "all";

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <div className="sticky top-16 z-30 -mx-[var(--spacing-section-x)] border-b border-border bg-background/95 px-[var(--spacing-section-x)] py-4 backdrop-blur-md md:top-20">
        <FilterChips
          options={projectCategories}
          active={activeFilter}
          onChange={setActiveFilter}
        />
      </div>

      {filteredProjects.length > 0 ? (
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={(index % 4) * 80}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <div className="mt-16 rounded-lg border border-border bg-card p-12 text-center">
          <h3 className="text-xl">No projects in this category yet</h3>
          <p className="mt-3 text-muted">
            We&apos;re always adding new work. Tell us about your project instead.
          </p>
          <Button href="/contact" className="mt-6">
            Start a project
          </Button>
        </div>
      )}
    </>
  );
}
