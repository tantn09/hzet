import { useTranslations } from "next-intl";
import { HPCard } from "./hp-card";
import { HPCarousel } from "./hp-carousel";
import { HPContent } from "./hp-content";
import { HPCta } from "./hp-cta";
import { HPHero } from "./hp-hero";
import { HPStats } from "./hp-stats";
import { HPTestimonials } from "./hp-testimonials";

export const HomePage = ({ news, studyAboard, laborExport }: any) => {
  const t = useTranslations("homePage.cards");
  return (
    <>
      <HPCarousel />
      <HPHero />
      <HPStats />
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
      <HPTestimonials />
      <HPCta />
    </>
  );
};
