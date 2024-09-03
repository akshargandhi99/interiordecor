import styles from "./footer.module.css";
import { juliusSansOne } from "@/app/fonts";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <span className={`${styles.footerItems} ${juliusSansOne.className}`}>
        EMAIL <b className={styles.plus}>+</b>
      </span>
      <span className={`${styles.footerItems} ${juliusSansOne.className}`}>
        SOCIAL <b className={styles.plus}>+</b>
      </span>
      <span className={`${styles.footerItems} ${juliusSansOne.className}`}>
        CONTACT <b className={styles.plus}>+</b>
      </span>
      <span className={`${styles.whatsapp} ${juliusSansOne.className}`}>
        CHAT ON WHATSAPP
      </span>
    </footer>
  );
};

export default Footer;
