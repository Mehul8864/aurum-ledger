"use client";

import * as React from "react";
import { Dialog } from "./Dialog";
import { Button } from "./Button";
import { AlertCircle } from "lucide-react";

export interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isDestructive?: boolean;
  isLoading?: boolean;
}

export function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  isDestructive = false,
  isLoading = false,
}: ConfirmationDialogProps) {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      footer={
        <>
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
            disabled={isLoading}
          >
            {cancelLabel}
          </Button>
          <Button
            variant={isDestructive ? "danger" : "primary"}
            size="sm"
            onClick={onConfirm}
            isLoading={isLoading}
          >
            {confirmLabel}
          </Button>
        </>
      }
    >
      <div className="flex items-start space-x-3">
        {isDestructive && (
          <div className="p-2 rounded-full bg-status-danger-bg text-status-danger-text shrink-0 mt-0.5">
            <AlertCircle className="h-4 w-4" />
          </div>
        )}
        <p className="text-xs text-foreground-muted leading-relaxed">
          {message}
        </p>
      </div>
    </Dialog>
  );
}
