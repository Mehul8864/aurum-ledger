import { AppShell } from "@/components/layout/AppShell";
import { ComingSoonView } from "@/components/shared/ComingSoonView";
import { ArrowUpRight } from "lucide-react";

export default function GoldIssuePage() {
  return (
    <AppShell>
      <ComingSoonView
        moduleName="Gold Issue Workflow"
        moduleCode="MOD-03"
        targetPrompt="Prompt 5"
        description="High-speed gold issuance from central vault safe to karigar benches with automatic pure fine-gold computation and hardware scale camera capture."
        plannedCapabilities={[
          "Rapid barcode/job-slip generation for 24K bullion and 22K alloyed ingots",
          "WebRTC camera integration for digital scale LED OCR",
          "Automated pure weight calculation: Gross * (Purity / 100)",
          "Dual-custody verification: Vault Custodian + Karigar signature",
        ]}
        icon={ArrowUpRight}
      />
    </AppShell>
  );
}
