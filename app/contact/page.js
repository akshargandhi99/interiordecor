import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Image from "next/image";

import formImage from "@/public/static/aboutFormImage.webp";

const Contact = () => {
  return (
    <div className={styles.fullContainer}>
      <div className={styles.formContainer}>
        <h1 className={`${styles.mainHeader} ${juliusSansOne.className}`}>
          CONTACT US
        </h1>
        <div className={styles.formBodyContainer}>
          <Image
            src={formImage}
            className={styles.formImage}
            alt="Form Decoration Image"
          />

          <div className={styles.mainContainer}>MAIN</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
