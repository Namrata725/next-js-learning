import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

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
        <Header></Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
