import { useTranslations } from "next-intl";
import Link from "next/link";
import styles from "./styles.module.css";
export const HPHero = () => {
  const t = useTranslations("homePage.hero");
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.brand}>{t("title")}</div>
        <div className={styles.title}>
          <div>{t("subTitle")}</div>
        </div>
        <p className={styles.description}>{t("description")}</p>
        <Link href="/about">
          <button className={styles.staterBtn}>Về Chúng Tôi</button>
        </Link>
      </div>
    </div>
  );
};
