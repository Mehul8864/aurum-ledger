"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  badge?: string | number;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onChange, className }: TabsProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "flex space-x-1 border-b border-border/80 bg-transparent overflow-x-auto",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              "flex items-center space-x-2 py-2 px-3 text-xs font-medium border-b-2 -mb-px transition-colors whitespace-nowrap",
              isActive
                ? "border-gold-primary text-gold-primary font-semibold"
                : "border-transparent text-foreground-muted hover:text-foreground hover:border-border"
            )}
          >
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.2 text-[10px] leading-none",
                  isActive
                    ? "bg-gold-subtle text-gold-primary"
                    : "bg-surface-subtle text-foreground-muted"
                )}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
