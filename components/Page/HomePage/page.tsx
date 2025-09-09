import { useTranslations } from "next-intl";
import { HPCard } from "./HPCard/page";
import { HPContent } from "./HPContent/page";
import { HPHero } from "./HPHero/page";
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
