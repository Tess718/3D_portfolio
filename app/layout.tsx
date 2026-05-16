import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:3000"),
  title: "Teslim Liasu | Frontend Developer",
  description: "Portfolio of Teslim Liasu, a frontend developer based in Nigeria with a passion for coding.",
  keywords: ["Teslim Liasu", "Frontend Developer", "React Developer", "Next.js Portfolio", "Creative Developer", "Nigeria"],
  openGraph: {
    title: "Teslim Liasu | Frontend Developer",
    description: "Portfolio of Teslim Liasu, a frontend developer based in Nigeria with a passion for coding.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "localhost:3000",
    siteName: "Teslim Liasu Portfolio",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Teslim Liasu Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teslim Liasu | Frontend Developer",
    description: "Portfolio of Teslim Liasu, a frontend developer based in Nigeria with a passion for coding.",
    images: ["/images/preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Teslim Liasu",
    jobTitle: "Frontend Developer",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://your-portfolio-url.com",
    sameAs: [
      "https://github.com/Tess718",
      "https://x.com/Devteslim",
      "https://www.instagram.com/teslimomobobola/"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
