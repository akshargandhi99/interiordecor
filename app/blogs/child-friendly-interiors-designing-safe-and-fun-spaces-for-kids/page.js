import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogPages.json";
import blogImage from "@/public/static/blogDetailed8.webp";
import MobileFooter from "@/components/mobileFooter/mobileFooter";
import brownArrow from "@/public/static/backArrowBrown.svg";

const ChildFriendlyDesignBlog = () => {
  const blogName =
    "Child-Friendly Interiors: Designing Safe and Fun Spaces for Kids";
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
              Safety First: Child-Proofing Your Space
            </li>

            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Corner Protectors:{" "}
                  </span>
                  Install corner protectors on sharp furniture edges and
                  countertops to prevent injuries.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>Safety Locks: </span>
                  Use eco-friendly safety locks on cabinets and drawers to keep
                  hazardous items out of reach.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Outlet Covers:{" "}
                  </span>
                  Use childproof outlet covers to prevent electrical accidents.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Secure Furniture:{" "}
                  </span>
                  Anchor tall furniture and shelves to walls to prevent tipping
                  and accidents.
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.pointContainer}>
            <li className={styles.header}>Sustainable Furniture Choices</li>

            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Eco-Friendly Materials:{" "}
                  </span>
                  Choose furniture made from sustainable materials such as
                  reclaimed wood, bamboo, or recycled metal. Look for
                  certifications like FSC (Forest Stewardship Council) to ensure
                  responsible sourcing.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Non-Toxic Finishes:{" "}
                  </span>
                  Opt for furniture with non-toxic finishes and low-VOC
                  (volatile organic compounds) paints to ensure a healthier
                  indoor air quality.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Durability and Quality:{" "}
                  </span>
                  Invest in well-crafted, durable furniture that can withstand
                  the wear and tear of active children and reduce the need for
                  frequent replacements.
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.pointContainer}>
            <li className={styles.header}>
              Engaging and Eco-Friendly Play Areas
            </li>

            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Natural Play Materials:{" "}
                  </span>
                  Use natural materials like cotton, wool, and wood for toys and
                  play equipment. Avoid plastic toys, which can be harmful to
                  the environment and health.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Recycled and Upcycled Items:{" "}
                  </span>
                  Incorporate upcycled or recycled materials into play areas.
                  For example, use old wooden crates as toy storage or repurpose
                  cardboard boxes for creative play.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Soft Flooring:{" "}
                  </span>
                  Choose eco-friendly flooring options such as natural rubber or
                  cork, which are cushioned, durable, and sustainable.
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.pointContainer}>
            <li className={styles.header}>Educational and Sustainable Decor</li>

            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>Green Themes: </span>
                  Incorporate themes that promote environmental awareness, such
                  as nature, animals, or space. Use organic cotton bedding and
                  curtains with nature-inspired designs.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>Reusable Art: </span>
                  Use reusable or erasable art boards instead of disposable
                  materials. Encourage your child to create and display their
                  own artwork, fostering creativity and reducing waste.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>DIY Projects: </span>
                  Involve your child in DIY decor projects using recycled
                  materials. This can be a fun and educational activity that
                  promotes sustainability.
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.pointContainer}>
            <li className={styles.header}>
              Family-Friendly and Sustainable Spaces
            </li>

            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Flexible and Adaptable Designs:{" "}
                  </span>
                  Design spaces that can evolve with your child’s needs. Use
                  furniture that can be easily adjusted or repurposed to extend
                  its lifespan and reduce waste.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Inclusive Design:{" "}
                  </span>
                  Ensure that family spaces are accessible and sustainable for
                  all members. Consider features like energy-efficient
                  appliances and water-saving fixtures in shared areas.
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

export default ChildFriendlyDesignBlog;
