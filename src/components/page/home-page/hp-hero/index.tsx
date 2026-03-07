"use client";

import { ArrowRight } from "lucide-react";
import * as m from "motion/react-client";
import { useTranslations } from "next-intl";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export const HPHero = () => {
  const t = useTranslations("homePage.hero");
  return (
    <section className="relative overflow-hidden bg-slate-800 py-16 text-white md:py-24">
      <div className="absolute -top-24 right-0 size-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-16 size-80 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative mx-4 max-w-[1344px] space-y-6 md:mx-6 lg:mx-12 2xl:mx-auto">
        <m.div
          className="flex items-center gap-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <div className="h-px w-8 bg-amber-400" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 sm:text-sm">
            {t("title")}
          </span>
        </m.div>
        <m.h1
          className="max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          {t("subTitle")}
        </m.h1>
        <m.p
          className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base lg:text-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          {t("description")}
        </m.p>
        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition-all hover:bg-slate-50 hover:shadow-white/20 sm:text-base"
          >
            Tìm Hiểu Thêm
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </m.div>
      </div>
    </section>
  );
};
