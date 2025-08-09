'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
        <div className={styles.logo}>
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
          <a className={styles.navBarItem}>Giới Thiệu</a>
          <a className={styles.navBarItem}>Xuất Khẩu Lao Động</a>
          <a className={styles.navBarItem}>Du Học</a>
          <a className={styles.navBarItem}>Tin Tức</a>
          <a className={styles.navBarItem}>Liên Hệ</a>
        </div>
      </div>
    </div>
  );
}
