import { AppShell } from "@/components/layout/AppShell";
import { ComingSoonView } from "@/components/shared/ComingSoonView";
import { Coins } from "lucide-react";

export default function OldGoldPage() {
  return (
    <AppShell>
      <ComingSoonView
        moduleName="Old Gold Customer Intake Desk"
        moduleCode="MOD-08"
        targetPrompt="Prompt 9"
        description="Showroom customer scrap jewellery buyback tracking, melting loss reconciliation, and external refinery bar conversion logging."
        plannedCapabilities={[
          "Customer old gold purchase receipt with photo ID and Karatmeter assay",
          "Melting batch creation and pre-melt vs. post-melt variance logging",
          "External refinery transit and 24K bullion recovery auditing",
          "Direct TallyPrime journal voucher sync for customer gold intake",
        ]}
        icon={Coins}
      />
    </AppShell>
  );
}
