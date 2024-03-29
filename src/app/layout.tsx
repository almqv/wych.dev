import type { Metadata } from "next";
import { Lato as FontSans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wych",
  description: "In the wych elm's shadow, veritas whispers brew.",
};

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/layout";

const fontSans = FontSans({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
});

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
          fontSans.className,
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
      </body>
    </html>
  );
}
