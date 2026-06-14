import Image from "next/image";
import type { TeamMember } from "@/data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card">
      <div className="relative aspect-square w-full shrink-0">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg">{member.name}</h3>
        <p className="text-sm text-accent-dark">{member.role}</p>
        {member.bio && (
          <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">{member.bio}</p>
        )}
      </div>
    </article>
  );
}
