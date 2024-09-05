"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./landingCards.module.css";
import ExpandedCard from "../expandedLandingCards/expandedLandingCards";
import { Fragment, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ACTION_TYPES, StoreContext } from "@/store/store-context";
import { useContext } from "react";

// Overview Cards
import card1 from "@/public/landingCards/Blissful Blues.webp";
import card2 from "@/public/landingCards/Chasing Red.webp";
import card3 from "@/public/landingCards/Crafting a Farmhouse.webp";
import card4 from "@/public/landingCards/Curating Warmth.webp";
import card5 from "@/public/landingCards/Monochromic.webp";
import card6 from "@/public/landingCards/Refining Classics.webp";
import { juliusSansOne } from "@/app/fonts";

const LandingCard = () => {
  const { dispatch, state } = useContext(StoreContext);
  const { homeTitle } = state;
  const pathname = usePathname();
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
      {homeTitle !== 0 && <div className={styles.fade} />}

      <div className={styles.pageHeaderContainer}>
        {homeTitle === 0 && (
          <Fragment>
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
        <Image src={card5} className={styles.card} alt="Project 5" />
        <ExpandedCard projectName={"refiningClassics"} />

        <div className={styles.emptyDiv} />
        <div className={styles.emptyDiv} />
      </div>
    </div>
  );
};

export default LandingCard;
