import { HPContent } from "./HPContent/page";
import { HPHero } from "./HPHero/page";
import styles from "./styles.module.css";
export const HomePage = () => {
  const contents = [
    {
      title: "Lộ trình linh hoạt, chinh phục Thạc sĩ quốc tế theo cách của bạn",
      description:
        "Bắt đầu tại Việt Nam, tích lũy kiến thức và kỹ năng trước khi chuyển tiếp đến Úc hoặc New Zealand, giúp bạn tối ưu thời gian và trải nghiệm học tập",
      imageUrl: "/images/content1.webp",
    },
    {
      title: "Lộ trình linh hoạt, chinh phục Thạc sĩ quốc tế theo cách của bạn",
      description:
        "Bắt đầu tại Việt Nam, tích lũy kiến thức và kỹ năng trước khi chuyển tiếp đến Úc hoặc New Zealand, giúp bạn tối ưu thời gian và trải nghiệm học tập",
      imageUrl: "/images/content2.webp",
    },
    {
      title: "Lộ trình linh hoạt, chinh phục Thạc sĩ quốc tế theo cách của bạn",
      description:
        "Bắt đầu tại Việt Nam, tích lũy kiến thức và kỹ năng trước khi chuyển tiếp đến Úc hoặc New Zealand, giúp bạn tối ưu thời gian và trải nghiệm học tập",
      imageUrl: "/images/content3.webp",
    },
  ];
  return (
    <div className={styles.container}>
      <HPHero />
      {contents.map((content, index) => (
        <HPContent
          key={index}
          index={index}
          title={content.title}
          description={content.description}
          imageUrl={content.imageUrl}
        />
      ))}
    </div>
  );
};
