"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScheduleCallButton } from "@/components/ScheduleCallButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[1100] border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-xl font-bold text-neutral-900"
        >
          <span className="text-primary">Petvot</span>
          <span>Tech</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-neutral-600 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <ScheduleCallButton variant="ghost" size="sm" />
          <Link href="/contact">
            <Button variant="primary" size="sm">Start Your Project</Button>
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-700 hover:bg-neutral-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-neutral-200 bg-white md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <ul className="flex flex-col px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-3 text-neutral-600 hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4 flex flex-col gap-2">
            <ScheduleCallButton variant="outline" size="md" fullWidth onClick={() => setOpen(false)} />
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button variant="primary" size="md" fullWidth>Start Your Project</Button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
