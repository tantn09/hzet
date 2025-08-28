import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { truncateString } from "@/helper/utils/string.utils";
export default function CardItem({ data }: any) {
  const {
    title,
    thumbnail,
    slug,
    shortDescription,
    salary,
    location,
    quantity,
  } = data;
  const image = "https:" + thumbnail?.fields?.file?.url;
  const isShow = salary || location || quantity;
  return (
    <Link href={slug} className={styles.card}>
      <Image
        src={image}
        className={styles.image}
        width={360}
        height={203}
        alt="image"
      />
      <div className={styles.contentContainer}>
        <div className={styles.title}>{truncateString(title, 75)}</div>
        {isShow && (
          <div className={styles.jobInfo}>
            {quantity && (
              <div className={styles.item}>
                <Image
                  src={"/icon/quantity.svg"}
                  width={20}
                  height={20}
                  alt="quantity"
                />
                <span>{quantity}</span>
              </div>
            )}
            {location && (
              <div className={styles.item}>
                <Image
                  src={"/icon/location.svg"}
                  width={20}
                  height={20}
                  alt="location"
                />
                <span>{location}</span>
              </div>
            )}
            {salary && (
              <div className={styles.item}>
                <Image
                  src={"/icon/salary.svg"}
                  width={20}
                  height={20}
                  alt="salary"
                />
                <span>{salary}</span>
              </div>
            )}
          </div>
        )}
        {shortDescription && (
          <>
            <hr className={styles.divide} />
            <div className={styles.shortDescription}>
              {truncateString(shortDescription, 110)}
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
