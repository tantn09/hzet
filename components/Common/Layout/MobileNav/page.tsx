import { NAVBAR } from "@/helper/constant";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function MobileNav({ onHanleCloseBtn }: any) {
  const t = useTranslations("navBar");
  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.controller} onClick={onHanleCloseBtn}>
          <Image
            src={"/icon/close.svg"}
            alt="Logo"
            width={30}
            height={30}
            quality={100}
            priority
          />
        </div>
        <div className={styles.navBar}>
          {NAVBAR.map((item: any, index: number) => (
            <Link
              key={index}
              href={item.href}
              className={styles.navBarItem}
              onClick={onHanleCloseBtn}
            >
              {t(item.key)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
