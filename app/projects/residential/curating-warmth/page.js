"use client";
import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Link from "next/link";
import Image from "next/image";
import image1 from "@/public/curating-warmth/1.webp";
import image2 from "@/public/curating-warmth/2.webp";
import image3 from "@/public/curating-warmth/3.webp";
import image4 from "@/public/curating-warmth/4.webp";
import image5 from "@/public/curating-warmth/5.webp";
import image6 from "@/public/curating-warmth/6.webp";

const CuratingWarmth = () => {
  return (
    <div className={styles.fullContainer}>
      <div className={styles.topContainer}>
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
                href="/projects/residential"
                className={styles.breadCrumbLink}
              >
                RESIDENTIAL
              </Link>
              <span className={styles.breadCrumbArrow}>▶</span>{" "}
              <span className={styles.active}>CURATING WARMTH</span>
            </div>
            <h1 className={`${styles.mainHeader} ${juliusSansOne.className}`}>
              CURATING WARMTH
            </h1>
            <p className={`${styles.location} ${juliusSansOne.className}`}>
              <span className={styles.locationText}>
                Location: Mumbai - Dadar
              </span>
              <span className={styles.locationText}>
                Configuration: 3BHK converted to a 2BHK
              </span>
              <span className={styles.locationText}>Area: 1300 sq ft</span>
            </p>
            <p className={styles.paragraph}>
              An inviting contemporary home for a family of four, with the brief
              of creating open, communal spaces that promote family
              togetherness. Strategically placed seating maximising views,
              bringing the beauty of the outdoors inside for everyone to enjoy.
              The design emphasises on minimalism with uncluttered spaces,
              ensuring fewer distractions and a peaceful environment.
            </p>
            <h2 className={`${styles.subHeader} ${juliusSansOne.className}`}>
              DESIGN ASPECTS & KEY CONSIDERATIONS
            </h2>
            <ol>
              <li className={styles.paragraph}>
                Open, Communal Spaces: The home features an open floor plan with
                seamless transitions between living, dining, and kitchen areas
                to encourage family interaction. Furniture is arranged to foster
                connection and engagement.
              </li>
              <li className={styles.paragraph}>
                Maximising Views and Bringing the Outdoors In: Large windows and
                sliding glass doors are strategically placed to capture outdoor
                views and extend living spaces to the outside. Natural materials
                like wood and stone enhance the indoor-outdoor connection.
              </li>
              <li className={styles.paragraph}>
                Minimalism and Uncluttered Spaces: The design emphasises
                built-in storage and multifunctional furniture to keep spaces
                uncluttered. A neutral colour palette and simple, clean lines
                maintain a peaceful, minimalist aesthetic.
              </li>
              <li className={styles.paragraph}>
                Lighting: Abundant natural light is maximised through large
                windows and skylights, complemented by recessed and task
                lighting that enhances the open, uncluttered feel.
              </li>
              <li className={styles.paragraph}>
                Comfort and Functionality: Ergonomic furniture and
                family-centric spaces like a cozy window nook or kitchen island
                ensure comfort and functionality, making the home both inviting
                and practical for everyday living.
              </li>
            </ol>
            <h2 className={`${styles.subHeader} ${juliusSansOne.className}`}>
              SPATIAL DESIGN
            </h2>
            <p className={styles.paragraph}>
              The spatial design of this contemporary home prioritises open,
              communal areas to promote family togetherness, with a layout that
              allows for seamless movement between living, dining, bedrooms and
              kitchen spaces. Strategic placement of windows and glass doors
              maximises natural light and offers unobstructed views of the
              outdoors, enhancing the indoor-outdoor connection. The design
              emphasises minimalism by incorporating built-in storage to
              maintain uncluttered spaces, ensuring a calm and peaceful
              environment. Adaptability is key, with flexible spaces that can
              easily adjust to the family&apos;s changing needs, while pathways
              and room layouts provide easy circulation, creating a harmonious
              flow that supports both daily activities and family interaction.
            </p>
            <div className={styles.emptyDiv} />
          </main>
          <div className={styles.imageGrid}>
            <Image
              src={image1}
              className={styles.gridImage1}
              alt="Curating Warmth Image 1"
            />
            <Image
              src={image2}
              className={styles.gridImage2}
              alt="Curating Warmth Image 2"
            />
            <Image
              src={image3}
              className={styles.gridImage3}
              alt="Curating Warmth Image 3"
            />
            <Image
              src={image4}
              className={styles.gridImage4}
              alt="Curating Warmth Image 4"
            />
            <Image
              src={image5}
              className={styles.gridImage5}
              alt="Curating Warmth Image 5"
            />
            <Image
              src={image6}
              className={styles.gridImage6}
              alt="Curating Warmth Image 6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuratingWarmth;
