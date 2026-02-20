import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real projects, real results. AI-powered LMS, FinStream Automation, and SaaS event booking—see what Petvot Tech has built.",
};

export default function CaseStudiesPage() {
  return (
    <div>
      <section className="border-b border-neutral-200 bg-neutral-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <nav className="text-sm text-neutral-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Case Studies</span>
          </nav>
          <p className="mt-4 text-sm font-medium uppercase tracking-wider text-primary">
            Client Success
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold text-neutral-900 sm:text-5xl">
            See What We&apos;ve Built
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            Real projects, real results, real impact
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`}>
                <Card
                  variant="default"
                  padding="none"
                  className="group overflow-hidden transition-all hover:shadow-xl"
                >
                  <div className="relative aspect-video overflow-hidden bg-neutral-100">
                    {c.dashboardImage ? (
                      <Image
                        src={c.dashboardImage}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
                        {c.imagePlaceholder || c.type}
                      </span>
                    )}
                  </div>
                  <div className="border-t border-neutral-100 p-6">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {c.type}
                    </span>
                    <h2 className="mt-2 font-heading text-lg font-semibold text-neutral-900 group-hover:text-primary">
                      {c.title}
                    </h2>
                    <p className="mt-1 text-sm text-neutral-600">
                      {c.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read Case Study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
