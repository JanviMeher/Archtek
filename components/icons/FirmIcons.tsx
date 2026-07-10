import { cn } from "@/lib/utils";

type IconName =
  | "blueprint"
  | "compass"
  | "grid"
  | "structure"
  | "spark"
  | "home"
  | "transparency"
  | "price"
  | "quality"
  | "sofa"
  | "door"
  | "paint"
  | "floor"
  | "light"
  | "bath"
  | "living"
  | "bedroom"
  | "kitchen"
  | "storage"
  | "interior"
  | "improvement"
  | "check"
  | "arrow";

interface FirmIconProps {
  name: IconName;
  className?: string;
}

export function FirmIcon({ name, className }: FirmIconProps) {
  const props = {
    className: cn("h-6 w-6", className),
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "blueprint":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M3 9h18M9 3v18" />
        </svg>
      );
    case "compass":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
          <path d="m12 8 2 4-4 2 2-4z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "grid":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      );
    case "structure":
      return (
        <svg {...props}>
          <path d="M4 20V8l8-5 8 5v12" />
          <path d="M4 20h16M9 20v-6h6v6" />
        </svg>
      );
    case "spark":
      return (
        <svg {...props}>
          <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
        </svg>
      );
    case "home":
      return (
        <svg {...props}>
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
          <path d="M9 21V12h6v9" />
        </svg>
      );
    case "transparency":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      );
    case "price":
      return (
        <svg {...props}>
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case "quality":
      return (
        <svg {...props}>
          <path d="M12 2l3 6 6 .9-4.5 4.4 1 6.2L12 17l-5.5 2.5 1-6.2L3 8.9 9 8z" />
        </svg>
      );
    case "sofa":
      return (
        <svg {...props}>
          <path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
          <path d="M3 12h18v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      );
    case "door":
      return (
        <svg {...props}>
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <circle cx="15" cy="12" r="1" fill="currentColor" />
        </svg>
      );
    case "paint":
      return (
        <svg {...props}>
          <path d="M12 3a5 5 0 0 0-5 5c0 2 2 3 2 5h6c0-2 2-3 2-5a5 5 0 0 0-5-5z" />
          <path d="M8 18h8v3H8z" />
        </svg>
      );
    case "floor":
      return (
        <svg {...props}>
          <path d="M3 18h18M3 14h18M3 10h18M3 6h18" />
        </svg>
      );
    case "light":
      return (
        <svg {...props}>
          <path d="M9 18h6M10 22h4M12 2a6 6 0 0 0-3 11v1h6v-1a6 6 0 0 0-3-11z" />
        </svg>
      );
    case "bath":
      return (
        <svg {...props}>
          <path d="M4 12h16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
          <path d="M6 12V5a2 2 0 0 1 2-2h1" />
        </svg>
      );
    case "living":
      return (
        <svg {...props}>
          <rect x="2" y="7" width="20" height="12" rx="1" />
          <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "bedroom":
      return (
        <svg {...props}>
          <path d="M3 14h18M3 18h18M5 14V9h14v5" />
          <path d="M7 9V6h10v3" />
        </svg>
      );
    case "kitchen":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M3 9h18M9 9v12" />
        </svg>
      );
    case "storage":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M4 10h16M10 10v10" />
        </svg>
      );
    case "interior":
      return (
        <svg {...props}>
          <path d="M4 20V10l8-6 8 6v10" />
          <path d="M9 20v-5h6v5" />
        </svg>
      );
    case "improvement":
      return (
        <svg {...props}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "check":
      return (
        <svg {...props}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...props}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}
