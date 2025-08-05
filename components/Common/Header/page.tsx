'use client';

import Image from "next/image";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

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
    <div className={styles.container} style={{backgroundColor: scrolled ? "#000000e6" : "transparent"}}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={80}
            height={80}
            quality={100}
            priority
          />
          <div>HZET GLOBAL</div>
        </div>
        <div className={styles.navBar}>
            <div className={styles.navBarItem}>Giới Thiệu</div>
            <div className={styles.navBarItem}>Tin Tuyển Dụng</div>
            <div className={styles.navBarItem}>Tư vấn</div>
            <div className={styles.navBarItem}>Liên Hệ</div>
        </div>
      </div>
    </div>
  );
}
