import Image from "next/image";
import styles from "./styles.module.css";
export const HPCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.title}>Tin Tức</div>
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
