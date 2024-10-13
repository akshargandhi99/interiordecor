import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogPages.json";
import blogImage from "@/public/static/blogDetailed1.webp";
import MobileFooter from "@/components/mobileFooter/mobileFooter";

const SustainableDesignBlog = () => {
  const blogName = "Sustainable Interior Design: Materials and Practices";
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
            <li className={styles.header}>Eco-Friendly Materials</li>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Recycled and Upcycled Materials:{" "}
                  </span>
                  Incorporate materials like reclaimed wood, recycled glass, and
                  repurposed metals. These materials not only reduce waste but
                  also add unique character to your interiors.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>Bamboo: </span>A
                  highly renewable resource, bamboo is a great alternative for
                  flooring, cabinetry, and furniture. It grows quickly and
                  requires minimal resources.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>Cork: </span>
                  Harvested from the bark of cork oak trees without harming the
                  tree, cork is a sustainable option for flooring and wall
                  coverings. It’s also naturally insulating and durable.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Low-VOC Paints{" "}
                  </span>
                  Traditional paints often contain volatile organic compounds
                  (VOCs) that can harm indoor air quality. Opt for low-VOC or
                  zero-VOC paints to ensure a healthier living environment.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>Energy-Efficient Practices</li>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>LED Lighting: </span>
                  LED bulbs use up to 80% less energy than traditional
                  incandescent bulbs and have a longer lifespan, reducing both
                  energy consumption and waste.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Smart Cooling:{" "}
                  </span>
                  A Install smart cooling systems to optimise cooling, reducing
                  energy usage and lowering utility bills. These devices learn
                  your habits and adjust settings accordingly.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Natural Ventilation:{" "}
                  </span>
                  Design with natural airflow in mind to reduce reliance on air
                  conditioning. Strategically placed windows and vents, can
                  enhance airflow and maintain comfortable temperatures.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>Sustainable Furniture and Decor</li>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Local and Artisan Goods:{" "}
                  </span>
                  Support local artisans and businesses by choosing locally made
                  furniture and decor. This not only reduces the carbon
                  footprint associated with transportation but also promotes
                  regional craftsmanship.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Durable and Timeless Designs:{" "}
                  </span>
                  Invest in high-quality, timeless pieces that will last for
                  years rather than opting for fast furniture that may need
                  frequent replacement. This approach reduces waste and the
                  demand for new resources.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>Water Conservation</li>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Low-Flow Fixtures:{" "}
                  </span>
                  Install low-flow faucets, shower-heads, and toilets to reduce
                  water usage without sacrificing performance. These fixtures
                  can significantly decrease your household&apos;s water
                  consumption.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Rainwater Harvesting:{" "}
                  </span>
                  Consider implementing a simple rainwater collection system for
                  plants and other non-potable uses. This practice helps
                  conserve potable water and reduces runoff.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>Indoor Air Quality</li>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Natural Fibers:{" "}
                  </span>
                  Choose furnishings and textiles made from natural fibers like
                  organic cotton, wool, or hemp. These materials are often less
                  processed and free from harmful chemicals.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Air-Purifying Plants:{" "}
                  </span>
                  Integrate plants like spider plants, snake plants, and peace
                  lilies into your design. These plants help improve indoor air
                  quality by filtering out pollutants and increasing oxygen
                  levels.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>Waste Reduction</li>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Modular and Multi-Functional Furniture:{" "}
                  </span>
                  Opt for modular furniture that can adapt to different needs
                  and spaces, reducing the need for multiple pieces.
                  Multi-functional furniture, like a sofa bed or expandable
                  dining table, also maximises utility while minimising clutter.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Repurposing and Upcycling:{" "}
                  </span>
                  Get creative with DIY projects to repurpose old furniture or
                  decor items. Upcycling gives new life to items that might
                  otherwise be discarded, reducing waste and adding a personal
                  touch to your home.
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

export default SustainableDesignBlog;
