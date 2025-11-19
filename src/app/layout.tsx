import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arizona Commercial Roofing | TPO, Foam & Metal Roofing Experts",
  description: "Top-rated commercial roofing contractor in Arizona. Specializing in TPO, spray foam, and metal roofing for industrial and commercial buildings. Free estimates.",
  keywords: "commercial roofing arizona, flat roof repair phoenix, industrial roofing, TPO, foam roofing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <SchemaMarkup />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
