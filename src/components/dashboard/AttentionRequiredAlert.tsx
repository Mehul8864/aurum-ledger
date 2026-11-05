import * as React from "react";
import { formatGrams } from "@/lib/formatters";
import { AlertCircle, Info, Scale } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { MOCK_ATTENTION_REQUIRED } from "@/data/mock-data";

export function AttentionRequiredAlert() {
  const item = MOCK_ATTENTION_REQUIRED;

  return (
    <div className="rounded-lg border border-status-warning-border bg-status-warning-bg/40 p-4 sm:p-5 shadow-subtle space-y-3">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded bg-status-warning-bg text-status-warning-text border border-status-warning-border shrink-0">
            <AlertCircle className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="text-sm font-semibold text-foreground">
                Action Required: Outstanding Job Balance Review
              </h4>
              <Badge variant="warning">DEMO REVIEW ITEM</Badge>
            </div>
            <p className="text-xs text-foreground-muted">
              Reference: <span className="font-mono font-medium text-foreground">{item.jobReference}</span> — {item.karigarName} ({item.itemCategory})
            </p>
          </div>
        </div>
      </div>

      {/* Numerical Variance Breakdown */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-surface rounded-md border border-border p-3 text-xs">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-foreground-muted block">
            Issued Fine Gold
          </span>
          <span className="font-semibold text-foreground tabular-nums">
            {formatGrams(item.issuedFineGrams)}
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-wider text-foreground-muted block">
            Total Returned (Goods + Scrap)
          </span>
          <span className="font-semibold text-foreground tabular-nums">
            {formatGrams(item.returnedFineGrams)}
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-wider text-foreground-muted block">
            Running Fine Balance
          </span>
          <span className="font-semibold text-gold-primary tabular-nums">
            {formatGrams(item.runningFineBalanceGrams)}
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-wider text-foreground-muted block">
            Allowed 3.00% Wastage
          </span>
          <span className="font-semibold text-foreground-muted tabular-nums">
            {formatGrams(item.allowedWastageGrams)}
          </span>
        </div>
      </div>

      {/* Operational Explanation Banner */}
      <div className="flex items-start space-x-2 text-xs text-status-warning-text bg-status-warning-bg border border-status-warning-border/60 rounded-md p-3">
        <Info className="h-4 w-4 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-medium">
            Pending Filings Reconciliation: Potential Variance of {formatGrams(item.potentialVarianceGrams)}
          </p>
          <p className="text-[11px] leading-relaxed opacity-90">
            {item.operationalNote}
          </p>
        </div>
      </div>

      {/* Audit Standard Footer */}
      <div className="flex items-center space-x-1.5 text-[11px] text-foreground-muted pt-1">
        <Scale className="h-3.5 w-3.5 text-gold-primary shrink-0" />
        <span>
          Compliance Directive: Gold held at bench remains an active work-in-progress asset until final job closure.
        </span>
      </div>
    </div>
  );
}
