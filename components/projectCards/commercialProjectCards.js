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

  const cardSubtitles = ["Clothing Boutique", "Kitchen", "Tropical Cafe"];

  const cardDescriptions = [
    "Earthy textures and minimalist design create a serene, curated shopping experience",
    "A seamless blend of traditional grandeur and contemporary refinement, designed to evoke luxury and comfort.",
    "A warm, light-filled haven where the natural beauty of the tropics enhances culinary experience in a serene environment.",
  ];
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

export default CommercialProjectCards;
