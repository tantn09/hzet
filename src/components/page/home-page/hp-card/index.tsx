"use client";

import { ArrowRight } from "lucide-react";
import * as m from "motion/react-client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import CardItem from "@/components/common/card-item";

type HPCardProps = {
  title: string;
  isDarkBackground?: boolean;
  data: any;
  linkTo: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export const HPCard = ({
  title,
  isDarkBackground = false,
  data,
  linkTo,
}: HPCardProps) => {
  const t = useTranslations("common");

  return (
    <section
      className={`relative overflow-hidden py-16 md:py-20 ${
        isDarkBackground
          ? "bg-slate-900 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {isDarkBackground && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-transparent" />
      )}
      <div className="relative mx-4 max-w-[1344px] md:mx-6 lg:mx-12 2xl:mx-auto">
        <m.div
          className="mb-10 flex items-end justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div
              className={`h-1 w-10 rounded-full ${isDarkBackground ? "bg-blue-500" : "bg-blue-600"}`}
            />
            <h2
              className={`typo-h2 ${isDarkBackground ? "text-white" : "text-slate-900"}`}
            >
              {title}
            </h2>
          </div>
          <Link
            href={linkTo}
            className={`group hidden items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition-all sm:inline-flex ${
              isDarkBackground
                ? "border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white"
                : "border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            {t("viewMore")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </m.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item: any, i: number) => (
            <m.div
              key={item?.sys?.id ?? item?.fields?.slug ?? item?.fields?.title}
              className="h-full"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <CardItem data={item.fields} />
            </m.div>
          ))}
        </div>
        <m.div
          className="mt-8 text-center sm:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href={linkTo}
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
          >
            {t("viewMore")}
            <ArrowRight className="size-4" />
          </Link>
        </m.div>
      </div>
    </section>
  );
};
