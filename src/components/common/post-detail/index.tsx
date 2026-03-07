"use client";

import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import * as m from "motion/react-client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import RichText from "@/components/common/rich-text";

export default function PostDetail({ data }: any) {
  const { title, content, shortDescription, createdDate, thumbnail }: any = data;
  const router = useRouter();
  const t = useTranslations("common");
  const articleRef = useRef<HTMLDivElement>(null);
  const [readProgress, setReadProgress] = useState(0);

  const heroImage = thumbnail?.fields?.file?.url
    ? `https:${thumbnail.fields.file.url}`
    : null;

  useEffect(() => {
    const handleScroll = () => {
      if (!articleRef.current) return;
      const el = articleRef.current;
      const rect = el.getBoundingClientRect();
      const total = el.scrollHeight - window.innerHeight;
      const scrolled = -rect.top;
      setReadProgress(Math.min(Math.max(scrolled / total, 0), 1) * 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title, url: window.location.href });
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <>
      {/* Reading progress */}
      <div className="fixed left-0 top-0 z-50 h-0.5 w-full">
        <div
          className="h-full bg-linear-to-r from-blue-600 to-cyan-400 transition-[width] duration-150 ease-linear"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-800">
        {heroImage && (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={title || ""}
              fill
              className="object-cover opacity-20 blur-sm"
              priority
            />
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-b from-slate-800/60 via-slate-800/90 to-slate-800" />

        <div className="relative mx-4 max-w-[720px] py-16 md:mx-6 md:py-24 lg:mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
            >
              <ArrowLeft className="size-3.5" />
              {t("goBack")}
            </button>

            <h1 className="text-2xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-3xl lg:text-[2.5rem]">
              {title}
            </h1>

            {shortDescription && (
              <p className="max-w-xl text-[15px] leading-relaxed text-slate-300/90">
                {shortDescription}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 pt-1">
              {createdDate && (
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                  <Calendar className="size-3.5" />
                  {new Date(createdDate).toLocaleDateString("vi-VN", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="size-3.5" />
                {t("readTime", { minutes: 5 })}
              </span>
              <button
                type="button"
                onClick={handleShare}
                className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
              >
                <Share2 className="size-3.5" />
                {t("share")}
              </button>
            </div>
          </m.div>
        </div>
      </section>

      {/* Content */}
      <section ref={articleRef} className="bg-white py-10 md:py-14">
        <m.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-4 max-w-[720px] md:mx-6 lg:mx-auto"
        >
          {heroImage && (
            <div className="mb-8 overflow-hidden rounded-2xl shadow-lg shadow-slate-200/50">
              <Image
                src={heroImage}
                alt={title || ""}
                width={1200}
                height={675}
                className="h-auto w-full"
                priority
              />
            </div>
          )}

          <RichText content={content} />

          {/* Footer */}
          <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              {t("goBack")}
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-500 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <Share2 className="size-4" />
              {t("share")}
            </button>
          </div>
        </m.article>
      </section>
    </>
  );
}
