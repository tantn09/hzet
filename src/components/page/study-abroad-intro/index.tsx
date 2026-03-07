"use client";

import {
  ArrowRight,
  BookOpen,
  CalendarRange,
  CheckCircle2,
  GraduationCap,
  MessageCircle,
  Sparkles,
  Star,
  TriangleAlert,
  Wallet,
} from "lucide-react";
import * as m from "motion/react-client";
import { useTranslations } from "next-intl";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const STEP_COLORS = [
  "bg-amber-500",
  "bg-emerald-500",
  "bg-blue-700",
  "bg-amber-500",
  "bg-emerald-500",
];

const programIcons = [GraduationCap, BookOpen, Sparkles];
const programColors = [
  { icon: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: "text-emerald-500", bg: "bg-emerald-500/10" },
  { icon: "text-violet-500", bg: "bg-violet-500/10" },
];

export default function StudyAbroadIntro({
  countryKey,
}: Readonly<{ countryKey: string }>) {
  const t = useTranslations(`studyAbroad.${countryKey}`);
  const ts = useTranslations("studyAbroad");
  const tc = useTranslations("common");

  const country = t("country");
  const flag = t("flag");
  const heroDesc = t("heroDesc");

  const highlights = Array.from({ length: 4 }, (_, i) => ({
    label: t(`highlight${i + 1}Label`),
    value: t(`highlight${i + 1}Value`),
  }));

  const programs = Array.from({ length: 3 }, (_, i) => ({
    title: t(`program${i + 1}Title`),
    desc: t(`program${i + 1}Desc`),
  }));

  const requirements = Array.from({ length: 5 }, (_, i) => t(`req${i + 1}`));

  const steps = Array.from({ length: 5 }, (_, i) => ({
    title: t(`step${i + 1}Title`),
    content: t(`step${i + 1}Content`),
  }));

  const parseCostItems = (raw: string) =>
    raw.split("\n").map((line) => {
      const [label, value] = line.split("|");
      return { label, value };
    });

  const costColumns = [
    {
      flag: t("col1Flag"),
      title: t("col1Title"),
      items: parseCostItems(t("col1Items")),
      totals: [t("col1Total")],
    },
    {
      flag: t("col2Flag"),
      title: t("col2Title"),
      items: parseCostItems(t("col2Items")),
      totals: [t("col2Total")],
    },
    {
      flag: null,
      title: t("col3Title"),
      items: parseCostItems(t("col3Items")),
      totals: [t("col3TotalMonth"), t("col3TotalYear")],
    },
  ];

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
            className="space-y-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-xs backdrop-blur-sm">
              <span className="text-sm font-bold text-blue-300">{flag}</span>
              <span className="font-semibold tracking-wider text-blue-400 uppercase">
                {ts("label", { country })}
              </span>
            </span>
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {ts("label", { country })}
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {heroDesc}
            </p>
            <Link
              href="/contact"
              className="group mt-2 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition-all hover:bg-slate-50 hover:shadow-white/20 sm:text-base"
            >
              {tc("freeConsult")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </m.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
        <div className="mx-4 max-w-[1344px] md:mx-6 lg:mx-12 2xl:mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {ts("whyChoose", { country })}
            </h2>
          </m.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <m.div
                key={item.label}
                className="group flex flex-col rounded-2xl bg-white p-6 ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <Star className="mb-3 size-5 text-amber-400" />
                <h3 className="mb-1.5 text-sm font-bold text-slate-900">
                  {item.label}
                </h3>
                <p className="text-[13px] leading-relaxed text-slate-500">
                  {item.value}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="relative overflow-hidden bg-slate-900 py-16 md:py-24">
        <div className="mx-4 max-w-[1344px] md:mx-6 lg:mx-12 2xl:mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-blue-500" />
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {ts("programs")}
            </h2>
          </m.div>

          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((item, index) => {
              const Icon = programIcons[index % programIcons.length];
              const color = programColors[index % programColors.length];
              return (
                <m.div
                  key={item.title}
                  className="group flex flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                >
                  <div className={`mb-4 flex size-12 items-center justify-center rounded-xl ${color.bg}`}>
                    <Icon className={`size-6 ${color.icon}`} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="mx-4 max-w-[1344px] md:mx-6 lg:mx-12 2xl:mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {ts("requirements")}
            </h2>
          </m.div>

          <div className="mx-auto max-w-2xl space-y-4">
            {requirements.map((item, index) => (
              <m.div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-500" />
                <p className="text-sm leading-relaxed text-slate-600">{item}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
        <div className="mx-4 max-w-[1344px] md:mx-6 lg:mx-12 2xl:mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wide sm:text-3xl">
              {ts("processTitle", { country })}
            </h2>
          </m.div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.slice(0, 3).map((step, index) => (
              <m.div
                key={step.title}
                className="group relative flex flex-col rounded-2xl bg-white p-6 ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <div className={`mb-4 flex size-9 items-center justify-center rounded-full ${STEP_COLORS[index]} text-sm font-bold text-white shadow-sm`}>
                  {index + 1}
                </div>
                <h3 className="mb-3 text-base font-bold text-slate-900">
                  {step.title}
                </h3>
                <div className="space-y-1">
                  {step.content.split("\n").map((line, li) => (
                    <p
                      key={`s${index}-l${li}`}
                      className={`text-[13px] leading-relaxed text-slate-500 ${line.startsWith("  ") ? "pl-3" : ""}`}
                    >
                      {line.trim()}
                    </p>
                  ))}
                </div>
              </m.div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {steps.slice(3).map((step, index) => (
              <m.div
                key={step.title}
                className="group relative flex flex-col rounded-2xl bg-white p-6 ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index + 3}
              >
                <div className={`mb-4 flex size-9 items-center justify-center rounded-full ${STEP_COLORS[index + 3]} text-sm font-bold text-white shadow-sm`}>
                  {index + 4}
                </div>
                <h3 className="mb-3 text-base font-bold text-slate-900">
                  {step.title}
                </h3>
                <div className="space-y-1">
                  {step.content.split("\n").map((line, li) => (
                    <p
                      key={`s${index + 3}-l${li}`}
                      className={`text-[13px] leading-relaxed text-slate-500 ${line.startsWith("  ") ? "pl-3" : ""}`}
                    >
                      {line.trim()}
                    </p>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="mx-4 max-w-[1344px] md:mx-6 lg:mx-12 2xl:mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-blue-600" />
            <h2 className="text-2xl font-bold uppercase tracking-wide text-slate-900 sm:text-3xl">
              {ts("costBreakdownTitle", { country })}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-500 sm:text-base">
              {ts("costBreakdownDesc", { country })}
            </p>
          </m.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {costColumns.map((col, ci) => (
              <m.div
                key={col.title}
                className="flex flex-col rounded-2xl bg-slate-50 ring-1 ring-slate-200/70"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={ci}
              >
                {/* Column header */}
                <div className="flex flex-col items-center gap-2 border-b border-slate-200 px-6 pb-5 pt-6">
                  {col.flag ? (
                    <span className="text-3xl font-black tracking-wider text-slate-700">
                      {col.flag}
                    </span>
                  ) : (
                    <CalendarRange className="size-8 text-blue-500" />
                  )}
                  <h3 className="text-center text-sm font-bold text-slate-900">
                    {col.title}
                  </h3>
                </div>

                {/* Items */}
                <div className="flex flex-1 flex-col gap-0 px-6 py-4">
                  {col.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-end justify-between gap-2 border-b border-dotted border-slate-200 py-3 last:border-b-0"
                    >
                      <span className="text-[13px] text-slate-600">
                        {item.label}
                      </span>
                      <span className="shrink-0 text-sm font-bold text-slate-800">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="mt-auto space-y-2 px-4 pb-4">
                  {col.totals.map((total, ti) => (
                    <div
                      key={`total-${ti}`}
                      className="flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-4 py-2.5"
                    >
                      <Wallet className="size-4 shrink-0 text-white/80" />
                      <span className="text-xs font-bold text-white">
                        {total}
                      </span>
                    </div>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Total Cost */}
      <section className="relative overflow-hidden bg-linear-to-br from-violet-600 via-purple-600 to-indigo-700 py-16 md:py-24">
        <div className="absolute -left-32 -top-32 size-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 size-80 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-4 max-w-[1344px] md:mx-6 lg:mx-12 2xl:mx-auto">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <Sparkles className="size-7 text-amber-300" />
            </div>

            <h2 className="text-lg font-bold text-white/80 sm:text-xl">
              {ts("costTitle", { country })}
            </h2>

            <p className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t("costValue")}
            </p>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              {ts("costDesc", { country })}
            </p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white/10 px-6 py-5 text-left ring-1 ring-white/15 backdrop-blur-sm"
            >
              <div className="mb-2 flex items-center gap-2">
                <TriangleAlert className="size-4 text-amber-300" />
                <span className="text-sm font-bold text-amber-300">
                  {ts("costNoteLabel")}
                </span>
              </div>
              <p className="text-[13px] leading-relaxed text-white/70">
                {ts("costNote")}
              </p>
            </m.div>
          </m.div>
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
              {ts("ctaTitle", { country })}
            </h2>
            <p className="mx-auto max-w-lg text-base text-blue-100/80">
              {ts("ctaDesc")}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-blue-700 shadow-lg shadow-black/10 transition-all hover:bg-blue-50 hover:shadow-xl sm:text-base"
            >
              {tc("contactCta")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </m.div>
        </div>
      </section>
    </>
  );
}
