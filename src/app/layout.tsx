import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tattoo Generator - AI Powered Ink Design",
  description: "Create unique, personalized tattoo designs in seconds with the power of AI. Visualize your next ink before it's permanent.",
  keywords: ["tattoo generator", "AI tattoo", "tattoo design", "ink design", "tattoo visualizer", "AR tattoo"],
  openGraph: {
    title: "Tattoo Generator - AI Powered Ink Design",
    description: "Create unique, personalized tattoo designs in seconds with the power of AI.",
    url: "https://tattoogen.com",
    siteName: "Tattoo Generator",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tattoo Generator App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tattoo Generator - AI Powered Ink Design",
    description: "Create unique, personalized tattoo designs in seconds with the power of AI.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
