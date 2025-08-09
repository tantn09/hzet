import Image from "next/image";
import styles from "./styles.module.css";
type HPCardProps = {
  title: string;
  isDarkBackground?: boolean
};
export const HPCard = ({title, isDarkBackground = false}: HPCardProps) => {
  return (
    <div className={`${styles.container} ${isDarkBackground ? styles.dark : null}`}>
      <div className={styles.subContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.block}>
          <div className={styles.blockItem}>
            <Image src={"/images/vision.jpg"} className={styles.image} width={360} height={203} alt="image" />
            <div className={styles.blockDescription}>
              Cung ứng nguồn lao động chất lượng, đa dạng cho các thị trường nước ngoài.
            </div>
          </div>
          <div className={styles.blockItem}>
            <Image src={"/images/vision.jpg"} className={styles.image} width={360} height={203} alt="image" />
            <div className={styles.blockDescription}>
              Cung ứng nguồn lao động chất lượng, đa dạng cho các thị trường nước ngoài.
            </div>
          </div>
          <div className={styles.blockItem}>
            <Image src={"/images/vision.jpg"} className={styles.image} width={360} height={203} alt="image" />
            <div className={styles.blockDescription}>
              Cung ứng nguồn lao động chất lượng, đa dạng cho các thị trường nước ngoài.
            </div>
          </div>
        </div>
        <button className={styles.btn}>Xem Thêm</button>
      </div>
    </div>
  );
};
