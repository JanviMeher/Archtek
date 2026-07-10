import Link from "next/link";
import { FirmIcon } from "@/components/icons/FirmIcons";
import type { Edition } from "@/data/firm";

interface EditionCardProps {
  edition: Edition;
  priority?: boolean;
}

export function EditionCard({ edition }: EditionCardProps) {
  return (
    <Link
      href={`/editions/${edition.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-card"
    >
      <div className="border-b border-border bg-accent-band px-6 py-8">
        <p className="label-caps text-accent-dark">Starting from</p>
        <p className="mt-1 font-display text-3xl font-medium text-foreground">
          {edition.startingPrice}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="text-2xl">{edition.name}</h3>
        <p className="mt-2 text-muted leading-relaxed">{edition.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {edition.suitableFor.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent-dark transition-colors group-hover:text-accent-darker">
          View inclusions
          <FirmIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </p>
      </div>
    </Link>
  );
}
