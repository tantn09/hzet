import { useTranslations } from "next-intl";
import Link from "next/link";
export const HPHero = () => {
  const t = useTranslations("homePage.hero");
  return (
    <section className="bg-linear-to-r from-blue-900 via-blue-800 to-indigo-900 py-20 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl space-y-5">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            {t("title")}
          </div>
          <div className="text-3xl font-bold leading-tight sm:text-5xl">
          <div>{t("subTitle")}</div>
          </div>
          <p className="text-base leading-relaxed text-blue-100 sm:text-lg">
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
