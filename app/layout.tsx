import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin", "vietnamese"], // hỗ trợ tiếng Việt
  weight: ["400", "500", "600", "700"], // các độ dày cần dùng
  display: "swap", // tối ưu hiển thị
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
      <body className={`${raleway.className} antialiased`}>
        <main>{children}</main>
        <div className="contacts">
          <Link href="https://zalo.me/0969513236" target="_blank">
            <Image
              src={"/icon/zalo.svg"}
              width={50}
              height={50}
              alt="zalo"
              className="contactIcon"
            />
          </Link>
          <Link href="https://www.facebook.com/Akisoso241003" target="_blank">
            <Image
              src={"/icon/messenger.svg"}
              width={50}
              height={50}
              alt="zalo"
              className="contactIcon"
            />
          </Link>
        </div>
      </body>
    </html>
  );
}
