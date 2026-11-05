import * as React from "react";
import { formatGrams } from "@/lib/formatters";
import { Badge } from "@/components/ui/Badge";
import { Clock } from "lucide-react";
import type { JobCard } from "@/types/gold";

export interface PendingJobsListProps {
  jobs: JobCard[];
}

export function PendingJobsList({ jobs }: PendingJobsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="rounded-lg border border-border bg-surface p-4 shadow-subtle hover:border-gold-border transition-colors flex flex-col justify-between"
        >
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-xs font-semibold text-gold-primary">
                  {job.jobReference}
                </span>
                <h4 className="text-sm font-semibold text-foreground mt-0.5">
                  {job.karigarName}
                </h4>
              </div>
              <Badge
                variant={job.status === "AWAITING_REVIEW" ? "warning" : "default"}
              >
                {job.status === "AWAITING_REVIEW" ? "Review" : "In Progress"}
              </Badge>
            </div>

            <p className="text-xs text-foreground-muted">{job.itemCategory}</p>

            <div className="bg-surface-subtle rounded-md p-2.5 grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-foreground-muted block">
                  Issued Fine
                </span>
                <span className="font-semibold text-foreground tabular-nums">
                  {formatGrams(job.issuedFineGrams)}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-foreground-muted block">
                  Running Fine Balance
                </span>
                <span className="font-semibold text-gold-primary tabular-nums">
                  {formatGrams(job.runningFineBalanceGrams)}
                </span>
              </div>
            </div>

            {job.notes && (
              <p className="text-[11px] text-foreground-muted italic">
                {job.notes}
              </p>
            )}
          </div>

          <div className="mt-3 pt-2.5 border-t border-border/50 flex items-center justify-between text-[11px] text-foreground-muted">
            <span className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{job.lastUpdated}</span>
            </span>
            <span className="text-[10px] font-medium text-foreground-muted uppercase">
              Wastage Cap: {job.allowedWastagePct.toFixed(2)}% ({formatGrams(job.allowedWastageGrams)})
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
