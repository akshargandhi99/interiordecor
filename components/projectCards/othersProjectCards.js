import Image from "next/image";
import Link from "next/link";
import card1 from "@/public/others/tiny homes.webp";
import card2 from "@/public/others/dystopian.webp";
import card3 from "@/public/others/peach fuzz.webp";
import card4 from "@/public/others/floor touch sofa.webp";
import card5 from "@/public/others/coffee table.webp";
import card6 from "@/public/others/armchair.webp";
import card7 from "@/public/others/armchair 1.webp";
import card8 from "@/public/others/peach fuzz 2.webp";
import card9 from "@/public/others/furniture.webp";
import card10 from "@/public/others/minimal armchair.webp";

// import { juliusSansOne } from "@/app/fonts";
import styles from "./othersProjectCards.module.css";

const OthersProjectCards = () => {
  const cards = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
  ];

  //   const cardTitles = [
  //     "Curating Warmth",
  //     "Chasing Red",
  //     "Blissful Blues",
  //     "Crafting a Farmhouse",
  //     "Refining Classics",
  //     "Monochromic House",
  //   ];

  const cardDescriptions = [
    "Tiny Homes: A competition project for the design of a tiny home while using every inch of the space.",
    "A dystopian render for products.",
    "Peach Fuzz Colour of the Year Sofa Design with Metal accent side table.",
    "A floor touch sofa with piping perfect for a conversational pit.",
    "Leather + Brass Coffee Table",
    "Single Armchair with Wooden coffee table - minimalism",
    "Single Armchair with Wooden coffee table - minimalism",
    "Peach fuzz colour of the year armchair and pouf side table.",
    "Minimal furniture collection",
    "Minimal Armchair",
  ];

  //   const cardSubtitles = [
  //     "Living/Dining Room",
  //     "Master Bedroom",
  //     "Living Room",
  //     "Bedroom",
  //     "Living Room",
  //     "Monochromic Bathroom",
  //   ];
  const cardLinks = ["", "", "", "", "", "", "", "", "", ""];
  return (
    <div className={styles.gridContainer}>
      {cards.map((card, key) => {
        return (
          <div className={styles.projectImageContainer} key={key}>
            <div className={styles.projectImageOverlayContainer}>
              <Link href={cardLinks[key]} className={styles.projectLink}>
                <Image
                  src={card}
                  alt={`Other Project ${key}`}
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
          </div>
        );
      })}
      <div className={styles.emptyDiv} />
      <div className={styles.emptyDiv} />
      <div className={styles.emptyDiv} />
    </div>
  );
};

export default OthersProjectCards;
