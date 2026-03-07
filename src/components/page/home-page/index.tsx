import { useTranslations } from "next-intl";
import { SectionDivider } from "@/components/common/wave-divider";
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
      <SectionDivider topColor="#1e293b" bottomColor="#0f172a" variant="wave" />
      <HPStats />
      <SectionDivider topColor="#0f172a" bottomColor="#f8fafc" variant="curve" />
      <HPContent />
      <SectionDivider topColor="#f8fafc" bottomColor="#0f172a" variant="tilt" />
      <HPCard
        title={t("cardTitle1")}
        isDarkBackground={true}
        data={laborExport}
        linkTo="labor-export"
      />
      <SectionDivider topColor="#0f172a" bottomColor="#ffffff" variant="curve" />
      <HPCard
        title={t("cardTitle2")}
        data={studyAboard}
        linkTo="study-abroad"
      />
      <SectionDivider topColor="#ffffff" bottomColor="#f8fafc" variant="wave" />
      <HPTestimonials />
      <SectionDivider topColor="#f8fafc" bottomColor="#2563eb" variant="curve" />
      <HPCta />
    </>
  );
};
