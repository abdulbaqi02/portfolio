import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Baqi Qureshi - Software Engineer",
  description: "Portfolio of Abdul Baqi Qureshi, a passionate software engineer from Karachi, Pakistan specializing in full-stack development.",
  keywords: "software engineer, full-stack developer, React, Node.js, portfolio",
  authors: [{ name: "Abdul Baqi Qureshi" }],
  openGraph: {
    title: "Abdul Baqi Qureshi - Software Engineer",
    description: "Portfolio of Abdul Baqi Qureshi, a passionate software engineer from Karachi, Pakistan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen`}
        suppressHydrationWarning={true}
      >
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
