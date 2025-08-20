import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
export default function CardItem({ title, slug, image }: any) {
  return (
    <Link href={slug} className={styles.card}>
      <Image
        src={image}
        className={styles.image}
        width={360}
        height={203}
        alt="image"
      />
      <div className={styles.title}>{title}</div>
    </Link>
  );
}
