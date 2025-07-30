import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "Cosmin Ilie - Frontend Engineer",
    template: "%s | Cosmin Ilie"
  },
  description: "Frontend Engineer based in Bucharest specializing in React, Next.js, and TypeScript. Creating exceptional digital experiences with modern web technologies.",
  keywords: ["Frontend Engineer", "React Developer", "Next.js", "TypeScript", "Web Development", "JavaScript", "Bucharest", "Romania"],
  authors: [{ name: "Cosmin Ilie" }],
  creator: "Cosmin Ilie",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cosmin.zip",
    siteName: "Cosmin Ilie - Frontend Engineer",
    title: "Cosmin Ilie - Frontend Engineer",
    description: "Frontend Engineer based in Bucharest specializing in React, Next.js, and TypeScript. Creating exceptional digital experiences with modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmin Ilie - Frontend Engineer",
    description: "Frontend Engineer based in Bucharest specializing in React, Next.js, and TypeScript. Creating exceptional digital experiences with modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
