import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "\\wych.dev",
  description: "In the wych elm's shadow, veritas whispers brew.",
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
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased",
          fonts.sans.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
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
