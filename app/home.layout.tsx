import Footer from "@/components/Common/Layout/Footer/page";
import './home.layout.css'
import HomeHeader from "@/components/Common/Layout/HomeHeader/page";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="homeContainer">
      <HomeHeader />
      <main className="homeMain">{children}</main>
      <Footer />
    </div>
  );
}
