import Image from "next/image";
import NavBar from "../navbar/navbar";
import styles from "./landingCards.module.css";
import card1 from "@/public/landingCards/Blissful Blues.webp";
import card2 from "@/public/landingCards/Chasing Red.webp";
import card3 from "@/public/landingCards/Crafting a Farmhouse.webp";
import card4 from "@/public/landingCards/Curating Warmth.webp";
import card5 from "@/public/landingCards/Monochromic.webp";
import card6 from "@/public/landingCards/Refining Classics.webp";

const LandingCard = () => {
  return (
    <div className={styles.cardContainer}>
      <NavBar />
      <div className={styles.innerCardContainer}>
        <div className={styles.emptyDiv} />
        <div className={styles.emptyDiv} />
        <Image src={card1} className={styles.card} alt="Project 1" />
        <Image src={card2} className={styles.card} alt="Project 2" />
        <Image src={card3} className={styles.card} alt="Project 3" />
        <Image src={card4} className={styles.card} alt="Project 3" />
        <Image src={card5} className={styles.card} alt="Project 3" />
        <Image src={card6} className={styles.card} alt="Project 3" />
        <div className={styles.emptyDiv} />
        <div className={styles.emptyDiv} />
      </div>
    </div>
  );
};

export default LandingCard;
