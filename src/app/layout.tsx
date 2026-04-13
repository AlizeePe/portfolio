import type { Metadata } from "next";
import { Geist } from "next/font/google";

// Components
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Styles
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alizée Perrichon — Frontend Developer",
  description:
    "Frontend developer with 3 years of experience. Open to opportunities in South Korea.",
  icons: {
    icon: [
      { url: "/icon/favicon-16x16.png", sizes: "16x16" },
      { url: "/icon/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: "/icon/apple-touch-icon.png",
    shortcut: "/icon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
