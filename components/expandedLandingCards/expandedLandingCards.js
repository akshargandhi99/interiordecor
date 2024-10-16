"use client";
import { ACTION_TYPES, StoreContext } from "@/store/store-context";
import { useState, useEffect, useRef, useContext } from "react";
import { juliusSansOne } from "@/app/fonts";
import useWindowDimensions from "@/hooks/windowDimensions";

import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import styles from "./expandedLandingCards.module.css";

import rightArrow from "@/public/static/whiteArrowRight.webp";
// Detailed Cards
import curatingWarmth1 from "@/public/homepageImages/curatingWarmth/image.webp";
import curatingWarmth2 from "@/public/homepageImages/curatingWarmth/image-1.webp";
import curatingWarmth3 from "@/public/homepageImages/curatingWarmth/Rectangle 12.webp";

import chasingRed1 from "@/public/homepageImages/chasingRed/image.webp";
import chasingRed2 from "@/public/homepageImages/chasingRed/image1.webp";
import chasingRed3 from "@/public/homepageImages/chasingRed/image-1.webp";

import blissfulBlues1 from "@/public/homepageImages/blissfulBlues/image.webp";
import blissfulBlues2 from "@/public/homepageImages/blissfulBlues/image-1.webp";
import blissfulBlues3 from "@/public/homepageImages/blissfulBlues/image-2.webp";

import craftingFarmhouse1 from "@/public/homepageImages/craftingFarmhouse/image.webp";
import craftingFarmhouse2 from "@/public/homepageImages/craftingFarmhouse/image-1.webp";
import craftingFarmhouse3 from "@/public/homepageImages/craftingFarmhouse/image-2.webp";

import monochromic1 from "@/public/homepageImages/monochromic/image.webp";
import monochromic2 from "@/public/homepageImages/monochromic/image-1.webp";
import monochromic3 from "@/public/homepageImages/monochromic/image-2.webp";

import refiningClassics1 from "@/public/homepageImages/refiningClassics/image.webp";
import refiningClassics2 from "@/public/homepageImages/refiningClassics/image-1.webp";
import refiningClassics3 from "@/public/homepageImages/refiningClassics/image-2.webp";

