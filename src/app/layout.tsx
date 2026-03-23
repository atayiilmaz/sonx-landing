import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#030303",
};

export const metadata: Metadata = {
  title: "Sonx - AI Song Generator",
  description: "Create professional-quality songs with AI. Just describe your vision, choose a style, and let Sonx compose your unique track in seconds.",
  keywords: ["AI music", "song generator", "AI song", "music creator", "AI composer"],
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: "Sonx - AI Song Generator",
    description: "Create professional-quality songs with AI in seconds.",
    type: "website",
    images: ["/app-icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonx - AI Song Generator",
    description: "Create professional-quality songs with AI in seconds.",
    images: ["/app-icon.png"],
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
      className={`h-full antialiased dark`}
      style={{ fontFamily: "'UI Sans Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon_io/favicon-32x32.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />
        <meta name="theme-color" content="#030303" />
      </head>
      <body className="min-h-full flex flex-col bg-background">{children}</body>
    </html>
  );
}
