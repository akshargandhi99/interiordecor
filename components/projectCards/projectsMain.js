import Image from "next/image";
import Link from "next/link";
import card1 from "@/public/residential/CR Master Bedroom.webp";
import card2 from "@/public/commercial/Clothing Boutique.webp";
import card3 from "@/public/others/dystopian.webp";
import GoBack from "@/components/goBack/goBack";

import { juliusSansOne } from "@/app/fonts";
import styles from "./projectsMain.module.css";

const ProjectsMain = () => {
  const cards = [card1, card2, card3];

  const cardTitles = [
    "RESIDENTIAL PROJECTS",
    "COMMERCIAL PROJECTS",
    "OTHER PROJECTS",
  ];

  const cardDescriptions = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ];
  const cardLinks = [
    "/projects/residential",
    "/projects/commercial",
    "/projects/others",
  ];
  return (
    <div className={styles.fullContainer}>
      <GoBack href="/" top={135} left={50} />
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
