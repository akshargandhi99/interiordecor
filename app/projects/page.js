import Image from "next/image";
import Link from "next/link";
import card1 from "@/public/monochromic-house/8.webp";
import card2 from "@/public/commercial/Clothing Boutique.webp";
import card3 from "@/public/others/sofa_with_geometric_accen.webp";

import MobileFooter from "@/components/mobileFooter/mobileFooter";
import { juliusSansOne } from "@/app/fonts";
import styles from "./page.module.css";

const ProjectsMain = () => {
  const cards = [card1, card2, card3];

  const cardTitles = [
    "RESIDENTIAL PROJECTS",
    "COMMERCIAL PROJECTS",
    "PRODUCTS & MORE",
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
      <Link href="/">
        <span className={`${styles.goBackMobile} ${juliusSansOne.className}`}>
          🡠
        </span>
      </Link>

      <div className={styles.emptyDiv2} />
      <div className={styles.emptyDiv2} />

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
                </Link>
                <Link href={cardLinks[key]} className={styles.projectLink}>
                  {
                    <div
                      className={`${styles.glassDescription} ${juliusSansOne.className}`}
                    >
                      {cardTitles[key]}
                    </div>
                  }
                </Link>
              </div>
            </div>
          );
        })}

        <MobileFooter />
        <div className={styles.emptyDiv} />
        <div className={styles.emptyDiv} />
        <div className={styles.emptyDiv} />
      </div>
    </div>
  );
};

export default ProjectsMain;
