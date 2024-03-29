import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wych",
  description: "In the wych elm's shadow, veritas whispers brew.",
};

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          fontSans.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="w-full flex flex-col justify-center">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
