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

## SEO (Metadata)

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

---

## Cache Components & Partial Pre-rendering

Next.js introduces **Cache Components** and **Partial Pre-rendering (PPR)** to improve performance by caching UI and streaming dynamic content only when it’s ready.

> These features are **experimental** and may require enabling flags in `next.config.js`.

---

## Cache Components

**Cache Components** allow you to cache parts of your UI at different levels so they don’t re-render unnecessarily.

### Enable Cache Components

In `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cacheComponents: true,
  },
};

module.exports = nextConfig;
```

**Using `'use cache'`**

The `'use cache'` directive tells Next.js to cache the output of a page, function, or component.

Depending on **where you place it**, different parts of the UI will be cached.

**1. Page-level Cache**

Caches the **entire page.**

```tsx
// app/page.tsx
"use cache";

export default function Page() {
  return <div>Home Page</div>;
}
```

**2. Function-level Cache**

Caches the **entire function output.**

```tsx
export default function ProductPage() {
  "use cache";

  return <div>Product Page</div>;
}
```

**3. Component-level Cache**

Caches only a **specific component.**

```tsx
export function Price() {
  "use cache";

  return <div>$99</div>;
}
```

## Server Actions

Server Actions are used for **mutating data** in Next.js, similar to how **Server Components** are used for fetching data.

### Why use Server Actions?

- When fetching data, Server Components can get it **directly from the server**, reducing unnecessary network requests.
- When mutating data (like creating, updating, or deleting), **Server Actions** allow you to do it safely **on the server**.
- This approach is **faster and more secure**, because you don't need to send data back and forth between the client and server unnecessarily.

### How it works

1. Use **Server Components** to fetch and render data on the server.
2. Use **Server Actions** to handle mutations (like form submissions or updates).
3. This keeps your components simple and secure while minimizing network requests.

> Essentially: Fetch data with Server Components, mutate data with Server Actions — all safely and efficiently on the server.

---
