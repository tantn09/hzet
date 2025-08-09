import { HPCard } from "./HPCard/page";
import { HPContent } from "./HPContent/page";
import { HPHero } from "./HPHero/page";
import styles from "./styles.module.css";
export const HomePage = () => {

  return (
    <div className={styles.container}>
      <HPHero />
      <HPContent />
      <HPCard title="Xuất Khẩu Lao Động" isDarkBackground={true}/>
      <HPCard title="Du Học"/>
      <HPCard title="Tin Tức" isDarkBackground={true}/>
    </div>
  );
};
