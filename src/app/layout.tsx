import MainFooter from "@/components/MainFooter";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google Clone",
  description: "Google clone created by Next.js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`&{inter.className} relative min-h-screen`}
        suppressHydrationWarning
      >
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
