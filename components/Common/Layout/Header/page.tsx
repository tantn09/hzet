"use client";

import { NAVBAR } from "@/helper/constant";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MobileNav from "../MobileNav/page";
import styles from "./styles.module.css";

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
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          <Image
            src="/images/logo1.svg"
            className={styles.logoImg}
            alt="Logo"
            width={80}
            height={80}
            quality={100}
            priority
          />
          <div className={styles.brandName}>HZET GLOBAL</div>
        </div>
        <div
          className={styles.navBarM}
          onClick={() => setOpenMobileNav(!isOpenMobileNav)}
        >
          <Image
            src="/icon/menu.svg"
            alt="Logo"
            width={50}
            height={50}
            quality={100}
            priority
          />
        </div>
        <div className={styles.navBar}>
          {NAVBAR.map((item: any, index: number) => (
            <Link key={index} href={item.href} className={styles.navBarItem}>
              {t(item.key)}
            </Link>
          ))}
        </div>
      </div>
      {isOpenMobileNav ? (
        <MobileNav onHanleCloseBtn={() => setOpenMobileNav(false)} />
      ) : null}
    </div>
  );
}
