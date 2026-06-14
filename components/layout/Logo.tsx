import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type LogoVariant = "default" | "dark";

interface LogoProps {
  className?: string;
  priority?: boolean;
  variant?: LogoVariant;
}

const palette = {
  default: {
    outer: "#2C2C2C",
    accent: "#C4A574",
    title: "#2C2C2C",
    subtitle: "#7A6239",
  },
  dark: {
    outer: "#F7F5F2",
    accent: "#C4A574",
    title: "#F7F5F2",
    subtitle: "#E8DCC8",
  },
} as const;

export function Logo({ className, variant = "default" }: LogoProps) {
  const colors = palette[variant];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 64"
      fill="none"
      role="img"
      aria-label={siteConfig.name}
      className={cn("w-auto shrink-0", className ?? "h-8 md:h-9")}
    >
      <title>{siteConfig.name}</title>
      <circle cx="32" cy="14" r="4" stroke={colors.outer} strokeWidth="1.5" fill="none" />
      <line
        x1="32"
        y1="18"
        x2="18"
        y2="56"
        stroke={colors.title}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="32"
        y1="18"
        x2="46"
        y2="56"
        stroke={colors.title}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="22"
        y1="44"
        x2="42"
        y2="44"
        stroke={colors.accent}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <text
        x="62"
        y="36"
        fontFamily="var(--font-dm-sans), system-ui, sans-serif"
        fontWeight="700"
        fontSize="24"
        letterSpacing="0.14em"
        fill={colors.title}
      >
        ARCHTEK
      </text>
      <text
        x="63"
        y="52"
        fontFamily="var(--font-dm-sans), system-ui, sans-serif"
        fontWeight="500"
        fontSize="9"
        letterSpacing="0.3em"
        fill={colors.subtitle}
      >
        DESIGN STUDIO
      </text>
    </svg>
  );
}
