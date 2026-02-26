import Image from "next/image";
import { useTranslations } from "next-intl";

export const HPContent = () => {
  const t = useTranslations("homePage.contents");
  const contents = [
    {
      title: t("title1"),
      description: t("content1"),
      imageUrl: "/images/vision.jpg",
    },
    {
      title: t("title2"),
      description: t("content2"),
      imageUrl: "/images/sm.jpg",
    },
    {
      title: t("title3"),
      description: t("content3"),
      imageUrl: "/images/core.jpg",
    },
  ];

  return (
    <section>
      {contents.map((content, index) => {
        const descriptions = content.description.split("\n");
        const isEven = index % 2 === 0;
        return (
          <div
            key={content.title}
            className={isEven ? "bg-white" : "bg-slate-100"}
          >
            <div
              className={`mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-12 sm:px-6 md:flex-row ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="mb-4 text-2xl font-bold text-slate-900">
                  <span>{content.title}</span>
                </div>
                <div className="space-y-2">
                  {descriptions.map((des) => (
                    <p
                      key={`${content.title}-${des}`}
                      className="leading-relaxed text-slate-700"
                    >
                      • {des}
                    </p>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  className="h-auto w-full rounded-2xl border border-slate-200 object-cover shadow-sm"
                  src={content.imageUrl}
                  width={490}
                  height={275}
                  alt="content1"
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
