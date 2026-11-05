import Decimal from "decimal.js";

/**
 * Format gram weights strictly to 3 decimal places (0.001 g / 1 mg precision).
 * Example: 109.92 -> "109.920 g"
 */
export function formatGrams(
  value: number | string | Decimal | null | undefined,
  includeUnit: boolean = true
): string {
  if (value === null || value === undefined || value === "") {
    return includeUnit ? "0.000 g" : "0.000";
  }

  try {
    const d = new Decimal(value.toString());
    const formatted = d.toFixed(3);
    return includeUnit ? `${formatted} g` : formatted;
  } catch {
    return includeUnit ? "0.000 g" : "0.000";
  }
}

/**
 * Format purity percentages strictly to 2 decimal places.
 * Example: 91.6 -> "91.60%"
 */
export function formatPurity(
  value: number | string | Decimal | null | undefined,
  includeSymbol: boolean = true
): string {
  if (value === null || value === undefined || value === "") {
    return includeSymbol ? "0.00%" : "0.00";
  }

  try {
    const d = new Decimal(value.toString());
    const formatted = d.toFixed(2);
    return includeSymbol ? `${formatted}%` : formatted;
  } catch {
    return includeSymbol ? "0.00%" : "0.00";
  }
}

/**
 * Format monetary values into Indian Rupee (INR) representation with 2 decimal places.
 * Example: 245000 -> "₹2,45,000.00"
 */
export function formatINR(
  value: number | string | Decimal | null | undefined,
  includeSymbol: boolean = true
): string {
  if (value === null || value === undefined || value === "") {
    return includeSymbol ? "₹0.00" : "0.00";
  }

  try {
    const d = new Decimal(value.toString());
    const num = d.toNumber();
    const formatted = new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);

    return includeSymbol ? `₹${formatted}` : formatted;
  } catch {
    return includeSymbol ? "₹0.00" : "0.00";
  }
}

/**
 * Format date in Indian Standard Time style.
 * Example: "05 Nov 2026"
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
}

/**
 * Format time in 12-hour format with AM/PM.
 * Example: "11:45 AM"
 */
export function formatTime(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(d);
}
