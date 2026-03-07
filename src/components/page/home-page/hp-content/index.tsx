"use client";

import { Telescope, Target, ShieldCheck } from "lucide-react";
import * as m from "motion/react-client";
import { useTranslations } from "next-intl";
import type { ComponentType } from "react";

const CARDS: {
  icon: ComponentType<{ className?: string }>;
  gradient: string;
  shadow: string;
  dot: string;
  border: string;
  numColor: string;
}[] = [
  { icon: Telescope, gradient: "from-blue-600 to-cyan-500", shadow: "shadow-blue-600/20", dot: "bg-blue-500", border: "hover:ring-blue-200", numColor: "text-blue-200" },
  { icon: Target, gradient: "from-violet-600 to-purple-500", shadow: "shadow-violet-600/20", dot: "bg-violet-500", border: "hover:ring-violet-200", numColor: "text-violet-200" },
  { icon: ShieldCheck, gradient: "from-amber-500 to-orange-500", shadow: "shadow-amber-500/20", dot: "bg-amber-500", border: "hover:ring-amber-200", numColor: "text-amber-300" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export const HPContent = () => {
  const t = useTranslations("homePage.contents");
  const contents = [
    { title: t("title1"), description: t("content1") },
    { title: t("title2"), description: t("content2") },
    { title: t("title3"), description: t("content3") },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
      <div className="absolute -left-40 top-20 size-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute -right-40 bottom-20 size-80 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative mx-4 max-w-[1344px] md:mx-6 lg:mx-12 2xl:mx-auto">
        <m.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-blue-600" />
          <h2 className="typo-h2 text-slate-900">{t("sectionTitle")}</h2>
        </m.div>

        <div className="grid gap-6 md:grid-cols-3">
          {contents.map((content, index) => {
            const descriptions = content.description.split("\n");
            const card = CARDS[index];
            const Icon = card.icon;

            return (
              <m.div
                key={content.title}
                className="group relative flex flex-col rounded-3xl bg-white p-7 ring-1 ring-slate-200/70 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/50 hover:ring-transparent"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <div className={`pointer-events-none absolute -inset-px rounded-3xl bg-linear-to-br ${card.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="pointer-events-none absolute inset-px rounded-[23px] bg-white" />

                <div className="relative mb-5 flex items-center gap-4">
                  <div className={`flex size-12 items-center justify-center rounded-2xl bg-linear-to-br ${card.gradient} shadow-lg ${card.shadow}`}>
                    <Icon className="size-6 text-white" />
                  </div>
                  <span className={`text-2xl font-extrabold tracking-tight ${card.numColor}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mb-4 text-xl font-extrabold tracking-tight text-slate-900">
                  {content.title}
                </h3>

                <ul className="relative space-y-2.5">
                  {descriptions.map((des) => (
                    <li
                      key={`${content.title}-${des}`}
                      className="flex gap-2.5"
                    >
                      <span className={`mt-2 size-1.5 shrink-0 rounded-full ${card.dot}`} />
                      <span className="text-sm leading-relaxed text-slate-500">
                        {des}
                      </span>
                    </li>
                  ))}
                </ul>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
