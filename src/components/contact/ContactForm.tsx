"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Select } from "@/components/ui/Input";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  serviceInterest: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  timeline: z.string().min(1, "Please select a timeline"),
  message: z.string().min(10, "Please tell us about your project (at least 10 characters)"),
  source: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  { value: "", label: "Select service..." },
  { value: "digital-transformation", label: "Digital Transformation & Automation" },
  { value: "cloud", label: "Cloud Solution Services" },
  { value: "software", label: "Software & Application Development" },
  { value: "talent", label: "Talent Outsourcing & Recruitment" },
  { value: "it-consulting", label: "IT Consultancy & Advisory" },
  { value: "not-sure", label: "Not sure - need guidance" },
];

const budgetOptions = [
  { value: "", label: "Select range (optional)" },
  { value: "under-500k", label: "Under ₦500k" },
  { value: "500k-1m", label: "₦500k - ₦1M" },
  { value: "1m-5m", label: "₦1M - ₦5M" },
  { value: "5m-plus", label: "₦5M+" },
  { value: "flexible", label: "Flexible/Discussing" },
];

const timelineOptions = [
  { value: "", label: "Select timeline..." },
  { value: "asap", label: "ASAP (within 2 weeks)" },
  { value: "1-month", label: "Within 1 month" },
  { value: "1-3-months", label: "1-3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "exploring", label: "Just exploring" },
];

const sourceOptions = [
  { value: "", label: "How did you hear about us? (optional)" },
  { value: "google", label: "Google Search" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "referral", label: "Referral" },
  { value: "social", label: "Social Media" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceInterest: "",
      budget: "",
      timeline: "",
      source: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    try {
      // Replace with your API route or email service (Resend, SendGrid, etc.)
      await new Promise((r) => setTimeout(r, 1000));
      console.log("Form data:", data);
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="rounded-xl border border-success bg-success/10 p-8 text-center">
        <p className="text-lg font-semibold text-success">Thanks! We&apos;ll respond within 24 hours.</p>
        <p className="mt-2 text-neutral-600">We&apos;ve received your inquiry and will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input label="Full Name" required error={errors.fullName?.message} {...register("fullName")} />
      <Input label="Email Address" type="email" required error={errors.email?.message} {...register("email")} />
      <Input label="Phone Number" type="tel" {...register("phone")} />
      <Input label="Company Name" {...register("company")} />
      <Select
        label="Service Interest"
        required
        options={serviceOptions}
        error={errors.serviceInterest?.message}
        {...register("serviceInterest")}
      />
      <Select label="Project Budget Range" options={budgetOptions} {...register("budget")} />
      <Select
        label="Timeline"
        required
        options={timelineOptions}
        error={errors.timeline?.message}
        {...register("timeline")}
      />
      <Textarea
        label="Tell Us About Your Project"
        required
        placeholder="What problem are you trying to solve? What have you tried? What would success look like?"
        error={errors.message?.message}
        {...register("message")}
      />
      <Select label="How Did You Hear About Us?" options={sourceOptions} {...register("source")} />
      <Button type="submit" variant="primary" size="lg" fullWidth loading={submitStatus === "loading"}>
        {submitStatus === "loading" ? "Sending..." : "Send Your Inquiry"}
      </Button>
      {submitStatus === "error" && (
        <p className="text-sm text-error">Something went wrong. Please try again or email us directly.</p>
      )}
      <p className="text-xs text-neutral-500">
        We respect your privacy. Your information is never shared or sold.
      </p>
    </form>
  );
}
