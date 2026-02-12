"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { AnimatedStagger } from "@/components/AnimatedSection";
import { caseStudies } from "@/data/caseStudies";

export function CaseStudyPreview() {
  return (
    <section id="case-studies" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Client Success
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            See What We&apos;ve Built
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-600">
            Real projects, real results, real impact
          </p>
        </div>

        <AnimatedStagger className="mt-16 grid gap-8 md:grid-cols-3">
          {caseStudies.map((c, i) => (
            <motion.div
              key={c.slug}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <Link href={`/case-studies/${c.slug}`}>
                <Card
                  variant="default"
                  padding="none"
                  className="group overflow-hidden transition-all hover:shadow-xl"
                >
                  <div className="aspect-video bg-gradient-to-br from-neutral-200 to-neutral-100 flex items-center justify-center">
                    <span className="text-sm text-neutral-500">{c.type}</span>
                  </div>
                  <div className="border-t border-neutral-100 p-6">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {c.type}
                    </span>
                    <h3 className="mt-2 font-heading text-lg font-semibold text-neutral-900 group-hover:text-primary">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">{c.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read Case Study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </AnimatedStagger>

        <div className="mt-12 text-center">
          <Link href="/case-studies" className="text-lg font-medium text-primary hover:underline">
            View All Case Studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
