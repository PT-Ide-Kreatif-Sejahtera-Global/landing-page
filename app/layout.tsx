import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'], 
  variable: '--font-inter',
  display: "swap",
  weight: ["400", "700", "200", "300", "500", "600", "100"],
});

export const metadata: Metadata = {
  title: "IdeaThings",
  description: "A Place For To Grow Your Talent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
