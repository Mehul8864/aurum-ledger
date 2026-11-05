"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  ArrowUpRight,
  ArrowDownLeft,
  BookOpen,
  AlertOctagon,
  Scale,
  Coins,
  ShieldCheck,
} from "lucide-react";
import type { NavItem } from "@/types/navigation";

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: "overview",
    label: "Overview",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    id: "karigars",
    label: "Karigar Master",
    href: "/karigars",
    icon: Users,
    badge: "40",
    isComingSoon: true,
  },
  {
    id: "gold-issue",
    label: "Gold Issue",
    href: "/gold-issue",
    icon: ArrowUpRight,
    isComingSoon: true,
  },
  {
    id: "gold-receipt",
    label: "Gold Receipt",
    href: "/gold-receipt",
    icon: ArrowDownLeft,
    isComingSoon: true,
  },
  {
    id: "karigar-ledger",
    label: "Karigar Ledger",
    href: "/karigar-ledger",
    icon: BookOpen,
    isComingSoon: true,
  },
  {
    id: "loss-alerts",
    label: "Loss Alerts",
    href: "/loss-alerts",
    icon: AlertOctagon,
    badge: "Demo",
    badgeVariant: "warning",
    isComingSoon: true,
  },
  {
    id: "daily-stock",
    label: "Daily Stock",
    href: "/daily-stock",
    icon: Scale,
    isComingSoon: true,
  },
  {
    id: "old-gold",
    label: "Old Gold Desk",
    href: "/old-gold",
    icon: Coins,
    isComingSoon: true,
  },
];

export interface SidebarProps {
  className?: string;
  onNavigate?: () => void;
}

export function Sidebar({ className, onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-surface-subtle border-r border-border text-foreground select-none",
        className
      )}
    >
      {/* Brand Header */}
      <div className="flex flex-col px-6 py-5 border-b border-border/80 bg-surface">
        <div className="flex items-center space-x-2.5">
          <div className="h-7 w-7 rounded bg-gold-primary flex items-center justify-center text-white shadow-subtle shrink-0">
            <span className="font-serif font-bold text-sm tracking-widest">AL</span>
          </div>
          <div>
            <span className="text-base font-semibold tracking-tight text-foreground block leading-tight">
              AURUM LEDGER
            </span>
            <span className="text-[10px] tracking-wider uppercase text-gold-primary font-medium block">
              Every gram accounted for.
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <div className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-foreground-muted/80">
          Workshop Operations
        </div>
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "group flex items-center justify-between rounded-md px-3 py-2 text-xs font-medium transition-colors",
                isActive
                  ? "bg-surface text-gold-primary border border-border shadow-subtle font-semibold"
                  : "text-foreground-muted hover:text-foreground hover:bg-surface/60"
              )}
            >
              <div className="flex items-center space-x-2.5 min-w-0">
                <Icon
                  className={cn(
                    "h-4 w-4 shrink-0 transition-colors",
                    isActive
                      ? "text-gold-primary"
                      : "text-foreground-muted group-hover:text-foreground"
                  )}
                />
                <span className="truncate">{item.label}</span>
              </div>

              {item.badge && (
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[10px] font-medium leading-none shrink-0",
                    item.badgeVariant === "warning"
                      ? "bg-status-warning-bg text-status-warning-text border border-status-warning-border"
                      : "bg-surface text-foreground-muted border border-border"
                  )}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Workshop Terminal Status Footer */}
      <div className="p-4 border-t border-border/80 bg-surface/50 text-xs">
        <div className="flex items-center space-x-2 text-[11px] text-foreground-muted">
          <ShieldCheck className="h-4 w-4 text-status-success-text shrink-0" />
          <div className="truncate">
            <span className="font-medium text-foreground block truncate">
              Coimbatore Central Unit
            </span>
            <span className="text-[10px] text-foreground-muted block">
              Analytical Balances Online
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
