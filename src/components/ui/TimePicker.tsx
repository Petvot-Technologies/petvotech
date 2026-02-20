"use client";

import { useState, useRef, useEffect } from "react";
import { Clock, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const SLOTS: { value: string; label: string }[] = [
  { value: "08:00", label: "8:00 AM" },
  { value: "08:30", label: "8:30 AM" },
  { value: "09:00", label: "9:00 AM" },
  { value: "09:30", label: "9:30 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "10:30", label: "10:30 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "11:30", label: "11:30 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "12:30", label: "12:30 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "13:30", label: "1:30 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "14:30", label: "2:30 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "15:30", label: "3:30 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "16:30", label: "4:30 PM" },
  { value: "17:00", label: "5:00 PM" },
  { value: "17:30", label: "5:30 PM" },
  { value: "18:00", label: "6:00 PM" },
];

function labelFor(value: string): string {
  return SLOTS.find((s) => s.value === value)?.label ?? value;
}

export interface TimePickerProps {
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  required?: boolean;
  error?: string;
  id?: string;
  placeholder?: string;
}

export function TimePicker({
  value,
  onChange,
  label,
  required,
  error,
  id,
  placeholder = "Select time",
}: TimePickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  const inputId = id ?? label?.toLowerCase().replace(/\s/g, "-");

  return (
    <div ref={ref} className="relative space-y-2">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-neutral-700">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <button
        type="button"
        id={inputId}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-invalid={!!error}
        className={cn(
          "flex h-11 w-full items-center gap-2 rounded-lg border bg-white px-3 py-2 text-left text-base transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-offset-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error
            ? "border-error focus:border-error focus:ring-error/20"
            : "border-neutral-300 focus:border-primary focus:ring-primary/20"
        )}
      >
        <Clock className="h-5 w-5 shrink-0 text-neutral-400" />
        <span className={value ? "text-neutral-900" : "text-neutral-400"}>
          {value ? labelFor(value) : placeholder}
        </span>
        <ChevronDown className="ml-auto h-5 w-5 shrink-0 text-neutral-400" />
      </button>
      {open && (
        <div
          role="listbox"
          aria-label="Choose time"
          className="absolute z-50 mt-1 max-h-56 w-full min-w-[160px] overflow-auto rounded-xl border border-neutral-200 bg-white py-2 shadow-xl"
        >
          {SLOTS.map((slot) => {
            const selected = value === slot.value;
            return (
              <button
                key={slot.value}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  onChange(slot.value);
                  setOpen(false);
                }}
                className={cn(
                  "w-full px-3 py-2.5 text-left text-sm transition-colors",
                  selected
                    ? "bg-primary-light font-medium text-primary"
                    : "text-neutral-700 hover:bg-neutral-50"
                )}
              >
                {slot.label}
              </button>
            );
          })}
        </div>
      )}
      {error && (
        <p role="alert" className="text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
