import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogPages.json";
import blogImage from "@/public/static/blogDetailed3.webp";
import MobileFooter from "@/components/mobileFooter/mobileFooter";

const BiopilicDesignBlog = () => {
  const blogName = "Biophilic Design: Bringing Nature Indoors";
  const mainHeader = blogData[blogName].mainHeader;
  const subHeader = blogData[blogName].subHeader;
  const firstPara = blogData[blogName].firstPara;
  const conclusion = blogData[blogName].conclusion;
  const pillArray = blogData[blogName].pillArray;

  return (
    <div className={styles.mainContainer}>
      <Link href="/blogs">
        <span className={`${styles.goBack} ${juliusSansOne.className}`}>
          🡠 GO BACK
        </span>
        <span className={`${styles.goBackMobile} ${juliusSansOne.className}`}>
          🡠
        </span>
      </Link>
      <div className={styles.blogContainer}>
        <h1 className={`${styles.mainHeader} ${juliusSansOne.className}`}>
          {mainHeader}
        </h1>
        <div className={styles.subHeader}>{subHeader}</div>
        <p className={styles.firstPara}>{firstPara}</p>
        <Image src={blogImage} className={styles.blogImage} alt="blogImage" />
        <ol className={`${styles.grid} ${juliusSansOne.className}`}>
          {/* Different for each blog */}
          <div className={styles.pointContainer}>
            <li className={styles.header}>Indoor Plants</li>
            <p className={styles.blogPara}>
              Incorporating plants is the simplest way to introduce nature into
              your home:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  Houseplants like snake plants, spider plants, and pothos are
                  not only easy to maintain but also purify the air.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Vertical gardens or living walls can add greenery without
                  taking up floor space, perfect for compact Mumbai apartments.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Hanging planters and terrariums can create a lush, green
                  environment even in the smallest of spaces.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>Natural Light</li>
            <p className={styles.blogPara}>
              Maximise the natural light in your home to create a bright and
              airy atmosphere:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  Sheer curtains allow light to filter through while maintaining
                  privacy.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Mirrors strategically placed opposite windows can reflect
                  light and make rooms feel larger and more open.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>Water Features</li>
            <p className={styles.blogPara}>
              Incorporate water elements to add a sense of tranquility and calm:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  Indoor table fountains can create soothing sounds that drown
                  out the city noise.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Tabletop water features are compact and can be placed in
                  living rooms or offices to promote relaxation.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Sound system with waterfall or rainfall sound helps in
                  creating a soothing atmosphere.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>Nature-Inspired Decor</li>
            <p className={styles.blogPara}>
              Incorporate decor elements that reflect nature:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  Nature-themed artwork and photographs can bring scenic
                  landscapes and greenery into your home visually.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Botanical prints on cushions, rugs, and curtains can add a
                  touch of nature to your interiors.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Natural colours like greens, browns, and blues can create a
                  calming, nature-inspired palette.
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.pointContainer}>
            <h2 className={`${styles.header} ${juliusSansOne.className}`}>
              Conclusion
            </h2>
            <p className={styles.conclusion}>{conclusion}</p>
            <div className={styles.pillContainer}>
              {/* Pills/Tags */}
              {pillArray.map((pillText, index) => {
                return (
                  <span
                    className={`${styles.pill} ${styles.nobreak} ${juliusSansOne.className}`}
                    key={`${blogName} Pill Text ${Number(index) + 1}`}
                  >
                    {pillText}
                  </span>
                );
              })}
            </div>
          </div>
        </ol>
      </div>
      <MobileFooter />
    </div>
  );
};

export default BiopilicDesignBlog;
