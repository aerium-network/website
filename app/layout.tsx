import type { Metadata } from "next";
import { Rubik, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aerium.network'),
  title: {
    default: "Aerium - Building Bright Consensus",
    template: "%s | Aerium",
  },
  description:
    "Aerium empowers communities to build trust, clarity, and future-ready decisions together. A platform designed to transform the way communities agree, decide, and grow.",
  keywords: [
    "consensus",
    "collaboration",
    "community",
    "decision making",
    "transparency",
    "collective intelligence",
    "trust",
    "innovation",
  ],
  authors: [{ name: "Aerium" }],
  creator: "Aerium",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/web-app-manifest-192x192.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Aerium",
    title: "Aerium - Building Bright Consensus",
    description:
      "Join a new era of collaboration and consensus. Aerium empowers communities to build trust, clarity, and future-ready decisions together.",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Aerium Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerium - Building Bright Consensus",
    description:
      "Join a new era of collaboration and consensus. Aerium empowers communities to build trust, clarity, and future-ready decisions together.",
    images: ["/web-app-manifest-512x512.png"],
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
    <html lang="en">
      <body className={`${rubik.variable} ${inter.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
