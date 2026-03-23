import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/query-provider";
import Header from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My TanStack Query Journey | Bagoes Rex",
  description: "Sharing what I’ve learned while diving into TanStack Query."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased tracking-tight`}
      >
        <QueryProvider>
          <div className="min-h-screen flex flex-col justify-between pb-3">
            <Header />
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
