import Link from "next/link";
import styles from "./styles.module.css";
export const HPHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.brand}>HZET GLOBAL</div>
        <div className={styles.title}>
          <div>CÔNG TY TNHH HZET GLOBAL</div>
          <div>KẾT NỐI NHÂN LỰC VIỆT VỚI THẾ GIỚI</div>
        </div>
        <p className={styles.description}>
          Chuyên xuất khẩu lao động và tư vấn du học, kết nối nhân lực Việt Nam
          với cơ hội làm việc và học tập tại nhiều quốc gia khác. Chúng tôi cam
          kết dịch vụ uy tín, minh bạch và chi phí hợp lý, đồng hành cùng khách
          hàng trên hành trình vươn ra thế giới.
        </p>
        <Link href="/about">
          <button className={styles.staterBtn}>Về Chúng Tôi</button>
        </Link>
      </div>
    </div>
  );
};
