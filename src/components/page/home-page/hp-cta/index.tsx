"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import * as m from "motion/react-client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const HPCta = () => {
  const t = useTranslations("common");

  return (
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
          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-blue-700 shadow-lg shadow-black/10 transition-all hover:bg-blue-50 hover:shadow-xl sm:text-base"
            >
              {t("contactCta")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10 sm:text-base"
            >
              {t("learnMore")}
            </Link>
          </div>
        </m.div>
      </div>
    </section>
  );
};
