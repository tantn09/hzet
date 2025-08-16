import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
type HPCardProps = {
  title: string;
  isDarkBackground?: boolean
  data: any
};
export const HPCard = ({ title, isDarkBackground = false, data }: HPCardProps) => {

  return (
    <div className={`${styles.container} ${isDarkBackground ? styles.dark : null}`}>
      <div className={styles.subContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.block}>
          {data.map((item: any, index: number) => {
            const { title, thumbnail, slug } = item.fields;
            const image = 'https:' + thumbnail?.fields?.file?.url;
            return (
              <Link href={slug} key={index} className={styles.blockItem}>
                <Image src={image} className={styles.image} width={360} height={203} alt="image" />
                <div className={styles.blockDescription}>
                  {title}
                </div>
              </Link>)
          })}
        </div>
        <button className={styles.btn}>Xem Thêm</button>
      </div>
    </div>
  );
};
