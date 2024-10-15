import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogPages.json";
import blogImage from "@/public/static/blogDetailed2.webp";
import MobileFooter from "@/components/mobileFooter/mobileFooter";
import brownArrow from "@/public/static/backArrowBrown.svg";

const ArtOfOpenLivingBlog = () => {
  const blogName = "Art of Open-Concept Living: Balancing Privacy and Space";
  const mainHeader = blogData[blogName].mainHeader;
  const subHeader = blogData[blogName].subHeader;
  const firstPara = blogData[blogName].firstPara;
  const conclusion = blogData[blogName].conclusion;
  const pillArray = blogData[blogName].pillArray;

  return (
    <div className={styles.mainContainer}>
      <Link href="/blogs">
        <span className={`${styles.goBack} ${juliusSansOne.className}`}>
          <Image
            src={brownArrow}
            className={styles.goBackArrow}
            alt="goBackArrow"
          />
          &nbsp;GO BACK
        </span>
        <Image
          src={brownArrow}
          className={styles.goBackMobile}
          alt="goBackArrow"
        />
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
            <li className={styles.header}>Benefits of Open-Concept Living</li>
            <ul className={styles.blogBullet}>
              <li className={styles.bulletPoint}>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Enhanced Social Interaction:{" "}
                  </span>
                  Open-concept layouts facilitate communication and interaction
                  among family members and guests. It’s easier to entertain,
                  cook, and socialise simultaneously without the barriers of
                  walls.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Increased Natural Light:{" "}
                  </span>
                  Without interior walls blocking windows, natural light can
                  penetrate deeper into the space, making it brighter and more
                  inviting.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Flexibility and Versatility:{" "}
                  </span>
                  Open spaces are highly adaptable. Furniture arrangements can
                  be easily modified to accommodate different activities and
                  needs.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Improved Aesthetics:{" "}
                  </span>
                  A unified space can appear larger and more cohesive, offering
                  a modern and streamlined aesthetic.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>Challenges of Open-Concept Living</li>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Lack of Privacy:{" "}
                  </span>
                  The absence of walls can lead to a lack of privacy, making it
                  difficult to have quiet, personal spaces.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Noise Control:{" "}
                  </span>
                  Sound travels more easily in open spaces, which can be
                  disruptive when multiple activities are happening
                  simultaneously.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Zoning and Organization:{" "}
                  </span>
                  Defining and organizing different functional areas within an
                  open space can be challenging.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Indian Cooking:{" "}
                  </span>
                  Despite having windows and a chimney, the aromas of Indian
                  cooking can spread throughout the space.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>
              Strategies for Balancing Privacy and Space
            </li>
            <ol className={styles.orderedList}>
              <li>
                <span className={styles.subpoint}>
                  Use of Furniture to Define Zones:
                </span>
                <ul className={styles.blogBullet}>
                  <li>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Furniture Placement:{" "}
                      </span>
                      Arrange sofas, chairs, and tables to create distinct areas
                      within the open space. For example, a sofa or console can
                      act as a divider between the living and dining areas.
                    </p>
                  </li>
                  <li>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Rugs and Carpets:{" "}
                      </span>
                      Use rugs to delineate different zones. A large rug under
                      the dining table can clearly define the dining area, while
                      another can anchor the living space.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <span className={styles.subpoint}>
                  Incorporating Partial Walls and Room Dividers:
                </span>
                <ul className={styles.blogBullet}>
                  <li>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Half-Walls:{" "}
                      </span>
                      Install half-walls or pony walls to separate areas without
                      completely closing them off.
                    </p>
                  </li>
                  <li>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Bookcases and Shelving Units:{" "}
                      </span>
                      Tall bookcases and open shelving can act as room dividers
                      while providing storage and display space.
                    </p>
                  </li>
                  <li>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Screens and Curtains:{" "}
                      </span>
                      Use decorative screens or curtains to create flexible,
                      temporary divisions that can be adjusted as needed.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <span className={styles.subpoint}>
                  Strategic Use of Lighting:
                </span>
                <ul className={styles.blogBullet}>
                  <li>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Layered Lighting:{" "}
                      </span>
                      Implement different lighting fixtures for each zone, such
                      as pendant lights over the dining table, floor lamps in
                      the living area, and technical lighting in the kitchen.
                      This helps define each space and adds to the
                      functionality.
                    </p>
                  </li>
                  <li>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Accent Lighting:{" "}
                      </span>
                      Use accent lighting to highlight specific areas or
                      features, creating visual separation and enhancing the
                      ambiance.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <span className={styles.subpoint}>
                  Creating Visual Boundaries with Design Elements:
                </span>
                <ul className={styles.blogBullet}>
                  <li>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Colour Schemes:{" "}
                      </span>
                      Employ different colour schemes or accent walls for
                      various zones to create visual boundaries.
                    </p>
                  </li>
                  <li>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Materials and Textures:{" "}
                      </span>
                      Use varying materials and textures, such as a different in
                      the kitchen area and wooden panels in the living area, to
                      differentiate spaces.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <span className={styles.subpoint}>
                  Incorporating Sliding Doors and Partitions:
                </span>
                <ul className={styles.blogBullet}>
                  <li>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Pocket Doors:{" "}
                      </span>
                      Install sliding pocket doors that can be closed for
                      privacy or opened to maintain an open-concept feel.
                    </p>
                  </li>
                  <li>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Glass Partitions:{" "}
                      </span>
                      Glass partitions or sliding glass doors offer separation
                      while maintaining a sense of openness and allowing light
                      to flow through.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <span className={styles.subpoint}>Acoustic Solutions:</span>
                <ul className={styles.blogBullet}>
                  <li>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Sound-Absorbing Materials:{" "}
                      </span>
                      Use rugs, curtains, upholstered furniture, and acoustic
                      panels to absorb sound and reduce noise levels if
                      absolutely necessary.
                    </p>
                  </li>
                  <li>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Strategic Placement of Sound Sources:{" "}
                      </span>
                      Place noisy appliances and activities away from quiet
                      zones to minimize disruption.
                    </p>
                  </li>
                </ul>
              </li>
            </ol>
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

export default ArtOfOpenLivingBlog;
