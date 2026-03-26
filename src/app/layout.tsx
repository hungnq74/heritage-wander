import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Heritage Wander — Explore. Unlock. Collect.",
  description: "A Pokemon GO-style cultural heritage explorer. Approach mist nodes, unlock stories, earn rare cultural collectibles.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FAFAF7",
};

import { Navbar } from "@/components/navigation/navbar";
import { BottomTabBar } from "@/components/navigation/bottom-tab-bar";
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
      <body className="min-h-full bg-background text-foreground flex flex-col font-sans pt-14 pb-[calc(56px+env(safe-area-inset-bottom))] md:pb-0">
        <Navbar />
        <main className="flex-1 overflow-auto">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <BottomTabBar />
      </body>
    </html>
  );
}
