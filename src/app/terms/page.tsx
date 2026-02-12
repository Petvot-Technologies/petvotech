import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Petvot Technologies.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <nav className="text-sm text-neutral-600" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <span>Terms of Service</span>
      </nav>
      <h1 className="mt-4 font-heading text-4xl font-bold text-neutral-900">Terms of Service</h1>
      <p className="mt-4 text-neutral-600">Last updated: {new Date().toLocaleDateString("en-NG")}</p>
      <div className="prose prose-neutral mt-8 max-w-none">
        <p>Terms of service content will be added here. Contact us for questions.</p>
        <p className="mt-4">
          <Link href="/contact" className="text-primary hover:underline">Contact us</Link> with any questions.
        </p>
      </div>
    </div>
  );
}
