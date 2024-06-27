import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const roboto = Kanit({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Ali Hassan",
  description: "Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
