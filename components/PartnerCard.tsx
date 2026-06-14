import Image from "next/image";
import type { TeamMember } from "@/data/team";

interface PartnerCardProps {
  partner: TeamMember;
}

export function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-soft">
      <div className="relative aspect-[4/5] w-full shrink-0">
        <Image
          src={partner.image}
          alt={partner.name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="text-2xl">{partner.name}</h3>
        <p className="mt-1 text-sm font-medium text-accent-dark">{partner.role}</p>
        {partner.focusAreas && (
          <p className="mt-3 text-sm text-sage">{partner.focusAreas.join(" · ")}</p>
        )}
        <p className="mt-4 flex-1 text-muted leading-relaxed">{partner.bio}</p>
      </div>
    </article>
  );
}
