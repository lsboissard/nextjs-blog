import { Noto_Sans } from 'next/font/google'

import Header from "@/components/header";
import { ThemeProvider } from '@/components/theme-provider'
import "./globals.css";

import type { Metadata } from "next";

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans'
})

export const metadata: Metadata = {
  title: "blog",
  description: "...",
  authors: [
    {
      name: "Leo Boissard",
      url: "lb.dev.br"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={notoSans.className} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
