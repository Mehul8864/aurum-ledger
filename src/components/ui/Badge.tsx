import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "gold"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "outline";
  size?: "sm" | "md";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "sm", children, ...props }, ref) => {
    const variantStyles = {
      default: "bg-surface-subtle text-foreground border-border",
      gold: "bg-gold-subtle text-gold-primary border-gold-border",
      success:
        "bg-status-success-bg text-status-success-text border-status-success-border",
      warning:
        "bg-status-warning-bg text-status-warning-text border-status-warning-border",
      danger:
        "bg-status-danger-bg text-status-danger-text border-status-danger-border",
      info: "bg-status-info-bg text-status-info-text border-status-info-border",
      outline: "bg-transparent text-foreground-muted border-border",
    };

    const sizeStyles = {
      sm: "px-2 py-0.5 text-[11px] font-medium tracking-tight",
      md: "px-2.5 py-1 text-xs font-medium",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border leading-none transition-colors",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
