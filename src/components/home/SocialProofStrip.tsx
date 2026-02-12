"use client";

import { motion } from "framer-motion";

const metrics = [
  "50+ Projects Delivered",
  "98% Client Satisfaction",
  "7-Day Average Start Time",
];

export function SocialProofStrip() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-sm text-neutral-600">
          Trusted by businesses across Nigeria and beyond
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-12"
        >
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="rounded-lg border border-neutral-200 bg-white px-6 py-3 text-center font-heading text-sm font-semibold text-neutral-700"
            >
              {metric}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
