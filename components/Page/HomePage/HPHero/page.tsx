import styles from "./styles.module.css";
export const HPHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.brand}>HZET GLOBAL</div>
        <div className={styles.title}>Chương Trình Du Học Chuyển Tiếp Bậc Thạc Sỹ</div>
        <div className={styles.description}>Được thiết kế bởi các đại học top đầu tại Úc, New Zealand - Top 1% thế giới.
        Học viên có 1 giai đoạn học tại Viện ISB sau đó chuyển tiếp và học tập tại nước ngoài.</div>
        <button className={styles.staterBtn} >Bắt Đầu Ngay</button>
      </div>
    </div>
  );
};
