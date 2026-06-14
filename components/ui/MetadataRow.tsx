import { cn } from "@/lib/utils";

interface MetadataRowProps {
  items: string[];
  className?: string;
}

export function MetadataRow({ items, className }: MetadataRowProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-sage",
        className
      )}
    >
      {items.map((item, index) => (
        <span key={item} className="flex items-center gap-3">
          {index > 0 && (
            <span className="text-sage-light" aria-hidden="true">
              ·
            </span>
          )}
          <span>{item}</span>
        </span>
      ))}
    </div>
  );
}
