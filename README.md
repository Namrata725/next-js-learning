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

## Using [shadcn/ui](https://ui.shadcn.com/)

In this project, we are going to use **shadcn/ui**, a modern and customizable UI component library for Next.js.

### Installation

You can follow the official guide here: [shadcn/ui Next.js Installation](https://ui.shadcn.com/docs/installation/next)

```bash
npx shadcn@latest init

```

This will set up the library in your Next.js project.

### After Installation

Once shadcn/ui is installed, there are a few important files and utilities you’ll notice:

1. **`utils.tsx`** (inside the `lib/` folder)
   - Contains **`twmerge`**, a utility to easily merge multiple Tailwind CSS class names.
   - Useful when you want to combine conditional classes or multiple variants for components.

2. **`components.json`**
   - Acts like a **mapper** that shadcn/ui uses internally.
   - Tracks:
     - Component schemas
     - CSS paths
     - Aliases and configuration for your setup

3. **Icons (Lucid React)**
   - shadcn/ui uses **Lucid React** for icons.
   - Provides a modern, consistent icon library that integrates directly with the components.

**Creating Your First Component**

```bash
npx shadcn@latest add button

```

- This will create a **Button component** at:

```bash
components/ui/button.tsx
```

- The generated button comes with **variants**:
  - size (small, default, large)
  - variant (default, outline, ghost, etc.)
- You can **customize it globally** so all buttons in your app follow the same style.

**example**

```tsx
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button variant="outline" size="large">
        Click Me
      </Button>
    </div>
  );
}
```

- You can **add more variants** or tweak the design in button.tsx and it will reflect everywhere.

## Learn by Doing: Building the Hero Section

This project follows a **learn by doing** approach, where concepts are applied immediately by building real features.

The first feature built is a **Landing Page Hero Section**.  
It combines routing, components, UI libraries, and styling into one practical example.

---

## File: `app/page.tsx`

### What we do inside this file

- Acts as the **root route (`/`)**
- Keeps the page minimal
- Imports and renders the Hero section component

### Key snippet

```tsx
import HeroSection from "@/components/ui/landing-page/hero-section";

export default function Home() {
  return <HeroSection />;
}
```

**Concepts used**

- App Router
- Page composition
- Clean separation of concerns

#### File: `components/ui/landing-page/hero-section.tsx`

## What we do inside this file

- Build the main Hero UI
- Use shadcn/ui components (Button, Badge)
- Use next/link for navigation
- Split small UI parts into reusable components
- Render stats dynamically using data

#### Key snippets

**Data-driven UI**

```tsx
const statsData = [
  { icon: RocketIcon, value: "10K+", label: "Projects Shared" },
  {
    icon: UsersIcon,
    value: "2.5K+",
    label: "Active Creators",
    hasBorder: true,
  },
  { icon: EyeIcon, value: "25K+", label: "Monthly Visitors" },
];
```

**Rendering using `.map()`**

```tsx
{
  statsData.map((stat) => <StatsCard key={stat.label} {...stat} />);
}
```

#### Navigation with Link

```tsx
<Button asChild size="lg">
  <Link href="/submit">Share Your Project</Link>
</Button>
```

**Concepts used**

- Component-based architecture
- Data mapping
- Client-side navigation
- UI composition

### File: `components/ui/landing-page/stats-card.tsx`

## What we do inside this file

- Create a reusable Stats card component
- Accept icons as props
- Use optional props for styling
- Keep styling logic isolated

#### Key snippet

```tsx

export default function StatsCard({
  icon: Icon,
  value,
  label,
  hasBorder,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  hasBorder?: boolean;
}) {
  ...
}

```

**Concepts used**

- Passing components as props
- Optional props
- TypeScript for safer components
- Reusable UI patterns

### What This Section Teaches

- How page.tsx connects to UI components
- How to structure files in App Router
- How to think in components instead of pages
- How to render UI using data
- How to keep code readable and scalable

---

## Learn by Doing: Featured & Recently Launched Products

After building the Hero section, the next step was to display real content on the landing page.

For this, two sections were added:

- **Featured Products**
- **Recently Launched Products**

This helped practice component composition, data-driven UI, and reusable components.

---

## File: `app/page.tsx`

### What we do inside this file

- Acts as the root route (`/`)
- Composes multiple landing page sections
- Keeps logic out of the page and inside components

### Key snippet

```tsx
<HeroSection />
<FeatureadProducts />
<RecentlyLunchedProducts />

```

**Concepts used**

- Page composition
- Reusing multiple sections
- Clean page structure

---

## file: `components/landing-page/featured-products.tsx`

### What we do inside this file

- Display a list of featured products
- Use a reusable section header
- Render products using shared ProductCard
- Add navigation to explore more products

### Key snippets

**Static data for UI testing**

```tsx
const featuredProducts = [{ id: 1, name: "Product 1", isFeatured: true }];
```

**Rendering products**

```tsx
{
  featuredProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
}
```

**Navigation using Link**

```tsx
<Button asChild variant="outline">
  <Link href="/explore">View All</Link>
</Button>
```

**Concepts used**

- Data-driven UI
- Reusable components
- Client-side navigation
- Conditional rendering via props

## file: `components/products/product-card.tsx`

## What we do inside this file

- Create a reusable product card
- Navigate to dynamic product pages
- Display tags, votes, and featured status
- Prepare UI for future interactions (voting)

### Key snippets

**Dynamic routing**

```tsx
<Link href={`/products/${product.id}`}>
```

**Conditional UI**

```tsx
{
  product.isFeatured && <Badge>Featured</Badge>;
}
```

**Mapping tags**

```tsx
{
  product.tags.map((tag) => <Badge key={tag}>{tag}</Badge>);
}
```

**Concepts used**

- Reusable components
- Props and TypeScript interfaces
- Conditional rendering
- Dynamic routes

## File: `components/common/section-header.tsx`

## What we do inside this file

- Create a reusable section header
- Accept icons as props
- Keep section titles consistent across pages

## Key snippet

```tsx
<SectionHeader
  title="Featured Today"
  icon={StarIcon}
  description="Top picks from our community"
/>
```

**Concepts used**

- Passing components as props
- UI consistency
- Reusable layout components

## File: `components/common/empty-state.tsx`

## What we do inside this file

- Display a fallback UI when no data is available
- Improve user experience for empty lists

## Key snippet

```tsx
{
  products.length === 0 && <EmptyState />;
}
```

**Concepts used**

- Conditional rendering
- UX-focused components

## What This Section Teaches

- How to compose multiple sections on one page
- How to reuse components across different features
- How to render lists using .map()
- How to handle empty states properly
- How to prepare UI for future backend integration

---

## Learn by Doing: Global Header & Footer

After building the landing page sections, the next step was to add a **global layout structure**.

For this, a **Header** and **Footer** were introduced so they appear on **every page** of the application.

This helps understand how `layout.tsx` works in the App Router and how to create shared UI.

---

## File: `app/layout.tsx`

### What we do inside this file

- Wrap the entire application with a global layout
- Apply fonts and global styles
- Render Header and Footer once
- Keep page files (`page.tsx`) clean and focused

### Key snippet

```tsx
<Header />;
{
  children;
}
<Footer />;
```

### Why this matters

- Header and Footer are rendered once, not per page
- Improves performance and consistency
- Central place for global UI like navigation and branding

**Concepts used**

- App Router layout system
- Global composition
- Metadata and fonts
- Shared UI across routes

## File: `components/common/header.tsx`

### What we do inside this file

- Build the main site navigation
- Add branding (Logo)
- Add navigation links using next/link
- Prepare UI for authentication states (signed in / signed out)

### Key snippets

**Client-side navigation**

```tsx
<Link href="/explore">Explore</Link>
```

**Conditional UI (Auth-ready)**

```tsx
{
  isSignIn ? <Button>Submit Project</Button> : <Button>Sign In</Button>;
}
```

**Reusable Logo component**

```tsx
<Link href="/" className="flex items-center gap-2">
  <span className="font-bold">iBuildThis</span>
</Link>
```

## Why this matters

- Header is a shared component, not tied to any page
- Conditional rendering prepares the app for real authentication later
- Keeps navigation consistent across the app

**Concepts used**

- Shared components
- Client-side routing
- Conditional rendering
- Component composition
- UI state preparation

## File: `components/common/footer.tsx`

### What we do inside this file

- Display a global footer
- Keep layout simple and reusable
- Separate footer logic from page content

### Key snippet

```tsx
<div className="border-t">iBuiltThis Inc. All rights reserved.</div>
```

### Why this matters

- Footer lives outside pages and features
- Easy to update in one place
- Reinforces layout-based thinking

**Concepts used**

- Shared layout components
- Clean separation of concerns
- Global UI structure

## What This Section Teaches

- How layout.tsx controls global UI
- Difference between page-level and layout-level components
- How to create reusable navigation
- How to prepare UI for authentication
- How to structure common components cleanly

---
