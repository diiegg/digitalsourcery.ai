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
  title: "Digital Sourcery — Infrastructure That Thinks",
  description:
    "AI-native platform engineering, intelligent observability, and autonomous infrastructure. We build the intelligence layer for modern cloud platforms.",
  keywords: [
    "AI infrastructure",
    "AIOps",
    "autonomous platforms",
    "intelligent observability",
    "platform engineering",
    "AI-native",
    "self-healing infrastructure",
  ],
  openGraph: {
    title: "Digital Sourcery — Infrastructure That Thinks",
    description:
      "AI-native platform engineering, intelligent observability, and autonomous infrastructure for teams building at scale.",
    url: "https://digitalsourcery.ai",
    siteName: "Digital Sourcery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Sourcery — Infrastructure That Thinks",
    description:
      "AI-native platform engineering, intelligent observability, and autonomous infrastructure.",
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
