"use client";

import { GraduationCap, Globe, Handshake, Award } from "lucide-react";
import * as m from "motion/react-client";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const STAT_CONFIGS = [
  { icon: GraduationCap, value: 500, suffix: "+", labelKey: "students", color: "from-blue-500 to-cyan-400" },
  { icon: Globe, value: 10, suffix: "+", labelKey: "countries", color: "from-violet-500 to-purple-400" },
  { icon: Handshake, value: 50, suffix: "+", labelKey: "partners", color: "from-amber-500 to-orange-400" },
  { icon: Award, value: 8, suffix: "+", labelKey: "experience", color: "from-emerald-500 to-teal-400" },
];

function useCountUp(end: number, isInView: boolean) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    const duration = 1800;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [end, isInView]);

  return count;
}

function StatItem({
  icon: Icon,
  value,
  suffix,
  label,
  color,
  index,
}: {
  icon: typeof GraduationCap;
  value: number;
  suffix: string;
  label: string;
  color: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const count = useCountUp(value, isInView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <m.div
      ref={ref}
      className="group relative flex flex-col items-center gap-4 rounded-2xl bg-white/5 p-8 text-center ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:ring-white/20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" as const }}
    >
      <div className={`flex size-14 items-center justify-center rounded-2xl bg-linear-to-br ${color} shadow-lg`}>
        <Icon className="size-7 text-white" />
      </div>
      <div className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
        {count}
        <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          {suffix}
        </span>
      </div>
      <div className="text-sm font-medium text-slate-400">{label}</div>
    </m.div>
  );
}

export const HPStats = () => {
  const t = useTranslations("homePage.stats");

  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 md:py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      <div className="relative mx-4 max-w-[1344px] md:mx-6 lg:mx-12 2xl:mx-auto">
        <m.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-linear-to-r from-blue-500 to-cyan-400" />
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            {t("title")}
          </h2>
        </m.div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {STAT_CONFIGS.map((stat, i) => (
            <StatItem key={stat.labelKey} {...stat} label={t(stat.labelKey)} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
