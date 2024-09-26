import Image from "next/image";
import Link from "next/link";
import card1 from "@/public/residential/CR Master Bedroom.webp";
import card2 from "@/public/commercial/Clothing Boutique.webp";
import card3 from "@/public/others/armchair.webp";

import { juliusSansOne } from "@/app/fonts";
import styles from "./projectsMain.module.css";

const ProjectsMain = () => {
  const cards = [card1, card2, card3];

  const cardTitles = [
    "RESIDENTIAL PROJECTS",
    "COMMERCIAL PROJECTS",
    "PRODUCTS",
  ];

  const cardDescriptions = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ];
  const cardLinks = [
    "/projects/residential",
    "/projects/commercial",
    "/projects/products",
  ];
  return (
    <div className={styles.fullContainer}>
      <Link href="/">
        <span className={`${styles.goBack} ${juliusSansOne.className}`}>
          🡠 GO BACK
        </span>
      </Link>
      <div className={styles.gridContainer}>
        {cards.map((card, key) => {
          return (
            <div className={styles.projectImageContainer} key={key}>
              <div className={styles.projectImageOverlayContainer}>
                <Link href={cardLinks[key]} className={styles.projectLink}>
                  {/* <div className={styles.projectImage}></div> */}
                  <Image
                    src={card}
                    alt={`${cardTitles} Project`}
                    className={styles.projectImage}
                  />
                  <h2
                    className={`${styles.projectTitle} ${juliusSansOne.className}`}
                  >
                    {cardTitles[key]}
                  </h2>
                  <span className={styles.arrow}>⟶</span>
                </Link>
                <Link href={cardLinks[key]} className={styles.projectLink}>
                  {cardDescriptions[key] !== null &&
                    cardDescriptions[key] !== undefined &&
                    cardDescriptions[key] !== "" && (
                      <div className={styles.glassDescription}>
                        {cardDescriptions[key]}
                      </div>
                    )}
                </Link>
              </div>
            </div>
          );
        })}
        <div className={styles.emptyDiv} />
        <div className={styles.emptyDiv} />
        <div className={styles.emptyDiv} />
      </div>
    </div>
  );
};

export default ProjectsMain;
