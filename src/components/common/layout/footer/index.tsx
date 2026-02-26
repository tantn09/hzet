import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="mt-16 bg-slate-900 text-slate-100">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="text-lg font-bold tracking-wide">{t("brand")}</div>
          <div className="flex items-start gap-3 text-sm text-slate-300">
            <Image
              src="/icon/address.svg"
              width={20}
              height={20}
              alt="Address"
              className="mt-0.5"
            />
            <span>Dia Chi: {t("address")}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <Image src="/icon/phone.svg" width={20} height={20} alt="Phone" />
            <span>So Dien Thoai: {t("phone")}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <Image src="/icon/email.svg" width={20} height={20} alt="Email" />
            <span>Email: {t("email")}</span>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-300">
            Ket noi voi chung toi
          </div>
          <div className="flex items-center gap-4">
            <Link href={t("fbLink")} className="rounded-full p-2 hover:bg-slate-800">
              <Image src="/icon/fb.svg" width={25} height={25} alt="Facebook" />
            </Link>
            <Link href={t("zaloLink")} className="rounded-full p-2 hover:bg-slate-800">
              <Image src="/icon/zalo.svg" width={25} height={25} alt="zalo" />
            </Link>
            <Link
              href={t("youtubeLink")}
              className="rounded-full p-2 hover:bg-slate-800"
            >
              <Image src="/icon/youtube.svg" width={25} height={25} alt="Youtube" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
