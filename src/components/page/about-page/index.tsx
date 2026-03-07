"use client";

import {
  ArrowRight,
  BookOpen,
  Briefcase,
  GraduationCap,
  Handshake,
  Heart,
  MessageCircle,
  ShieldCheck,
  Target,
  Telescope,
  Users,
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

const missions = [
  { icon: Target, color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Handshake, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { icon: Heart, color: "text-rose-500", bg: "bg-rose-500/10" },
];

const fields = [
  { icon: GraduationCap, color: "text-violet-500", bg: "bg-violet-500/10" },
  { icon: Briefcase, color: "text-amber-500", bg: "bg-amber-500/10" },
  { icon: BookOpen, color: "text-cyan-500", bg: "bg-cyan-500/10" },
];

const commitments = [
  { icon: ShieldCheck, color: "text-blue-500" },
  { icon: Target, color: "text-emerald-500" },
  { icon: Users, color: "text-violet-500" },
  { icon: Telescope, color: "text-amber-500" },
];

export default function AboutPage() {
  const t = useTranslations("aboutPage");
  const tc = useTranslations("common");
  const missionItems = t("content2").split("\n");
  const fieldItems = t("content3").split("\n");
  const commitmentItems = t("content4").split("\n");

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
            <span className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-400 uppercase">
              {t("title1")}
            </span>
            <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              HZET Global
            </h1>
            <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-slate-300 sm:text-base">
              {t("content1")}
            </p>
            <Link
              href="/contact"
              className="group mt-2 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition-all hover:bg-slate-50 hover:shadow-white/20 sm:text-base"
            >
              {tc("contactCta")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </m.div>
        </div>
      </section>

      {/* Mission */}
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
              {t("title2")}
            </h2>
          </m.div>

          <div className="grid gap-6 md:grid-cols-3">
            {missionItems.map((item, index) => {
              const card = missions[index % missions.length];
              const Icon = card.icon;
              return (
                <m.div
                  key={`mission-${index}`}
                  className="group relative flex flex-col rounded-2xl bg-white p-6 ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                >
                  <div className={`mb-4 flex size-12 items-center justify-center rounded-xl ${card.bg}`}>
                    <Icon className={`size-6 ${card.color}`} />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{item}</p>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fields */}
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
              {t("title3")}
            </h2>
          </m.div>

          <div className="grid gap-6 md:grid-cols-3">
            {fieldItems.map((item, index) => {
              const card = fields[index % fields.length];
              const Icon = card.icon;
              return (
                <m.div
                  key={`field-${index}`}
                  className="group relative flex flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                >
                  <div className={`mb-4 flex size-12 items-center justify-center rounded-xl ${card.bg}`}>
                    <Icon className={`size-6 ${card.color}`} />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">{item}</p>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitments */}
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
              {t("title4")}
            </h2>
          </m.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commitmentItems.map((item, index) => {
              const card = commitments[index % commitments.length];
              const Icon = card.icon;
              return (
                <m.div
                  key={`commit-${index}`}
                  className="group flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                >
                  <Icon className={`size-5 shrink-0 ${card.color} mt-0.5`} />
                  <p className="text-sm leading-relaxed text-slate-600">{item}</p>
                </m.div>
              );
            })}
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
              {tc("ctaTitle")}
            </h2>
            <p className="mx-auto max-w-lg text-base text-blue-100/80">
              {tc("ctaDesc")}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-blue-700 shadow-lg shadow-black/10 transition-all hover:bg-blue-50 hover:shadow-xl sm:text-base"
              >
                {tc("contactCta")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </m.div>
        </div>
      </section>
    </>
  );
}
