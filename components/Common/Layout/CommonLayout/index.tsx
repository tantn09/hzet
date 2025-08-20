import Footer from "@/components/Common/Layout/Footer/page";
import Header from "@/components/Common/Layout/Header/page";
import './common.layout.css'
export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="commonContainer">
      <Header />
      <main className="commonMain">{children}</main>
      <Footer />
    </div>
  );
}
