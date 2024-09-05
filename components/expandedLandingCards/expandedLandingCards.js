"use client";
import { ACTION_TYPES, StoreContext } from "@/store/store-context";
import { useState, useEffect, useRef, useContext } from "react";
import { juliusSansOne } from "@/app/fonts";

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

  const fullImageContainer = useRef(null);
  const { dispatch, state } = useContext(StoreContext);
  const { homeTitle } = state;

  const cardStyle = isCardOpen ? styles.expandedImage : styles.smallImage;
  const display = isCardOpen ? styles.display : styles.noDisplay;
  const inverseDisplay = isCardOpen ? styles.noDisplay : styles.display;
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
        "The design emphasises on minimalism with uncluttered spaces, ensuring fewer distractions and a peaceful environment.",
        "The design emphasises on minimalism with uncluttered spaces, ensuring fewer distractions and a peaceful environment.",
        "The design emphasises on minimalism with uncluttered spaces, ensuring fewer distractions and a peaceful environment.",
      ];
      projectLink = "/projects/residential/curating-warmth";

      break;
    case "blissfulBlues":
      title = "Blissful Blues";
      location = "Bandra, Mumbai";
      area = "1050 sq ft";
      firstText =
        "An inviting contemporary home for a family of four, with the brief of creating open, communal spaces that promote family togetherness.";
      images = [blissfulBlues1, blissfulBlues2, blissfulBlues3];
      descriptions = [
        "The design emphasises on minimalism with uncluttered spaces, ensuring fewer distractions and a peaceful environment.",
        "The design emphasises on minimalism with uncluttered spaces, ensuring fewer distractions and a peaceful environment.",
        "The design emphasises on minimalism with uncluttered spaces, ensuring fewer distractions and a peaceful environment.",
      ];
      break;
    case "chasingRed":
      title = "Chasing Red";
      location = "Worli, Mumbai";
      area = "2150 sq ft";
      firstText =
        "An inviting contemporary home for a family of four, with the brief of creating open, communal spaces that promote family togetherness.";
      images = [chasingRed1, chasingRed2, chasingRed3];
      descriptions = [
        "The design emphasises on minimalism with uncluttered spaces, ensuring fewer distractions and a peaceful environment.",
        "The design emphasises on minimalism with uncluttered spaces, ensuring fewer distractions and a peaceful environment.",
        "The design emphasises on minimalism with uncluttered spaces, ensuring fewer distractions and a peaceful environment.",
      ];
      break;
    case "craftingFarmhouse":
      title = "Crafting a Farmhouse";
      location = "Khopoli, Maharashtra";
      area = "900 sq ft";
      firstText =
        "An inviting contemporary home for a family of four, with the brief of creating open, communal spaces that promote family togetherness.";
      images = [craftingFarmhouse1, craftingFarmhouse2, craftingFarmhouse3];
      descriptions = [
        "The design emphasises on minimalism with uncluttered spaces, ensuring fewer distractions and a peaceful environment.",
        "The design emphasises on minimalism with uncluttered spaces, ensuring fewer distractions and a peaceful environment.",
        "The design emphasises on minimalism with uncluttered spaces, ensuring fewer distractions and a peaceful environment.",
      ];
      break;
    case "refiningClassics":
      title = "Refining Classics";
      location = "Vile Parle, Mumbai";
      area = "1350 sq ft";
      firstText =
        "An inviting contemporary home for a family of four, with the brief of creating open, communal spaces that promote family togetherness.";
      images = [refiningClassics1, refiningClassics2, refiningClassics3];
      descriptions = [
        "The design emphasises on minimalism with uncluttered spaces, ensuring fewer distractions and a peaceful environment.",
        "The design emphasises on minimalism with uncluttered spaces, ensuring fewer distractions and a peaceful environment.",
        "The design emphasises on minimalism with uncluttered spaces, ensuring fewer distractions and a peaceful environment.",
      ];
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
    setTimeout(() => {
      // First, scroll the card into view vertically
      refCard.current.scrollIntoView({ behavior: "smooth", block: "end" });
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
      }, 500); // Adjust the timeout duration as needed
    }
  };

  const addToHomeTitle = () => {
    dispatch({
      type: ACTION_TYPES.SET_HOME_TITLE,
      payload: { homeTitle: homeTitle + 1 },
    });
  };
  // const subtractFromHomeTitle = () => {
  //   dispatch({
  //     type: ACTION_TYPES.SET_HOME_TITLE,
  //     payload: { homeTitle: homeTitle - 1},
  //   });
  // }

  return (
    <div
      className={`${styles.expandedContainer} ${marginBottom}`}
      ref={fullImageContainer}
    >
      <div className={styles.innerFlexContainer}>
        <span
          className={`${styles.resetCard} ${display}`}
          onClick={() => {
            scrollMainCardToView(refsArray, 0, mainCardContainer, true);
          }}
        >
          🡠 GO BACK
        </span>
        <Image
          className={`${styles.rightArrow} ${display}`}
          src={rightArrow}
          alt="Go to next Image"
          onClick={() => {
            const nextImageNumber =
              Number(currentIndex) < totalImages - 1
                ? Number(currentIndex)
                : Number(totalImages - 1);
            console.log(nextImageNumber);
            scrollMainCardToView(
              refsArray,
              nextImageNumber,
              mainCardContainer,
              true
            );
          }}
        />
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
                          verticalScroll(fullImageContainer);
                          scrollMainCardToView(
                            refsArray,
                            index,
                            mainCardContainer,
                            false
                          ); // Don't scroll immediately, since we need time for the previous function to get the container into view first
                          addToHomeTitle();
                        }
                      : null
                  }
                  ref={(el) => (refsArray.current[index] = el)}
                />

                <p className={`${styles.restOfText} ${display}`}>
                  {descriptions[index]}
                </p>
              </Fragment>
            );
          })}

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
  );
};

export default ExpandedCard;
