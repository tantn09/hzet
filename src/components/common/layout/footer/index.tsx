import { Phone, Clock, Mail } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-linear-to-b from-slate-900 to-slate-950 text-white">
      <div className="flex flex-col gap-8 py-12 md:flex-row mx-4 md:mx-6 lg:mx-12 2xl:mx-auto max-w-[1344px]">
        <div className="flex-1 space-y-4">
          <div className="text-lg font-bold tracking-wide">{t("brand")}</div>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <Phone className="size-4 shrink-0 text-blue-400" />
            <span>Hotline: {t("phone")}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <Mail className="size-4 shrink-0 text-blue-400" />
            <span>Email: {t("email")}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <Clock className="size-4 shrink-0 text-blue-400" />
            <span>Working Time: {t("workingTime")}</span>
          </div>
        </div>
        <div className="flex-1 space-y-3 border-t border-slate-800 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <div className="text-lg font-bold tracking-wide">
            {t("companyName")}
          </div>
          <div className="text-sm text-slate-400">
            <span className="font-medium text-slate-300">{t("hq")}:</span>{" "}
            {t("hqAddress")}
          </div>
          <div className="text-sm text-slate-400">
            <span className="font-medium text-slate-300">
              {t("regNumber")}:
            </span>{" "}
            xxxxxxxxxxxxxxxxxxxx
          </div>
          <div className="text-sm text-slate-400">
            <span className="font-medium text-slate-300">{t("regDate")}:</span>{" "}
            xx-xx-xxxx
          </div>
        </div>
        <div className="shrink-0 border-t border-slate-800 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0 flex flex-col items-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
            {t("connectWithUs")}
          </div>
          <div className="flex items-center gap-2">
            {[
              { href: t("fbLink"), icon: "/icon/fb.svg", alt: "Facebook" },
              { href: t("zaloLink"), icon: "/icon/zalo.svg", alt: "Zalo" },
              { href: t("youtubeLink"), icon: "/icon/youtube.svg", alt: "Youtube" },
              { href: t("tiktokLink"), icon: "/icon/tiktok.svg", alt: "TikTok" },
            ].map((social) => (
              <Link
                key={social.alt}
                href={social.href}
                className="flex size-10 items-center justify-center rounded-full bg-slate-800 transition-all hover:-translate-y-0.5 hover:bg-slate-700"
              >
                <Image
                  src={social.icon}
                  width={20}
                  height={20}
                  alt={social.alt}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-4 max-w-[1344px] py-5 text-center text-xs text-slate-500 md:mx-6 lg:mx-12 2xl:mx-auto">
          © {new Date().getFullYear()} HZET Global. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
