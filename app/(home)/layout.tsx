import Footer from "@/components/Common/Footer/page";
import './home.layout.css'
import HomeHeader from "@/components/Common/HomeHeader/page";
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
