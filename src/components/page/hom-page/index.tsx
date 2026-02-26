import { useTranslations } from "next-intl";
import { HPCard } from "./hp-card";
import { HPContent } from "./hp-content";
import { HPHero } from "./hp-hero";
export const HomePage = ({ news, studyAboard, laborExport }: any) => {
  const t = useTranslations("homePage.cards");
  return (
    <>
      <HPHero />
      <HPContent />
      <HPCard
        title={t("cardTitle1")}
        isDarkBackground={true}
        data={laborExport}
        linkTo="labor-export"
      />
      <HPCard
        title={t("cardTitle2")}
        data={studyAboard}
        linkTo="study-abroad"
      />
      <HPCard
        title={t("cardTitle3")}
        isDarkBackground={true}
        data={news}
        linkTo="news"
      />
    </>
  );
};
