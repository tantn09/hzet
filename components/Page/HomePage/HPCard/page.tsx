import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import CardItem from "@/components/Common/CardItem/page";
type HPCardProps = {
  title: string;
  isDarkBackground?: boolean;
  data: any;
  linkTo: string;
};
export const HPCard = ({
  title,
  isDarkBackground = false,
  data,
  linkTo,
}: HPCardProps) => {
  return (
    <div
      className={`${styles.container} ${isDarkBackground ? styles.dark : null}`}
    >
      <div className={styles.subContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.block}>
          {data.map((item: any, index: number) => {
            return <CardItem key={index} data={item.fields} />;
          })}
        </div>
        <Link href={linkTo}>
          <button className={styles.btn}>Xem Thêm</button>
        </Link>
      </div>
    </div>
  );
};
