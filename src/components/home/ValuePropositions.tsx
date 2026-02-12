"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Link2, TrendingUp, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedStagger } from "@/components/AnimatedSection";

const cards = [
  {
    icon: Link2,
    title: "No Business Too Small",
    description:
      "From startups to established SMEs, our solutions scale with you. No massive upfront costs, no year-long contracts, no vendor lock-in.",
    stat: "Starting at ₦500k",
    link: "See pricing flexibility →",
    href: "/services#pricing",
  },
  {
    icon: TrendingUp,
    title: "Solutions That Scale",
    description:
      "Start with what you need today. Add capabilities as you grow. Our modular approach means you only pay for what you use.",
    stat: "3x faster deployment than traditional agencies",
    link: "View case studies →",
    href: "/#case-studies",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Experience, Startup Agility",
    description:
      "20+ years combined expertise across finance, e-commerce, healthcare. We've built for the big guys—now we're bringing that quality to you.",
    stat: "500+ combined projects",
    link: "Meet the team →",
    href: "/about#team",
  },
];

export function ValuePropositions() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            The Petvot Advantage
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Built Different for Growing Businesses
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            We remove the barriers that keep companies stuck on outdated systems
          </p>
        </AnimatedSection>

        <AnimatedStagger className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Card variant="elevated" padding="lg" className="h-full">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <card.icon className="h-8 w-8 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-primary">{card.stat}</p>
                </CardContent>
                <CardFooter>
                  <Link href={card.href}>
                    <Button variant="link" size="sm">{card.link}</Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
