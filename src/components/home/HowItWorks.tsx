"use client";

import { motion } from "framer-motion";
import { FileSearch, Palette, Code, Rocket } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const steps = [
  {
    number: "01",
    duration: "Week 1",
    title: "Discovery & Scoping",
    description:
      "We listen first. Deep-dive workshop to understand your challenges, requirements, and success metrics. Free of charge.",
    deliverable: "→ Detailed proposal with timeline & pricing",
    icon: FileSearch,
  },
  {
    number: "02",
    duration: "Week 2-3",
    title: "Design & Planning",
    description:
      "Wireframes, architecture diagrams, user flows. You see exactly what we'll build before we write a line of code.",
    deliverable: "→ Design mockups & technical spec",
    icon: Palette,
  },
  {
    number: "03",
    duration: "Week 4-8",
    title: "Build & Test",
    description:
      "Agile development with weekly demos. You're involved at every step, not surprised at launch.",
    deliverable: "→ Working software, tested & documented",
    icon: Code,
  },
  {
    number: "04",
    duration: "Week 9+",
    title: "Deploy & Support",
    description:
      "Smooth launch, team training, and ongoing optimization. We don't disappear after go-live.",
    deliverable: "→ Live system + support plan",
    icon: Rocket,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-neutral-900 py-24 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            From First Call to Full Deployment
          </h2>
          <p className="mt-4 text-cream/90">
            Simple, transparent, designed for speed
          </p>
        </AnimatedSection>

        <div className="relative mt-16">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-cream/30 to-primary/50 lg:left-1/2 lg:-translate-x-px" />
          <ul className="space-y-12">
            {steps.map((step, i) => (
              <li
                key={i}
                className="relative flex flex-col gap-4 pl-20 lg:flex-row lg:items-start lg:pl-0 lg:odd:flex-row-reverse"
              >
                <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-neutral-900 text-2xl font-bold text-primary lg:left-1/2 lg:-translate-x-1/2">
                  {step.number}
                </div>
                <AnimatedSection className={`flex-1 lg:px-12 ${i % 2 === 0 ? "lg:text-right" : ""}`}>
                  <p className="text-sm text-cream">{step.duration}</p>
                  <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-neutral-300">{step.description}</p>
                  <p className="mt-2 text-sm text-primary">{step.deliverable}</p>
                </AnimatedSection>
                <div className={`hidden shrink-0 lg:block ${i % 2 === 0 ? "order-first" : ""}`}>
                  <step.icon className="h-12 w-12 text-primary/60" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
