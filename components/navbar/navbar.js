"use client";
import Image from "next/image";
import Link from "next/link";
import { juliusSansOne } from "@/app/fonts";
import styles from "./navbar.module.css";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import logo from "@/public/static/Logo.svg";

const NavBar = () => {
  const [projectsNav, setProjectsNav] = useState(false);

  const pathname = usePathname();
  console.log(pathname);
  let navbarLayout = "";
  let navbarUnderline = "";

  switch (pathname) {
    case "/":
      navbarLayout = "big";
      navbarUnderline = "main";
      break;
    case "/projects/residential":
      navbarLayout = "big";
      navbarUnderline = "projects";
      break;
    case "/projects/commercial":
      navbarLayout = "big";
      navbarUnderline = "projects";
      break;
    case "/projects/residential/curating-warmth":
      navbarLayout = "small";
      navbarUnderline = "projects";
      break;
    default:
      navbarLayout = "small";
      navbarUnderline = "main";
      break;
  }
  // Adjust the styles as needed
  const mainContainer =
    navbarLayout === "small" ? styles.mainContainerSmall : styles.mainContainer;
  const navbarItem =
    navbarLayout === "small" ? styles.navbarItemSmall : styles.navbarItem;
  const logoImage = navbarLayout === "small" ? styles.logoSmall : styles.logo;
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
    <nav className={mainContainer}>
      <Link href="/">
        <Image src={logo} className={logoImage} alt="Logo" />
      </Link>
      <hr className={styles.horizontalLine} />
      <div className={styles.navbarItemContainer}>
        <Link href="/" className={`${navbarItem} ${styles.navItemContainer}`}>
          <span className={`${navbarItem} ${juliusSansOne.className}`}>
            SPATIAL DESIGN
          </span>
          {navbarUnderline === "main" && <hr className={styles.selected} />}
        </Link>

        <span className={`${navbarItem} ${juliusSansOne.className}`}>
          ABOUT US
        </span>

        <div>
          <div className={styles.navItemContainer}>
            <span
              onClick={() => setProjectsNav(!projectsNav)}
              className={`${navbarItem} ${juliusSansOne.className}`}
            >
              PROJECTS
            </span>
            {navbarUnderline === "projects" && (
              <hr className={styles.selected} />
            )}
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
        <span className={`${navbarItem} ${juliusSansOne.className}`}>
          CONTACT
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
