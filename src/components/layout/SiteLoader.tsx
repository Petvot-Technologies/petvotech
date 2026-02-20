"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.png";

const MIN_DISPLAY_MS = 600;
const FADE_OUT_MS = 400;
const MAX_WAIT_MS = 4000;

export function SiteLoader() {
  const [phase, setPhase] = useState<"show" | "fade" | "gone">("show");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    const start = Date.now();

    const hide = () => {
      const elapsed = Date.now() - start;
      const delay = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(() => {
        setPhase("fade");
        setTimeout(() => setPhase("gone"), FADE_OUT_MS);
      }, delay);
    };

    if (document.readyState === "complete") {
      hide();
      return;
    }

    window.addEventListener("load", hide);
    const fallback = setTimeout(hide, MAX_WAIT_MS);
    return () => {
      window.removeEventListener("load", hide);
      clearTimeout(fallback);
    };
  }, [mounted]);

  if (!mounted || phase === "gone") return null;

  const logoSrc = typeof logo === "string" ? logo : (logo as { src: string }).src;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8 bg-neutral-0 transition-opacity duration-[400ms] ease-out",
        phase === "fade" && "opacity-0"
      )}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <img
            src={logoSrc}
            alt=""
            width={120}
            height={48}
            className="h-12 w-auto object-contain"
          />
          <div className="absolute -bottom-6 left-1/2 h-1 w-16 -translate-x-1/2 overflow-hidden rounded-full bg-neutral-100">
            <div className="h-full w-full animate-loading-bar rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
