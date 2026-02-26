"use client";

import { NAVBAR } from "@/helper/constant";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MobileNav from "../MobileNav";

export default function Header() {
  const [isOpenMobileNav, setOpenMobileNav] = useState(false);
  const router = useRouter();
  const t = useTranslations("navBar");
  useEffect(() => {
    if (isOpenMobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpenMobileNav]);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2"
          onClick={() => router.push("/")}
        >
          <Image
            src="/images/logo.svg"
            className="h-auto w-12 sm:w-14"
            alt="Logo"
            width={80}
            height={80}
            quality={100}
            priority
          />
          <div className="text-lg font-bold tracking-wide text-blue-700">
            HZET GLOBAL
          </div>
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-md p-1 transition hover:bg-slate-100 md:hidden"
          onClick={() => setOpenMobileNav(!isOpenMobileNav)}
        >
          <Image
            src="/icon/menu.svg"
            alt="Open menu"
            width={50}
            height={50}
            quality={100}
            priority
          />
        </button>
        <nav className="hidden items-center gap-7 md:flex">
          {NAVBAR.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
      </div>
      {isOpenMobileNav ? (
        <MobileNav onHanleCloseBtn={() => setOpenMobileNav(false)} />
      ) : null}
    </header>
  );
}
