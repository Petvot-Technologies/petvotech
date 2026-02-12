"use client";

import { motion } from "framer-motion";

const clientNames = [
  "Client One",
  "Client Two",
  "Client Three",
  "Client Four",
  "Client Five",
  "Client Six",
];

export function ClientLogos() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-sm font-medium text-neutral-600">
          Trusted by businesses across Nigeria and beyond
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10"
        >
          {clientNames.map((name, i) => (
            <div
              key={i}
              className="flex h-12 w-32 items-center justify-center rounded-lg border border-neutral-200 bg-white px-4 py-2 grayscale transition-all duration-300 hover:grayscale-0"
            >
              <span className="text-center font-heading text-xs font-semibold text-neutral-500">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
