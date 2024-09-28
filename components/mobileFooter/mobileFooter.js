import styles from "./mobileFooter.module.css";
import { juliusSansOne } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/public/static/squareWithDiagonalArrow.webp";

const MobileFooter = () => {
  return (
    <div className={styles.mobileFooter}>
      <div className={`${styles.mobileFooterItem} ${juliusSansOne.className}`}>
        <span>EMAIL - </span>
        <span className={styles.mobileFooterUnderline}>info@avsds.in</span>
      </div>
      <div className={`${styles.mobileFooterItem} ${juliusSansOne.className}`}>
        <span>SOCIAL - </span>
        <span className={styles.mobileFooterUnderline}>Instagram</span>,{" "}
        <span className={styles.mobileFooterUnderline}>Facebook</span>
      </div>
      <div className={`${styles.mobileFooterItem} ${juliusSansOne.className}`}>
        <span>CONTACT - </span>
        <span className={styles.mobileFooterUnderline}>+91 9930999329</span>
      </div>
      <div className={`${styles.mobileFooterItem} ${juliusSansOne.className}`}>
        <Link
          className={styles.link}
          href="https://wa.me/919930999329"
          target="_blank"
        >
          <span className={`${styles.whatsapp} ${juliusSansOne.className}`}>
            CHAT ON WHATSAPP
          </span>
        </Link>
        <Image src={arrow} className={styles.arrow} alt="Go to Whatsapp Chat" />
      </div>
    </div>
  );
};

export default MobileFooter;
