import Image from "next/image";
import Link from "next/link";
import card1 from "@/public/commercial/Clothing Boutique.webp";
import card2 from "@/public/commercial/Tropical Cafe.webp";
import MobileFooter from "@/components/mobileFooter/mobileFooter";
import brownArrow from "@/public/static/backArrowBrown.svg";

import { juliusSansOne } from "@/app/fonts";
import styles from "./page.module.css";

const CommercialProjectCards = () => {
  const cards = [card1, card2];

  const cardTitles = ["Clothing Boutique", "Tropical Cafe"];

  const cardDescriptions = [
    "Earthy textures and minimalist design create a serene, curated shopping experience",
    "A warm, light-filled haven where the natural beauty of the tropics enhances culinary experience in a serene environment.",
  ];
  const cardLinks = ["", "", ""];
  return (
    <div className={styles.fullContainer}>
      <Link href="/projects">
        <span className={`${styles.goBack} ${juliusSansOne.className}`}>
          <Image
            src={brownArrow}
            className={styles.goBackArrow}
            alt="goBackArrow"
          />
          &nbsp;GO BACK
        </span>
        <Image
          src={brownArrow}
          className={styles.goBackMobile}
          alt="goBackArrow"
        />
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

                {cardDescriptions[key] !== null &&
                  cardDescriptions[key] !== undefined &&
                  cardDescriptions[key] !== "" && (
                    <div className={styles.glassDescription}>
                      {cardDescriptions[key]}
                    </div>
                  )}
              </div>

              <Link href={cardLinks[key]} className={styles.projectLink}>
                <h2
                  className={`${styles.projectTitle} ${juliusSansOne.className}`}
                >
                  {cardTitles[key]}
                </h2>
              </Link>
              {/* <p className={styles.projectDescription}>{cardSubtitles[key]}</p> */}
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

export default CommercialProjectCards;
