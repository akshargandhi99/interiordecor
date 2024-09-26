import styles from "./page.module.css";

import { Fragment } from "react";
import { juliusSansOne } from "@/app/fonts";
import GoBack from "@/components/goBack/goBack";
import Image from "next/image";

import blogImage1 from "@/public/static/blog 1.webp";
import blogImage2 from "@/public/static/blog 2.webp";
import blogImage3 from "@/public/static/blog 3.webp";
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
      <GoBack href="/" top={135} left={50} />
      <h2 className={`${styles.header} ${juliusSansOne.className}`}>
        LATEST BLOGS
      </h2>
      <div className={styles.blogFullContainer}>
        <div className={styles.blogContainer}>
          {blogImages.map((image, index) => {
            return (
              <Fragment key={`About Page Blog Image ${index + 1}`}>
                <div className={styles.blogItem}>
                  <Image
                    src={image}
                    className={styles.blogImage}
                    alt={`Blog image ${index + 1}`}
                  />
                  <div className={styles.glassDescription}>
                    {blogDescriptions[index]}
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
