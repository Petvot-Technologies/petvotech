"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { DatePicker } from "@/components/ui/DatePicker";
import { TimePicker } from "@/components/ui/TimePicker";

const scheduleCallSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  format: z.string().optional(),
  preferredDate: z.string().min(1, "Please pick a date"),
  preferredTime: z.string().min(1, "Please pick a time"),
  timezone: z.string().min(1, "Please select your timezone"),
  message: z.string().min(10, "Please tell us what you would like to discuss (at least 10 characters)"),
});

export type ScheduleCallFormData = z.infer<typeof scheduleCallSchema>;

const formatOptions = [
  { value: "", label: "Select format (optional)" },
  { value: "in-person", label: "In-person" },
  { value: "online", label: "Online" },
  { value: "phone-call", label: "Phone call" },
];

const timezoneOptions = [
  { value: "", label: "Select timezone..." },
  { value: "WAT", label: "WAT (West Africa Time, UTC+1)" },
  { value: "GMT", label: "GMT (Greenwich Mean Time, UTC+0)" },
  { value: "EET", label: "EET (Eastern European Time, UTC+2)" },
  { value: "CET", label: "CET (Central European Time, UTC+1)" },
  { value: "EST", label: "EST (Eastern Time, UTC-5)" },
  { value: "CST", label: "CST (Central Time, UTC-6)" },
  { value: "MST", label: "MST (Mountain Time, UTC-7)" },
  { value: "PST", label: "PST (Pacific Time, UTC-8)" },
  { value: "IST", label: "IST (India Standard Time, UTC+5:30)" },
  { value: "SGT", label: "SGT (Singapore Time, UTC+8)" },
  { value: "AEST", label: "AEST (Australian Eastern, UTC+10)" },
];

interface ScheduleCallFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function ScheduleCallForm({ onSuccess, onCancel }: ScheduleCallFormProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ScheduleCallFormData>({
    resolver: zodResolver(scheduleCallSchema),
    defaultValues: {
      format: "",
      preferredDate: "",
      preferredTime: "",
      timezone: "",
    },
  });

  const onSubmit = async (data: ScheduleCallFormData) => {
    setSubmitStatus("loading");
    try {
      const res = await fetch("/api/schedule-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submit failed");
      setSubmitStatus("success");
      onSuccess?.();
    } catch {
      setSubmitStatus("error");
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="rounded-xl border border-success bg-success/10 p-8 text-center">
        <p className="text-lg font-semibold text-success">Request received</p>
        <p className="mt-2 text-neutral-600">
          We will confirm your call slot within 24 hours. Check your email for confirmation.
        </p>
        {onCancel && (
          <Button type="button" variant="outline" size="sm" className="mt-6" onClick={onCancel}>
            Close
          </Button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Full Name"
        required
        error={errors.fullName?.message}
        {...register("fullName")}
      />
      <Input
        label="Email Address"
        type="email"
        required
        error={errors.email?.message}
        {...register("email")}
      />
      <Input label="Phone Number" type="tel" {...register("phone")} />
      <Select
        label="Format"
        options={formatOptions}
        {...register("format")}
      />
      <Controller
        name="preferredDate"
        control={control}
        render={({ field }) => (
          <DatePicker
            label="Preferred Date"
            required
            value={field.value}
            onChange={field.onChange}
            error={errors.preferredDate?.message}
            placeholder="Pick a date"
          />
        )}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Controller
          name="preferredTime"
          control={control}
          render={({ field }) => (
            <TimePicker
              label="Preferred Time"
              required
              value={field.value}
              onChange={field.onChange}
              error={errors.preferredTime?.message}
              placeholder="Select time"
            />
          )}
        />
        <Select
          label="Timezone"
          required
          options={timezoneOptions}
          error={errors.timezone?.message}
          {...register("timezone")}
        />
      </div>
      <Textarea
        label="What would you like to discuss?"
        required
        placeholder="e.g. project scope, pricing, technical feasibility..."
        error={errors.message?.message}
        {...register("message")}
      />
      <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={submitStatus === "loading"}
        >
          {submitStatus === "loading" ? "Sending..." : "Request a call"}
        </Button>
      </div>
      {submitStatus === "error" && (
        <p className="text-sm text-error">
          Something went wrong. Please try again or email us at info@petvotech.com.
        </p>
      )}
      <p className="text-xs text-neutral-500">
        We respond within 24 hours. Your details are never shared or sold.
      </p>
    </form>
  );
}
