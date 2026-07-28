import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: "Privacy Policy | Tiko Alarm",
    description:
      "How Tiko Alarm handles alarm data, device permissions, and your privacy.",
    icons: {
      icon: "/tiko-logo.png",
      shortcut: "/tiko-logo.png",
    },
    openGraph: {
      title: "Your mornings are personal. Your data should be too.",
      description: "Read the Tiko Alarm Privacy Policy.",
      images: [
        {
          url: "/og.png",
          width: 1731,
          height: 909,
          alt: "Tiko Alarm Privacy Policy",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Your mornings are personal. Your data should be too.",
      description: "Read the Tiko Alarm Privacy Policy.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
