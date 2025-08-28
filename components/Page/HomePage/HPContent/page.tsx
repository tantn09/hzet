import Image from "next/image";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";

export const HPContent = () => {
  const t = useTranslations("homePage.contents");
  const contents = [
    {
      title: t("title1"),
      description: t("content1"),
      imageUrl: "/images/vision.jpg",
    },
    {
      title: t("title2"),
      description: t("content2"),
      imageUrl: "/images/sm.jpg",
    },
    {
      title: t("title3"),
      description: t("content3"),
      imageUrl: "/images/core.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      {contents.map((content, index) => {
        const descriptions = content.description.split("\n");
        return (
          <div
            key={index}
            className={styles.block}
            style={{
              backgroundColor: index % 2 === 0 ? "#fff" : "#f5f5f5",
            }}
          >
            <div
              className={`${styles.contentContainer} ${
                index % 2 === 0 ? styles.even : styles.odd
              }`}
            >
              <div className={styles.content}>
                <div className={styles.title}>
                  <span>{content.title}</span>
                </div>
                <div className={styles.description}>
                  {descriptions.map((des, index) => (
                    <p key={index} className={styles.bullet}>
                      {des}
                    </p>
                  ))}
                </div>
              </div>
              <div className={styles.content}>
                <Image
                  className={styles.image}
                  src={content.imageUrl}
                  width={490}
                  height={275}
                  alt="content1"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
