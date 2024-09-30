import { juliusSansOne } from "../fonts";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import MobileFooter from "@/components/mobileFooter/mobileFooter";
import GoBack from "@/components/goBack/goBack";

import icon1 from "@/public/spatial-design/1.webp";
import icon2 from "@/public/spatial-design/2.webp";
import icon3 from "@/public/spatial-design/3.webp";
import icon4 from "@/public/spatial-design/4.webp";
import icon5 from "@/public/spatial-design/5.webp";
import icon6 from "@/public/spatial-design/6.webp";
import icon7 from "@/public/spatial-design/7.webp";
import icon8 from "@/public/spatial-design/8.webp";
import icon9 from "@/public/spatial-design/9.webp";
import icon10 from "@/public/spatial-design/10.webp";
import icon11 from "@/public/spatial-design/11.webp";
import icon12 from "@/public/spatial-design/12.webp";
import icon13 from "@/public/spatial-design/13.webp";

import designProcessSVG from "@/public/spatial-design/designProcess.svg";
import designProcessMobileSVG from "@/public/spatial-design/designProcessMobile.svg";
import ourPrinciples from "@/public/spatial-design/Our Principles.svg";
import ourPrinciplesMobile from "@/public/spatial-design/Our Principles Mobile.svg";

const SpatialDesign = () => {
  // const iconArray = [
  //   [icon1, "User Centric Approach", styles.icon1],
  //   [icon2, "Efficient Use of Square Footage", styles.icon2],
  //   [icon3, "Maximising Client Involvement", styles.icon3],
  //   [icon4, "Vastu & Other Cultural Aspects", styles.icon4],
  //   [icon5, "Budget Management", styles.icon5],
  //   [
  //     icon6,
  //     "Detailed Planning of Layouts Space Flexibility & Adaptability",
  //     styles.icon6,
  //   ],
  //   [icon7, "Daily Routines Study", styles.icon7],
  //   [icon8, "Informal Approach", styles.icon8],
  //   [icon9, "Detailed Movement & Flow Study", styles.icon9],
  //   [icon10, "Professional Collaborations", styles.icon10],
  //   [icon11, "Eco Conscious", styles.icon11],
  //   [icon12, "Style & Aesthetic Integration", styles.icon12],
  //   [icon13, "Feedback Loop", styles.icon13],
  // ];
  return (
    <div className={styles.fullContainer}>
      <Link href="/">
        <span className={`${styles.goBack} ${juliusSansOne.className}`}>
          🡠 GO BACK
        </span>
        <span className={`${styles.goBackMobile} ${juliusSansOne.className}`}>
          🡠
        </span>
      </Link>
      <h2 className={`${styles.header1} ${juliusSansOne.className}`}>
        WHAT IS SPATIAL DESIGN?
      </h2>
      <p className={styles.paragraph}>
        We all have heard many interior designers talking about the
        functionality of a space. But have we ever studied how people use
        spaces? Have we ever gone in the depths of studying peoples’ daily
        activities and flow patterns?
      </p>
      <p className={styles.paragraph}>
        The whole idea is to keep people at the heart of design. Being able to
        design interactions among people, between people and natural elements
        like sunlight and wind, between people and objects and in the end
        creating a relationship between people, architecture, landscape and
        interior.
      </p>

      <h2 className={`${styles.headers} ${juliusSansOne.className}`}>
        WHAT IS AVSDS ALL ABOUT?
      </h2>
      <p className={styles.paragraph}>
        For us, it is vital to understand each end user’s circulation patterns
        in their private space as well as the shared spaces. We believe in
        thoughtfully designing each space, nook and wall, which in turn helps us
        delivery value to any space. This ensures a positive influence on the
        client’s day to day life. Other than this, it is also important to
        understand how their needs and wants can evolve in the future, ensuring
        us to design a space that can be accommodative.
      </p>

      {/* Our Principles */}
      <Image
        src={ourPrinciples}
        className={styles.ourPrinciplesImage}
        alt="Our Principles"
      />

      <h2
        className={`${styles.headers} ${styles.mobilePrincipleContainer} ${juliusSansOne.className}`}
      >
        OUR PRINCIPLES
      </h2>
      <p className={`${styles.paragraph} ${styles.mobilePrinciplePara}`}>
        Our design principles are rooted in the belief that spaces should be not
        merely functional but also evocative, reflecting the unique personality
        and aspirations of our clients, where every line, curve, and texture
        tells a story of opulence and refinement, transforming houses into homes
        that are not just aesthetically pleasing but also emotionally resonant
        and functionally efficient.
      </p>
      <div
        className={`${styles.mobilePrincipleContainer} ${styles.ourPrinciplesMobileImage}`}
      >
        <Image
          src={ourPrinciplesMobile}
          className={styles.ourPrinciplesMobileImage}
          alt="Our Principles"
        />
      </div>
      {/* <div className={styles.iconGrid}>
        <div className={styles.invisibleContainer}>
          <div className={styles.principleContainer}>
            <h2
              className={`${styles.principleHeader} ${juliusSansOne.className}`}
            >
              OUR PRINCIPLES
            </h2>
            <p className={styles.principleParagraph}>
              Our design principles are rooted in the belief that spaces should
              be not merely functional but also evocative, reflecting the unique
              personality and aspirations of our clients, where every line,
              curve, and texture tells a story of opulence and refinement,
              transforming houses into homes that are not just aesthetically
              pleasing but also emotionally resonant and functionally efficient.
            </p>
          </div>
          <div className={styles.emptyDiv1} />
        </div>
        {iconArray.map((iconElement, index) => {
          if (index === 8) {
            return (
              <Fragment key={`Spatial Design Icon ${index}`}>
                <div className={styles.iconContainer}>
                  <div className={styles.emptyDiv2}></div>
                </div>

                <div className={styles.iconContainer}>
                  <Image
                    src={iconElement[0]}
                    className={styles.icon}
                    alt="Icon"
                  />
                  <p className={styles.iconText}>{iconElement[1]}</p>
                </div>
              </Fragment>
            );
          }
          return (
            <div
              key={`Spatial Design Icon ${index}`}
              className={styles.iconContainer}
            >
              <Image src={iconElement[0]} className={styles.icon} alt="Icon" />
              <p className={styles.iconText}>{iconElement[1]}</p>
            </div>
          );
        })}
      </div> */}

      {/* <h2 className={`${styles.headers} ${juliusSansOne.className}`}>
        INDUSTRY HIGHLIGHTS
      </h2>
      <div className={styles.industryContainer}>
        <div className={styles.threePoints}>
          <div className={styles.industryPoint}>
            <hr className={styles.pointLine} />
            <span className={styles.industryTitle}>20+</span>
            <span
              className={`${styles.industrySubTitle} ${juliusSansOne.className}`}
            >
              CLIENTS
            </span>
          </div>
          <div className={styles.industryPoint}>
            <hr className={styles.pointLine} />
            <span className={styles.industryTitle}>
              BACHELORS IN ARCHITECTURE
            </span>
            <span
              className={`${styles.industrySubTitle} ${juliusSansOne.className}`}
            >
              INDIA
            </span>
          </div>
          <div className={styles.industryPoint}>
            <hr className={styles.pointLine} />
            <span className={styles.industryTitle}>
              MASTERS IN INTERIOR DESIGN
            </span>
            <span
              className={`${styles.industrySubTitle} ${juliusSansOne.className}`}
            >
              ITALY
            </span>
          </div>
        </div>
        <div className={styles.verticalLine} />
        <div className={styles.threePoints}>
          <div className={styles.industryPoint}>
            <hr className={styles.pointLine} />
            <span className={styles.industryTitle}>YOUNG & DRIVEN</span>
            <span
              className={`${styles.industrySubTitle} ${juliusSansOne.className}`}
            >
              ARCHITECT & INTERIOR DESIGNER
            </span>
          </div>
          <div className={styles.industryPoint}>
            <hr className={styles.pointLine} />
            <span className={styles.industryTitle}>USER CENTRIC</span>
            <span
              className={`${styles.industrySubTitle} ${juliusSansOne.className}`}
            >
              PUTTING PEOPLE AT THE HEART OF DESIGN
            </span>
          </div>
          <div className={styles.industryPoint}>
            <div className={styles.pointLine} />
            <span className={styles.industryTitle}>MULTIPLE PARTNERSHIPS</span>
            <span
              className={`${styles.industrySubTitle} ${juliusSansOne.className}`}
            >
              VENDORS & COLLABORATORS
            </span>
          </div>
        </div>
      </div> */}

      <h2 className={`${styles.headers} ${juliusSansOne.className}`}>
        OUR PHILOSOPHY
      </h2>
      <p className={styles.paragraph}>
        All the above will be done with the help the family members the space is
        intended for. Yes, all clients want to be involved in the design
        process, and we designers hesitate to give them the reins. But at AVSDS,
        we ensure that the role played by the client is of the highest value,
        allowing them to open themselves to us by sharing their desires, wants
        and needs and not just their requirements.
      </p>
      <p className={styles.paragraph}>
        The same will not be done through an interview or endless meetings, but
        in informal settings like cafes, art and clay workshops, galleries, the
        end user’s current home and so on. This will ensure that we understand
        their personality, their way of living, their lifestyle, their likes and
        dislikes and so much more rather than just understanding their
        requirements and what pleases them aesthetically, which leads to
        designing their homes as a standard market practice.
      </p>
      <h2 className={`${styles.headers} ${juliusSansOne.className}`}>
        OUR DESIGN PROCESS
      </h2>
      <div className={styles.designProcessContainer}>
        <Image
          src={designProcessSVG}
          className={styles.designProcessSVG}
          alt="Design Process"
        />
        <Image
          src={designProcessMobileSVG}
          className={styles.designProcessMobileSVG}
          alt="Design Process Mobile"
        />
        {/* <span className={styles.designProcessTitle}>DESIGN PROCESS</span> */}
      </div>
      <MobileFooter />
    </div>
  );
};

export default SpatialDesign;
