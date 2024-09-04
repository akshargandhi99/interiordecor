"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "../navbar/navbar";
import styles from "./landingCards.module.css";
import { useState, useEffect, useRef } from "react";

// Overview Cards
import card1 from "@/public/landingCards/Blissful Blues.webp";
import card2 from "@/public/landingCards/Chasing Red.webp";
import card3 from "@/public/landingCards/Crafting a Farmhouse.webp";
import card4 from "@/public/landingCards/Curating Warmth.webp";
import card5 from "@/public/landingCards/Monochromic.webp";
import card6 from "@/public/landingCards/Refining Classics.webp";

// Detailed Cards
import curatingWarmth1 from "@/public/homepageImages/curatingWarmth/image.webp";
import curatingWarmth2 from "@/public/homepageImages/curatingWarmth/image-1.webp";
import curatingWarmth3 from "@/public/homepageImages/curatingWarmth/Rectangle 12.webp";

import chasingRed1 from "@/public/homepageImages/chasingRed/image.webp";
import chasingRed2 from "@/public/homepageImages/chasingRed/image1.webp";
import chasingRed3 from "@/public/homepageImages/chasingRed/image-1.webp";
import { juliusSansOne } from "@/app/fonts";

const LandingCard = () => {
  const [isCardOpen, setCardOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalImages = 3; // Assuming there are 3 images
  const mainCard = useRef(null);
  const mainCardContainer = useRef(null);
  const cardStyle = isCardOpen ? styles.expandedImage : styles.smallImage;
  const display = isCardOpen ? styles.display : styles.noDisplay;
  const inverseDisplay = isCardOpen ? styles.noDisplay : styles.display;
  const justify = isCardOpen
    ? styles.justifySpaceBetween
    : styles.justifyCenter;
  const marginBottom = isCardOpen
    ? styles.marginBottom50
    : styles.marginBottom0;

  const handleScroll = () => {
    if (!mainCardContainer.current) return;

    const container = mainCardContainer.current;
    const containerScrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;

    // Get all the images in the container
    const images = container.querySelectorAll("img");

    // Loop through each image to determine which one is currently in view
    images.forEach((image, index) => {
      const imageLeft = image.offsetLeft;
      const imageRight = imageLeft + image.clientWidth;

      // Check if the image is mostly in view
      if (
        imageLeft < containerScrollLeft + containerWidth / 2 &&
        imageRight > containerScrollLeft + containerWidth / 2
      ) {
        setCurrentIndex(index + 1);
      }
    });
  };

  useEffect(() => {
    const container = mainCardContainer.current;

    // Add scroll event listener
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    // Cleanup event listener on unmount
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const verticalScroll = (refCard) => {
    // First, scroll the card into view vertically
    refCard.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollMainCardToView = (refCard, refContainer, isImmediate) => {
    const scrollMainCard = (refCard, refContainer) => {
      const container = refContainer.current;
      const image = refCard.current;

      // Get the container width (viewport width)
      const viewportWidth = container.clientWidth;
      // Get the image width
      const imageWidth = image.clientWidth;
      // Get the image's offset from the left of the container
      const imageOffsetLeft = image.offsetLeft;

      // Calculate the scroll position
      const scrollPosition =
        imageOffsetLeft + imageWidth / 2 - viewportWidth / 2;

      // Scroll the container to the calculated position
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth", // Smooth scroll
      });
    };
    // Delay the horizontal scroll to allow the vertical scroll to complete
    if (isImmediate) {
      scrollMainCard(refCard, refContainer);
    } else {
      setTimeout(() => {
        scrollMainCard(refCard, refContainer);
      }, 400); // Adjust the timeout duration as needed
    }
  };

  return (
    <div className={styles.cardContainer}>
      <NavBar />
      <div className={styles.innerCardContainer}>
        <div className={styles.emptyDiv} />
        <div className={styles.emptyDiv} />

        <Image src={card1} className={styles.card} alt="Project 1" />

        <Image src={card2} className={styles.card} alt="Project 2" />
        <Image src={card3} className={styles.card} alt="Project 3" />

        {/* <Image
          src={card4}
          className={`${cardStyle} ${inverseDisplay}`}
          alt="Project 4"
          onClick={() => setCardOpen(true)}
        /> */}
        {/* Curating Warmth Project */}

        <div className={`${styles.expandedContainer} ${marginBottom}`}>
          <div className={styles.innerFlexContainer}>
            <span
              className={`${styles.resetCard} ${display}`}
              onClick={() => {
                scrollMainCardToView(mainCard, mainCardContainer, true);
              }}
            >
              Reset
            </span>
            <div
              className={`${styles.innerExpandedContainer} ${justify}`}
              ref={mainCardContainer}
            >
              <div className={`${styles.emptyDiv} ${display}`} />
              <div className={`${styles.emptyDiv} ${display}`} />
              <div className={`${styles.emptyDiv} ${display}`} />
              <div className={`${styles.emptyDiv} ${display}`} />
              <div className={`${styles.emptyDiv} ${display}`} />
              <div className={`${styles.emptyDiv} ${display}`} />

              <div className={`${styles.firstTextContainer} ${display}`}>
                <span
                  className={`${styles.firstTextHeader} ${styles.firstText} ${juliusSansOne.className} ${display}`}
                >
                  Curating Warmth
                </span>
                <span
                  className={`${styles.firstTextSubheader} ${styles.firstText} ${juliusSansOne.className} ${display}`}
                >
                  Dadar, Mumbai
                </span>
                <span
                  className={`${styles.firstTextSubheader} ${styles.firstText} ${juliusSansOne.className} ${display}`}
                >
                  2023
                </span>

                <p className={`${styles.firstText} ${display}`}>
                  An inviting contemporary home for a family of four, with the
                  brief of creating open, communal spaces that promote family
                  togetherness.
                </p>
                <div className={`${styles.btnContainer} ${display}`}>
                  <Link
                    href="/projects/residential"
                    className={`${styles.btnLink} ${display}`}
                  >
                    <button
                      type="button"
                      className={`${styles.discoverMoreBtn} ${display}`}
                    >
                      DISCOVER MORE
                    </button>
                  </Link>
                  <button
                    type="button"
                    className={`${styles.viewDetailsBtn} ${display}`}
                  >
                    VIEW DETAILS ⟶
                  </button>
                </div>
              </div>
              <Image
                src={curatingWarmth1}
                className={`${cardStyle} `}
                alt="Curating Warmth Project Image 1"
                onClick={() => {
                  setCardOpen(true);
                  verticalScroll(mainCard);
                  scrollMainCardToView(mainCard, mainCardContainer, false); // Don't scroll immediately, since we need time for the previous function to get the container into view first
                }}
                ref={mainCard}
              />

              <p className={`${styles.restOfText} ${display}`}>
                The design emphasises on minimalism with uncluttered spaces,
                ensuring fewer distractions and a peaceful environment.
              </p>
              <Image
                src={curatingWarmth2}
                className={`${styles.expandedImage} ${display}`}
                alt="Curating Warmth Project Image 2"
              />
              <p className={`${styles.restOfText} ${display}`}>
                The design emphasises on minimalism with uncluttered spaces,
                ensuring fewer distractions and a peaceful environment.
              </p>
              <Image
                src={curatingWarmth3}
                className={`${styles.expandedImage} ${display}`}
                alt="Curating Warmth Project Image 3"
              />
              <p className={`${styles.restOfText} ${display}`}>
                The design emphasises on minimalism with uncluttered spaces,
                ensuring fewer distractions and a peaceful environment.
              </p>
              <div className={`${styles.emptyDiv} ${display}`} />
              <div className={`${styles.emptyDiv} ${display}`} />
              <div className={`${styles.emptyDiv} ${display}`} />
              <div className={`${styles.emptyDiv} ${display}`} />
            </div>
            <span
              className={`${styles.pageCount} ${juliusSansOne.className} ${display}`}
            >
              {String(currentIndex).padStart(2, "0")}/
              {String(totalImages).padStart(2, "0")}
            </span>
          </div>
        </div>

        <Image src={card5} className={styles.card} alt="Project 5" />
        <Image src={card6} className={styles.card} alt="Project 6" />
        <div className={styles.emptyDiv} />
        <div className={styles.emptyDiv} />
      </div>
    </div>
  );
};

export default LandingCard;
