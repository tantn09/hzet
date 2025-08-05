import Image from "next/image";
import styles from "./styles.module.css";

type HPContentProps = {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
};

export const HPContent = ({
  index,
  title,
  description,
  imageUrl,
}: HPContentProps) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: index % 2 === 0 ? "#fff" : "#f3f4f6",
      }}
    >
      <div className={styles.contentContainer} style={{
        flexDirection: index % 2 === 0 ? "row" : "row-reverse",
      }}>
        <div className={styles.content}>
          <div className={styles.title}>
            <span>{title}</span>
          </div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.content}>
          <Image src={imageUrl} width={490} height={275} alt="content1" />
        </div>
      </div>
    </div>
  );
};
