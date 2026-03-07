"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import * as m from "motion/react-client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import CardItem from "@/components/common/card-item";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function Cards({ headerTitle, titleKey, data }: any) {
  const t = useTranslations("common");
  const tn = useTranslations("navBar");
  const displayTitle = headerTitle || (titleKey ? tn(titleKey) : "");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-800 py-20 md:py-28">
        <div className="absolute -top-24 right-0 size-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="relative mx-4 max-w-[1344px] text-center md:mx-6 lg:mx-12 2xl:mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {displayTitle}
            </h1>
            <p className="mx-auto max-w-xl text-base text-slate-300">
              {t("exploreOpportunities")}
            </p>
          </m.div>
        </div>
      </section>

      {/* Cards grid */}
      <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
        <div className="mx-4 max-w-[1344px] md:mx-6 lg:mx-12 2xl:mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item: any, index: number) => (
              <m.div
                key={item?.sys?.id ?? item?.fields?.slug ?? item?.fields?.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={index}
              >
                <CardItem data={item?.fields} />
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-blue-600 py-20 md:py-24">
        <div className="absolute -right-20 -top-20 size-72 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute -bottom-16 -left-16 size-60 rounded-full bg-white/5 blur-2xl" />
        <div className="relative mx-4 max-w-[1344px] text-center md:mx-6 lg:mx-12 2xl:mx-auto">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <MessageCircle className="size-8 text-white" />
            </div>
            <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              {t("ctaTitle")}
            </h2>
            <p className="mx-auto max-w-lg text-base text-blue-100/80">
              {t("ctaDesc")}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-blue-700 shadow-lg shadow-black/10 transition-all hover:bg-blue-50 hover:shadow-xl sm:text-base"
            >
              {t("contactCta")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </m.div>
        </div>
      </section>
    </>
  );
}
