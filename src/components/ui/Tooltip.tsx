"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom";
  className?: string;
}

export function Tooltip({
  content,
  children,
  side = "top",
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={cn(
            "absolute z-50 whitespace-nowrap rounded bg-foreground px-2 py-1 text-[11px] font-normal text-surface shadow-elevation transition-opacity pointer-events-none",
            side === "top"
              ? "bottom-full left-1/2 -translate-x-1/2 mb-1.5"
              : "top-full left-1/2 -translate-x-1/2 mt-1.5",
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
