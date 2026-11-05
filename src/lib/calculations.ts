import Decimal from "decimal.js";

// Configure Decimal precision and rounding mode (Round Half-Up)
Decimal.set({ precision: 20, rounding: Decimal.ROUND_HALF_UP });

export interface CalculationResult {
  grossWeight: Decimal;
  purityPct: Decimal;
  fineWeight: Decimal;
  fineWeightFormatted: string;
}

/**
 * Calculates fine gold weight from gross weight and purity percentage.
 * Formula: Gross Weight * (Purity % / 100)
 * Precision: Fixed to 3 decimal places (0.001 g)
 */
export function calculateFineWeight(
  grossWeight: number | string | Decimal,
  purityPct: number | string | Decimal
): Decimal {
  const gross = new Decimal(grossWeight.toString());
  const purity = new Decimal(purityPct.toString());
  const fine = gross.times(purity).dividedBy(100);
  return fine.toDecimalPlaces(3, Decimal.ROUND_HALF_UP);
}

/**
 * Calculates allowed contractual wastage in grams based on issued fine weight.
 * Formula: Issue Fine Weight * (Allowed Wastage % / 100)
 */
export function calculateAllowedWastage(
  issueFineWeight: number | string | Decimal,
  wastagePct: number | string | Decimal
): Decimal {
  const fine = new Decimal(issueFineWeight.toString());
  const wastage = new Decimal(wastagePct.toString());
  return fine.times(wastage).dividedBy(100).toDecimalPlaces(3, Decimal.ROUND_HALF_UP);
}

/**
 * Calculates running fine balance for a job.
 * Formula: Issued Fine Weight - Total Returned Fine Weight (Finished + Scrap + Filings)
 */
export function calculateRunningBalance(
  issuedFine: number | string | Decimal,
  returnedFineTotal: number | string | Decimal
): Decimal {
  const issued = new Decimal(issuedFine.toString());
  const returned = new Decimal(returnedFineTotal.toString());
  return issued.minus(returned).toDecimalPlaces(3, Decimal.ROUND_HALF_UP);
}

/**
 * Calculates excess variance after job closure.
 * Formula: Running Fine Balance - Allowed Wastage
 * Positive variance indicates excess unaccounted difference pending reconciliation.
 */
export function calculateVariance(
  runningBalance: number | string | Decimal,
  allowedWastage: number | string | Decimal
): Decimal {
  const balance = new Decimal(runningBalance.toString());
  const allowed = new Decimal(allowedWastage.toString());
  return balance.minus(allowed).toDecimalPlaces(3, Decimal.ROUND_HALF_UP);
}

/**
 * Complete verification model for sample transaction sequence:
 * Issue: 120.000 g @ 91.60% -> 109.920 g
 * Necklace: 112.450 g @ 91.60% -> 103.004 g
 * Scrap: 3.300 g @ 91.60% -> 3.023 g
 * Running Balance: 109.920 - 103.004 - 3.023 = 3.893 g
 * Allowed Wastage (3.00%): 109.920 * 0.03 = 3.298 g
 * Excess Variance: 3.893 - 3.298 = 0.595 g
 */
export function verifySampleReconciliation(): {
  issueFine: Decimal;
  necklaceFine: Decimal;
  scrapFine: Decimal;
  runningBalance: Decimal;
  allowedWastage: Decimal;
  excessVariance: Decimal;
} {
  const issueFine = calculateFineWeight("120.000", "91.60"); // 109.920
  const necklaceFine = calculateFineWeight("112.450", "91.60"); // 103.004
  const scrapFine = calculateFineWeight("3.300", "91.60"); // 3.023
  const totalReturned = necklaceFine.plus(scrapFine); // 106.027
  const runningBalance = calculateRunningBalance(issueFine, totalReturned); // 3.893
  const allowedWastage = calculateAllowedWastage(issueFine, "3.00"); // 3.298
  const excessVariance = calculateVariance(runningBalance, allowedWastage); // 0.595

  return {
    issueFine,
    necklaceFine,
    scrapFine,
    runningBalance,
    allowedWastage,
    excessVariance,
  };
}
