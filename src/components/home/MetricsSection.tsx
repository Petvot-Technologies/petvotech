"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const metrics = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "7-Day", label: "Average Start Time" },
];

export function MetricsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="rounded-xl border border-neutral-200 bg-neutral-50 px-8 py-10 text-center transition-colors hover:border-primary/30 hover:bg-primary-light/20"
            >
              <p className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                {m.value}
              </p>
              <p className="mt-2 font-medium text-neutral-700">{m.label}</p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
