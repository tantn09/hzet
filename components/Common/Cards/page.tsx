import CardItem from "@/components/Common/CardItem/page";
import styles from "./styles.module.css";
export default function Cards({ headerTitle, data }: any) {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={`${styles.title} title`}>{headerTitle}</h2>
        <div className={styles.cardsContainer}>
          {data.map((item: any, index: Number) => {
            return (
              <CardItem key={index} data={item?.fields} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
