import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-terminal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robert Fox - Selected Works",
  description: "Developer portfolio - Selected Works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-terminal bg-bg antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
