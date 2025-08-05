import Footer from "@/components/Common/Footer/page";
import Header from "@/components/Common/Header/page";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hzet Global",
  description: "Tư Vấn Xuất Khẩu Lao Động và Du Học",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="globalLayout">
        <Header />
        <main>{children}</main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
