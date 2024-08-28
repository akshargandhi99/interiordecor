"use client";

import Image from "next/image";
import card1 from "@/public/residential/CW Living Dining.webp";
import card2 from "@/public/residential/CR Master Bedroom.webp";
import card3 from "@/public/residential/BB Living Room.webp";
import card4 from "@/public/residential/TBN Bedroom.webp";
import card5 from "@/public/residential/RC Living Room.webp";
import card6 from "@/public/residential/MH Bathroom.webp";

import { juliusSansOne } from "@/app/fonts";
import styles from "./projectCards.module.css";

const ProjectCards = () => {
  const cards = [card1, card2, card3, card4, card5, card6];

  const cardTitles = [
    "Curating Warmth",
    "Chasing Red",
    "Blissful Blues",
    "To be named",
    "Refining Classics",
    "Monochromic House",
  ];

  const cardDescriptions = [
    "Living/Dining Room Living/Dining RoomLiving/",
    "Master Bedroom",
    "Living Room",
    "Bedroom",
    "Living Room",
    "Monochromic Bathroom",
  ];

  return (
    <div className={styles.gridContainer}>
      {cards.map((card, key) => {
        return (
          <div className={styles.projectImageContainer} key={key}>
            <Image
              src={card}
              alt="Blissful Blues Project"
              className={styles.projectImage}
            />

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
    </div>
  );
};

export default ProjectCards;
