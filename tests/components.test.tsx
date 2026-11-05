import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RecentTransactionsTable } from "@/components/dashboard/RecentTransactionsTable";
import { AttentionRequiredAlert } from "@/components/dashboard/AttentionRequiredAlert";
import { Users } from "lucide-react";
import { MOCK_TRANSACTIONS } from "@/data/mock-data";

describe("Component Smoke Tests", () => {
  it("renders Button component with correct text and variant", () => {
    render(<Button variant="primary">Record Gold Issue</Button>);
    expect(screen.getByRole("button", { name: /Record Gold Issue/i })).toBeInTheDocument();
  });

  it("renders Badge component with correct variant text", () => {
    render(<Badge variant="gold">Fixed 3-Decimals</Badge>);
    expect(screen.getByText("Fixed 3-Decimals")).toBeInTheDocument();
  });

  it("renders MetricCard with label, value, and unit", () => {
    render(
      <MetricCard
        label="Active Karigars"
        value="40"
        unit="Artisans"
        subtext="Assigned across 40 benches"
        icon={Users}
        badge="Demo"
      />
    );
    expect(screen.getByText(/Active Karigars/i)).toBeInTheDocument();
    expect(screen.getByText("40")).toBeInTheDocument();
    expect(screen.getByText("Artisans")).toBeInTheDocument();
  });

  it("renders RecentTransactionsTable with exact sample transaction codes", () => {
    render(<RecentTransactionsTable transactions={MOCK_TRANSACTIONS} />);
    // Verify TX-30411, TX-30437, TX-30438 are rendered
    expect(screen.getAllByText("TX-30411").length).toBeGreaterThan(0);
    expect(screen.getAllByText("TX-30437").length).toBeGreaterThan(0);
    expect(screen.getAllByText("TX-30438").length).toBeGreaterThan(0);
    // Verify Murugesan S is rendered
    expect(screen.getAllByText("Murugesan S").length).toBeGreaterThan(0);
    // Verify calculated fine gold values appear in table
    expect(screen.getAllByText("109.920 g").length).toBeGreaterThan(0);
    expect(screen.getAllByText("103.004 g").length).toBeGreaterThan(0);
    expect(screen.getAllByText("3.023 g").length).toBeGreaterThan(0);
  });

  it("renders AttentionRequiredAlert without falsely classifying job as gold loss", () => {
    render(<AttentionRequiredAlert />);
    expect(
      screen.getByText(/Action Required: Outstanding Job Balance Review/i)
    ).toBeInTheDocument();
    expect(screen.getByText("DEMO REVIEW ITEM")).toBeInTheDocument();
    // Verify explicit statement that this is not loss
    expect(
      screen.getByText(/This is not classified as gold loss/i)
    ).toBeInTheDocument();
  });
});
