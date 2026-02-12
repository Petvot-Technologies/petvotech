"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: [
          "bg-primary text-white",
          "hover:bg-primary-hover hover:-translate-y-0.5",
          "hover:shadow-primary",
          "focus:ring-primary",
        ],
        secondary: [
          "bg-transparent text-primary border-2 border-primary",
          "hover:bg-primary-light",
          "focus:ring-primary",
        ],
        outline: [
          "bg-transparent text-neutral-900 border-2 border-neutral-300",
          "hover:bg-neutral-50 hover:border-neutral-400",
          "focus:ring-neutral-400",
        ],
        ghost: [
          "bg-transparent text-neutral-700",
          "hover:bg-neutral-100",
          "focus:ring-neutral-300",
        ],
        link: [
          "bg-transparent text-primary underline-offset-4",
          "hover:underline",
          "focus:ring-primary",
        ],
        destructive: [
          "bg-error text-white",
          "hover:bg-red-600",
          "focus:ring-error",
        ],
        white: [
          "bg-white text-primary border-2 border-white",
          "hover:bg-primary-light hover:border-white",
          "focus:ring-white",
        ],
      },
      size: {
        xs: "h-8 px-3 text-xs",
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        xl: "h-16 px-10 text-xl",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading,
      disabled,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {!loading && leftIcon && <span className="inline-flex">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && (
          <span className="inline-flex">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button, buttonVariants };
