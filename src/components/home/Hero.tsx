"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";

const trustItems = [
  { label: "20+ years combined experience", icon: Briefcase },
  { label: "5 core services", icon: Layers },
  { label: "Finance • E-commerce • Healthcare • Education", icon: null },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-white to-primary-light/30">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-72 w-72 rounded-full bg-cream/40 blur-3xl" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center gap-12 px-4 pt-20 pb-16 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium uppercase tracking-wider text-primary"
          >
            For Growing Businesses
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
          >
            Technology That Grows With Your Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-xl text-lg leading-relaxed text-neutral-600 lg:mx-0"
          >
            Enterprise-grade digital solutions without the enterprise complexity or cost.
            Scale smarter, operate efficiently, compete confidently.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm italic text-neutral-500"
          >
            Join 50+ businesses who&apos;ve moved from manual chaos to digital clarity
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link href="/contact">
              <Button variant="primary" size="lg" title="Free consultation included">
                Start Your Project
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="ghost" size="lg" className="gap-2">
                See How It Works
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-neutral-500 lg:justify-start"
          >
            {trustItems.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {item.icon && <item.icon className="h-4 w-4 text-primary" />}
                {item.label}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex-1"
        >
          <div className="relative aspect-[4/3] max-w-xl overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-xl shadow-primary/10 lg:aspect-video">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
              <div className="rounded-xl border-2 border-dashed border-neutral-300 bg-white/80 p-8 text-center">
                <Layers className="mx-auto h-16 w-16 text-primary/60" />
                <p className="mt-2 font-heading text-sm font-medium text-neutral-600">
                  Dashboard / Product screenshot
                </p>
                <p className="text-xs text-neutral-500">Replace with hero visual</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
