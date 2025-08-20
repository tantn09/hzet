import { HPCard } from "./HPCard/page";
import { HPContent } from "./HPContent/page";
import { HPHero } from "./HPHero/page";
import styles from "./styles.module.css";
export const HomePage = ({ news, studyAboard, laborExport }: any) => {
  return (
    <div className={styles.container}>
      <HPHero />
      <HPContent />
      <HPCard title="Xuất Khẩu Lao Động" isDarkBackground={true} data={laborExport} linkTo="labor-export"/>
      <HPCard title="Du Học" data={studyAboard} linkTo="study-aboard"/>
      <HPCard title="Tin Tức" isDarkBackground={true} data={news} linkTo="news"/>
    </div>
  );
};
