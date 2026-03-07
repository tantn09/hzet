"use client";

import { ArrowUp, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

const PHONE_NUMBER = "0969513236";
const ZALO_LINK = "https://zalo.me/0969513236";

export function FloatingContact() {
  const t = useTranslations("common");
  const [ready, setReady] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const toggle = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  if (!ready) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Back to Top */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`flex size-11 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-600/30 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="size-5" />
      </button>

      {/* Zalo */}
      <a
        href={ZALO_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("chatZalo")}
        className="group relative flex size-11 items-center justify-center rounded-full shadow-lg shadow-blue-500/25 transition-transform duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#0068FF]/30" />
        <Image
          src="/icon/zalo.svg"
          alt="Zalo"
          width={44}
          height={44}
          className="relative z-10 size-11 rounded-full"
        />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
          {t("chatZalo")}
        </span>
      </a>

      {/* Phone */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label={t("callUs")}
        className="group relative flex size-11 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/25 transition-transform duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-green-500/30" />
        <Phone className="relative z-10 size-5 text-white animate-[shake_1.5s_ease-in-out_infinite]" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
          {PHONE_NUMBER}
        </span>
      </a>
    </div>
  );
}
