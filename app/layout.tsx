import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://odojema.pages.dev"),

  title: {
    default: "Odojema | Career & Income Tools",
    template: "%s | Odojema",
  },

  description:
    "Free salary calculators, raise calculators, freelance rate calculators, and career tools.",

  keywords: [
    "salary calculator",
    "raise calculator",
    "freelance rate calculator",
    "income calculator",
    "career tools",
    "salary tools",
  ],

  openGraph: {
    title: "Odojema | Career & Income Tools",
    description:
      "Free salary calculators, raise calculators, freelance rate calculators, and career tools.",
    url: "https://odojema.pages.dev",
    siteName: "Odojema",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}