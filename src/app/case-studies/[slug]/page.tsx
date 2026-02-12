import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
} from "@/data/caseStudies";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: study.title,
    description: study.description,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <div>
      <section className="border-b border-neutral-200 bg-neutral-50 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-neutral-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/case-studies" className="hover:text-primary">
              Case Studies
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-900">{study.title}</span>
          </nav>
          <Link
            href="/case-studies"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            All case studies
          </Link>
          <span className="mt-4 block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary w-fit">
            {study.type}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            {study.title}
          </h1>
          <p className="mt-2 text-lg text-neutral-600">{study.tagline}</p>
          <p className="mt-4 text-neutral-600">{study.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 flex items-center justify-center">
            <span className="text-neutral-500">
              {study.imagePlaceholder || `${study.type} — project visual`}
            </span>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 md:grid-cols-1">
            <DetailBlock
              icon={Target}
              title="The challenge"
              content={study.challenge}
            />
            <DetailBlock
              icon={Lightbulb}
              title="Our approach"
              content={study.solution}
            />
            {study.results && study.results.length > 0 && (
              <div>
                <h2 className="font-heading text-xl font-semibold text-neutral-900 flex items-center gap-2">
                  <Check className="h-6 w-6 text-primary" />
                  Results & impact
                </h2>
                <ul className="mt-4 space-y-3">
                  {study.results.map((r, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-neutral-700"
                    >
                      <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {study.techOrFeatures && study.techOrFeatures.length > 0 && (
              <div>
                <h2 className="font-heading text-xl font-semibold text-neutral-900">
                  Key features & tech
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {study.techOrFeatures.map((f, i) => (
                    <li
                      key={i}
                      className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm text-neutral-700"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-primary-light/30 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            Have a similar project in mind?
          </h2>
          <p className="mt-4 text-neutral-600">
            We&apos;d love to hear about your goals and explore how we can help.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Start your project
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" size="lg">
                View all case studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function DetailBlock({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
}) {
  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-neutral-900 flex items-center gap-2">
        <Icon className="h-6 w-6 text-primary" />
        {title}
      </h2>
      <p className="mt-4 text-neutral-700 leading-relaxed">{content}</p>
    </div>
  );
}
