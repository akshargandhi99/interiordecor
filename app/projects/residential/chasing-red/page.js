import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Link from "next/link";
import Image from "next/image";
import GoBack from "@/components/goBack/goBack";
import image1 from "@/public/chasing-red/1.webp";
import image2 from "@/public/chasing-red/2.webp";
import image3 from "@/public/chasing-red/3.webp";
import image4 from "@/public/chasing-red/4.webp";
import image5 from "@/public/chasing-red/5.webp";
import image6 from "@/public/chasing-red/6.webp";
import image7 from "@/public/chasing-red/7.webp";
import image8 from "@/public/chasing-red/8.webp";
import detailedData from "@/data/detailedPages.json";

const ChasingRed = () => {
  const projectName = "Chasing Red";
  const imageArray = [
    [image1, styles.gridImage1],
    [image2, styles.gridImage2],
    [image3, styles.gridImage3],
    [image4, styles.gridImage4],
    [image5, styles.gridImage5],
    [image6, styles.gridImage6],
    [image7, styles.gridImage7],
    [image8, styles.gridImage8],
  ];

  const type = detailedData[projectName].type;
  const location = detailedData[projectName].location;
  const configuration = detailedData[projectName].configuration;
  const area = detailedData[projectName].area;
  const pillArray = detailedData[projectName].pillArray;
  const designAspects = detailedData[projectName].designAspects;
  const spatialDesignText = detailedData[projectName].spatialDesignText;
  const mainParagraph = detailedData[projectName].mainParagraph;

  return (
    <div className={styles.fullContainer}>
      <div className={styles.topContainer}>
        <GoBack href={`/projects/${type}`} top={10} left={50} />
        <div className={styles.bodyContainer}>
          <main className={styles.mainContainer}>
            <div
              className={`${styles.breadCrumbMenu} ${juliusSansOne.className}`}
            >
              <Link href="/" className={styles.breadCrumbLink}>
                HOME
              </Link>{" "}
              <span className={styles.breadCrumbArrow}>▶</span> PROJECTS{" "}
              <span className={styles.breadCrumbArrow}>▶</span>{" "}
              <Link
                href={`/projects/${type}`}
                className={styles.breadCrumbLink}
              >
                {type}
              </Link>
              <span className={styles.breadCrumbArrow}>▶</span>{" "}
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
          </main>
          <div className={styles.imageGrid}>
            {imageArray.map((imageElement, index) => {
              return (
                <Image
                  src={imageElement[0]}
                  className={imageElement[1]}
                  key={`${projectName} Image ${Number(index) + 1}`}
                  alt={`${projectName} Image ${Number(index) + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChasingRed;
