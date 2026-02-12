import type { Metadata } from "next";
import Link from "next/link";
import { Link2, DollarSign, Heart, Star, Minimize2, TreePine } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Petvot Tech exists to close the digital gap. Making technology accessible to every business with values of Accessibility, Cost-effectiveness, and Excellence.",
};

const values = [
  { letter: "A", name: "Accessibility", icon: Link2, description: "Every business deserves access to modern digital tools, regardless of size, industry, or location. We design for inclusivity." },
  { letter: "C", name: "Cost-Effective", icon: DollarSign, description: "Enterprise quality doesn't require enterprise budgets. We deliver maximum value at fair, transparent pricing." },
  { letter: "C", name: "Customer-Centricity", icon: Heart, description: "Our clients are at the center of everything we do. We build solutions that solve real business problems, not vanity projects." },
  { letter: "E", name: "Excellence", icon: Star, description: "Innovation is only valuable when it creates practical, scalable impact. We prioritize results over buzzwords." },
  { letter: "S", name: "Simplicity", icon: Minimize2, description: "We remove complexity, making technology easy to adopt and use. Simple doesn't mean basic—it means thoughtfully designed." },
  { letter: "S", name: "Sustainable Growth & Integrity", icon: TreePine, description: "We operate honestly and transparently, focusing on long-term partnerships rather than short-term wins." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary">Our Mission</p>
              <h1 className="mt-2 font-heading text-4xl font-bold text-neutral-900 sm:text-5xl">
                Making Technology Accessible to Every Business
              </h1>
              <p className="mt-6 text-lg text-neutral-600">
                We exist to close the digital gap. Too many businesses are held back by the cost and complexity of modern technology. We&apos;re changing that.
              </p>
              <p className="mt-4 font-medium text-neutral-800">
                A future where no business is limited by access to technology.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl bg-neutral-100 p-8">
              <div className="flex gap-8">
                <div>
                  <p className="font-heading text-3xl font-bold text-primary">20+</p>
                  <p className="text-sm text-neutral-600">Years Combined</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-neutral-600">Projects</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-primary">12</p>
                  <p className="text-sm text-neutral-600">Industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-cream/40 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-neutral-900">
            Our Values: ACCESS
          </h2>
          <p className="mt-2 text-neutral-600">The principles that guide everything we build</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Card key={i} variant="default" padding="lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-xl font-bold text-primary">
                    {v.letter}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-neutral-900">{v.name}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{v.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="bg-neutral-900 py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h3 className="font-heading text-2xl font-bold">Why We Built Petvot Tech</h3>
          <div className="mt-6 space-y-4 text-left text-neutral-300">
            <p>We&apos;ve worked with Fortune 500 companies and tiny startups. We&apos;ve seen what separates the businesses that thrive from those that struggle.</p>
            <p>The difference isn&apos;t budget or team size—it&apos;s access to the right technology, deployed the right way. Too many great businesses are stuck on outdated systems because &quot;proper&quot; solutions seem out of reach.</p>
            <p>We founded Petvot Tech to change that. To bring enterprise-quality solutions to the businesses that need them most.</p>
          </div>
          <Link href="/contact" className="mt-8 inline-block">
            <Button variant="white" size="lg">Work With Us →</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
