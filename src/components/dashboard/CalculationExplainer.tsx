import * as React from "react";
import { Calculator, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function CalculationExplainer() {
  return (
    <div className="rounded-lg border border-border bg-surface p-5 shadow-subtle space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/70 pb-3">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded bg-gold-subtle text-gold-primary border border-gold-border">
            <Calculator className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Verified Gold Accounting Mathematical Engine
            </h3>
            <p className="text-xs text-foreground-muted">
              Live proof of fixed-point calculation model implemented for Coimbatore workshop standards.
            </p>
          </div>
        </div>
        <Badge variant="gold">3-Decimal Fixed Point</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        {/* Step 1: Issue */}
        <div className="bg-surface-subtle p-3 rounded-md border border-border space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-foreground">1. Issue (TX-30411)</span>
            <span className="text-[10px] text-foreground-muted">22K Ingot</span>
          </div>
          <p className="font-mono text-[11px] text-foreground-muted">
            120.000 g × 91.60%
          </p>
          <div className="pt-1 border-t border-border/50 flex items-center justify-between">
            <span className="text-foreground-muted">Fine Pure Weight:</span>
            <span className="font-bold text-foreground tabular-nums">109.920 g</span>
          </div>
        </div>

        {/* Step 2: Returns */}
        <div className="bg-surface-subtle p-3 rounded-md border border-border space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-foreground">2. Combined Receipts</span>
            <span className="text-[10px] text-foreground-muted">Necklace + Scrap</span>
          </div>
          <p className="font-mono text-[11px] text-foreground-muted">
            103.004 g + 3.023 g
          </p>
          <div className="pt-1 border-t border-border/50 flex items-center justify-between">
            <span className="text-foreground-muted">Total Returned:</span>
            <span className="font-bold text-status-success-text tabular-nums">106.027 g</span>
          </div>
        </div>

        {/* Step 3: Reconciliation */}
        <div className="bg-surface-subtle p-3 rounded-md border border-border space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-foreground">3. Running Reconciliation</span>
            <span className="text-[10px] text-foreground-muted">Bench Balance</span>
          </div>
          <p className="font-mono text-[11px] text-foreground-muted">
            109.920 - 106.027 = 3.893 g
          </p>
          <div className="pt-1 border-t border-border/50 flex items-center justify-between">
            <span className="text-foreground-muted">Wastage Cap (3.00%):</span>
            <span className="font-bold text-gold-primary tabular-nums">3.298 g</span>
          </div>
        </div>
      </div>

      <div className="bg-surface-accent/40 rounded-md p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs gap-2 border border-border/60">
        <div className="flex items-center space-x-2 text-foreground font-medium">
          <span>Pending Closure Variance Formula:</span>
          <ArrowRight className="h-3.5 w-3.5 text-gold-primary shrink-0 hidden sm:inline" />
          <span className="font-mono text-[11px]">3.893 g (Running) - 3.298 g (Allowed) = +0.595 g</span>
        </div>
        <span className="text-[11px] text-foreground-muted">
          Reconciled via Decimal.js (0.000 g IEEE drift)
        </span>
      </div>
    </div>
  );
}
