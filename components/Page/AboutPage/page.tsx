import { useTranslations } from "next-intl";
import styles from "./styles.module.css";
export default function AboutPage() {
  const t = useTranslations("aboutPage");
  const content2 = t("content2").split("\n");
  const content3 = t("content3").split("\n");
  const content4 = t("content4").split("\n");

  return (
    <div className={styles.container}>
      <div className={styles.aboutContainer}>
        <h1>{t("title1")}</h1>
        <p>{t("content1")}</p>
        <h1>{t("title2")}</h1>
        {content2.map((content) => (
          <p>• {content}</p>
        ))}
        <h1>{t("title3")}</h1>
        {content3.map((content) => (
          <p>• {content}</p>
        ))}
        <h1>{t("title4")}</h1>
        {content4.map((content) => (
          <p>• {content}</p>
        ))}
      </div>
    </div>
  );
}
