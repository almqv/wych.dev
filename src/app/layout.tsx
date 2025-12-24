import type { Metadata } from "next";

import "./globals.css";

import 'katex/dist/katex.min.css';

export const metadata: Metadata = {
  title: "collected sayings of an insane sane person",
  description: "",
  keywords: [
    "elias",
    "elias almqvist",
    "almqvist",
    "zettascale computing corp",
    "zscc",
    "zscc.ai",
    "zscc ai",
    "zscc ai corp",
    "zscc ai corp. (yc s24)",
    "zscc ai corp. (yc s24)",
    "zettascale",
    "zettascale computing",
    "zettascale computing corp",
    "zettascale computing corp. (yc s24)",
    "zettascale computing corp. (yc s24)",
    "zetta",
    "zetta computing",
    "zetta computing corp",
    "zetta computing corp. (yc s24)",
    "zetta computing corp. (yc s24)",
    "zetta ai",
    "zetta ai corp",
    "zetta ai corp. (yc s24)",
    "zetta ai corp. (yc s24)",
    "energy efficient ai",
    "energy efficient chips",
    "energy efficient ai chips",
    "energy efficient ai chips for ai training and inference",
    "energy efficient ai chips for ai training and inference",
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
          defaultTheme="dark"
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
