import Image from "next/image";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={80}
            quality={100}
            priority
          />
        </div>
        <div className={styles.navBar}>
            <div className={styles.navBarItem}>Giới Thiệu</div>
            <div className={styles.navBarItem}>Tin Tuyển Dụng</div>
            <div className={styles.navBarItem}>Tư vấn</div>
            <div className={styles.navBarItem}>Liên Hệ</div>
        </div>
      </div>
    </div>
  );
}
