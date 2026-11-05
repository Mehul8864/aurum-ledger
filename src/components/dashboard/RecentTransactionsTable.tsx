import * as React from "react";
import { formatGrams, formatPurity } from "@/lib/formatters";
import { Badge } from "@/components/ui/Badge";
import type { GoldTransaction } from "@/types/gold";

export interface RecentTransactionsTableProps {
  transactions: GoldTransaction[];
}

export function RecentTransactionsTable({
  transactions,
}: RecentTransactionsTableProps) {
  const getTypeBadge = (type: GoldTransaction["type"], label: string) => {
    switch (type) {
      case "ISSUE":
        return <Badge variant="gold">{label}</Badge>;
      case "RECEIPT_FINISHED":
        return <Badge variant="success">{label}</Badge>;
      case "RECEIPT_SCRAP":
        return <Badge variant="default">{label}</Badge>;
      case "RECEIPT_FILINGS":
        return <Badge variant="info">{label}</Badge>;
      default:
        return <Badge variant="outline">{label}</Badge>;
    }
  };

  return (
    <div className="space-y-3">
      {/* Desktop & Tablet Table View */}
      <div className="hidden sm:block w-full overflow-x-auto rounded-lg border border-border bg-surface shadow-subtle">
        <table className="w-full text-left text-xs border-collapse">
          <thead className="bg-surface-subtle text-foreground-muted border-b border-border/80">
            <tr>
              <th className="py-2.5 px-3.5 font-semibold uppercase tracking-wider text-[11px]">
                Tx Ref
              </th>
              <th className="py-2.5 px-3.5 font-semibold uppercase tracking-wider text-[11px]">
                Karigar
              </th>
              <th className="py-2.5 px-3.5 font-semibold uppercase tracking-wider text-[11px]">
                Transaction Type
              </th>
              <th className="py-2.5 px-3.5 font-semibold uppercase tracking-wider text-[11px] text-right">
                Gross Weight
              </th>
              <th className="py-2.5 px-3.5 font-semibold uppercase tracking-wider text-[11px] text-right">
                Purity
              </th>
              <th className="py-2.5 px-3.5 font-semibold uppercase tracking-wider text-[11px] text-right">
                Fine Gold Weight
              </th>
              <th className="py-2.5 px-3.5 font-semibold uppercase tracking-wider text-[11px]">
                Job Ref
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50 text-foreground">
            {transactions.map((tx) => (
              <tr
                key={tx.id}
                className="hover:bg-surface-subtle/70 transition-colors"
              >
                <td className="py-3 px-3.5 font-mono text-[11px] font-medium text-gold-primary">
                  {tx.txCode}
                </td>
                <td className="py-3 px-3.5 font-medium text-foreground">
                  {tx.karigarName}
                </td>
                <td className="py-3 px-3.5">
                  {getTypeBadge(tx.type, tx.typeLabel)}
                </td>
                <td className="py-3 px-3.5 text-right tabular-nums text-foreground">
                  {formatGrams(tx.grossWeightG)}
                </td>
                <td className="py-3 px-3.5 text-right tabular-nums text-foreground-muted">
                  {formatPurity(tx.purityPct)}
                </td>
                <td className="py-3 px-3.5 text-right tabular-nums font-semibold text-foreground">
                  {formatGrams(tx.fineWeightG)}
                </td>
                <td className="py-3 px-3.5 text-foreground-muted text-[11px]">
                  {tx.jobReference || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card List View (under 640px) */}
      <div className="sm:hidden space-y-2.5">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="rounded-lg border border-border bg-surface p-3.5 shadow-subtle space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-gold-primary">
                {tx.txCode}
              </span>
              {getTypeBadge(tx.type, tx.typeLabel)}
            </div>

            <div className="text-xs font-medium text-foreground">
              {tx.karigarName}
              {tx.jobReference && (
                <span className="text-[11px] font-normal text-foreground-muted ml-1.5">
                  • {tx.jobReference}
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1 border-t border-border/50 text-[11px]">
              <div>
                <span className="text-foreground-muted block text-[10px] uppercase">
                  Gross
                </span>
                <span className="tabular-nums font-medium text-foreground">
                  {formatGrams(tx.grossWeightG)}
                </span>
              </div>
              <div>
                <span className="text-foreground-muted block text-[10px] uppercase">
                  Purity
                </span>
                <span className="tabular-nums font-medium text-foreground">
                  {formatPurity(tx.purityPct)}
                </span>
              </div>
              <div className="text-right">
                <span className="text-foreground-muted block text-[10px] uppercase">
                  Fine Pure
                </span>
                <span className="tabular-nums font-semibold text-gold-primary">
                  {formatGrams(tx.fineWeightG)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
