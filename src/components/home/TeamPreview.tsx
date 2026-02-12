"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/AnimatedSection";

const team = [
  {
    name: "Paul Awe",
    title: "Co-Founder | CRM Consultant & Solution Architect",
    tags: ["CRM", "Solution Architecture", "API Design"],
    bio: "Paul has architected CRM solutions for 50+ businesses, specializing in turning messy data into strategic insights.",
    image: null,
    linkedin: "#",
  },
  {
    name: "Peter Awe",
    title: "Co-Founder | Senior Software Engineer",
    tags: ["Application Development", "Performance", "Scalability"],
    bio: "Peter builds high-performance applications that scale. From startups to enterprise, he delivers clean, maintainable code.",
    image: null,
    linkedin: "#",
  },
  {
    name: "Idris Lawal",
    title: "Co-Founder | Chief Technology Officer",
    tags: ["Architecture", "Security", "Technical Strategy"],
    bio: "Idris leads technical strategy and architecture. He ensures every solution is secure, scalable, and future-proof.",
    image: null,
    linkedin: "#",
  },
];

export function TeamPreview() {
  return (
    <section className="bg-gradient-to-b from-cream/40 to-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-3">
            <h2 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
              Meet the Team Behind Your Success
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              We&apos;re not a faceless agency. You&apos;ll work directly with experienced
              engineers and architects who&apos;ve delivered for everyone from startups to
              Fortune 500 companies.
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="font-heading text-3xl font-bold text-primary">20+</p>
                <p className="text-sm text-neutral-600">Years Combined Experience</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-neutral-600">Projects Delivered</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-primary">12</p>
                <p className="text-sm text-neutral-600">Industries Served</p>
              </div>
            </div>
            <blockquote className="mt-10 border-l-4 border-primary pl-6 italic text-neutral-700">
              &quot;The best code is code you don&apos;t have to write&quot;
              <footer className="mt-1 text-sm not-italic text-neutral-500">
                — Engineering Philosophy
              </footer>
            </blockquote>
          </AnimatedSection>
          <div className="lg:col-span-2" />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {team.map((member, i) => (
            <AnimatedSection key={i}>
              <Card variant="elevated" padding="lg" className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="h-48 w-48 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 text-sm">
                    Photo
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-neutral-900">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.title}</p>
                  <div className="mt-2 flex flex-wrap justify-center gap-2">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-neutral-600">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-neutral-400 hover:text-primary"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/about#team">
            <motion.span
              className="inline-block text-lg font-medium text-primary hover:underline"
              whileHover={{ x: 4 }}
            >
              Meet the full team →
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
}
