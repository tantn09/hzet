import Footer from "@/components/Common/Footer/page";
import Header from "@/components/Common/Header/page";
import type { Metadata } from "next";
import { Raleway } from 'next/font/google'
import "./globals.css";

const raleway = Raleway({
  subsets: ['latin', 'vietnamese'], // hỗ trợ tiếng Việt
  weight: ['400', '500', '600', '700'],    // các độ dày cần dùng
  display: 'swap',                  // tối ưu hiển thị
})

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
        className={`${raleway.className} antialiased`}
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
