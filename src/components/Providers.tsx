"use client";

import { CalendlyProvider } from "@/context/CalendlyContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <CalendlyProvider>{children}</CalendlyProvider>;
}
