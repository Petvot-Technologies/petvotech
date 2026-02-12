import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/images/logo-white.png";

const services = [
  { href: "/services#digital-transformation", label: "Digital Transformation" },
  { href: "/services#cloud-solutions", label: "Cloud Solutions" },
  { href: "/services#software-development", label: "Software Development" },
  { href: "/services#talent-outsourcing", label: "Talent Outsourcing" },
  { href: "/services#it-consulting", label: "IT Consulting" },
];

const company = [
  { href: "/about", label: "About Us" },
  { href: "/about#testimonials", label: "Testimonials" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

const social = [
  { href: "https://www.linkedin.com/company/petvot-technologies", icon: Linkedin },
  { href: "https://twitter.com/petvottech", icon: Facebook },
  { href: "https://www.instagram.com/petvottech", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src={logo}
                alt="Petvot Technologies logo"
                width={160}
                height={48}
                className="w-48 h-14 object-cover object-center"
                quality={100}
                unoptimized
              />
            </Link>
            <p className="text-sm text-neutral-400 max-w-xs">
              Technology That Grows With Your Business
            </p>
            <div className="flex gap-4">
              {social.map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 transition-colors hover:text-primary"
                  aria-label={Icon.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li>
                <span className="block text-neutral-300">Email</span>
                <a
                  href="mailto:info@petvotech.com"
                  className="hover:text-primary"
                >
                  info@petvotech.com
                </a>
              </li>
              <li>
                <span className="block text-neutral-300">Phone</span>
                <a href="tel:+2348133527701" className="hover:text-primary">
                  +234 813 3527 701
                </a>
              </li>
              <li>
                <span className="block text-neutral-300">Hours</span>
                Mon–Fri, 9AM–6PM WAT
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 sm:flex-row">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Petvot Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-neutral-500 hover:text-neutral-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-500 hover:text-neutral-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
