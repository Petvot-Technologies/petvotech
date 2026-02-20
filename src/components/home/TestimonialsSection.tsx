"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { AnimatedStagger } from "@/components/AnimatedSection";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-cream/40 to-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Testimonials</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">What Our Clients Say</h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-600">Real feedback from businesses we&apos;ve helped grow</p>
        </div>
        <AnimatedStagger className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Card variant="elevated" padding="lg" className="h-full">
                <Quote className="h-10 w-10 text-primary/40" />
                <blockquote className="mt-4 text-neutral-700">&quot;{t.quote}&quot;</blockquote>
                <footer className="mt-6 border-t border-neutral-100 pt-4">
                  <p className="font-heading font-semibold text-neutral-900">{t.author}</p>
                  <p className="text-sm text-primary">{t.role}</p>
                  <p className="text-sm text-neutral-500">{t.company}</p>
                </footer>
              </Card>
            </motion.div>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
