import Image from "next/image";
import styles from "./styles.module.css";

// type HPContentProps = {
//   index: number;
//   title: string;
//   description: string;
//   imageUrl: string;
// };

export const HPContent = () => {
  const contents = [
    {
      title: "TẦM NHÌN",
      description:
        "Cung ứng nguồn lao động chất lượng, đa dạng cho thị các thị trường nước ngoài. \nKhẳng định vị thế là công ty Cung ứng lao động và du học hàng đầu Việt Nam.\nLuôn hướng đến mục tiêu phát triển bền vững.\nLà sự lựa chọn hàng đầu cho các đối tác và người lao động.",
      imageUrl: "/images/vision.jpg",
    },
    {
      title: "SỨ MỆNH",
      description:
        "Thay đổi quan niệm về xuất khẩu lao động cho người dân Việt.\nĐịnh hướng nghề nghiệp cho nguồn nhân lực trẻ Việt Nam. \nMang lại cơ hội thay đổi tương lai cho người lao động Việt Nam. \nKết nối và hợp tác với các đối tác lớn, uy tín nhất tại các nước.",
      imageUrl: "/images/sm.jpg",
    },
    {
      title: "GIÁ TRỊ CỐT LÕI",
      description:
        "Người lao động là tài sản quan trọng nhất và là nguồn sức mạnh của HZET.\nĐoàn kết là yếu tố quyết định khi xây dựng một doanh nghiệp bền vững.\nSự uy tín là nền tảng cho mọi hoạt động của công ty.\nChất lượng làm cam kết với đối tác và người lao động",
      imageUrl: "/images/core.jpg",
    },
  ];

  return (
    <div className={styles.container} >
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
            <div className={`${styles.contentContainer} ${index % 2 === 0 ? styles.even : styles.odd}`}>
              <div className={styles.content}>
                <div className={styles.title}>
                  <span>{content.title}</span>
                </div>
                <div className={styles.description}>
                  {descriptions.map((des, index) => <p key={index} className={styles.bullet}>{des}</p>)}</div>
              </div>
              <div className={styles.content}>
                <Image className={styles.image} src={content.imageUrl} width={490} height={275} alt="content1" />
              </div>
            </div>
          </div>)
      }
      )}
    </div>
  );
};
