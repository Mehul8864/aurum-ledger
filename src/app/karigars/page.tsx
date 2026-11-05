import { AppShell } from "@/components/layout/AppShell";
import { ComingSoonView } from "@/components/shared/ComingSoonView";
import { Users } from "lucide-react";

export default function KarigarsPage() {
  return (
    <AppShell>
      <ComingSoonView
        moduleName="Karigar Master Directory"
        moduleCode="MOD-02"
        targetPrompt="Prompt 4"
        description="Comprehensive artisan directory for ~40 workshop karigars, tracking bench allocations, contractual wastage policies, and active job-work liability limits."
        plannedCapabilities={[
          "Karigar profile management with photo and KYC verification",
          "Configurable category wastage percentage matrices",
          "Individual bench gold liability credit limits",
          "Artisan performance, yield, and recovery analytics",
        ]}
        icon={Users}
      />
    </AppShell>
  );
}
