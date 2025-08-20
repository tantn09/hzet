import CardItem from "@/components/Common/CardItem/page";
import styles from "./styles.module.css";
export default function Cards({ headerTitle, data }: any) {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={`${styles.title} title`}>{headerTitle}</h2>
        <div className={styles.cardsContainer}>
          {data.map((item: any, index: Number) => {
            const { thumbnail, title, slug } = item?.fields;
            const image = "https:" + thumbnail?.fields?.file?.url;
            return (
              <CardItem key={index} image={image} title={title} slug={slug} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
