"use client";
import animatedStyles from "animate.css";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import ExpandedCard from "@/components/expandedLandingCards/expandedLandingCards";
import { Fragment, useEffect, useState, useContext } from "react";
import useWindowDimensions from "@/hooks/windowDimensions";
import { usePathname } from "next/navigation";
import { ACTION_TYPES, StoreContext } from "@/store/store-context";

import { juliusSansOne } from "@/app/fonts";
import whiteArrow from "@/public/static/backArrowWhite.svg";
import arrow from "@/public/static/squareWithDiagonalArrow.webp";

const LandingCard = () => {
  const { dispatch, state } = useContext(StoreContext);
  const { expanded } = state;
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeOutLate, setFadeOutLate] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  // Responsive
  const { height, width } = useWindowDimensions();

  const isMobile = width <= 1240 ? true : false;

  let hasValueOne = false;
  if (expanded) {
    hasValueOne = Object.values(expanded).some((value) => value === 1);
  } else {
    hasValueOne = false;
  }
  const pathname = usePathname();

  const goBack = () => {
    // Reset all and close any open cards
    const allZero = Object.keys(expanded).reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {});

    dispatch({
      type: ACTION_TYPES.SET_EXPANDED,
      payload: { expanded: allZero },
    });
  };

  const handleAnimationEnd = () => {
    setIsHidden(true); // Set display: none after animation ends
  };

  useEffect(() => {
    if (pathname === "/") {
      // Reset all and close any open cards
      const allZero = Object.keys(expanded).reduce((acc, key) => {
        acc[key] = 0;
        return acc;
      }, {});

      dispatch({
        type: ACTION_TYPES.SET_EXPANDED,
        payload: { expanded: allZero },
      });
    }
  }, [pathname, dispatch]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Fragment>
      {
        // Mobile Only
        !isHidden && (
          <div
            className={`${
              styles.introContainer
            }  ${"animate__animated animate__fadeOut animate__delay-2s"}`}
          >
            <span
              className={`${
                styles.spatialIntro
              } ${"animate__animated animate__fadeOutUp animate__delay-2s"}`}
            >
              AV
            </span>
          </div>
        )
      }

      <div
        className={
          isMounted && isMobile
            ? `${
                styles.cardContainer
              } ${"animate__animated animate__fadeIn animate__delay-2s"}`
            : styles.cardContainer
        }
        onAnimationEndCapture={handleAnimationEnd}
      >
        <div className={styles.pageHeaderContainer}>
          {hasValueOne && (
            <Fragment>
              <span
                className={`${styles.goBack} ${juliusSansOne.className}`}
                onClick={() => goBack()}
              >
                <Image
                  src={whiteArrow}
                  className={styles.goBackArrow}
                  alt="goBackArrow"
                />
                &nbsp;GO BACK
              </span>
              <span onClick={() => goBack()}>
                <Image
                  src={whiteArrow}
                  className={styles.goBackMobile}
                  alt="goBackArrow"
                />
              </span>
            </Fragment>
          )}
          {!hasValueOne && (
            <Fragment>
              <div className={styles.titleContainer}>
                <span
                  className={`${styles.spatial} ${juliusSansOne.className}`}
                >
                  INTERIOR
                </span>
                <span
                  className={`${styles.projects} ${juliusSansOne.className}`}
                >
                  PROJECTS
                </span>
                <Link href="/projects/residential" className={styles.btnLink}>
                  <button type="button" className={styles.discoverMoreBtn}>
                    DISCOVER MORE
                  </button>
                </Link>
              </div>
            </Fragment>
          )}
        </div>
        <div
          className={styles.innerCardContainer}
          // className={
          //   isMounted && isMobile
          //     ? `${
          //         styles.innerCardContainer
          //       } ${"animate__animated animate__slideInDown animate__delay-2s"}`
          //     : styles.innerCardContainer
          // }
          // onAnimationEndCapture={handleAnimationEnd}
        >
          <div className={styles.mobileTitleContainer}>
            <span
              className={`${styles.spatialMobile} ${juliusSansOne.className}`}
            >
              INTERIOR
            </span>
            <span
              className={`${styles.projectsMobile} ${juliusSansOne.className}`}
            >
              PROJECTS
            </span>
          </div>
          <ExpandedCard projectName={"blissfulBlues"} />
          <ExpandedCard projectName={"chasingRed"} />
          <ExpandedCard projectName={"craftingFarmhouse"} />
          <ExpandedCard projectName={"curatingWarmth"} />
          <ExpandedCard projectName={"monochromic"} />
          <ExpandedCard projectName={"refiningClassics"} />
          <div className={styles.mobileBtnContainer}>
            <Link href="/projects/residential" className={styles.btnLink}>
              <button type="button" className={styles.discoverMoreBtn}>
                DISCOVER MORE
              </button>
            </Link>
          </div>

          {/* Custom Mobile Footer */}
          <div className={styles.mobileFooter}>
            <div
              className={`${styles.mobileFooterItem} ${juliusSansOne.className}`}
            >
              <span>EMAIL - </span>
              <Link href="mailto:info@avsds.in" className={styles.link}>
                <span className={styles.mobileFooterUnderline}>
                  info@avsds.in
                </span>
              </Link>
            </div>
            <div
              className={`${styles.mobileFooterItem} ${juliusSansOne.className}`}
            >
              <span>SOCIAL - </span>
              <Link
                className={styles.link}
                href="https://www.instagram.com/avsds_interiors?igsh=MWx6YXd6M3A2c2hq"
                target="_blank"
              >
                <span className={styles.mobileFooterUnderline}>Instagram</span>
              </Link>{" "}
              &{" "}
              <Link
                className={styles.link}
                href="https://www.facebook.com/profile.php?id=61567081383232"
                target="_blank"
              >
                <span className={styles.mobileFooterUnderline}>Facebook</span>
              </Link>
            </div>
            <div
              className={`${styles.mobileFooterItem} ${juliusSansOne.className}`}
            >
              <span>CONTACT - </span>
              <span className={styles.mobileFooterUnderline}>
                +91 9930999329
              </span>
            </div>
            <div
              className={`${styles.mobileFooterItem} ${juliusSansOne.className}`}
            >
              <Link
                className={styles.link}
                href="https://wa.me/919930999329"
                target="_blank"
              >
                <span
                  className={`${styles.whatsapp} ${juliusSansOne.className}`}
                >
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
        </div>
      </div>
    </Fragment>
  );
};

export default LandingCard;
