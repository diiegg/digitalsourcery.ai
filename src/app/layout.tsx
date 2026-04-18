import type { Metadata } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display: Sora — geometric, calm, technical. Replaces Space Grotesk (banned: training-data default).
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Body: Manrope — neutral, readable, less default-feeling. Replaces Inter (banned: training-data default).
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Digital Sorcery — Infrastructure That Thinks",
  description:
    "We design, build, and implement AI-powered infrastructure. System architecture, automation, and operational improvements — engineered for production, owned by you.",
  keywords: [
    "AI infrastructure",
    "platform engineering",
    "AIOps",
    "AI observability",
    "MLOps",
    "AI governance",
    "intelligent infrastructure",
    "production AI",
    "AI platform",
  ],
  openGraph: {
    title: "Digital Sorcery — Infrastructure That Thinks",
    description:
      "We design, build, and implement AI-powered infrastructure. System architecture, automation, and operational improvements — engineered for production, owned by you.",
    url: "https://digitalsourcery.ai",
    siteName: "Digital Sorcery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Sorcery — Infrastructure That Thinks",
    description:
      "We design, build, and implement AI-powered infrastructure — observable, adaptive, and increasingly autonomous.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-theme="accent" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
