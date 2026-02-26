"use client";

import { NAVBAR } from "@/helper/constant";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type MobileNavProps = Readonly<{
  onHanleCloseBtn: () => void;
}>;

export default function MobileNav({ onHanleCloseBtn }: MobileNavProps) {
  const t = useTranslations("navBar");
  return (
    <nav className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] md:hidden">
      <div className="ml-auto flex h-full w-[82%] max-w-[360px] flex-col bg-white px-5 pb-6 pt-5 shadow-2xl">
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={onHanleCloseBtn}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition hover:bg-slate-100"
            aria-label="Close navigation"
          >
            <Image
              src="/icon/close.svg"
              alt="Close"
              width={22}
              height={22}
              quality={100}
              priority
            />
          </button>
        </div>
        <div className="flex flex-col gap-1">
          {NAVBAR.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 text-base font-semibold text-slate-800 transition hover:bg-slate-100 hover:text-blue-600"
              onClick={onHanleCloseBtn}
            >
              {t(item.key)}
            </Link>
          ))}
        </div>
        <div className="mt-auto border-t border-slate-200 pt-4 text-sm text-slate-500">
          HZET GLOBAL
        </div>
      </div>
      <button
        type="button"
        onClick={onHanleCloseBtn}
        aria-label="Close menu overlay"
        className="absolute inset-0 -z-10 cursor-default"
      />
    </nav>
  );
}
