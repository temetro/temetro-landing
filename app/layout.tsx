import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.temetro.com";
const siteName = "temetro";
const title = "temetro: the open-source workspace for patient care";
const description =
  "An open-source, self-hostable clinical workspace: patient records, scheduling, prescriptions, and notes with role-based access for your care team, plus an AI chat in active development.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · temetro",
  },
  description,
  applicationName: siteName,
  keywords: [
    "temetro",
    "open source EHR",
    "clinical workspace",
    "patient records",
    "self-hostable EHR",
    "electronic health records",
    "clinic scheduling",
    "prescriptions",
    "care team",
    "AI for clinicians",
    "healthcare software",
  ],
  authors: [{ name: "temetro" }],
  creator: "temetro",
  publisher: "temetro",
  alternates: {
    canonical: "/",
  },
  category: "Healthcare",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
      className={cn("dark", "h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
