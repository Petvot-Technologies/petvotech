"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const items = [
  {
    q: "How quickly can we get started?",
    a: "Most projects begin within 1-2 weeks of initial consultation. For urgent needs, we can often start same-week.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. We provide both project-based delivery and monthly retainer options. All projects include 30 days post-launch support.",
  },
  {
    q: "What industries do you work with?",
    a: "We serve clients across finance, e-commerce, education, healthcare, and service-based businesses—both in Nigeria and internationally.",
  },
  {
    q: "How do you price your services?",
    a: "Pricing varies by project scope and engagement model. After our free consultation, we provide a detailed, transparent quote with no hidden fees.",
  },
  {
    q: "What's your typical project timeline?",
    a: "Simple automation: 2-4 weeks. Custom applications: 6-12 weeks. Cloud migrations: 4-8 weeks. We'll give you exact timelines during scoping.",
  },
  {
    q: "Do I need to know anything technical?",
    a: "Not at all. We translate tech into business language and guide you through every decision.",
  },
  {
    q: "Can you work with our existing systems?",
    a: "Yes. We specialize in integrating with existing tools like CRMs, ERPs, and accounting software.",
  },
  {
    q: "What if I'm not happy with the work?",
    a: "We work iteratively with weekly demos. You're involved at every step. If deliverables don't match the agreed spec, we make it right.",
  },
  {
    q: "Do you require upfront payment?",
    a: "We typically request 50% upfront, 50% on completion. For retainers, monthly billing. Flexible terms available.",
  },
  {
    q: "Can you help if we're not sure what we need?",
    a: "Absolutely. That's what our free consultation is for. We'll help you identify the right solution.",
  },
];

export function FAQ() {
  return (
    <Accordion.Root type="single" collapsible className="mt-8">
      {items.map((item, i) => (
        <Accordion.Item
          key={i}
          value={`item-${i}`}
          className="border-b border-neutral-200 last:border-0"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left font-heading font-semibold text-neutral-900 transition-colors hover:text-primary data-[state=open]:text-primary">
              {item.q}
              <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden">
            <p className="pb-5 text-neutral-600">{item.a}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
