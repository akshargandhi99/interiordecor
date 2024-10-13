import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogPages.json";
import blogImage from "@/public/static/blogDetailed5.webp";
import MobileFooter from "@/components/mobileFooter/mobileFooter";

const CulturalInfluenceBlog = () => {
  const blogName =
    "Cultural Influences in Interior Design: Global Styles and Trends";
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
              Japanese Zen: Simplicity and Serenity
            </li>
            <span className={styles.subpoint}>Core Elements:</span>
            <p className={styles.blogPara}>
              Japanese Zen design is characterised by minimalism, natural
              materials, and a focus on creating a serene and balanced
              environment.
            </p>
            <span className={styles.subpoint}>Key Features:</span>
            <p className={styles.blogPara}>
              Includes sliding shoji screens, tatami mats, and low-profile
              furniture.
            </p>
            <span className={styles.subpoint}>Incorporation Tips:</span>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Natural Materials:{" "}
                  </span>
                  Use wood, stone, and bamboo to bring a touch of nature
                  indoors.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Neutral Colour Palette:{" "}
                  </span>
                  Stick to muted tones like beige, grey, and white to create a
                  calm atmosphere.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Decluttered Spaces:{" "}
                  </span>
                  Embrace the ‘less is more’ philosophy by keeping spaces open
                  and uncluttered.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>
              Moroccan Opulence: Rich Patterns and Textures
            </li>
            <span className={styles.subpoint}>Core Elements:</span>
            <p className={styles.blogPara}>
              Moroccan interiors are known for their vibrant colors, intricate
              patterns, and luxurious textures.
            </p>
            <span className={styles.subpoint}>Key Features:</span>
            <p className={styles.blogPara}>
              Includes ornate tiles, plush textiles, and bold color schemes.
            </p>
            <span className={styles.subpoint}>Incorporation Tips:</span>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Patterned Tiles:{" "}
                  </span>
                  Use Moroccan tiles or their modern counterparts as a statement
                  backsplash or flooring.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>Textiles: </span>
                  Add layered rugs, cushions, and throws with geometric patterns
                  and rich fabrics like velvet and silk.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Metal Accents:{" "}
                  </span>
                  Incorporate brass or copper lamps and mirrors to add a touch
                  of opulence.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>
              Scandinavian Minimalism: Functionality and Clean Lines
            </li>
            <span className={styles.subpoint}>Core Elements:</span>
            <p className={styles.blogPara}>
              Scandinavian design emphasizes functionality, simplicity, and a
              connection to nature.
            </p>
            <span className={styles.subpoint}>Key Features:</span>
            <p className={styles.blogPara}>
              It features clean lines, a light color palette, and a focus on
              natural light.
            </p>
            <span className={styles.subpoint}>Incorporation Tips:</span>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>Light Woods: </span>
                  Opt for light-colored woods like oak and birch for furniture
                  and flooring.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Neutral Colors:{" "}
                  </span>
                  Use whites, grays, and pastels to keep the space feeling
                  bright and airy.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Functional Furniture:{" "}
                  </span>
                  Choose pieces that are both stylish and practical, with an
                  emphasis on ergonomic design.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>
              Italian Elegance: Classic and Opulent
            </li>
            <span className={styles.subpoint}>Core Elements:</span>
            <p className={styles.blogPara}>
              Italian design exudes classic elegance and sophistication.
            </p>
            <span className={styles.subpoint}>Key Features:</span>
            <p className={styles.blogPara}>
              It features luxurious materials, rich colors, and ornate
              detailing. Think of grand chandeliers, marble floors, and
              high-quality fabrics.
            </p>
            <span className={styles.subpoint}>Incorporation Tips:</span>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Luxurious Materials:{" "}
                  </span>
                  Use marble, leather, and silk to add a touch of Italian
                  opulence.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Classic Furniture:{" "}
                  </span>
                  Incorporate antique or antique-inspired furniture pieces with
                  intricate carvings.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Rich Color Palette:{" "}
                  </span>
                  Use deep hues like burgundy, gold, and emerald green to create
                  a dramatic effect.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>
              Indian Vibrancy: Colorful and Eclectic
            </li>
            <span className={styles.subpoint}>Core Elements:</span>
            <p className={styles.blogPara}>
              Indian interiors are known for their vibrant colors, eclectic
              patterns, and rich textures.
            </p>
            <span className={styles.subpoint}>Key Features:</span>
            <p className={styles.blogPara}>
              Includes handcrafted textiles, ornate carvings, and a mix of
              traditional and contemporary elements.
            </p>
            <span className={styles.subpoint}>Incorporation Tips:</span>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Handcrafted Items:{" "}
                  </span>
                  Include traditional Indian crafts like block-printed fabrics
                  and hand-carved furniture.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Mix and Match:{" "}
                  </span>
                  Combine various patterns and textures to create a lively and
                  dynamic space.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Use of natural materials:{" "}
                  </span>
                  Like carved wood, Indian stone and so on.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>French Chic: Elegant and Timeless</li>
            <span className={styles.subpoint}>Core Elements:</span>
            <p className={styles.blogPara}>
              French design combines elegance with a relaxed, lived-in feel.
            </p>
            <span className={styles.subpoint}>Key Features:</span>
            <p className={styles.blogPara}>
              It features classic furniture, soft colors, and a touch of
              romanticism.
            </p>
            <span className={styles.subpoint}>Incorporation Tips:</span>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Antique Furniture:{" "}
                  </span>
                  Use vintage or antique pieces, such as ornate mirrors and
                  gilded frames.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>Soft Fabrics: </span>
                  Incorporate soft, luxurious fabrics like linen and toile in
                  upholstery and curtains.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Elegant Accessories:{" "}
                  </span>
                  Add decorative elements like chandeliers, fine china, and
                  antique books.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.pointContainer}>
            <li className={styles.header}>
              Victorian Splendour: Opulence and Detail
            </li>
            <span className={styles.subpoint}>Core Elements:</span>
            <p className={styles.blogPara}>
              Victorian design is characterized by its ornate detailing, rich
              colors, and luxurious materials.
            </p>
            <span className={styles.subpoint}>Key Features:</span>
            <p className={styles.blogPara}>
              This style often features intricate woodwork, heavy drapes, and
              elaborate patterns.
            </p>
            <span className={styles.subpoint}>Incorporation Tips:</span>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Ornate Woodwork:{" "}
                  </span>
                  Choose furniture with detailed carvings and dark wood finishes
                  to evoke Victorian elegance.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>Rich Fabrics: </span>
                  Use luxurious materials such as velvet, brocade, and damask
                  for upholstery and drapery.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  <span className={styles.blogPointHeader}>
                    Layered Patterns:{" "}
                  </span>
                  Combine floral and damask patterns in rugs, wallpapers, and
                  fabrics to create a lush, opulent look.
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

export default CulturalInfluenceBlog;
