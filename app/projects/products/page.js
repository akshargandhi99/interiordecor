"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import card1 from "@/public/others/peach fuzz.webp";
import card2 from "@/public/others/floor touch sofa.webp";
import card3 from "@/public/others/peach fuzz 2.webp";
import card4 from "@/public/others/armchair.webp";
import card5 from "@/public/others/armchair 1.webp";
import card6 from "@/public/others/coffee table.webp";
import card7 from "@/public/others/furniture.webp";
import card8 from "@/public/others/minimal armchair.webp";
import card9 from "@/public/others/coffee_table_with_organic.webp";
import card10 from "@/public/others/console_table_geometric.webp";
import card11 from "@/public/others/L_shape_sofa_with_geometr.webp";
import card12 from "@/public/others/L_shape_sofa_with_geometr (2).webp";
import card13 from "@/public/others/sectional_sofa_with_geome.webp";
import card14 from "@/public/others/sofa_with_geometric_accen.webp";
import card15 from "@/public/others/comfortable_3-seater_sofa_with_plush_c.webp";
import MobileFooter from "@/components/mobileFooter/mobileFooter";

import { juliusSansOne } from "@/app/fonts";
import styles from "./page.module.css";

const OthersProjectCards = () => {
  const [zoomedImage, setZoomedImage] = useState(null); // State to track the zoomed image
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
    card11,
    card12,
    card13,
    card14,
    card15,
  ];

  const cardDescriptions = [
    "Peach Fuzz Colour of the Year Sofa Design with Metal Accent Side Table.",
    "A Floor Touch Sofa with Piping Perfect for a Conversational Pit.",
    "Peach Fuzz Colour of the Year Armchair and Pouf Side Table.",
    "Single Armchair with Wooden Coffee Table - Minimalism Ⅰ",
    "Single Armchair with Wooden Coffee Table - Minimalism Ⅱ",
    "Leather + Brass Coffee Table",
    "Minimal Furniture Collection",
    "Minimal Armchair",
    "Three Elements - One Redefined Coffee Table",
    "Sharp Lines meet Functionality - Console",
    "Perfect Loveseat - Grounded in Style",
    "A Modular Sofa - Customise to your Space",
    "A Sectional Statement of Style",
    "A Retro Charm with Modern Comfort",
    "Plush Comfort - Perfect for Two!",
  ];

  const handleImageClick = (card) => {
    setZoomedImage(card); // Set the clicked image as the zoomed image
  };

  const closeZoom = () => {
    setZoomedImage(null); // Close the zoomed view
  };

  return (
    <div className={styles.fullContainer}>
      <Link href="/projects">
        <span className={`${styles.goBack} ${juliusSansOne.className}`}>
          🡠 GO BACK
        </span>
      </Link>
      <Link href="/projects">
        <span className={`${styles.goBackMobile} ${juliusSansOne.className}`}>
          🡠
        </span>
      </Link>
      <div className={styles.emptyDiv2} />
      <div className={styles.emptyDiv2} />
      <div className={styles.gridContainer}>
        {cards.map((card, key) => {
          return (
            <div
              className={styles.projectImageContainer}
              key={key}
              onClick={() => handleImageClick(card)} // Click event to zoom in
            >
              <div className={styles.projectImageOverlayContainer}>
                <Image
                  src={card}
                  alt={`Other Project ${key}`}
                  className={styles.projectImage}
                />

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
        <MobileFooter />
        <div className={styles.emptyDiv} />
        <div className={styles.emptyDiv} />
        <div className={styles.emptyDiv} />
      </div>

      {zoomedImage && (
        <div className={styles.fullscreenOverlay} onClick={closeZoom}>
          <div className={styles.fullscreenImageContainer}>
            <Image
              src={zoomedImage}
              alt="Zoomed Image"
              className={styles.fullscreenImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OthersProjectCards;
