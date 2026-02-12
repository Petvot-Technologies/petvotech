"use client";

import { useCalendly } from "@/context/CalendlyContext";
import { Button } from "@/components/ui/Button";

export function ScheduleCallButton({
  variant = "outline",
  size = "sm",
  fullWidth,
  className,
  onClick,
  children = "Schedule a call",
}: {
  variant?: "outline" | "primary" | "secondary" | "ghost" | "white" | "link";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "icon";
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  const { openCalendly } = useCalendly();
  const handleClick = () => {
    openCalendly();
    onClick?.();
  };
  return (
    <Button type="button" variant={variant} size={size} fullWidth={fullWidth} className={className} onClick={handleClick}>
      {children}
    </Button>
  );
}
