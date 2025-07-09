/** biome-ignore-all lint/nursery/useUniqueElementIds: <explanation> */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meditation Program",
  description: "はかどる瞑想、睡眠をあなたに。",
  openGraph: {
    title: "Meditation Program",
    description: "はかどる瞑想、睡眠をあなたに。",
    images: [
      {
        url: "https://meditation-program.vercel.app/meditationprogram.png",
        alt: "Meditation Program OGP",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Meditation Program",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          id="google-analytics"
          type="application/ld+json"
          strategy="afterInteractive"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://example.com",
              "name": "My Awesome Site",
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
