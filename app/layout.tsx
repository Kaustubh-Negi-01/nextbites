import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Weeknight recipes",
  description: "Four weeknight dinners, each ready in 35 minutes or less.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="shell nav" aria-label="Main navigation">
            <Link href="/" className="wordmark">NextBites</Link>
            <Link href="/#recipes">Recipes</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
