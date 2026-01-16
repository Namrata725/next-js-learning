import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "LEARNING next js",
  description: "A simple project to learn next js with readme notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>this is header</header>
      <body className={`${poppins.className} antialiased`}>{children}</body>
      <footer>hello this is footer</footer>
    </html>
  );
}
