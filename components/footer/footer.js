import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { juliusSansOne } from "@/app/fonts";
import arrow from "@/public/static/squareWithDiagonalArrow.webp";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.innerFooterContainer}>
        <span className={`${styles.footerItems} ${juliusSansOne.className}`}>
          EMAIL <b className={styles.plus}>+</b>
        </span>
        <span className={`${styles.footerItems} ${juliusSansOne.className}`}>
          SOCIAL <b className={styles.plus}>+</b>
        </span>
        <span className={`${styles.footerItems} ${juliusSansOne.className}`}>
          CONTACT <b className={styles.plus}>+</b>
        </span>
        <div className={styles.whatsappContainer}>
          <Link href="https://wa.me/919930999329" target="_blank">
            <span className={`${styles.whatsapp} ${juliusSansOne.className}`}>
              CHAT ON WHATSAPP
            </span>
          </Link>
          <Image
            src={arrow}
            className={styles.arrow}
            alt="Go to Whatsapp Chat"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
