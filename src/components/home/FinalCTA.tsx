"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useCalendly } from "@/context/CalendlyContext";

export function FinalCTA() {
  const { openCalendly } = useCalendly();
  return (
    <section className="bg-primary py-24 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
      >
        <p className="text-sm font-medium uppercase tracking-wide text-white/90">
          Ready to Transform?
        </p>
        <h2 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">
          Let&apos;s Build Something Great Together
        </h2>
        <p className="mt-6 text-lg text-white/90">
          Free consultation. No pressure. Just an honest conversation about what
          you need and how we can help.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button variant="white" size="lg">
              Start Your Project
            </Button>
          </Link>
          <Button
            type="button"
            variant="secondary"
            size="lg"
            className="border-white text-white hover:bg-white/20 hover:text-white"
            onClick={openCalendly}
          >
            Schedule a Call
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/80">
          We respond within 24 hours. Quotes delivered in 3 business days.
        </p>
        <p className="mt-4 text-sm text-white/70">
          Prefer email? Send us your project brief at{" "}
          <a
            href="mailto:info@petvotech.com"
            className="underline hover:text-white"
          >
            info@petvotech.com
          </a>
        </p>
      </motion.div>
    </section>
  );
}
