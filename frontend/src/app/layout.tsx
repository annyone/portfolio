import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ["latin", "cyrillic"],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Аня — дизайнер интерфейсов",
  description: "11+ лет в IT: продуктовый дизайн, QA, dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
