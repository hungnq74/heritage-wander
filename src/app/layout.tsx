import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Living Almanac — Cultural Knowledge Scouting",
  description: "Capture, verify, and discover community-owned living knowledge.",
};

import { Navbar } from "@/components/navigation/navbar";
import { PageTransition } from "@/components/shared/page-transition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full`}
    >
      <body className="min-h-full bg-background text-foreground flex flex-col font-sans pt-14">
        <Navbar />
        <main className="flex-1 overflow-auto">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </body>
    </html>
  );
}
