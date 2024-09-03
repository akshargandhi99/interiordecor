"use client";
import Image from "next/image";
import Link from "next/link";
import { juliusSansOne } from "@/app/fonts";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import logo from "@/public/static/Logo.svg";

const NavBar = () => {
  const pathname = usePathname();
  let navbarUnderline = "";

  switch (pathname) {
    case "/":
      navbarUnderline = "main";
      break;
    case "/projects/residential":
      navbarUnderline = "projects";
      break;
    case "/projects/commercial":
      navbarUnderline = "projects";
      break;
    case "/projects/residential/curating-warmth":
      navbarUnderline = "projects";
      break;
    default:
      navbarUnderline = "main";
      break;
  }
  // Adjust the styles as needed

  return (
    <nav className={styles.mainContainer}>
      <Link href="/">
        <Image src={logo} className={styles.logo} alt="Logo" />
      </Link>
      <hr className={styles.horizontalLine} />
      <div className={styles.navbarItemContainer}>
        {/* <Link
          href="/"
          className={`${styles.navbarItem} ${styles.navItemContainer}`}
        > */}
        <span className={`${styles.navbarItem} ${juliusSansOne.className}`}>
          SPATIAL DESIGN
        </span>
        {/* </Link> */}

        <span className={`${styles.navbarItem} ${juliusSansOne.className}`}>
          ABOUT US
        </span>

        <div>
          <div className={styles.navItemContainer}>
            <span
              className={`${styles.projects} ${styles.navbarItem} ${juliusSansOne.className}`}
            >
              PROJECTS
            </span>
            {navbarUnderline === "projects" && (
              <hr className={styles.selected} />
            )}
            <div
              className={`${styles.projectsSubNavContainer} ${juliusSansOne.className}`}
            >
              <Link
                href="/projects/residential"
                className={`${styles.subNavLinks} ${juliusSansOne.className}`}
              >
                RESIDENTIAL
              </Link>
              <Link
                href="/projects/commercial"
                className={`${styles.subNavLinks} ${juliusSansOne.className}`}
              >
                COMMERCIAL
              </Link>
              <Link
                href="/projects/others"
                className={`${styles.subNavLinks} ${juliusSansOne.className}`}
              >
                OTHERS
              </Link>
            </div>
          </div>
        </div>
        <span className={`${styles.navbarItem} ${juliusSansOne.className}`}>
          CONTACT
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
