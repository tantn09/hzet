import RichText from "@/components/Common/RichText/page";
import styles from "./styles.module.css";
export default function PostDetail({ data }: any) {
  const { title, content }: any = data;
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}> {title}</h1>
        <RichText content={content} />
      </div>
    </div>
  );
}
