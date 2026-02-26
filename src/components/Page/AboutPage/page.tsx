import { useTranslations } from "next-intl";
export default function AboutPage() {
  const t = useTranslations("aboutPage");
  const content2 = t("content2").split("\n");
  const content3 = t("content3").split("\n");
  const content4 = t("content4").split("\n");

  return (
    <section className="py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 sm:px-6">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="typo-h3 mb-3 text-slate-900">{t("title1")}</h4>
          <p className="typo-body">{t("content1")}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="typo-h3 mb-3 text-slate-900">{t("title2")}</h4>
          {content2.map((content) => (
            <p key={`content2-${content}`} className="typo-body mt-2">
              • {content}
            </p>
          ))}
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="typo-h3 mb-3 text-slate-900">{t("title3")}</h4>
          {content3.map((content) => (
            <p key={`content3-${content}`} className="typo-body mt-2">
              • {content}
            </p>
          ))}
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="typo-h3 mb-3 text-slate-900">{t("title4")}</h4>
          {content4.map((content) => (
            <p key={`content4-${content}`} className="typo-body mt-2">
              • {content}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
