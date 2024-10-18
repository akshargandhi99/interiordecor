"use client";

import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import breadCrumbArrow from "@/public/static/breadCrumbArrow.svg";
import image1 from "@/public/curating-warmth/1.webp";
import image2 from "@/public/curating-warmth/2.webp";
import image3 from "@/public/curating-warmth/3.webp";
import image4 from "@/public/curating-warmth/4.webp";
import image5 from "@/public/curating-warmth/5.webp";
import image6 from "@/public/curating-warmth/6.webp";
import MobileFooter from "@/components/mobileFooter/mobileFooter";
import detailedData from "@/data/detailedPages.json";
import brownArrow from "@/public/static/backArrowBrown.svg";

const CuratingWarmth = () => {
  const projectName = "Curating Warmth";
  const [zoomedImage, setZoomedImage] = useState(null); // State to track the zoomed image
  const imageArray = [
    [image1, styles.gridImage1],
    [image2, styles.gridImage2],
    [image3, styles.gridImage3],
    [image4, styles.gridImage4],
    [image5, styles.gridImage5],
    [image6, styles.gridImage6],
  ];

  const type = detailedData[projectName].type;
  const location = detailedData[projectName].location;
  const configuration = detailedData[projectName].configuration;
  const area = detailedData[projectName].area;
  const pillArray = detailedData[projectName].pillArray;
  const designAspects = detailedData[projectName].designAspects;
  const spatialDesignText = detailedData[projectName].spatialDesignText;
  const mainParagraph = detailedData[projectName].mainParagraph;

  const handleImageClick = (card) => {
    setZoomedImage(card); // Set the clicked image as the zoomed image
  };

  const closeZoom = () => {
    setZoomedImage(null); // Close the zoomed view
  };

  return (
    <div className={styles.fullContainer}>
      <div className={styles.emptyDiv} />
      <div className={styles.topContainer}>
        <Link href={`/projects/${type}`}>
          <span className={`${styles.goBack} ${juliusSansOne.className}`}>
            <Image
              src={brownArrow}
              className={styles.goBackArrow}
              alt="goBackArrow"
            />
            &nbsp;GO BACK
          </span>
        </Link>
        <div className={styles.bodyContainer}>
          <main className={styles.mainContainer}>
            <div
              className={`${styles.breadCrumbMenu} ${juliusSansOne.className}`}
            >
              <Link href="/" className={styles.breadCrumbLink}>
                HOME
              </Link>{" "}
              <Image src={breadCrumbArrow} alt="bread crumb menu arrow" />
              <Link href="/projects" className={styles.breadCrumbLink}>
                PROJECTS{" "}
              </Link>
              <Image src={breadCrumbArrow} alt="bread crumb menu arrow" />
              <Link
                href={`/projects/${type}`}
                className={styles.breadCrumbLink}
              >
                {type}
              </Link>
              <Image src={breadCrumbArrow} alt="bread crumb menu arrow" />
              <span className={styles.active}>{projectName}</span>
            </div>
            <h1 className={`${styles.mainHeader} ${juliusSansOne.className}`}>
              {projectName}
            </h1>
            <p className={`${styles.location} ${juliusSansOne.className}`}>
              <span className={styles.locationText}>{location}</span>
              <span className={styles.locationText}>{configuration}</span>
              <span className={styles.locationText}>{area}</span>
            </p>
            <p className={styles.paragraph}>{mainParagraph}</p>
            <h2 className={`${styles.subHeader} ${juliusSansOne.className}`}>
              DESIGN ASPECTS & KEY CONSIDERATIONS
            </h2>
            <ol>
              {designAspects.map((aspect, index) => {
                return (
                  <li
                    className={styles.paragraph}
                    key={`${projectName} Design Aspect ${Number(index) + 1}`}
                  >
                    {aspect}
                  </li>
                );
              })}
            </ol>
            <h2 className={`${styles.subHeader} ${juliusSansOne.className}`}>
              SPATIAL DESIGN
            </h2>

            {spatialDesignText.map((text, index) => {
              return (
                <p
                  className={styles.paragraph}
                  key={`${projectName} Spatial Design Text ${
                    Number(index) + 1
                  }`}
                >
                  {text}
                </p>
              );
            })}

            {/* Pills/Tags */}
            {pillArray.map((pillText, index) => {
              return (
                <span
                  className={`${styles.pill} ${styles.nobreak} ${juliusSansOne.className}`}
                  key={`${projectName} Pill Text ${Number(index) + 1}`}
                >
                  {pillText}
                </span>
              );
            })}
            <div className={styles.emptyDiv} />
            <div className={styles.emptyDiv} />
          </main>
          <div className={styles.imageGrid}>
            {imageArray.map((imageElement, index) => {
              return (
                <div
                  className={`${imageElement[1]} ${styles.imageWrapper}`}
                  key={`${projectName} Image ${Number(index) + 1}`}
                >
                  <Image
                    src={imageElement[0]}
                    fill
                    className={styles.desktopImage}
                    alt={`${projectName} Image ${Number(index) + 1}`}
                    onClick={() => handleImageClick(imageElement[0])}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className={styles.topContainerMobile}>
        <Link href={`/projects/${type}`}>
          <Image src={brownArrow} className={styles.goBack} alt="goBackArrow" />
        </Link>
        <div className={styles.bodyContainer}>
          <main className={styles.mainContainer}>
            <div
              className={`${styles.breadCrumbMenu} ${juliusSansOne.className}`}
            >
              <Link href="/" className={styles.breadCrumbLink}>
                HOME
              </Link>{" "}
              <Image src={breadCrumbArrow} alt="bread crumb menu arrow" />
              <Link href="/projects" className={styles.breadCrumbLink}>
                PROJECTS{" "}
              </Link>
              <Image src={breadCrumbArrow} alt="bread crumb menu arrow" />
              <Link
                href={`/projects/${type}`}
                className={styles.breadCrumbLink}
              >
                {type}
              </Link>
              <Image src={breadCrumbArrow} alt="bread crumb menu arrow" />
              <span className={styles.active}>{projectName}</span>
            </div>
            <h1 className={`${styles.mainHeader} ${juliusSansOne.className}`}>
              {projectName}
            </h1>
            <p className={`${styles.location} ${juliusSansOne.className}`}>
              <span className={styles.locationText}>{location}</span>
              <span className={styles.locationText}>{configuration}</span>
              <span className={styles.locationText}>{area}</span>
            </p>
            <p className={styles.paragraph}>{mainParagraph}</p>
            <div className={styles.imageGrid1}>
              {[imageArray[0], imageArray[1], imageArray[5]].map(
                (imageElement, index) => {
                  return (
                    <Image
                      src={imageElement[0]}
                      className={imageElement[1]}
                      key={`${projectName} Image ${Number(index) + 1}`}
                      alt={`${projectName} Image ${Number(index) + 1}`}
                      onClick={() => handleImageClick(imageElement[0])}
                    />
                  );
                }
              )}
            </div>
            <h2 className={`${styles.subHeader} ${juliusSansOne.className}`}>
              DESIGN ASPECTS & KEY CONSIDERATIONS
            </h2>
            <ol className={styles.olMobile}>
              {designAspects.map((aspect, index) => {
                return (
                  <li
                    className={styles.paragraph}
                    key={`${projectName} Design Aspect ${Number(index) + 1}`}
                  >
                    {aspect}
                  </li>
                );
              })}
            </ol>
            <div className={styles.imageGrid2}>
              {[imageArray[2]].map((imageElement, index) => {
                return (
                  <Image
                    src={imageElement[0]}
                    className={imageElement[1]}
                    key={`${projectName} Image ${Number(index) + 1}`}
                    alt={`${projectName} Image ${Number(index) + 1}`}
                    onClick={() => handleImageClick(imageElement[0])}
                  />
                );
              })}
            </div>
            <h2 className={`${styles.subHeader} ${juliusSansOne.className}`}>
              SPATIAL DESIGN
            </h2>

            {spatialDesignText.map((text, index) => {
              return (
                <p
                  className={styles.paragraph}
                  key={`${projectName} Spatial Design Text ${
                    Number(index) + 1
                  }`}
                >
                  {text}
                </p>
              );
            })}
            <div className={styles.imageGrid3}>
              {[imageArray[3], imageArray[4]].map((imageElement, index) => {
                return (
                  <Image
                    src={imageElement[0]}
                    className={imageElement[1]}
                    key={`${projectName} Image ${Number(index) + 1}`}
                    alt={`${projectName} Image ${Number(index) + 1}`}
                    onClick={() => handleImageClick(imageElement[0])}
                  />
                );
              })}
            </div>

            {/* Pills/Tags */}
            {pillArray.map((pillText, index) => {
              return (
                <span
                  className={`${styles.pill} ${styles.nobreak} ${juliusSansOne.className}`}
                  key={`${projectName} Pill Text ${Number(index) + 1}`}
                >
                  {pillText}
                </span>
              );
            })}
            <div className={styles.emptyDiv} />
          </main>
        </div>

        <MobileFooter />
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

export default CuratingWarmth;
