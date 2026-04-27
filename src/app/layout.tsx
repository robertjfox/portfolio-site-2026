import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  variable: "--font-terminal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "~/dev/portfolio",
  description: "Developer portfolio — terminal edition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${vt323.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full font-terminal bg-bg antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
