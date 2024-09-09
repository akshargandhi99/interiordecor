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
  let navbarColor = "";

  switch (pathname) {
    case "/":
      navbarUnderline = "main";
      navbarColor = "normal";
      break;
    case "/projects/residential":
      navbarUnderline = "projects";
      navbarColor = "normal";
      break;
    case "/projects/commercial":
      navbarUnderline = "projects";
      navbarColor = "normal";
      break;
    case "/about":
      navbarUnderline = "about";
      navbarColor = "normal";
      break;

    case "/contact":
      navbarUnderline = "contact";
      navbarColor = "white";
      break;

    default:
      navbarUnderline = "main";
      navbarColor = "normal";
      break;
  }

  if (pathname.includes("/projects/residential/")) {
    navbarUnderline = "projects";
    navbarColor = "white";
  } else if (pathname.includes("/projects/commercial/")) {
    navbarUnderline = "projects";
    navbarColor = "white";
  }

  const navbarColorStyle =
    navbarColor === "normal" ? styles.mainContainer : styles.mainContainerWhite;
  // Adjust the styles as needed

  return (
    <nav className={navbarColorStyle}>
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
        <Link
          href="/about"
          className={
            navbarUnderline === "about" ? styles.navLinkNoHover : styles.navLink
          }
        >
          <div className={styles.navItemContainer}>
            <span className={`${styles.navbarItem} ${juliusSansOne.className}`}>
              ABOUT US
            </span>
            {navbarUnderline === "about" && <hr className={styles.selected} />}
          </div>
        </Link>

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
        <Link
          href="/contact"
          className={
            navbarUnderline === "contact"
              ? styles.navLinkNoHover
              : styles.navLink
          }
        >
          <div className={styles.navItemContainer}>
            <span className={`${styles.navbarItem} ${juliusSansOne.className}`}>
              CONTACT
            </span>
            {navbarUnderline === "contact" && (
              <hr className={styles.selected} />
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
