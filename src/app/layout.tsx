
// Imports
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Link from "next/link";

import "@/src/styles/globals.css";
import styles from "@/src/styles/mainNav.module.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "Wilmers första app i Next.js",
  description: "Oh. Hi. So. How are you holding up? BECAUSE I'M A POTATO.",
};



// Root layout function
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="sv" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} >
      
      <body className="min-h-full flex flex-col">
        <header className={styles.header}>
          <nav>
            <Link href="/" className={styles.navLink}>Hem</Link>
            <Link href="/about" className={styles.navLink}>Om oss</Link>
          </nav>
        </header>

        {children}
      </body>
      
    </html>
  );
}