import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogPages.json";
import blogImage from "@/public/static/blogDetailed6.webp";

const ArtOfOpenLivingBlog = () => {
  const blogName = "Adaptive Reuse: Transforming Old Spaces into Modern Homes";
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
            <li className={styles.header}>
              Village Homes (Ranwar/Matharpacady)
            </li>
            <p className={styles.blogPara}>
              Charming old homes in these historic villages have been given a
              modern twist:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Preserved Architecture:{" "}
                  </span>
                  The unique Portuguese-style houses have been preserved,
                  maintaining their historic façade.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Modern Interiors:{" "}
                  </span>
                  Cafes,Restaurants and homes are spaces with a blend of
                  old-world charm and modern comfort.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>Ballard Estate Warehouses</li>
            <p className={styles.blogPara}>
              The old warehouses and factories in Ballard Estate have found new
              life as commercial spaces:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Industrial Aesthetic:{" "}
                  </span>
                  Exposed brick walls, wooden beams, and high ceilings retain
                  the industrial character, while large windows bring in natural
                  light.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Modern Comforts:{" "}
                  </span>
                  These spaces are equipped with modern concept stores and
                  sometimes even cafes and restaurants.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>Studios: </span>
                  Many of these spaces have also been transformed into studios
                  and offices, fostering a vibrant community of entrepreneurs.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>Worli Sea Face Bungalows</li>
            <p className={styles.blogPara}>
              Historic bungalows along Worli Sea Face have been converted into
              luxurious residences with stunning sea views:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Heritage Conservation:{" "}
                  </span>
                  Original facades and architectural elements are sometimes
                  preserved to maintain the historic value.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Contemporary Interiors:{" "}
                  </span>
                  Inside, these homes boast sleek, modern design with open floor
                  plans, minimalist decor, and high-end finishes.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Eco-Friendly Updates:{" "}
                  </span>
                  Many of these bungalows incorporate sustainable practices like
                  rainwater harvesting and energy-efficient systems, making them
                  environmentally friendly.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>Chawls to Apartments</li>
            <p className={styles.blogPara}>
              The iconic chawls of Mumbai, known for their close-knit
              communities, are being transformed into apartment style living
              spaces:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Community Spirit:{" "}
                  </span>
                  While the buildings are updated to modern standards, the
                  communal courtyards and balconies that encourage neighbourly
                  interactions are retained.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Cultural Blend:{" "}
                  </span>
                  Traditional Indian elements are incorporated into the decor,
                  creating a unique blend of old and new.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>
              Old Mills to Modern Apartments & Malls
            </li>
            <p className={styles.blogPara}>
              The textile mills in areas like Lower Parel have been repurposed
              into apartments and commercial hubs:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>Societies: </span>
                  Modern societies on the land with amenities such as swimming
                  pools, gyms, and rooftop gardens provide residents with a
                  luxurious lifestyle.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Vibrant Neighbourhoods:{" "}
                  </span>
                  The areas around these old mills have transformed into
                  bustling neighbourhoods with cafes, restaurants, and shopping
                  centres, enhancing urban living.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Restored Elements:{" "}
                  </span>
                  Phoenix Mills, Kamala Mills and many more still have some
                  restored elements from the old mills.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>The Royal Opera House</li>
            <p className={styles.blogPara}>
              A grand venue for performances, the Royal Opera House has been
              meticulously restored and repurposed:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Architectural Details:{" "}
                  </span>
                  Original features like ornate mouldings and grand staircases
                  have been preserved, blending seamlessly with modern
                  amenities.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Community Space:{" "}
                  </span>
                  The opera house still serves as a cultural hub, hosting events
                  and exhibitions, bringing new life to the historic site.
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
    </div>
  );
};

export default ArtOfOpenLivingBlog;
