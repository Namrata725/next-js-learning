import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "learn next js by building project",
  description: "A simple project to learn next js with readme notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <header>I BUILD THIS</header>
        {children}
        <footer>© 2024 LEARNING next js. All rights reserved.</footer>
      </body>
    </html>
  );
}
