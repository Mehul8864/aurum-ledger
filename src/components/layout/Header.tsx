"use client";

import * as React from "react";
import { Menu, Calendar, Clock } from "lucide-react";
import { usePathname } from "next/navigation";
import { formatDate } from "@/lib/formatters";

export interface HeaderProps {
  onToggleMobileNav: () => void;
}

export function Header({ onToggleMobileNav }: HeaderProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);
  const [currentDate, setCurrentDate] = React.useState<Date>(new Date());

  React.useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const getPageInfo = () => {
    switch (pathname) {
      case "/":
        return { title: "Workshop Overview", breadcrumb: "Operations / Overview" };
      case "/karigars":
        return { title: "Karigar Master Directory", breadcrumb: "Operations / Karigars" };
      case "/gold-issue":
        return { title: "Gold Issue Workflow", breadcrumb: "Operations / Issue" };
      case "/gold-receipt":
        return { title: "Gold Receipt Workflow", breadcrumb: "Operations / Receipt" };
      case "/karigar-ledger":
        return { title: "Karigar Ledger & Statements", breadcrumb: "Operations / Ledger" };
      case "/loss-alerts":
        return { title: "Loss & Variance Alerts", breadcrumb: "Operations / Loss Alerts" };
      case "/daily-stock":
        return { title: "Daily Vault Stock", breadcrumb: "Operations / Daily Stock" };
      case "/old-gold":
        return { title: "Old Gold Intake Desk", breadcrumb: "Operations / Old Gold" };
      default:
        return { title: "Aurum Ledger", breadcrumb: "Operations" };
    }
  };

  const { title, breadcrumb } = getPageInfo();

  return (
    <header className="sticky top-0 z-30 flex h-14 w-full items-center justify-between border-b border-border bg-surface/90 px-4 sm:px-6 backdrop-blur-md">
      {/* Left section: Mobile trigger + Title & Breadcrumb */}
      <div className="flex items-center space-x-3">
        <button
          type="button"
          onClick={onToggleMobileNav}
          className="lg:hidden p-1.5 rounded-md text-foreground-muted hover:text-foreground hover:bg-surface-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div>
          <div className="text-[10px] uppercase tracking-wider text-foreground-muted/70 hidden sm:block">
            {breadcrumb}
          </div>
          <div className="text-sm font-semibold tracking-tight text-foreground truncate max-w-[200px] sm:max-w-xs md:max-w-md">
            {title}
          </div>
        </div>
      </div>

      {/* Right section: Real-time Date and Indian Workshop Time Display */}
      <div className="flex items-center space-x-4 text-xs text-foreground-muted">
        <div className="hidden md:flex items-center space-x-1.5 bg-surface-subtle border border-border px-2.5 py-1 rounded-md">
          <Calendar className="h-3.5 w-3.5 text-gold-primary" />
          <span className="font-medium text-foreground">
            {mounted ? formatDate(currentDate) : "05 Nov 2026"}
          </span>
        </div>

        <div className="flex items-center space-x-1.5 bg-surface-subtle border border-border px-2.5 py-1 rounded-md tabular-nums">
          <Clock className="h-3.5 w-3.5 text-gold-primary" />
          <span className="font-medium text-foreground">
            {mounted
              ? currentDate.toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
              : "11:45 AM"}
          </span>
          <span className="text-[10px] text-foreground-muted uppercase">IST</span>
        </div>
      </div>
    </header>
  );
}
