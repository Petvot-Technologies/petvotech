import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQ } from "@/components/contact/FAQ";
import { Gift, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScheduleCallButton } from "@/components/ScheduleCallButton";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Petvot Tech. Free consultation, no pressure. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <nav className="text-sm text-neutral-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </nav>
          <h1 className="mt-4 font-heading text-4xl font-bold text-neutral-900 sm:text-5xl">
            Let&apos;s Build Together
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            Whether you have a fully-formed project or just an idea, we&apos;re here to help. Free consultation, no pressure.
          </p>
          <span className="mt-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            We respond within 24 hours
          </span>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-primary-light/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-heading text-lg font-semibold text-neutral-900">Contact Methods</h3>
                <ul className="mt-4 space-y-4 text-neutral-600">
                  <li>
                    <span className="block font-medium text-neutral-800">Email</span>
                    <a href="mailto:info@petvotech.com" className="text-primary hover:underline">info@petvotech.com</a>
                    <span className="block text-sm text-neutral-500">We respond within 24 hours</span>
                  </li>
                  <li>
                    <span className="block font-medium text-neutral-800">Phone</span>
                    <a href="tel:+2348133527701" className="text-primary hover:underline">+234 813 3527 701</a>
                    <span className="block text-sm text-neutral-500">Mon-Fri, 9AM-6PM WAT</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-neutral-900">What Happens Next</h3>
                <ol className="mt-4 list-inside list-decimal space-y-2 text-neutral-600">
                  <li>We review your inquiry (same day)</li>
                  <li>Schedule a free 30-min discovery call</li>
                  <li>Provide detailed proposal & quote (3 days)</li>
                </ol>
              </div>
              <div>
                <p className="font-medium text-neutral-800">Prefer to talk first?</p>
                <div className="mt-2">
                  <ScheduleCallButton variant="outline" size="sm" />
                </div>
                <p className="mt-4 font-medium text-neutral-800">Want to see examples?</p>
                <Link href="/case-studies" className="mt-2 inline-block text-primary hover:underline">Browse case studies</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-neutral-900">Common Questions</h2>
          <p className="mt-1 text-neutral-600">Quick answers to help you decide</p>
          <FAQ />
        </div>
      </section>

      <section className="bg-cream/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <Gift className="h-10 w-10 shrink-0 text-primary" />
              <div>
                <h3 className="font-heading font-semibold text-neutral-900">Free Consultation</h3>
                <p className="text-sm text-neutral-600">No cost, no obligation, just honest advice</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-10 w-10 shrink-0 text-primary" />
              <div>
                <h3 className="font-heading font-semibold text-neutral-900">Fast Response</h3>
                <p className="text-sm text-neutral-600">We reply within 24 hours, guaranteed</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FileText className="h-10 w-10 shrink-0 text-primary" />
              <div>
                <h3 className="font-heading font-semibold text-neutral-900">Transparent Quotes</h3>
                <p className="text-sm text-neutral-600">Detailed proposals in 3 business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h3 className="font-heading text-2xl font-bold">Prefer to Talk First?</h3>
          <p className="mt-2 text-white/90">Skip the form—let&apos;s have a conversation</p>
          <div className="mt-6">
            <ScheduleCallButton variant="white" size="lg">Schedule a Free 30-Min Call</ScheduleCallButton>
          </div>
        </div>
      </section>
    </div>
  );
}
