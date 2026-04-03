import type { Metadata } from "next";
import { Outfit, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const ibmPlexSans = IBM_Plex_Sans({
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
  title: "Digital Sorcery — Make AI Work in Production",
  description:
    "Platform engineers who integrate AI with legacy systems, control costs, and build autonomous operations. Production-ready software your team owns.",
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
    title: "Digital Sorcery — Make AI Work in Production",
    description:
      "Platform engineers who integrate AI with legacy systems, control costs, and build autonomous operations. Production-ready software your team owns.",
    url: "https://digitalsourcery.ai",
    siteName: "Digital Sorcery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Sorcery — Make AI Work in Production",
    description:
      "Platform engineers who make AI production-ready. Legacy integration, cost control, autonomous operations.",
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
        className={`${outfit.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
