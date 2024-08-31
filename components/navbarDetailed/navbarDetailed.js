"use client";
import styles from "./navbarDetailed.module.css"; // Keep only this constant when updating Navbar
import Image from "next/image";
import Link from "next/link";
import { juliusSansOne } from "@/app/fonts";
import { StoreContext } from "@/store/store-context";
import { useState, useEffect, useRef, useContext } from "react";

const NavBarDetailed = () => {
  const [projectsNav, setProjectsNav] = useState(false);
  const { state } = useContext(StoreContext);
  const { navbarState } = state;
  // Handling outside click
  const subNavRef = useRef(null);
  const handleClickOutside = (event) => {
    if (subNavRef.current && !subNavRef.current.contains(event.target)) {
      setProjectsNav(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.mainContainer}>
      <Link href="/">
        <Image src="/static/Logo.svg" alt="Logo" height="70" width="70" />
      </Link>
      <hr className={styles.horizontalLine} />
      <div className={styles.navbarItemContainer}>
        <Link
          href="/"
          className={`${styles.navbarItem} ${styles.navItemContainer}`}
        >
          <span className={`${styles.navbarItem} ${juliusSansOne.className}`}>
            SPATIAL DESIGN
          </span>
          {navbarState === "main" && <hr className={styles.selected} />}
        </Link>

        <span className={`${styles.navbarItem} ${juliusSansOne.className}`}>
          ABOUT US
        </span>

        <div>
          <div className={styles.navItemContainer}>
            <span
              onClick={() => setProjectsNav(!projectsNav)}
              className={`${styles.navbarItem} ${juliusSansOne.className}`}
            >
              PROJECTS
            </span>
            {navbarState === "projects" && <hr className={styles.selected} />}
          </div>
          {projectsNav && (
            <div
              className={`${styles.projectsSubNavContainer} ${juliusSansOne.className}`}
              ref={subNavRef}
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
        </div>
        <span className={`${styles.navbarItem} ${juliusSansOne.className}`}>
          CONTACT
        </span>
      </div>
    </nav>
  );
};

export default NavBarDetailed;
