import type { Metadata } from "next";
import Link from "next/link";
import { Check, ClipboardCheck, RefreshCw, Lightbulb, Building2, ShoppingCart, GraduationCap, Heart, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Everything you need to scale your business. Digital transformation, cloud solutions, custom software, talent outsourcing, and IT consultancy.",
};

const serviceAnchors = [
  { id: "digital-transformation", label: "Digital Transformation" },
  { id: "cloud-solutions", label: "Cloud Solutions" },
  { id: "software-development", label: "Software Development" },
  { id: "talent-outsourcing", label: "Talent Outsourcing" },
  { id: "it-consulting", label: "IT Consulting" },
];

const engagementModels = [
  {
    icon: ClipboardCheck,
    title: "One-Time Solutions",
    subtitle: "Project-Based",
    bestFor: "Defined scope, clear deadline",
    description: "Fixed price, fixed timeline. Perfect for new builds, migrations, or specific features.",
    pricing: "Starting at ₦500k",
    items: ["Detailed scope document", "Timeline with milestones", "Final handover package"],
    cta: "Request Quote →",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Partnership",
    subtitle: "Retainer-Based",
    bestFor: "Continuous support & growth",
    description: "Monthly retainer for maintenance, updates, and new features. Priority support included.",
    pricing: "From ₦300k/month",
    items: ["Dedicated team access", "Monthly feature updates", "24/7 monitoring", "Priority bug fixes"],
    cta: "Discuss Retainer →",
  },
  {
    icon: Lightbulb,
    title: "Strategic Guidance",
    subtitle: "Consulting & Advisory",
    bestFor: "Planning & decision-making",
    description: "Expert advice on technology strategy, vendor selection, and roadmap planning.",
    pricing: "₦150k per session",
    items: ["Technology assessment", "Recommendations report", "Implementation roadmap"],
    cta: "Book Consultation →",
  },
];

const industries = [
  { name: "Finance & Banking", icon: Building2, hover: "Compliance-ready solutions, secure transactions" },
  { name: "E-commerce & Retail", icon: ShoppingCart, hover: "Inventory sync, order automation" },
  { name: "Education & Training", icon: GraduationCap, hover: "Learning management, student tracking" },
  { name: "Healthcare & Wellness", icon: Heart, hover: "Patient management, appointment scheduling" },
  { name: "Service-Based Businesses", icon: Briefcase, hover: "Client portals, booking systems" },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-cream/30 to-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <nav className="text-sm text-neutral-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span>Services</span>
          </nav>
          <h1 className="mt-4 font-heading text-4xl font-bold text-neutral-900 sm:text-5xl">
            Everything You Need to Scale Your Business
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            From automation to custom apps, cloud infrastructure to expert talent—all backed by 20+ years of combined experience.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {serviceAnchors.map((a) => (
              <a key={a.id} href={`#${a.id}`} className="rounded-full border border-primary/50 bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-primary-light">
                {a.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-neutral-900">Work With Us Your Way</h2>
          <p className="mt-2 text-neutral-600">Flexible engagement models to fit your needs and budget</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {engagementModels.map((model, i) => (
              <Card key={i} variant="elevated" padding="lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <model.icon className="h-6 w-6 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{model.title}</CardTitle>
                  <CardDescription>{model.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm font-medium text-neutral-700">Best for: {model.bestFor}</p>
                  <p className="text-neutral-600">{model.description}</p>
                  <p className="font-semibold text-primary">{model.pricing}</p>
                  <ul className="list-inside list-disc space-y-1 text-sm text-neutral-600">
                    {model.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button variant="link" size="sm">{model.cta}</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-2xl font-bold text-neutral-900">Proven Across Industries</h3>
          <p className="mt-1 text-neutral-600">From finance to healthcare, we speak your language</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((ind, i) => (
              <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md" title={ind.hover}>
                <ind.icon className="h-10 w-10 text-primary" />
                <p className="mt-2 font-heading font-semibold text-neutral-900">{ind.name}</p>
                <p className="mt-1 text-sm text-neutral-500">{ind.hover}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-neutral-200 bg-white py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h3 className="font-heading text-2xl font-bold text-neutral-900">Transparent, Fair Pricing</h3>
          <p className="mt-4 text-neutral-600">
            We believe in clear, honest quotes. No hidden fees, no surprise charges.
          </p>
          <ul className="mt-6 space-y-2 text-left text-neutral-700">
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Free initial consultation</li>
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Fixed-price project quotes</li>
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Flexible payment terms</li>
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Money-back guarantee on deliverables</li>
          </ul>
          <Link href="/contact" className="mt-8 inline-block">
            <Button variant="primary" size="lg">Get Your Custom Quote →</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
