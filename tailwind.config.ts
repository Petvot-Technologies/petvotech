import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F25C05",
          hover: "#F36816",
          light: "#FEF5F0",
          dark: "#D94F04",
        },
        neutral: {
          0: "#FFFFFF",
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#D6D6D6",
          300: "#B3B3B3",
          400: "#999999",
          500: "#6B6B6B",
          600: "#4D4D4D",
          700: "#333333",
          800: "#1A1A1A",
          900: "#040404",
        },
        cream: {
          DEFAULT: "#FCE0C1",
          dark: "#F9D4AD",
        },
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        xs: ["clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)", { lineHeight: "1.5" }],
        sm: ["clamp(0.875rem, 0.8rem + 0.375vw, 1rem)", { lineHeight: "1.5" }],
        base: ["clamp(1rem, 0.95rem + 0.25vw, 1.125rem)", { lineHeight: "1.5" }],
        lg: ["clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)", { lineHeight: "1.5" }],
        xl: ["clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)", { lineHeight: "1.25" }],
        "2xl": ["clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem)", { lineHeight: "1.25" }],
        "3xl": ["clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem)", { lineHeight: "1.2" }],
        "4xl": ["clamp(2.25rem, 1.95rem + 1.5vw, 3rem)", { lineHeight: "1.15" }],
        "5xl": ["clamp(3rem, 2.55rem + 2.25vw, 4rem)", { lineHeight: "1.1" }],
        "6xl": ["clamp(3.75rem, 3.15rem + 3vw, 5rem)", { lineHeight: "1.1" }],
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        primary: "0 10px 30px -5px rgba(242, 92, 5, 0.3)",
        "primary-lg": "0 20px 40px -10px rgba(242, 92, 5, 0.4)",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      maxWidth: {
        "7xl": "80rem",
      },
      transitionDuration: {
        instant: "75ms",
        fast: "150ms",
        normal: "250ms",
        slow: "350ms",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        elastic: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },
    },
  },
  plugins: [],
};

export default config;
