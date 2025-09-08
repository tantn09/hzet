import { useTranslations } from "next-intl";
import styles from "./styles.module.css";
export default function ContactPage() {
  const t = useTranslations("footer");
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={`${styles.title} title`}>Liên Hệ</h2>
        <h3>Thông tin công ty</h3>
        <div className={styles.information}>
          <p>
            <strong>Tên Công Ty:</strong> {t("brand")}
          </p>
          <p>
            <strong>Địa Chỉ:</strong> {t("address")}
          </p>
          <p>
            <strong>Số Điện Thoại:</strong> {t("phone")}
          </p>
          <p>
            <strong>Email:</strong> {t("email")}
          </p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.886346455853!2d105.81316607561482!3d20.9971924888613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9047745e4f%3A0x990ea8c59191a297!2zMjA4IFAuIFRoxrDhu6NuZyDEkMOsbmgsIFRoxrDhu6NuZyDEkMOsbmgsIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1755717834605!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
