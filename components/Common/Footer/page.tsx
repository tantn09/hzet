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
              Văn phòng tuyển sinh: 17 Phạm Ngọc Thạch, Phường Xuân Hòa, TP. HCM
            </span>
          </div>
          <div className={styles.blockItem}>
            <Image src="/icon/phone.svg" width={20} height={20} alt="Phone" />
            <span>Hotline: 028 3622 1818</span>
          </div>
          <div className={styles.blockItem}>
            <Image src="/icon/email.svg" width={20} height={20} alt="Email" />
            <span>Email: admissions.mba@isb.edu.vn</span>
          </div>
        </div>
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
