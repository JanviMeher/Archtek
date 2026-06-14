"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface StickyCTAProps {
  projectTitle?: string;
}

export function StickyCTA({ projectTitle }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = projectTitle
    ? `/contact?project=${encodeURIComponent(projectTitle)}`
    : "/contact";

  return (
    <div
      className={cn(
        "fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-md p-4 transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      aria-hidden={!visible}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium">
          {projectTitle ? "Similar project?" : "Start your project"}
        </p>
        <Button href={href} size="sm">
          Contact us
        </Button>
      </div>
    </div>
  );
}
