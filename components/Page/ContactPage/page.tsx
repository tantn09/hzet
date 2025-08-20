import styles from "./styles.module.css";
export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div>
          <h2 className={`${styles.title} title`}>Liên Hệ</h2>
          <h3>Thông tin công ty</h3>
          <p>Tên Công Ty: HZET GLOBAL</p>
          <p>Ngày Thành Lập: ....</p>
          <p>
            Địa Chỉ: Tầng 06 - nhà số 208 Thượng Đình - Phường Khương Đình - Hà
            Nội
          </p>
          <p>Số Điện Thoại: +84969513236 (zalo, viber, whatsapp)</p>
          <p>Email: hzetglobal@gmail.com</p>
          <p>Giấy phép hoạt động: ....</p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.886346455853!2d105.81316607561482!3d20.9971924888613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9047745e4f%3A0x990ea8c59191a297!2zMjA4IFAuIFRoxrDhu6NuZyDEkMOsbmgsIFRoxrDhu6NuZyDEkMOsbmgsIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1755717834605!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{border:0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
