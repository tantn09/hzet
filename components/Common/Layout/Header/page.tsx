"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { NAVBAR } from "@/helper/constant";
import { useEffect, useState } from "react";
import MobileNav from "../MobileNav/page";

export default function Header() {
  const [isOpenMobileNav, setOpenMobileNav] = useState(false);
  const router = useRouter();
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
              {item.label}
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
