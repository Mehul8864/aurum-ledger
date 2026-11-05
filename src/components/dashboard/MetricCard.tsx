import * as React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export interface MetricCardProps {
  label: string;
  value: string;
  unit?: string;
  subtext?: string;
  icon: LucideIcon;
  badge?: string;
  className?: string;
}

export function MetricCard({
  label,
  value,
  unit,
  subtext,
  icon: Icon,
  badge,
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface p-5 shadow-subtle hover:border-gold-border transition-colors relative overflow-hidden",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
          {label}
        </p>
        <div className="p-2 rounded-md bg-surface-subtle border border-border/60 text-gold-primary">
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-3 flex items-baseline space-x-1">
        <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground tabular-nums">
          {value}
        </span>
        {unit && (
          <span className="text-sm font-medium text-foreground-muted">
            {unit}
          </span>
        )}
      </div>

      <div className="mt-2 flex items-center justify-between text-[11px] text-foreground-muted">
        {subtext && <span>{subtext}</span>}
        {badge && (
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-gold-subtle text-gold-primary border border-gold-border">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}
