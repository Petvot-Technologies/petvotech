"use client";

import Link from "next/link";
import Image from "next/image";
import { Check, Workflow, Cloud, Code2, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/AnimatedSection";

import automationSvg from "@/assets/svgs/automation.svg";
import cloudSvg from "@/assets/svgs/cloud.svg";
import softwareSvg from "@/assets/svgs/software.svg";
import consultancySvg from "@/assets/svgs/consultancy.svg";
import outsourcingSvg from "@/assets/svgs/outsourcing.svg";

const services = [
  {
    badge: "Digital Transformation",
    title: "Stop Doing Manually What Software Can Do",
    benefit: "80% reduction in manual data entry, zero added headcount",
    description:
      "We audit your workflows, identify automation opportunities, and implement smart systems that free your team to focus on what humans do best.",
    features: [
      "Process mapping & optimization",
      "Workflow automation",
      "System integration",
      "Staff training included",
    ],
    icon: Workflow,
    image: automationSvg,
    imageLeft: true,
  },
  {
    badge: "Cloud Solutions",
    title: "Access Your Data Anywhere, Anytime",
    benefit: "Secure, scalable infrastructure",
    description:
      "Move from on-premise chaos to cloud clarity. We design and deploy cloud solutions that scale with your business without the enterprise price tag.",
    features: [
      "Cloud migration",
      "Infrastructure as Code",
      "Security & compliance",
      "24/7 monitoring",
    ],
    icon: Cloud,
    image: cloudSvg,
    imageLeft: false,
  },
  {
    badge: "Software Development",
    title: "Get Exactly What You Need, Nothing You Don't",
    benefit: "Custom apps that fit your workflow",
    description:
      "Off-the-shelf rarely fits. We build web and mobile applications tailored to your processes, integrated with your existing tools.",
    features: [
      "Web & mobile apps",
      "API development",
      "Third-party integrations",
      "Ongoing support",
    ],
    icon: Code2,
    image: softwareSvg,
    imageLeft: true,
  },
  {
    badge: "Talent Outsourcing",
    title: "Expert Talent Without the Full-Time Cost",
    benefit: "Scale your team on demand",
    description:
      "Need a developer, DevOps engineer, or solution architect? We provide vetted talent that integrates with your team and delivers from day one.",
    features: [
      "Vetted professionals",
      "Flexible engagement",
      "Quick onboarding",
      "Managed delivery",
    ],
    icon: Users,
    image: outsourcingSvg,
    imageLeft: false,
  },
  {
    badge: "IT Consultancy",
    title: "Strategic Guidance When You Need It",
    benefit: "Informed decisions, clear roadmaps",
    description:
      "Not sure which technology to choose? We provide expert advice on strategy, vendor selection, and implementation planning.",
    features: [
      "Technology assessment",
      "Vendor evaluation",
      "Roadmap planning",
      "Architecture review",
    ],
    icon: Lightbulb,
    image: consultancySvg,
    imageLeft: true,
  },
];

function ServiceBlock({
  badge,
  title,
  benefit,
  description,
  features,
  icon: Icon,
  image,
  imageLeft,
  index,
}: (typeof services)[0] & { index: number }) {
  return (
    <AnimatedSection
      as="section"
      className={`flex flex-col gap-12 py-20 lg:flex-row lg:items-center lg:gap-16 ${
        imageLeft ? "" : "lg:flex-row-reverse"
      }`}
    >
      <div className="flex-1">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
          <div className="absolute inset-0 flex items-center justify-center p-6">
            {image ? (
              <Image
                src={image}
                alt=""
                className="h-full w-full object-contain"
                width={400}
                height={225}
              />
            ) : (
              <Icon className="h-24 w-24 text-neutral-300" />
            )}
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <span className="inline-block rounded-full border border-primary px-3 py-1 text-xs font-medium text-primary">
          {badge}
        </span>
        <h3 className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl">
          {title}
        </h3>
        <p className="text-lg font-semibold text-primary">{benefit}</p>
        <p className="text-neutral-600">{description}</p>
        <ul className="space-y-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-neutral-700">
              <Check className="h-5 w-5 shrink-0 text-primary" />
              {f}
            </li>
          ))}
        </ul>
        <Link href="/contact">
          <Button variant="link" className="gap-1">
            Discuss your workflow →
          </Button>
        </Link>
      </div>
    </AnimatedSection>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-white via-primary-light/20 to-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Built for Real Business Challenges
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            From concept to launch, we handle the tech so you can focus on growth
          </p>
        </AnimatedSection>

        <div className="mt-16 divide-y divide-neutral-200">
          {services.map((service, i) => (
            <ServiceBlock key={i} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
