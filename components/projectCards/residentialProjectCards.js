import Image from "next/image";
import Link from "next/link";
import card1 from "@/public/residential/CW Living Dining.webp";
import card2 from "@/public/residential/CR Master Bedroom.webp";
import card3 from "@/public/residential/BB Living Room.webp";
import card4 from "@/public/residential/CF Bedroom.webp";
import card5 from "@/public/residential/RC Living Room.webp";
import card6 from "@/public/residential/MH Bathroom.webp";

import { juliusSansOne } from "@/app/fonts";
import styles from "./residentialProjectCards.module.css";

const ResidentialProjectCards = () => {
  const cards = [card1, card2, card3, card4, card5, card6];

  const cardTitles = [
    "Curating Warmth",
    "Chasing Red",
    "Blissful Blues",
    "Crafting a Farmhouse",
    "Refining Classics",
    "Monochromic House",
  ];

  const cardDescriptions = [
    "Strategically placed seating maximising views, bringing the beauty of the outdoors inside for everyone to enjoy.",
    "The common colour psychology result as per the Vaastu factor for the family, is a deep red colour which is balanced with walnut wood and oak wood tones.",
    "Each corner sparks creativity, fostering an environment where children can grow and learn, with flexibility to adapt.",
    "This retreat is designed to be a haven where the family can gather for getaways, engage in farming activities, and reconnect with nature.",
    "The space is designed for a sophisticated couple that values a juxtaposition of a timeless neoclassical structure with modern furniture. ",
    "A minimalistic monochromic home, blending simplicity, sophistication and elegance in every detail.",
  ];

  const cardSubtitles = [
    "Living/Dining Room",
    "Master Bedroom",
    "Living Room",
    "Bedroom",
    "Living Room",
    "Monochromic Bathroom",
  ];
  const cardLinks = [
    "/projects/residential/curating-warmth",
    "",
    "",
    "",
    "",
    "",
  ];
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

            {cardDescriptions[key] !== null &&
              cardDescriptions[key] !== undefined &&
              cardDescriptions[key] !== "" && (
                <div className={styles.glassDescription}>
                  {cardDescriptions[key]}
                </div>
              )}
            <Link href={cardLinks[key]} className={styles.projectLink}>
              <h2
                className={`${styles.projectTitle} ${juliusSansOne.className}`}
              >
                {cardTitles[key]}
              </h2>
            </Link>
            <p className={styles.projectDescription}>{cardSubtitles[key]}</p>
          </div>
        );
      })}
      <div className={styles.emptyDiv} />
      <div className={styles.emptyDiv} />
      <div className={styles.emptyDiv} />
    </div>
  );
};

export default ResidentialProjectCards;
