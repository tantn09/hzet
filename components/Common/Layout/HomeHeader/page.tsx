"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { NAVBAR } from "@/helper/constant";
import MobileNav from "../MobileNav/page";
import { useTranslations } from "next-intl";

export default function HomeHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpenMobileNav, setOpenMobileNav] = useState(false);
  const router = useRouter();
  const t = useTranslations("navBar");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpenMobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpenMobileNav]);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: scrolled ? "#000000e6" : "transparent" }}
    >
      <div className={styles.headerContainer}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          <Image
            src="/images/logo.svg"
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
            src={"/icon/menu.svg"}
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
        <MobileNav onHanleCloseBtn={()=> setOpenMobileNav(false)} />
      ) : null}
    </div>
  );
}
