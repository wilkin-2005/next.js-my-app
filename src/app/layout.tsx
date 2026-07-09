
// styling och komponenter
import "@/src/app/globals.css";
import MainNav from "@/src/components/main-navigation/main-nav";

// Fonts
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
import type { Metadata } from "next";

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
        <MainNav />

        {children}
      </body>
      
    </html>
  );
}