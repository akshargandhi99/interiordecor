"use client";

import Link from "next/link";
import styles from "./page.module.css";
import ExpandedCard from "@/components/expandedLandingCards/expandedLandingCards";
import Image from "next/image";
import arrow from "@/public/static/backArrowWhite.svg";
import { Fragment, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ACTION_TYPES, StoreContext } from "@/store/store-context";
import MobileFooter from "@/components/mobileFooter/mobileFooter";
import { useContext } from "react";
import { juliusSansOne } from "@/app/fonts";

const LandingCard = () => {
  const { dispatch, state } = useContext(StoreContext);
  const { expanded } = state;

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
  return (
    <div className={styles.cardContainer}>
      {/* {homeTitle !== 0 && <div className={styles.fade} />} */}

      <div className={styles.pageHeaderContainer}>
        {hasValueOne && (
          <Fragment>
            <span
              className={`${styles.goBack} ${juliusSansOne.className}`}
              onClick={() => goBack()}
            >
              {" "}
              <Image
                src={arrow}
                alt="go back arrow"
                className={styles.goBackArrow}
              />
              &nbsp; GO BACK
            </span>
            <span
              className={`${styles.goBackMobile} ${juliusSansOne.className}`}
              onClick={() => goBack()}
            >
              🡠
            </span>
          </Fragment>
        )}
        {!hasValueOne && (
          <Fragment>
            <div className={styles.titleContainer}>
              <span className={`${styles.spatial} ${juliusSansOne.className}`}>
                INTERIOR
              </span>
              <span className={`${styles.projects} ${juliusSansOne.className}`}>
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
      <div className={styles.innerCardContainer}>
        <div className={styles.emptyDiv} />
        <div className={styles.emptyDiv} />
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

        <MobileFooter />
        <div className={styles.emptyDiv} />
        <div className={styles.emptyDiv} />
        <div className={styles.emptyDiv} />
        <div className={styles.emptyDiv} />
      </div>
    </div>
  );
};

export default LandingCard;
