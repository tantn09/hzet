import { NAVBAR } from "@/helper/constant";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
export default function MobileNav({ onHanleCloseBtn }: any) {
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
            <Link key={index} href={item.href} className={styles.navBarItem} onClick={onHanleCloseBtn}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
