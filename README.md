# Petvot Tech Website

Modern, product-led SaaS website for Petvot Technologies — *Technology That Grows With Your Business*.

## Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with custom design tokens
- **Animation:** Framer Motion
- **Components:** Radix UI (Accordion), Lucide React icons
- **Forms:** React Hook Form + Zod + @hookform/resolvers

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Project Structure

- `src/app/` — App Router pages (home, services, about, contact, privacy, terms)
- `src/components/` — UI components, layout (Header, Footer), home sections, contact form & FAQ
- `src/lib/` — Utilities (e.g. `cn`)
- Design system: brand colors (primary orange, neutrals, cream), typography (Poppins, Inter), spacing/shadows in `tailwind.config.ts` and `globals.css`

## Contact Form

The contact form is client-side only. To send emails, add an API route (e.g. `app/api/contact/route.ts`) and integrate Resend, SendGrid, or another provider. Update `ContactForm.tsx` to `fetch` that route in `onSubmit`.

## Deploy

Optimized for Vercel:

```bash
npm run build
```

Connect the repo to Vercel for automatic deployments and previews.
