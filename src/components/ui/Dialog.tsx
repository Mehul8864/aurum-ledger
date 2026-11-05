"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function Dialog({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  className,
}: DialogProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-150"
    >
      <div
        className={cn(
          "w-full max-w-lg rounded-lg border border-border bg-surface p-6 shadow-popover relative transition-all animate-in zoom-in-95 duration-150",
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 rounded-md text-foreground-muted hover:text-foreground hover:bg-surface-subtle transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="space-y-1 mb-4">
          <h2 className="text-base font-semibold text-foreground tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="text-xs text-foreground-muted">{description}</p>
          )}
        </div>

        <div className="py-2">{children}</div>

        {footer && (
          <div className="mt-6 flex items-center justify-end space-x-2 pt-4 border-t border-border/50">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
