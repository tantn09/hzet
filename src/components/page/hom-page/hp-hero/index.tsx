import { useTranslations } from "next-intl";
import Link from "next/link";
export const HPHero = () => {
  const t = useTranslations("homePage.hero");
  return (
    <section className="bg-linear-to-r from-blue-900 via-blue-800 to-indigo-900 py-20 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-5">
          <div className="typo-caption text-blue-200">
            {t("title")}
          </div>
          <div className="typo-display text-white">
          <div>{t("subTitle")}</div>
          </div>
          <p className="typo-body text-blue-100 sm:text-lg">
            {t("description")}
          </p>
          <Link
            href="/about"
            className="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
          >
            Ve Chung Toi
          </Link>
        </div>
      </div>
    </section>
  );
};