const ExpandedCard = (props) => {
  // projectName can be curatingWarmth, chasingRed etc. as per the name of the folder
  const { projectName } = props;
  const [isCardOpen, setCardOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const maxScrollLeft = 300; // Define the maximum scrollable distance horizontally
  const { height, width } = useWindowDimensions();
  const isMobile = width <= 600 ? true : false;

  const [isLeftArrow, setIsLeftArrow] = useState(false);
  const [isRightArrow, setIsRightArrow] = useState(true);

  const fullImageContainer = useRef(null);
  const { dispatch, state } = useContext(StoreContext);
  const { expanded } = state;

  const cardStyle = isCardOpen ? styles.expandedImage : styles.smallImage;
  const display = isCardOpen ? styles.display : styles.noDisplay;
  const justify = isCardOpen
    ? styles.justifySpaceBetween
    : styles.justifyCenter;
  const marginBottom = isCardOpen
    ? styles.marginBottom50
    : styles.marginBottom0;

  let title = "";
  let location = "";
  let year = "";
  let area = "";
  let firstText = "";
  let images = [];
  let descriptions = [];
  let projectLink = "";
  switch (projectName) {
    case "curatingWarmth":
      title = "Curating Warmth";
      location = "Dadar, Mumbai";
      year = "2023";
      area = "1300 sq ft";
      firstText =
        "An inviting contemporary home for a family of four, with the brief of creating open, communal spaces that promote family togetherness.";
      images = [curatingWarmth1, curatingWarmth2, curatingWarmth3];
      descriptions = [
        "Abundant natural light is maximised through large windows and skylights, complemented by recessed and task lighting that enhances the open, uncluttered feel.",
        "Ergonomic furniture and family-centric spaces like a cozy window nook or kitchen island ensure comfort and functionality",
      ];
      projectLink = "/projects/residential/curating-warmth";

      break;
    case "blissfulBlues":
      title = "Blissful Blues";
      location = "Bandra, Mumbai";
      area = "1050 sq ft";
      firstText =
        "Tailored for a vibrant, creative family of three, infused with hues that reflect their dynamic personalities. Designed with longevity in mind, every detail maximises functionality and aesthetic appeal.";
      images = [blissfulBlues1, blissfulBlues2, blissfulBlues3];
      descriptions = [
        "Each corner of the home is designed to inspire creativity, with flexible spaces that can easily adapt as the family grows and evolves.",
        "The design includes areas specifically crafted for family bonding and relaxation, supporting their lifestyle and need for quality time together.",
      ];
      projectLink = "/projects/residential/blissful-blues";
      break;
    case "chasingRed":
      title = "Chasing Red";
      location = "Worli, Mumbai";
      area = "2150 sq ft";
      firstText =
        "A multi-generational family home designed for an elderly couple, a younger couple and their two children.The common colour psychology result as per the Vaastu factor for the family, is a deep red colour which is balanced with walnut wood and oak wood tones.";
      images = [chasingRed1, chasingRed2, chasingRed3];
      descriptions = [
        "Deep red accents are incorporated strategically to create a warm and inviting atmosphere throughout the home.",
        "Flexible zones accommodate the younger couple’s varied routines, with communal spaces that foster family interaction and private areas for quiet moments.",
      ];
      projectLink = "/projects/residential/chasing-red";
      break;
    case "craftingFarmhouse":
      title = "Crafting a Farmhouse";
      location = "Khopoli, Maharashtra";
      area = "900 sq ft";
      firstText =
        "This retreat is designed to be a haven for a small family where they can gather for family getaways, engage in farming activities, and reconnect with nature. ";
      images = [craftingFarmhouse1, craftingFarmhouse2, craftingFarmhouse3];
      descriptions = [
        "Use of large windows,balconies and sliding doors to create visual and physical connections with the surrounding landscape. ",
        "Selecting sustainable materials such as reclaimed wood, bamboo flooring, and low-VOC paints to promote eco-friendly living.",
      ];
      projectLink = "/projects/residential/crafting-a-farmhouse";
      break;
    case "refiningClassics":
      title = "Refining Classics";
      location = "Vile Parle, Mumbai";
      area = "1350 sq ft";
      firstText =
        "The space is designed for a sophisticated couple that values a juxtaposition of a timeless neoclassical structure with modern furniture. They appreciate a serene environment with thoughtfully curated elements, showcasing their love for both classic and modern aesthetics.";
      images = [refiningClassics1, refiningClassics2, refiningClassics3];
      descriptions = [
        "Opting for a serene, neutral colour palette with accents in richer tones or metallics to maintain a sophisticated, minimalist look.",
        "Decor that reflect both classic and modern styles, keeping the decor minimal and purposeful to enhance the serene, refined atmosphere.",
      ];
      projectLink = "/projects/residential/refining-classics";
      break;

    case "monochromic":
      title = "Monochromic";
      location = "Mulund, Mumbai";
      area = "600 sq ft";
      firstText =
        "For the design for this 1-bedroom apartment, we aim to create a sleek and modern living space for a young couple, centered around a monochrome colour scheme of black and white.";
      images = [monochromic1, monochromic2, monochromic3];
      descriptions = [
        "Combining different finishes and textures while maintaining a consistent design language. Ensuring smooth transitions between the living, kitchen, and bedroom areas.",
        "Utilisation of natural light and complement with strategic artificial lighting. Includes adjustable lighting options to set different moods.",
      ];
      projectLink = "/projects/residential/monochromic-house";
      break;
    default:
      throw new Error("Invalid Project name");
  }
  const totalImages = images.length;

  const refsArray = useRef([]);
  const mainCardContainer = useRef(null);

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
    const scrollContainer = fullImageContainer.current;

    const handleScroll = (event) => {
      if (scrollContainer.scrollLeft > maxScrollLeft) {
        scrollContainer.scrollLeft = maxScrollLeft; // Stop scrolling beyond maxScrollLeft
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  useEffect(() => {
    if (expanded[projectName] === 0) {
      setCardOpen(false);
    }
  }, [expanded, projectName]);

  useEffect(() => {
    if (currentIndex === totalImages) {
      setIsLeftArrow(true);
      setIsRightArrow(false);
    } else if (currentIndex === 1) {
      setIsLeftArrow(false);
      setIsRightArrow(true);
    }
  }, [currentIndex, totalImages]);

  useEffect(() => {
    if (!isCardOpen) {
      console.log("USED");
      // Scroll the container to bring the main image into view
      const container = mainCardContainer.current;
      const image = refsArray.current[0]; // The main image

      const imageLeft = image.offsetLeft;
      const imageWidth = image.clientWidth;
      const containerWidth = container.clientWidth;

      const scrollPosition = imageLeft + imageWidth / 2 - containerWidth / 2;

      container.scrollLeft = scrollPosition;
    }
  }, [isCardOpen]);

  const verticalScroll = (refCard) => {
    setTimeout(() => {
      // First, scroll the card into view vertically
      refCard.current.scrollIntoView({
        behavior: "smooth",
        block: isMobile ? "center" : "end",
      });
    });
  };

  const scrollMainCardToView = (refCard, index, refContainer, isImmediate) => {
    const scrollMainCard = (refCard, refContainer) => {
      const container = refContainer.current;
      const image = refCard.current[index];

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
      if ("scrollBehavior" in document.documentElement.style) {
        container.scrollTo({ left: scrollPosition, behavior: "smooth" });
      } else {
        container.scrollLeft = scrollPosition; // Fallback for Safari
      }
    };
    // Delay the horizontal scroll to allow the vertical scroll to complete
    if (isImmediate) {
      scrollMainCard(refCard, refContainer);
    } else {
      setTimeout(() => {
        scrollMainCard(refCard, refContainer);
      }, 500); // Adjust the timeout duration as needed
    }
  };

  const addToHomeTitle = (category) => {
    // Reset all and close any open cards
    const allZero = Object.keys(expanded).reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {});
    // Open only the relevant card, closing all others
    dispatch({
      type: ACTION_TYPES.SET_EXPANDED,
      payload: { expanded: { ...allZero, [category]: 1 } },
    });
    setCardOpen(true);
  };

  return (
    <div
      className={`${styles.expandedContainer} ${marginBottom}`}
      ref={fullImageContainer}
      // onMouseLeave={handleMouseLeave}
    >
      <div className={styles.innerFlexContainer}>
        {isRightArrow && (
          <Image
            className={`${styles.rightArrow} ${display}`}
            src={rightArrow}
            alt="Go to next Image"
            onClick={() => {
              const nextImageNumber =
                Number(currentIndex) < totalImages - 1
                  ? Number(currentIndex)
                  : Number(totalImages) - 1;

              scrollMainCardToView(
                refsArray,
                nextImageNumber,
                mainCardContainer,
                true
              );
            }}
          />
        )}
        {isLeftArrow && (
          <Image
            className={`${styles.leftArrow} ${display}`}
            src={rightArrow}
            alt="Go to previous Image"
            onClick={() => {
              const previousImageNumber =
                Number(currentIndex) > 1 ? Number(currentIndex) - 2 : 0;
              scrollMainCardToView(
                refsArray,
                previousImageNumber,
                mainCardContainer,
                true
              );
            }}
          />
        )}
        <div
          className={`${styles.innerExpandedContainer} ${justify}`}
          ref={mainCardContainer}
        >
          <div className={`${styles.emptyDiv} ${display}`}>&nbsp;</div>
          <div className={`${styles.emptyDiv} ${display}`}>&nbsp;</div>
          <div className={`${styles.emptyDiv} ${display}`}>&nbsp;</div>
          <div className={`${styles.emptyDiv} ${display}`}>&nbsp;</div>
          <div className={`${styles.emptyDiv} ${display}`}>&nbsp;</div>
          <div className={`${styles.emptyDiv} ${display}`}>&nbsp;</div>

          <div className={`${styles.firstTextContainer} ${display}`}>
            <span
              className={`${styles.firstTextHeader} ${juliusSansOne.className} ${display}`}
            >
              {title}
            </span>
            <span
              className={`${styles.firstTextSubheader} ${juliusSansOne.className} ${display}`}
            >
              {location}
            </span>
            <span
              className={`${styles.firstTextSubheader} ${juliusSansOne.className} ${display}`}
            >
              {area}
            </span>

            <p className={`${styles.firstText} ${display}`}>{firstText}</p>
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
              <Link
                href={projectLink}
                className={`${styles.btnLink} ${display}`}
              >
                <button
                  type="button"
                  className={`${styles.viewDetailsBtn} ${display}`}
                >
                  VIEW DETAILS ⟶
                </button>
              </Link>
            </div>
          </div>
          {images.map((imageSrc, index) => {
            return (
              <Fragment key={`${title} - ${index}`}>
                <Image
                  src={imageSrc}
                  className={
                    index === 0
                      ? `${cardStyle}`
                      : `${styles.expandedImage} ${display}`
                  }
                  alt={`${title} Project Image ${Number(index) + 1}`}
                  onClick={
                    index === 0
                      ? () => {
                          setCardOpen(true);
                          // verticalScroll(fullImageContainer);
                          verticalScroll(fullImageContainer);
                          scrollMainCardToView(
                            refsArray,
                            index,
                            mainCardContainer,
                            false
                          ); // Don't scroll immediately, since we need time for the previous function to get the container into view first
                          addToHomeTitle(projectName);
                        }
                      : null
                  }
                  // onMouseEnter={() => handleMouseEnter(index)}
                  ref={(el) => (refsArray.current[index] = el)}
                />

                <p className={`${styles.restOfText} ${display}`}>
                  {descriptions[index]}
                </p>
              </Fragment>
            );
          })}

          <div className={`${styles.emptyDiv} ${display}`}>&nbsp;</div>
          <div className={`${styles.emptyDiv} ${display}`}>&nbsp;</div>
          <div className={`${styles.emptyDiv} ${display}`}>&nbsp;</div>
          <div className={`${styles.emptyDiv} ${display}`}>&nbsp;</div>
        </div>
        <span
          className={`${styles.pageCount} ${juliusSansOne.className} ${display}`}
        >
          {String(currentIndex).padStart(2, "0")}/
          {String(totalImages).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default ExpandedCard;
