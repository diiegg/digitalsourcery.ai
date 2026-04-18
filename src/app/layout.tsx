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
  title: "Digital Sorcery — Platform engineering for the teams who run it",
  description:
    "We design, build, and hand off infrastructure your team will operate after we leave. Reference stack, modernised observability, self-healing where it earns its place.",
  keywords: [
    "platform engineering",
    "infrastructure consultancy",
    "Kubernetes consulting",
    "observability",
    "OpenTelemetry",
    "GitOps",
    "internal developer platform",
    "FinOps",
    "MLOps",
  ],
  openGraph: {
    title: "Digital Sorcery — Platform engineering for the teams who run it",
    description:
      "We design, build, and hand off infrastructure your team will operate after we leave. Reference stack, modernised observability, self-healing where it earns its place.",
    url: "https://digitalsourcery.ai",
    siteName: "Digital Sorcery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Sorcery — Platform engineering for the teams who run it",
    description:
      "Designed, built, and handed off. Boring tools that hold under failure, observability that earns its alerts back, self-healing where automation earns its place.",
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
