"use client";

import Link from "next/link";
import styles from "./landingCards.module.css";
import ExpandedCard from "../expandedLandingCards/expandedLandingCards";
import { Fragment, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ACTION_TYPES, StoreContext } from "@/store/store-context";
import { useContext } from "react";
import { juliusSansOne } from "@/app/fonts";

const LandingCard = () => {
  const { dispatch, state } = useContext(StoreContext);
  const { homeTitle } = state;
  const pathname = usePathname();

  const goBack = () => {
    dispatch({
      type: ACTION_TYPES.SET_HOME_TITLE,
      payload: { homeTitle: 0 },
    });
  };

  useEffect(() => {
    if (pathname === "/") {
      dispatch({
        type: ACTION_TYPES.SET_HOME_TITLE,
        payload: { homeTitle: 0 },
      });
    }
  }, [pathname, dispatch]);
  return (
    <div className={styles.cardContainer}>
      {/* {homeTitle !== 0 && <div className={styles.fade} />} */}

      <div className={styles.pageHeaderContainer}>
        {homeTitle > 0 && (
          <span
            className={`${styles.goBack} ${juliusSansOne.className}`}
            onClick={() => goBack()}
          >
            🡠 GO BACK
          </span>
        )}
        {homeTitle === 0 && (
          <Fragment>
            <div className={styles.titleContainer}>
              <span className={`${styles.spatial} ${juliusSansOne.className}`}>
                SPATIAL
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

        <ExpandedCard projectName={"blissfulBlues"} />
        <ExpandedCard projectName={"chasingRed"} />
        <ExpandedCard projectName={"craftingFarmhouse"} />
        <ExpandedCard projectName={"curatingWarmth"} />
        <ExpandedCard projectName={"monochromic"} />
        <ExpandedCard projectName={"refiningClassics"} />

        <div className={styles.emptyDiv} />
        <div className={styles.emptyDiv} />
      </div>
    </div>
  );
};

export default LandingCard;
