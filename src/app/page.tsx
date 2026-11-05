import * as React from "react";
import { AppShell } from "@/components/layout/AppShell";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { RecentTransactionsTable } from "@/components/dashboard/RecentTransactionsTable";
import { PendingJobsList } from "@/components/dashboard/PendingJobsList";
import { AttentionRequiredAlert } from "@/components/dashboard/AttentionRequiredAlert";
import { CalculationExplainer } from "@/components/dashboard/CalculationExplainer";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import {
  Users,
  Briefcase,
  ArrowUpRight,
  ArrowDownLeft,
  Sparkles,
  BarChart3,
  History,
  Clock,
  ShieldAlert,
} from "lucide-react";
import {
  MOCK_METRICS,
  MOCK_ACTIVITY_DATA,
  MOCK_TRANSACTIONS,
  MOCK_JOBS_AWAITING,
} from "@/data/mock-data";
import { formatGrams } from "@/lib/formatters";

export default function WorkshopOverviewPage() {
  return (
    <AppShell>
      {/* SECTION A: Welcome Section & Environmental Notice */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-2 border-b border-border/80">
        <div>
          <div className="flex items-center space-x-2.5">
            <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
              Workshop Overview
            </h1>
            <Badge variant="gold" size="sm">
              <Sparkles className="h-3 w-3 mr-1" />
              PROTOTYPE DEMO
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-foreground-muted mt-1">
            Your jewellery workshop at a glance. Real-time fine gold balances across Coimbatore benches.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-surface border border-border px-3 py-1.5 rounded-md text-xs text-foreground-muted shadow-subtle shrink-0">
          <ShieldAlert className="h-3.5 w-3.5 text-gold-primary shrink-0" />
          <span>Notice: Preview environment with synthetic demo data</span>
        </div>
      </div>

      {/* SECTION B: Core Metric Cards */}
      <section aria-label="Key Performance Indicators">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Active Karigars"
            value={String(MOCK_METRICS.activeKarigars)}
            unit="Artisans"
            subtext="Assigned across 40 benches"
            icon={Users}
            badge="Demo"
          />
          <MetricCard
            label="Jobs In Progress"
            value={String(MOCK_METRICS.jobsInProgress)}
            unit="Job Cards"
            subtext="Active bench manufacturing"
            icon={Briefcase}
            badge="Demo"
          />
          <MetricCard
            label="Issued Today"
            value={formatGrams(MOCK_METRICS.issuedTodayGrams, false)}
            unit="g (Fine)"
            subtext="Vault safe release today"
            icon={ArrowUpRight}
            badge="Demo"
          />
          <MetricCard
            label="Received Today"
            value={formatGrams(MOCK_METRICS.receivedTodayGrams, false)}
            unit="g (Fine)"
            subtext="Finished goods + scrap"
            icon={ArrowDownLeft}
            badge="Demo"
          />
        </div>
      </section>

      {/* SECTION F: Attention Required Alert (Placed prominently above charts for operational urgency) */}
      <section aria-label="Attention Required">
        <AttentionRequiredAlert />
      </section>

      {/* SECTION C & D: Activity Chart & Recent Verified Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Chart (Takes 2 cols on desktop) */}
        <div className="lg:col-span-2">
          <Card className="h-full flex flex-col justify-between">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4 text-gold-primary" />
                  <span>7-Day Workshop Activity</span>
                </CardTitle>
                <CardDescription>
                  Daily gold issued from vault vs. returned finished jewellery & scrap
                </CardDescription>
              </div>
              <Badge variant="outline">7 Days Rolling</Badge>
            </CardHeader>
            <CardContent className="pt-2">
              <ActivityChart data={MOCK_ACTIVITY_DATA} />
            </CardContent>
          </Card>
        </div>

        {/* Calculation Standard Explainer (Takes 1 col on desktop) */}
        <div className="lg:col-span-1">
          <CalculationExplainer />
        </div>
      </div>

      {/* SECTION D: Recent Transactions (Includes TX-30411, TX-30437, TX-30438) */}
      <section aria-label="Recent Transactions">
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-3 gap-2">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <History className="h-4 w-4 text-gold-primary" />
                <span>Recent Transactions</span>
              </CardTitle>
              <CardDescription>
                Verified issue and receipt sequence for Murugesan S (Bench 04)
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="gold">Fixed 3-Decimals</Badge>
              <Badge variant="default">Audit Verified</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <RecentTransactionsTable transactions={MOCK_TRANSACTIONS} />
          </CardContent>
        </Card>
      </section>

      {/* SECTION E: Jobs Awaiting Completion */}
      <section aria-label="Jobs Awaiting Completion">
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-3 gap-2">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gold-primary" />
                <span>Jobs Awaiting Completion</span>
              </CardTitle>
              <CardDescription>
                Open jobs requiring bench filings collection or final inspection before closure
              </CardDescription>
            </div>
            <Badge variant="outline">18 Active Jobs</Badge>
          </CardHeader>
          <CardContent>
            <PendingJobsList jobs={MOCK_JOBS_AWAITING} />
          </CardContent>
        </Card>
      </section>
    </AppShell>
  );
}
