"use client";

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-lg border bg-white px-3 py-2 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: [
          "border-neutral-300",
          "focus:border-primary focus:ring-primary/20",
        ],
        error: ["border-error", "focus:border-error focus:ring-error/20"],
        success: [
          "border-success",
          "focus:border-success focus:ring-success/20",
        ],
      },
      inputSize: {
        sm: "h-9 text-sm",
        md: "h-11 text-base",
        lg: "h-14 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "md",
    },
  }
);

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      inputSize,
      label,
      error,
      helperText,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s/g, "-");
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-neutral-700"
          >
            {label}
            {props.required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        <input
          id={inputId}
          className={cn(
            inputVariants({
              variant: error ? "error" : variant,
              inputSize,
              className,
            })
          )}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-error" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-sm text-neutral-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    error?: string;
    id?: string;
  }
>(({ className, label, error, id, ...props }, ref) => {
  const inputId = id ?? label?.toLowerCase().replace(/\s/g, "-");
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-neutral-700"
        >
          {label}
          {props.required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <textarea
        id={inputId}
        className={cn(
          "flex min-h-[120px] w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-base placeholder:text-neutral-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-error focus:border-error focus:ring-error/20",
          className
        )}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = "Textarea";

export interface SelectOption {
  value: string;
  label: string;
}

const Select = forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    error?: string;
    options: SelectOption[];
    id?: string;
  }
>(({ className, label, error, options, id, ...props }, ref) => {
  const inputId = id ?? label?.toLowerCase().replace(/\s/g, "-");
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-neutral-700"
        >
          {label}
          {props.required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <select
        id={inputId}
        className={cn(
          "flex h-11 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-error focus:border-error focus:ring-error/20",
          className
        )}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${inputId}-error`} className="text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

Select.displayName = "Select";

export { Input, Textarea, Select };
