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
        <div>
          <h4>{t("title1")}</h4>
          <p>{t("content1")}</p>
        </div>
        <div>
          <h4>{t("title2")}</h4>
          {content2.map((content, index) => (
            <p key={index}>• {content}</p>
          ))}
        </div>
        <div>
          {" "}
          <h4>{t("title3")}</h4>
          {content3.map((content, index) => (
            <p key={index}>• {content}</p>
          ))}
        </div>
        <div>
          <h4>{t("title4")}</h4>
          {content4.map((content, index) => (
            <p key={index}>• {content}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
