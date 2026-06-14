"use client";

import { cn } from "@/lib/utils";

interface FilterChipsProps<T extends string> {
  options: { value: T; label: string }[];
  active: T;
  onChange: (value: T) => void;
  className?: string;
}

export function FilterChips<T extends string>({
  options,
  active,
  onChange,
  className,
}: FilterChipsProps<T>) {
  return (
    <div
      className={cn(
        "flex gap-2 overflow-x-auto pb-1 scrollbar-none",
        className
      )}
      role="group"
      aria-label="Filter projects"
    >
      {options.map((option) => {
        const isActive = active === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={isActive}
            className={cn(
              "shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
              isActive
                ? "border-accent-dark bg-accent-dark text-white"
                : "border-border bg-card text-muted hover:border-accent-dark/50 hover:text-foreground"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
