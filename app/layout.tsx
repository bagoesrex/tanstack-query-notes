import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/query-provider";
import Header from "@/components/layout/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

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
        className={`${inter.variable} antialiased tracking-tight`}
      >
        <QueryProvider>
          <div className="min-h-screen flex flex-col justify-between font-inter">
            <Header />
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
