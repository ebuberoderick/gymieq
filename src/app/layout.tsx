import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBackdrop } from "@/components/graphics/PageBackdrop";
import { Providers } from "@/components/providers/Providers";
import { BRAND } from "@/lib/constants/brand";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${BRAND.name} — ${BRAND.subtitle}`,
  description:
    "Stream live and on-demand fitness classes, track your progress, and shop premium gym gear. Train smarter with Gymieq.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col bg-brand-black text-white">
        <Providers>
          <PageBackdrop />
          <Header />
          <main className="relative flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
