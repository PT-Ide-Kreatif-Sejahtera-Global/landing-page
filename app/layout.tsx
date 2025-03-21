import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'], 
  variable: '--font-inter',
  display: "swap",
  weight: ["400", "700", "200", "300", "500", "600", "100"],
});

export const metadata: Metadata = {
  title: "iDeaThings",
  description: "A Place To Grow Your Talent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased h-screen w-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
