import { AppShell } from "@/components/layout/AppShell";
import { ComingSoonView } from "@/components/shared/ComingSoonView";
import { ArrowDownLeft } from "lucide-react";

export default function GoldReceiptPage() {
  return (
    <AppShell>
      <ComingSoonView
        moduleName="Gold Receipt & Multi-Part Returns"
        moduleCode="MOD-04"
        targetPrompt="Prompt 6"
        description="Four-part return verification recording finished jewellery, melting scrap, bench filings (tumbara), and polishing sludge with nett stone deductions."
        plannedCapabilities={[
          "Nett gold computation with stone and wax weight deduction",
          "Karatmeter XRF photo verification of hallmarked return lots",
          "Real-time bench filings collection vs. agreed wastage threshold",
          "One-click job closure with automatic variance computation",
        ]}
        icon={ArrowDownLeft}
      />
    </AppShell>
  );
}
