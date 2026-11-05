import { describe, it, expect } from "vitest";
import { formatGrams, formatPurity, formatINR } from "@/lib/formatters";

describe("Formatting Utilities", () => {
  describe("formatGrams", () => {
    it("formats standard numbers to 3 decimal places with unit", () => {
      expect(formatGrams(109.92)).toBe("109.920 g");
      expect(formatGrams("103.004")).toBe("103.004 g");
      expect(formatGrams(3.893)).toBe("3.893 g");
    });

    it("formats values without unit when requested", () => {
      expect(formatGrams(1250, false)).toBe("1250.000");
    });

    it("handles zero, null, undefined, and empty string safely", () => {
      expect(formatGrams(0)).toBe("0.000 g");
      expect(formatGrams(null)).toBe("0.000 g");
      expect(formatGrams(undefined)).toBe("0.000 g");
      expect(formatGrams("")).toBe("0.000 g");
    });
  });

  describe("formatPurity", () => {
    it("formats purities strictly to 2 decimal places with %", () => {
      expect(formatPurity(91.6)).toBe("91.60%");
      expect(formatPurity(75)).toBe("75.00%");
      expect(formatPurity(99.9)).toBe("99.90%");
    });

    it("handles zero and invalid inputs safely", () => {
      expect(formatPurity(null)).toBe("0.00%");
      expect(formatPurity(undefined)).toBe("0.00%");
    });
  });

  describe("formatINR", () => {
    it("formats Indian currency with symbol and 2 decimals", () => {
      expect(formatINR(245000)).toBe("₹2,45,000.00");
      expect(formatINR(1250.5)).toBe("₹1,250.50");
    });

    it("handles zero safely", () => {
      expect(formatINR(0)).toBe("₹0.00");
      expect(formatINR(null)).toBe("₹0.00");
    });
  });
});
