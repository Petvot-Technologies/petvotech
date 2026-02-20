"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScheduleCallForm } from "./ScheduleCallForm";

export interface ScheduleCallModalProps {
  open: boolean;
  onClose: () => void;
}

export function ScheduleCallModal({ open, onClose }: ScheduleCallModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1400] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="schedule-call-modal-title"
    >
      <div
        className="absolute inset-0 bg-neutral-900/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
          <h2
            id="schedule-call-modal-title"
            className="font-heading text-lg font-semibold text-neutral-900"
          >
            Schedule a call
          </h2>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <p className="px-4 pb-4 text-sm text-neutral-600">
          Pick a date and time that works for you. We&apos;ll confirm and send a calendar invite.
        </p>
        <div className="overflow-y-auto px-4 pb-6">
          <ScheduleCallForm onCancel={onClose} />
        </div>
      </div>
    </div>
  );
}
