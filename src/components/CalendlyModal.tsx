"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const CALENDLY_EMBED_URL =
  process.env.NEXT_PUBLIC_CALENDLY_EMBED_URL ||
  "https://calendly.com/petvotech08/30min";

export interface CalendlyModalProps {
  open: boolean;
  onClose: () => void;
}

export function CalendlyModal({ open, onClose }: CalendlyModalProps) {
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
      aria-labelledby="calendly-modal-title"
    >
      <div
        className="absolute inset-0 bg-neutral-900/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 flex h-[90vh] w-full max-w-4xl flex-col rounded-2xl border border-neutral-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
          <h2 id="calendly-modal-title" className="font-heading text-lg font-semibold text-neutral-900">
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
        <p className="px-4 pb-2 text-sm text-neutral-600">
          Pick a date and time below. You can add context for the call (e.g. why you&apos;re booking) in the booking form.
        </p>
        <div className="min-h-0 flex-1 overflow-hidden rounded-b-2xl">
          <iframe
            src={CALENDLY_EMBED_URL}
            title="Schedule a call with Petvot Tech"
            className="h-full w-full min-h-[500px] border-0"
          />
        </div>
      </div>
    </div>
  );
}
