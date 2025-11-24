import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Burj Global Corporate Services | Business Setup in Dubai",
    template: "%s | Burj Global Corporate Services",
  },
  description: "Burj Global Corporate Services LLC offers end-to-end business setup, Dubai Mainland + Freezone licensing, investor visas, PRO services, and corporate compliance.",
  keywords: ["business setup dubai", "uae freezone license", "dubai mainland company formation", "corporate services in dubai", "investor visa uae", "pro services dubai"],
  icons: {
    icon: "/webclip.jpeg",
    apple: "/webclip.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white cursor-none`}
      >
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
