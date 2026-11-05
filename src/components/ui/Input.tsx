import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixNode?: React.ReactNode;
  suffixNode?: React.ReactNode;
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", prefixNode, suffixNode, error, disabled, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {prefixNode && (
          <div className="absolute left-3 flex items-center pointer-events-none text-foreground-muted">
            {prefixNode}
          </div>
        )}
        <input
          type={type}
          ref={ref}
          disabled={disabled}
          className={cn(
            "flex h-9 w-full rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-foreground placeholder:text-foreground-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-primary focus-visible:border-gold-primary disabled:cursor-not-allowed disabled:opacity-50",
            prefixNode && "pl-9",
            suffixNode && "pr-9",
            error && "border-status-danger-border focus-visible:ring-status-danger-text",
            className
          )}
          {...props}
        />
        {suffixNode && (
          <div className="absolute right-3 flex items-center pointer-events-none text-foreground-muted">
            {suffixNode}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
