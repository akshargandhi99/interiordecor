import styles from "./page.module.css";

import { Fragment } from "react";
import { juliusSansOne } from "@/app/fonts";
import Link from "next/link";
import Image from "next/image";
import MobileFooter from "@/components/mobileFooter/mobileFooter";
import brownArrow from "@/public/static/backArrowBrown.svg";

import blogImage1 from "@/public/static/blogDetailed1.webp";
import blogImage2 from "@/public/static/blog 2.webp";
import blogImage3 from "@/public/static/blogDetailed3.webp";
import blogImage4 from "@/public/static/blog 4.webp";
import blogImage5 from "@/public/static/blog 5.webp";
import blogImage6 from "@/public/static/blog 6.webp";
import blogImage7 from "@/public/static/blog 7.webp";
import blogImage8 from "@/public/static/blog 8.webp";

const Blog = () => {
  const blogImages = [
    blogImage1,
    blogImage2,
    blogImage3,
    blogImage4,
    blogImage5,
    blogImage6,
    blogImage7,
    blogImage8,
  ];

  const blogLinks = [
    "/blogs/sustainable-interior-design-materials-and-practices",
    "/blogs/the-art-of-open-concept-living-balancing-privacy-and-space",
    "/blogs/biophilic-design-bringing-nature-indoors",
    "/blogs/colour-psychology-feng-shui-space-perception",
    "/blogs/cultural-influences-in-interior-design-global-styles-and-trends",
    "/blogs/adaptive-reuse-transforming-old-spaces-into-modern-home",
    "/blogs/maximising-spaces-design-solutions-mumbai-apartments",
    "/blogs/child-friendly-interiors-designing-safe-and-fun-spaces-for-kids",
  ];

  const blogDescriptions = [
    "Sustainable Interior Design: Materials and Practices",
    "The Art of Open-Concept Living: Balancing Privacy and Space",
    "Biophilic Design: Bringing Nature Indoors",
    "Colour Psychology & Feng Shui: Space perception",
    "Cultural Influences in Interior Design: Global Styles and Trends",
    "Adaptive Reuse: Transforming Old Spaces into Modern Homes",
    "Maximising Spaces: Design Solutions Mumbai Apartments",
    "Child-Friendly Interiors: Designing Safe and Fun Spaces for Kids",
  ];
  return (
    <div className={styles.mainContainer}>
      <Link href="/">
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
      <h2 className={`${styles.header} ${juliusSansOne.className}`}>
        LATEST BLOGS
      </h2>
      <div className={styles.mobileFooterContainer}>
        <div className={styles.blogFullContainer}>
          <div className={styles.blogContainer}>
            {blogImages.map((image, index) => {
              return (
                <Fragment key={`About Page Blog Image ${index + 1}`}>
                  <Link href={blogLinks[index]} className={styles.blogItem}>
                    <Image
                      src={image}
                      className={styles.blogImage}
                      alt={`Blog image ${index + 1}`}
                    />
                    <div className={styles.glassDescription}>
                      {blogDescriptions[index]}
                    </div>
                  </Link>
                </Fragment>
              );
            })}
          </div>
        </div>
        <MobileFooter />
      </div>
    </div>
  );
};

export default Blog;
