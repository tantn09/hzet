'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HomeHeader() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container} style={{ backgroundColor: scrolled ? "#000000e6" : "transparent" }}>
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
        <div className={styles.navBarM}>
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
          <Link href={"/about"}className={styles.navBarItem}>Giới Thiệu</Link>
          <Link href={"/labor-export"}className={styles.navBarItem}>Xuất Khẩu Lao Động</Link>
          <Link href={"/study-abroad"}className={styles.navBarItem}>Du Học</Link>
          <Link href={"/news"}className={styles.navBarItem}>Tin Tức</Link>
          <Link href={"/contact"}className={styles.navBarItem}>Liên Hệ</Link>
        </div>
      </div>
    </div>
  );
}
