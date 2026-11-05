import { AppShell } from "@/components/layout/AppShell";
import { ComingSoonView } from "@/components/shared/ComingSoonView";
import { AlertOctagon } from "lucide-react";

export default function LossAlertsPage() {
  return (
    <AppShell>
      <ComingSoonView
        moduleName="Unexplained Loss & Variance Alerts"
        moduleCode="MOD-06"
        targetPrompt="Prompt 8"
        description="Automated variance monitoring engine flagging excessive gold loss beyond agreed contractual wastage upon formal job closing."
        plannedCapabilities={[
          "Strict separation of open WIP balances from true gold loss",
          "Automated supervisor notification for variances >0.250 g",
          "High-friction management sign-off for gold loss write-offs",
          "Audit trail log for internal forensic loss investigations",
        ]}
        icon={AlertOctagon}
      />
    </AppShell>
  );
}
