import type { Metadata } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import ConsoleSignature from "@/components/ConsoleSignature";
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
    "The intelligence layer for production systems. Predictive observability, autonomous remediation, cost control — engineered for what your team already runs, owned by you after we leave.",
  keywords: [
    "AI infrastructure",
    "intelligent observability",
    "AIOps",
    "MLOps",
    "predictive observability",
    "autonomous remediation",
    "AI cost control",
    "intelligence layer",
    "production AI",
  ],
  openGraph: {
    title: "Digital Sorcery — Infrastructure That Thinks",
    description:
      "The intelligence layer for production systems. Predictive observability, autonomous remediation, cost control — engineered for what your team already runs, owned by you after we leave.",
    url: "https://digitalsourcery.ai",
    siteName: "Digital Sorcery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Sorcery — Infrastructure That Thinks",
    description:
      "The intelligence layer for production systems. Predictive observability, autonomous remediation, cost control — engineered for what your team already runs.",
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
        <ConsoleSignature />
        {children}
      </body>
    </html>
  );
}
