import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/query-provider";
import Header from "@/components/layout/header";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
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
        className={`${plusJakartaSans.variable} antialiased tracking-tight`}
      >
        <QueryProvider>
          <div className="min-h-screen flex flex-col justify-between pb-3 font-jakarta">
            <Header />
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
