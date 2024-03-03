import type { Metadata } from "next";
import { Noto_Sans } from 'next/font/google'
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans'
})

export const metadata: Metadata = {
  title: "blog",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={notoSans.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
