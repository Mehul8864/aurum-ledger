import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, Clock, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ComingSoonViewProps {
  moduleName: string;
  moduleCode: string;
  targetPrompt: string;
  description: string;
  plannedCapabilities: string[];
  icon: LucideIcon;
}

export function ComingSoonView({
  moduleName,
  moduleCode,
  targetPrompt,
  description,
  plannedCapabilities,
  icon: Icon,
}: ComingSoonViewProps) {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 space-y-6">
      <div className="rounded-lg border border-border bg-surface p-8 shadow-subtle text-center space-y-4">
        <div className="inline-flex p-3 rounded-full bg-gold-subtle border border-gold-border text-gold-primary">
          <Icon className="h-8 w-8" />
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-center space-x-2">
            <span className="font-mono text-xs font-semibold text-gold-primary">
              {moduleCode}
            </span>
            <Badge variant="gold">Scheduled: {targetPrompt}</Badge>
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            {moduleName}
          </h2>
          <p className="text-sm text-foreground-muted max-w-md mx-auto">
            {description}
          </p>
        </div>

        <div className="pt-4 border-t border-border/60 text-left max-w-md mx-auto space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground-muted flex items-center space-x-1.5">
            <Clock className="h-3.5 w-3.5 text-gold-primary" />
            <span>Planned Architectural Capabilities</span>
          </h4>
          <ul className="space-y-1.5 text-xs text-foreground">
            {plannedCapabilities.map((cap, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-gold-primary font-bold">•</span>
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 flex items-center justify-center space-x-3">
          <Link href="/">
            <Button variant="secondary" size="sm">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Overview</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2 text-xs text-foreground-muted">
        <ShieldCheck className="h-4 w-4 text-status-success-text" />
        <span>Aurum Ledger Enterprise Roadmap — 7-Day Sprint Phase</span>
      </div>
    </div>
  );
}
