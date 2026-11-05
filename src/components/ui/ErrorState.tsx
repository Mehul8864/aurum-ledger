import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";
import { Button } from "./Button";

export interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorState({
  title = "Failed to load records",
  message,
  onRetry,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-6 text-center rounded-lg border border-status-danger-border bg-status-danger-bg/50",
        className
      )}
    >
      <div className="p-2.5 bg-status-danger-border/40 rounded-full mb-3 text-status-danger-text">
        <AlertTriangle className="h-5 w-5" />
      </div>
      <h4 className="text-sm font-semibold text-status-danger-text">{title}</h4>
      <p className="text-xs text-foreground-muted mt-1 max-w-sm">{message}</p>
      {onRetry && (
        <Button
          variant="secondary"
          size="sm"
          onClick={onRetry}
          className="mt-3"
        >
          Try Again
        </Button>
      )}
    </div>
  );
}
