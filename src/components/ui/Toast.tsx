"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export type ToastType = "success" | "warning" | "danger" | "info";

export interface ToastProps {
  id: string;
  type?: ToastType;
  title: string;
  message?: string;
  onDismiss: (id: string) => void;
}

export function Toast({
  id,
  type = "info",
  title,
  message,
  onDismiss,
}: ToastProps) {
  const icons = {
    success: <CheckCircle2 className="h-4 w-4 text-status-success-text" />,
    warning: <AlertCircle className="h-4 w-4 text-status-warning-text" />,
    danger: <AlertCircle className="h-4 w-4 text-status-danger-text" />,
    info: <Info className="h-4 w-4 text-status-info-text" />,
  };

  const borders = {
    success: "border-status-success-border",
    warning: "border-status-warning-border",
    danger: "border-status-danger-border",
    info: "border-status-info-border",
  };

  return (
    <div
      role="status"
      className={cn(
        "flex items-start space-x-3 w-80 rounded-md border bg-surface p-3 shadow-elevation animate-in slide-in-from-bottom-2",
        borders[type]
      )}
    >
      <div className="shrink-0 mt-0.5">{icons[type]}</div>
      <div className="flex-1 space-y-0.5">
        <p className="text-xs font-semibold text-foreground">{title}</p>
        {message && <p className="text-[11px] text-foreground-muted">{message}</p>}
      </div>
      <button
        onClick={() => onDismiss(id)}
        className="p-0.5 text-foreground-muted hover:text-foreground"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
