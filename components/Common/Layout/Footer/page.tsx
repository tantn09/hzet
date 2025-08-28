import Image from "next/image";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
export default function Footer() {
  const t = useTranslations("footer");
  return (
    <div className={styles.container}>
      <div className={styles.footerContainer}>
        <div className={styles.block}>
          <div className={styles.blockItem}>
            <div className={styles.brandName}>{t("brand")}</div>
          </div>
          <div className={styles.blockItem}>
            <Image
              src="/icon/address.svg"
              width={20}
              height={20}
              alt="Address"
            />
            <span>Địa Chỉ: {t("address")}</span>
          </div>
          <div className={styles.blockItem}>
            <Image src="/icon/phone.svg" width={20} height={20} alt="Phone" />
            <span>Số Điện Thoại: {t("phone")}</span>
          </div>
          <div className={styles.blockItem}>
            <Image src="/icon/email.svg" width={20} height={20} alt="Email" />
            <span>Email: {t("email")}</span>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.block}>
          <div className={styles.blockItem}>Kết nối với chúng tôi:</div>
          <div className={styles.blockItem}>
            <div>
              <Link href={t("fbLink")}>
                <Image
                  src="/icon/fb.svg"
                  width={25}
                  height={25}
                  alt="Facebook"
                />
              </Link>
            </div>
            <div>
              <Link href={t("zaloLink")}>
                <Image src="/icon/zalo.svg" width={25} height={25} alt="zalo" />
              </Link>
            </div>
            <div>
              <Link href={t("youtubeLink")}>
                <Image
                  src="/icon/youtube.svg"
                  width={25}
                  height={25}
                  alt="Youtube"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
