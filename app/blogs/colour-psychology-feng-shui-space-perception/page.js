import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogPages.json";
import blogImage from "@/public/static/blogDetailed4.webp";
import MobileFooter from "@/components/mobileFooter/mobileFooter";
import brownArrow from "@/public/static/backArrowBrown.svg";

const ColourPsychologyBlog = () => {
  const blogName = "Colour Psychology & Feng Shui: Space perception";
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
            <li className={styles.header}>
              Warm Colours: Red, Orange, and Yellow
            </li>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Psychological Impact:{" "}
                  </span>
                  Warm colours evoke feelings of warmth, energy, and positivity.
                  They can make a space feel cozy and inviting but can also
                  visually reduce the size of a room.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Feng Shui Tips:{" "}
                  </span>
                  Use warm colours to activate energy and stimulate social
                  interactions.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>Use in Rooms: </span>
                </p>
                <ul>
                  <li className={styles.blogSubPoint}>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Living Rooms and Dining Areas:{" "}
                      </span>
                      Red and orange can make these spaces feel more vibrant and
                      intimate. Use them sparingly, perhaps as accent walls or
                      in furnishings, to avoid overwhelming the space.
                    </p>
                  </li>
                  <li className={styles.blogSubPoint}>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>Kitchens: </span>
                      Yellow can create a cheerful and welcoming atmosphere,
                      perfect for spaces where people gather and prepare food.
                      In Feng Shui, yellow represents health and nourishment.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>

            <div className={styles.pointContainer}>
              <li className={styles.header}>
                Cool Colours: Blue, Green, and Purple
              </li>
              <ul className={styles.blogBullet}>
                <li>
                  <p className={styles.blogPara}>
                    <span className={styles.blogPointHeader}>
                      Psychological Impact:{" "}
                    </span>
                    Cool colours are calming, soothing, and can create a sense
                    of tranquility and space. They can make a room feel more
                    expansive and open.
                  </p>
                </li>

                <li>
                  <p className={styles.blogPara}>
                    <span className={styles.blogPointHeader}>
                      Feng Shui Tips:{" "}
                    </span>
                    Blue and green are associated with growth and harmony,
                    making them ideal for spaces intended for relaxation and
                    rejuvenation.
                  </p>
                </li>

                <li>
                  <p className={styles.blogPara}>
                    <span className={styles.blogPointHeader}>
                      Use in Rooms:{" "}
                    </span>
                  </p>
                  <ul>
                    <li className={styles.blogSubPoint}>
                      <p className={styles.blogPara}>
                        <span className={styles.blogPointHeader}>
                          Bedrooms:{" "}
                        </span>
                        Soft blues and greens are ideal for creating a peaceful
                        and restful environment, promoting better sleep. In Feng
                        Shui, green is linked to renewal and growth.
                      </p>
                    </li>
                    <li className={styles.blogSubPoint}>
                      <p className={styles.blogPara}>
                        <span className={styles.blogPointHeader}>
                          Bathrooms:{" "}
                        </span>
                        Light blue and green hues can make bathrooms feel clean,
                        fresh, and serene, enhancing the perception of
                        cleanliness and space.
                      </p>
                    </li>
                    <li className={styles.blogSubPoint}>
                      <p className={styles.blogPara}>
                        <span className={styles.blogPointHeader}>
                          Home Offices:{" "}
                        </span>
                        Shades of blue and green can enhance concentration and
                        productivity. Blue in Feng Shui is associated with calm
                        and communication.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>
              Neutral Colours: White, Grey, and Beige
            </li>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Psychological Impact:{" "}
                  </span>
                  Neutral colours provide a sense of balance, simplicity, and
                  sophistication. They can make spaces appear larger and more
                  open.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Feng Shui Tips:{" "}
                  </span>
                  Neutral colours create a grounding and stable environment,
                  ideal for promoting peace and clarity.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>Use in Rooms: </span>
                </p>
                <ul>
                  <li className={styles.blogSubPoint}>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Living Spaces:{" "}
                      </span>
                      White and beige can create a clean, airy feel, making
                      small spaces look larger. They also serve as a great
                      backdrop for colourful accents. In Feng Shui, white
                      symbolises purity and clarity.
                    </p>
                  </li>
                  <li className={styles.blogSubPoint}>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>Bedrooms: </span>
                      Soft grey can create a calm and sophisticated atmosphere,
                      conducive to relaxation. Grey in Feng Shui represents
                      balance and neutrality.
                    </p>
                  </li>
                  <li className={styles.blogSubPoint}>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>Kitchens: </span>
                      White and grey can give a sleek, modern look, enhancing
                      the sense of cleanliness and space.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>
              Bold and Dark Colours: Black, Navy, and Deep Purple
            </li>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Psychological Impact:{" "}
                  </span>
                  Bold and dark colours can add drama, sophistication, and a
                  sense of depth. They can make a room feel more intimate and
                  cozy but may also shrink the perception of space.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Feng Shui Tips:{" "}
                  </span>
                  Use dark colors to ground a space and add depth, but balance
                  them with lighter hues to avoid creating a heavy atmosphere.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>Use in Rooms: </span>
                </p>
                <ul>
                  <li className={styles.blogSubPoint}>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Accent Walls:{" "}
                      </span>
                      Use dark colors on one wall to create a focal point
                      without overwhelming the room.
                    </p>
                  </li>
                  <li className={styles.blogSubPoint}>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Small Spaces:{" "}
                      </span>
                      In small rooms, dark colors can create a cozy, intimate
                      feel. Use them sparingly to avoid making the space feel
                      cramped. Black in Feng Shui represents wisdom and depth.
                    </p>
                  </li>
                  <li className={styles.blogSubPoint}>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Living Rooms:{" "}
                      </span>
                      Navy or deep purple can add elegance and depth, especially
                      when paired with lighter accents and furnishings. Purple
                      in Feng Shui is associated with wealth and prosperity.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>
              Vibrant Colours: Pink, Turquoise, and Lime Green
            </li>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Psychological Impact:{" "}
                  </span>
                  Vibrant colors are energizing and uplifting. They can add a
                  playful and dynamic feel to a room.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Feng Shui Tips:{" "}
                  </span>
                  Use vibrant colors to activate energy and bring life to a
                  space, especially in areas where creativity and activity are
                  desired.
                </p>
              </li>

              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>Use in Rooms: </span>
                </p>
                <ul>
                  <li className={styles.blogSubPoint}>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Children’s Rooms:{" "}
                      </span>
                      Bright pinks, blues, and greens can create a fun and
                      stimulating environment for kids. Pink in Feng Shui
                      represents love and nurturing.
                    </p>
                  </li>
                  <li className={styles.blogSubPoint}>
                    <p className={styles.blogPara}>
                      <span className={styles.blogPointHeader}>
                        Home Offices and Creative Spaces:{" "}
                      </span>
                      Vibrant colors can boost creativity and energy levels,
                      making these spaces more dynamic. Turquoise in Feng Shui
                      combines the calming properties of blue and the growth
                      aspects of green.
                    </p>
                  </li>
                </ul>
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

export default ColourPsychologyBlog;
