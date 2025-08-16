import Image from "next/image";
import styles from "./styles.module.css";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footerContainer}>
        <div className={styles.block}>
          <div className={styles.blockItem}>
            <div className={styles.brandName}>HZET GLOBAL</div>
          </div>
          <div className={styles.blockItem}>
            <Image
              src="/icon/address.svg"
              width={20}
              height={20}
              alt="Address"
            />
            <span>
              Địa Chỉ: Tầng 06 - nhà số 208 Thượng Đình - Phường Khương Đình - Hà Nội
            </span>
          </div>
          <div className={styles.blockItem}>
            <Image src="/icon/phone.svg" width={20} height={20} alt="Phone" />
            <span>Số Điện Thoại: +84969513236 (zalo, viber, whatsapp)</span>
          </div>
          <div className={styles.blockItem}>
            <Image src="/icon/email.svg" width={20} height={20} alt="Email" />
            <span>Email: hzetglobal@gmail.com</span>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.block}>
          <div className={styles.blockItem}>Kết nối với chúng tôi:</div>
          <div className={styles.blockItem}>
            <div>
              <Image src="/icon/fb.svg" width={25} height={25} alt="Facebook" />
            </div>
            <div>
              <Image
                src="/icon/tiktok.svg"
                width={25}
                height={25}
                alt="Tiktok"
              />
            </div>
            <div>
              <Image
                src="/icon/youtube.svg"
                width={25}
                height={25}
                alt="Youtube"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
