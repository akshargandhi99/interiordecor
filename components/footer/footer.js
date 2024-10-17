"use client";

import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { juliusSansOne } from "@/app/fonts";
import arrow from "@/public/static/squareWithDiagonalArrow.webp";
import { Fragment, useState } from "react";

const Footer = () => {
  const [expanded, setExpanded] = useState(false);

  const footerContainer = expanded
    ? styles.footerContainerExpanded
    : styles.footerContainer;

  const footerItems = expanded
    ? styles.footerItemsExpanded
    : styles.footerItems;

  const innerFooterContainer = expanded
    ? styles.innerFooterContainerExpanded
    : styles.innerFooterContainer;

  const whatsappContainer = expanded
    ? styles.whatsappContainerExpanded
    : styles.whatsappContainer;
  return (
    <footer className={footerContainer}>
      <div className={innerFooterContainer}>
        <span className={`${footerItems} ${juliusSansOne.className}`}>
          <span
            className={styles.footerItemInnerContainer}
            onClick={() => setExpanded(!expanded)}
          >
            EMAIL <b className={styles.plus}>+</b>
          </span>

          {expanded && (
            <Link href="mailto:info@avsds.in" className={styles.email}>
              <span>info@avsds.in</span>
            </Link>
          )}
        </span>
        <span className={`${footerItems} ${juliusSansOne.className}`}>
          <span
            className={styles.footerItemInnerContainer}
            onClick={() => setExpanded(!expanded)}
          >
            SOCIAL <b className={styles.plus}>+</b>
          </span>
          {expanded && (
            <Fragment>
              <Link
                className={styles.social}
                href="https://www.instagram.com/av_spatialdesignstudio/profilecard/?igsh=MTNkempjcTNzeWoxbA=="
                target="_blank"
              >
                <span className={styles.social}>Instagram</span>
              </Link>
              <Link
                className={styles.social}
                href="https://www.facebook.com/profile.php?id=61567081383232"
                target="_blank"
              >
                <span className={styles.social}>Facebook</span>
              </Link>
            </Fragment>
          )}
        </span>
        <span className={`${footerItems} ${juliusSansOne.className}`}>
          <span
            className={styles.footerItemInnerContainer}
            onClick={() => setExpanded(!expanded)}
          >
            CONTACT <b className={styles.plus}>+</b>
          </span>
          {expanded && <span className={styles.email}>+91 9930999329</span>}
        </span>
        <div className={whatsappContainer}>
          <Link
            className={styles.link}
            href="https://wa.me/919930999329"
            target="_blank"
          >
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
