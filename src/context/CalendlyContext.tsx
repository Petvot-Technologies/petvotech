"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { ScheduleCallModal } from "@/components/schedule-call/ScheduleCallModal";

const CalendlyContext = createContext<{ openCalendly: () => void } | null>(null);

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openCalendly = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);

  return (
    <CalendlyContext.Provider value={{ openCalendly }}>
      {children}
      <ScheduleCallModal open={open} onClose={onClose} />
    </CalendlyContext.Provider>
  );
}

export function useCalendly() {
  const ctx = useContext(CalendlyContext);
  if (!ctx) return { openCalendly: () => window.open(process.env.NEXT_PUBLIC_CALENDLY_EMBED_URL || "https://calendly.com", "_blank") };
  return ctx;
}
