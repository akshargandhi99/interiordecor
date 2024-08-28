"use client";
import Image from "next/image";
import Link from "next/link";
import { juliusSansOne } from "@/app/fonts";
import styles from "./navbar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [projectsNav, setProjectsNav] = useState(false);
  return (
    <nav className={styles.mainContainer}>
      <Link href="/">
        <Image src="/static/Logo.svg" alt="Logo" height="100" width="100" />
      </Link>
      <hr className={styles.horizontalLine} />
      <div className={styles.navbarItemContainer}>
        <span className={`${styles.navbarItem} ${juliusSansOne.className}`}>
          SPATIAL DESIGN
        </span>
        <span className={`${styles.navbarItem} ${juliusSansOne.className}`}>
          ABOUT US
        </span>
        <span>
          <span
            onClick={() => setProjectsNav(!projectsNav)}
            className={`${styles.navbarItem} ${juliusSansOne.className}`}
          >
            PROJECTS
          </span>
          {projectsNav && (
            <div
              className={`${styles.subNavContainer} ${juliusSansOne.className}`}
            >
              <Link
                href="/projects/residential"
                onClick={() => setProjectsNav(!projectsNav)}
                className={`${styles.subNavLinks} ${juliusSansOne.className}`}
              >
                RESIDENTIAL
              </Link>
              <Link
                href="/projects/commercial"
                onClick={() => setProjectsNav(!projectsNav)}
                className={`${styles.subNavLinks} ${juliusSansOne.className}`}
              >
                COMMERCIAL
              </Link>
              <Link
                href="/projects/others"
                onClick={() => setProjectsNav(!projectsNav)}
                className={`${styles.subNavLinks} ${juliusSansOne.className}`}
              >
                OTHERS
              </Link>
            </div>
          )}
        </span>
        <span className={`${styles.navbarItem} ${juliusSansOne.className}`}>
          CONTACT
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
