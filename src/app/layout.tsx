import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import { FloatingContact } from "@/components/common/floating-contact";
import Header from "@/components/common/layout/header";
import Footer from "@/components/common/layout/footer";
import { ScrollProgress } from "@/components/common/scroll-progress";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HZET GLOBAL",
  description: "HZET Global – Chuyên tư vấn du học Nhật Bản, Hàn Quốc, Úc và cung ứng nhân lực quốc tế. Dịch vụ uy tín, minh bạch, đồng hành cùng bạn trên hành trình vươn ra thế giới.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${beVietnamPro.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingContact />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
