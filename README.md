# Next.js Learning Notes (Beginner Friendly)

This repository contains my personal notes while learning **Next.js from scratch**.
The goal is to keep everything **simple, structured, and easy to revisit** later.

---

## System Requirements

- **Node.js**: `v20.9`
- **Operating Systems**:
  - macOS
  - Windows (including WSL)
  - Linux
- **Supported Browsers**:
  - Chrome `111+`
  - Edge `111+`
  - Firefox `111+`
  - Safari `16.4+`

---

## Next.js Project Initialization

```bash
npx create-next-app@latest my-app --yes
cd my-app
npm run dev
```

Open the browser at:

```
http://localhost:3000
```

---

## Next.js Routers

Next.js provides **two routing systems**:

1. Pages Router
2. App Router (Recommended)

---

## App Router (Recommended)

The **App Router** is the modern and recommended way to build Next.js apps.

### Why App Router?

- Supports Server Components
- Supports Client Components
- Enables Partial Pre-rendering
- Keeps your app up to date with Next.js features

### File-Based Routing

Every folder inside the `app/` directory becomes a **route**.

Each route must contain a `page.tsx` file.

Examples:

```
app/page.tsx          → http://localhost:3000
app/about/page.tsx    → http://localhost:3000/about
```

If `page.tsx` is missing → Page Not Found error.

---

## `layout.tsx`

`layout.tsx` wraps the **entire application**.

- Contains `<html>` and `<body>`
- Wraps all routes
- Best place for navbar, footer, fonts, and SEO

---

## Navigation with `Link`

Use `<Link />` instead of `<a>` for smooth navigation.

```tsx
import Link from "next/link";

<Link href="/blogs/1">Go to Blog</Link>;
```

---

## 🔍 SEO (Metadata)

```ts
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Next.js",
  description: "A simple project to learn Next.js with README notes",
};
```

---

## Fonts

```ts
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});
```

---

## `global.css`

- Tailwind setup
- Theme colors
- Global styles

---

## `public/` Folder

Store public assets:

- Images
- Icons
- Files

---

## Server Components

- Default in Next.js
- Run on server
- Secure (API keys safe)
- No browser APIs

---

## Client Components

- Add `'use client'`
- Used for interaction
- Can use hooks and browser APIs

---

## Data Fetching

- Static (SSG)
- Dynamic
- ISR (`revalidate`)
- SSR (`no-store`)

---

## Dynamic Routes

Folder-based routing:

```
app/product/[id]/page.tsx
```

```tsx
const page = ({ params }: { params: { id: string } }) => {
  return <div>Product ID: {params.id}</div>;
};

export default page;
```

---

Happy Learning 🚀
