"use client";
import Image from "next/image";
import Link from "next/link";
import { juliusSansOne } from "@/app/fonts";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import logo from "@/public/static/Logo.svg";
import hamburger from "@/public/static/Hamburger.webp";
// import gradient from "@/public/static/MergeGradient1.webp";

const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false); // Hamburger Menu Mobile Only
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState("rgba(0, 0, 0, 0)");

  const menuRef = useRef(null);
  let navbarUnderline = "";
  let navbarColor = "";

  switch (pathname) {
    case "/":
      navbarUnderline = "main";
      navbarColor = "normal";
      break;
    case "/projects":
      navbarUnderline = "projects";
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
    case "/spatial-design":
      navbarUnderline = "spatial-design";
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

    case "/blogs":
      navbarUnderline = "blogs";
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
  } else if (pathname.includes("/blogs/")) {
    navbarUnderline = "blogs";
    navbarColor = "white";
  }

  const navbarColorStyle =
    navbarColor === "normal" ? styles.mainContainer : styles.mainContainerWhite;
  const navbarBackgroundColor =
    navbarColor === "normal"
      ? "linear-gradient(rgba(255, 255, 255, 1),rgba(245, 244, 239, 1))"
      : //"linear-gradient(360deg, rgba(245, 244, 239, 1), rgba(255, 255, 255, 1))"
        "white";

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const toggleHamburger = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (scrollPosition > 0) {
      setNavbarBackground(navbarBackgroundColor);
    } else if (pathname === "/") {
      setNavbarBackground("rgba(0, 0, 0, 0)");
    } else {
      setNavbarBackground("rgba(0, 0, 0, 0)");
    }
  }, [scrollPosition]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    handleScroll();

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={navbarColorStyle}
      style={{ background: navbarBackground }}
      // style={{ backgroundImage: `url(${gradient.src})` }}
    >
      {/* Hamburger: Mobile Only*/}
      <Image
        src={hamburger}
        className={styles.hamburger}
        alt="Hamburger Menu"
        onClick={toggleHamburger}
      />
      {/* Menu: Mobile Only */}
      {isMenuOpen && (
        <div className={styles.mobileMenu} ref={menuRef}>
          <Link
            href="/spatial-design"
            className={`${styles.firstItemMobileNav} ${juliusSansOne.className}`}
            onClick={() => setMenuOpen(false)}
          >
            SPATIAL DESIGN
          </Link>
          <hr className={styles.mobileMenuLine} />
          <Link
            href="/about"
            className={`${styles.itemsMobileNav} ${juliusSansOne.className}`}
            onClick={() => setMenuOpen(false)}
          >
            ABOUT US
          </Link>
          <hr className={styles.mobileMenuLine} />
          <Link
            href="/projects"
            className={`${styles.itemsMobileNav} ${juliusSansOne.className}`}
            onClick={() => setMenuOpen(false)}
          >
            PROJECTS
          </Link>
          <hr className={styles.mobileMenuLine} />
          <Link
            href="/contact"
            className={`${styles.itemsMobileNav} ${juliusSansOne.className}`}
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </Link>
          <hr className={styles.mobileMenuLine} />
          <Link
            href="/blogs"
            className={`${styles.itemsMobileNav} ${juliusSansOne.className}`}
            onClick={() => setMenuOpen(false)}
          >
            BLOGS
          </Link>
        </div>
      )}
      <Link href="/">
        <Image src={logo} className={styles.logo} alt="Logo" />
      </Link>
      <hr className={styles.horizontalLine} />
      <div className={styles.navbarItemContainer}>
        <Link
          href="/spatial-design"
          className={
            navbarUnderline === "spatial-design"
              ? styles.navLinkNoHover
              : styles.navLink
          }
        >
          <div className={styles.navItemContainer}>
            <span className={`${styles.navbarItem} ${juliusSansOne.className}`}>
              SPATIAL DESIGN
            </span>
            {navbarUnderline === "spatial-design" && (
              <hr className={styles.selectedSpatialDesign} />
            )}
          </div>
        </Link>

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
            <Link
              href="/projects"
              className={
                navbarUnderline === "projects"
                  ? styles.navLinkNoHover
                  : styles.navLink
              }
            >
              <span
                className={`${styles.projects} ${styles.navbarItem} ${juliusSansOne.className}`}
              >
                PROJECTS
              </span>
            </Link>
            {navbarUnderline === "projects" && (
              <hr className={styles.selected} />
            )}
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
        <Link
          href="/blogs"
          className={
            navbarUnderline === "blogs" ? styles.navLinkNoHover : styles.navLink
          }
        >
          <div className={styles.navItemContainer}>
            <span className={`${styles.navbarItem} ${juliusSansOne.className}`}>
              BLOGS
            </span>
            {navbarUnderline === "blogs" && <hr className={styles.selected} />}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
