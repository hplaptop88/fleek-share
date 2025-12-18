import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FleekShare - Fast & Secure File Sharing | Free Temporary File Transfer",
  description: "Share files securely with password protection, custom expiry times, and one-time downloads. No registration required. Upload up to 50MB free - perfect for temporary file sharing.",
  keywords: "file sharing, secure transfer, password protected, temporary upload, no registration",
  authors: [{ name: "FleekShare Team" }],
  openGraph: {
    title: "FleekShare - Secure File Sharing Made Simple",
    description: "Share files securely with password protection, custom expiry times, and one-time downloads. No registration required.",
    url: "https://fleekshare.com",
    siteName: "FleekShare",
    type: "website",
    images: [
      {
        url: "https://fleekshare.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "FleekShare - Secure File Sharing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FleekShare - Secure File Sharing Made Simple",
    description: "Share files securely with password protection, custom expiry times, and one-time downloads.",
    images: ["https://fleekshare.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#10B981" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "FleekShare",
              description: "Secure file sharing platform with password protection and auto-expiring links",
              url: "https://fleekshare.com",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Password Protection",
                "Auto-Expiring Files",
                "One-Time Downloads",
                "End-to-End Encryption",
                "No Registration Required",
                "50MB File Limit",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white antialiased">{children}</body>
    </html>
  );
}
