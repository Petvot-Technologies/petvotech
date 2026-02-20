"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Calendar, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function formatDisplayDate(value: string): string {
  if (!value || typeof value !== "string") return "";
  const parts = value.trim().split("-").map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) return value;
  const [y, m, d] = parts;
  const date = new Date(y, m - 1, d);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}

function getMonthDays(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startPad = first.getDay();
  const daysInMonth = last.getDate();
  const days: (number | null)[] = [];
  for (let i = 0; i < startPad; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);
  return days;
}

function isPast(year: number, month: number, day: number): boolean {
  const d = new Date(year, month, day);
  const t = new Date();
  d.setHours(0, 0, 0, 0);
  t.setHours(0, 0, 0, 0);
  return d < t;
}

function toValue(year: number, month: number, day: number): string {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

const MONTHS = "January,February,March,April,May,June,July,August,September,October,November,December".split(",");
const WEEKDAYS = "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",");

export interface DatePickerProps {
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  required?: boolean;
  error?: string;
  id?: string;
  placeholder?: string;
}

export function DatePicker({
  value,
  onChange,
  label,
  required,
  error,
  id,
  placeholder = "Pick a date",
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const calendarHeight = 320;
  const calendarWidth = 280;

  const [view, setView] = useState(() => {
    if (value) {
      const parts = value.split("-").map(Number);
      if (parts.length >= 2 && !parts.slice(0, 2).some(Number.isNaN))
        return { year: parts[0], month: parts[1] - 1 };
    }
    const t = new Date();
    return { year: t.getFullYear(), month: t.getMonth() };
  });
  const ref = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      const parts = value.split("-").map(Number);
      if (parts.length >= 2 && !parts.slice(0, 2).some(Number.isNaN))
        setView({ year: parts[0], month: parts[1] - 1 });
    }
  }, [value]);

  useEffect(() => {
    if (!open) return;
    if (value) {
      const parts = value.split("-").map(Number);
      if (parts.length >= 2 && !parts.slice(0, 2).some(Number.isNaN))
        setView({ year: parts[0], month: parts[1] - 1 });
    }
  }, [open, value]);

  useEffect(() => {
    if (open && triggerRef.current && typeof window !== "undefined") {
      const rect = triggerRef.current.getBoundingClientRect();
      const w = Math.max(calendarWidth, rect.width);
      const spaceBelow = window.innerHeight - rect.bottom - 8;
      const spaceAbove = rect.top - 8;
      const openAbove = spaceBelow < calendarHeight && spaceAbove >= spaceBelow;
      let top = openAbove ? rect.top - calendarHeight - 4 : rect.bottom + 4;
      let left = rect.left + rect.width / 2 - w / 2;
      left = Math.max(8, Math.min(left, window.innerWidth - w - 8));
      top = Math.max(8, Math.min(top, window.innerHeight - calendarHeight - 8));
      setPosition({ top, left, width: w });
    }
  }, [open]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (ref.current?.contains(target) || portalRef.current?.contains(target)) return;
      setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  const days = getMonthDays(view.year, view.month);
  const monthName = MONTHS[view.month];

  const prev = () => {
    if (view.month === 0) setView({ year: view.year - 1, month: 11 });
    else setView({ year: view.year, month: view.month - 1 });
  };
  const next = () => {
    if (view.month === 11) setView({ year: view.year + 1, month: 0 });
    else setView({ year: view.year, month: view.month + 1 });
  };

  const select = (day: number) => {
    const v = toValue(view.year, view.month, day);
    onChange(v);
    setOpen(false);
  };

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
        ref={triggerRef}
        type="button"
        id={inputId}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
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
        <Calendar className="h-5 w-5 shrink-0 text-neutral-400" />
        <span className={value ? "text-neutral-900" : "text-neutral-400"}>
          {(value != null && String(value).trim() !== "" ? formatDisplayDate(String(value).trim()) : null) ?? placeholder}
        </span>
        <ChevronDown className="ml-auto h-5 w-5 shrink-0 text-neutral-400" />
      </button>
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={portalRef}
            role="dialog"
            aria-label="Choose date"
            style={{
              position: "fixed",
              top: position.top,
              left: position.left,
              width: position.width || calendarWidth,
              maxWidth: "calc(100vw - 16px)",
              zIndex: 1500,
            }}
            className="rounded-xl border border-neutral-200 bg-white p-4 shadow-xl"
          >
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={prev}
              className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              aria-label="Previous month"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="font-heading text-base font-semibold text-neutral-900">
              {monthName} {view.year}
            </span>
            <button
              type="button"
              onClick={next}
              className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              aria-label="Next month"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {WEEKDAYS.map((w) => (
              <div key={w} className="py-1 text-xs font-medium text-neutral-500">
                {w}
              </div>
            ))}
            {days.map((day, i) => {
              if (day === null) return <div key={`e-${i}`} />;
              const disabled = isPast(view.year, view.month, day);
              const selected = value === toValue(view.year, view.month, day);
              return (
                <button
                  key={day}
                  type="button"
                  disabled={disabled}
                  onClick={() => !disabled && select(day)}
                  className={cn(
                    "h-9 w-9 rounded-lg text-sm transition-colors",
                    disabled && "cursor-not-allowed text-neutral-300",
                    !disabled && "hover:bg-primary-light hover:text-primary",
                    selected && "bg-primary text-white hover:bg-primary-hover hover:text-white"
                  )}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>,
          document.body
        )}
      {error && (
        <p role="alert" className="text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
