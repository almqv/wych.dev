import type { Metadata } from "next";

import "./globals.css";

import 'katex/dist/katex.min.css';

export const metadata: Metadata = {
  title: "collected sayings of an insane sane person",
  description: "",
  keywords: [
    "wych.dev",
    "wych",
    "elias",
    "elias almqvist",
    "almqvist",
    "engineer",
    "scientist",
    "genius",
    "polymath",
    "software engineer",
    "physics",
    "mathematics",
    "founder",
    "startup",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wych.dev",
    title: "collected sayings of an insane sane person",
    description: "",
  },
};

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/layout";

import fonts from "@/components/fonts";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" 
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased",
          fonts.sans.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
