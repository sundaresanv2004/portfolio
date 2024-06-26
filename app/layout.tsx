import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import React from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio WebSite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          spaceGrotesk.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
