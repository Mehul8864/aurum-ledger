import { AppShell } from "@/components/layout/AppShell";
import { ComingSoonView } from "@/components/shared/ComingSoonView";
import { BookOpen } from "lucide-react";

export default function KarigarLedgerPage() {
  return (
    <AppShell>
      <ComingSoonView
        moduleName="Karigar Ledger & Running Statements"
        moduleCode="MOD-05"
        targetPrompt="Prompt 7"
        description="Append-only immutable transaction account statements per artisan, recording cumulative debits, credits, running fine balances, and settling vouchers."
        plannedCapabilities={[
          "Live running balance sheet with 3-decimal fixed-point precision",
          "Date-filtered transaction statements with PDF/Excel exports",
          "Counter-transaction storno engine for auditable corrections",
          "Automated monthly job-work labor charge billing statements",
        ]}
        icon={BookOpen}
      />
    </AppShell>
  );
}
