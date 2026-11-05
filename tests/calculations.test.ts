import { describe, it, expect } from "vitest";
import {
  calculateFineWeight,
  calculateAllowedWastage,
  calculateRunningBalance,
  calculateVariance,
  verifySampleReconciliation,
} from "@/lib/calculations";

describe("Gold Accounting Mathematical Engine", () => {
  it("calculates fine gold weight accurately to 3 decimal places without IEEE drift", () => {
    // 120.000 g @ 91.60% purity
    const fineWeight = calculateFineWeight("120.000", "91.60");
    expect(fineWeight.toFixed(3)).toBe("109.920");

    // 112.450 g @ 91.60% purity
    const necklaceFine = calculateFineWeight("112.450", "91.60");
    expect(necklaceFine.toFixed(3)).toBe("103.004");

    // 3.300 g @ 91.60% purity
    const scrapFine = calculateFineWeight("3.300", "91.60");
    expect(scrapFine.toFixed(3)).toBe("3.023");
  });

  it("calculates contractual allowed wastage to 3 decimal places", () => {
    // 3.00% allowed on 109.920 g issue fine weight
    const wastage = calculateAllowedWastage("109.920", "3.00");
    expect(wastage.toFixed(3)).toBe("3.298");
  });

  it("calculates running fine balance correctly", () => {
    // 109.920 g issued - (103.004 g necklace + 3.023 g scrap = 106.027 g)
    const running = calculateRunningBalance("109.920", "106.027");
    expect(running.toFixed(3)).toBe("3.893");
  });

  it("calculates potential excess variance correctly", () => {
    // 3.893 g outstanding balance - 3.298 g allowed wastage
    const variance = calculateVariance("3.893", "3.298");
    expect(variance.toFixed(3)).toBe("0.595");
  });

  it("verifies full client sample sequence end-to-end", () => {
    const result = verifySampleReconciliation();
    expect(result.issueFine.toFixed(3)).toBe("109.920");
    expect(result.necklaceFine.toFixed(3)).toBe("103.004");
    expect(result.scrapFine.toFixed(3)).toBe("3.023");
    expect(result.runningBalance.toFixed(3)).toBe("3.893");
    expect(result.allowedWastage.toFixed(3)).toBe("3.298");
    expect(result.excessVariance.toFixed(3)).toBe("0.595");
  });
});
