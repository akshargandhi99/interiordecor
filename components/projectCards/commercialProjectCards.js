"use client";

import Image from "next/image";
import Link from "next/link";
import card1 from "@/public/commercial/Clothing Boutique.webp";
import card2 from "@/public/commercial/RC Kitchen.webp";
import card3 from "@/public/commercial/Tropical Cafe.webp";

import { juliusSansOne } from "@/app/fonts";
import styles from "./commercialProjectCards.module.css";

const CommercialProjectCards = () => {
  const cards = [card1, card2, card3];

  const cardTitles = [
    "Clothing Boutique",
    "Refining Classics",
    "Tropical Cafe",
  ];

  const cardDescriptions = ["Clothing Boutique", "Kitchen", "Tropical Cafe"];
  const cardLinks = ["", "", ""];
  return (
    <div className={styles.gridContainer}>
      {cards.map((card, key) => {
        return (
          <div className={styles.projectImageContainer} key={key}>
            <Link href={cardLinks[key]} className={styles.projectLink}>
              <Image
                src={card}
                alt="Blissful Blues Project"
                className={styles.projectImage}
              />
            </Link>

            <div className={styles.glassDescription}>
              {cardDescriptions[key]}
            </div>

            <h2 className={`${styles.projectTitle} ${juliusSansOne.className}`}>
              {cardTitles[key]}
            </h2>
            <p className={styles.projectDescription}>{cardDescriptions[key]}</p>
          </div>
        );
      })}
      <div className={styles.emptyDiv} />
      <div className={styles.emptyDiv} />
      <div className={styles.emptyDiv} />
      <div className={styles.emptyDiv} />
      <div className={styles.emptyDiv} />
    </div>
  );
};

export default CommercialProjectCards;
