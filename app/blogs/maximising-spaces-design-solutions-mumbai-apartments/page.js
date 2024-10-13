import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogPages.json";
import blogImage from "@/public/static/blogDetailed7.webp";
import MobileFooter from "@/components/mobileFooter/mobileFooter";

const MaximizingSpaceBlog = () => {
  const blogName = "Maximising Spaces: Design Solutions Mumbai Apartments";
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
            <li className={styles.header}>Modular Furniture Systems</li>
            <p className={styles.blogPara}>
              Modular furniture offers unmatched flexibility and customisation:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  Reconfigurable sofas that can be rearranged to fit different
                  occasions, from lounging to hosting guests.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Modular shelving units that can be expanded or reconfigured as
                  your storage needs change.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Transforming wall beds that fold away seamlessly to create
                  more living space during the day.
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.pointContainer}>
            <li className={styles.header}>Smart Home Technology</li>
            <p className={styles.blogPara}>
              Integrate smart technology to optimise space and enhance
              convenience:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  Voice-controlled lighting and climate systems to eliminate the
                  need for switch boards.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Automated blinds and curtains that can be controlled remotely
                  to maximise natural light without taking up space for pelmets
                  etc.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Compact, multi-functional smart appliances such as combination
                  washer-dryers or oven-microwave units.
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.pointContainer}>
            <li className={styles.header}>Invisible Design Elements</li>
            <p className={styles.blogPara}>
              Create the illusion of space with clever, hidden features:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  Concealed storage behind sliding panels or under raised false
                  floors.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Pop-up or foldable furniture that emerges from countertops or
                  walls when needed.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Hidden desks and workspaces that fold away into walls or
                  cabinets.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Stackable and Nesting tables that can be hidden away under
                  others.
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.pointContainer}>
            <li className={styles.header}>Biophilic Design</li>
            <p className={styles.blogPara}>
              Incorporate nature-inspired elements to enhance well-being and
              optimise space:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  Vertical gardens and green walls that bring in greenery
                  without using floor space.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Indoor planters integrated into furniture such as coffee
                  tables or bookshelves.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Natural materials like bamboo or cork that add warmth and
                  texture while being sustainable.
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.pointContainer}>
            <li className={styles.header}>Kinetic and Movable Walls</li>
            <p className={styles.blogPara}>
              Adapt your living space dynamically with movable partitions:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  Sliding or folding walls that can open up rooms or create
                  privacy as needed.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Rotating walls that can serve as bookcases or media units on
                  one side and as partitions on the other.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Pop-up dividers that can be stowed away when not in use.
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.pointContainer}>
            <li className={styles.header}>Furniture with Integrated Storage</li>
            <p className={styles.blogPara}>
              Maximise every inch with furniture that doubles as storage:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  Platform beds with drawers or lift-up mattresses for under-bed
                  storage.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Sofas and benches with hidden compartments for storing
                  blankets, pillows, or books.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Dining tables with built-in shelves or cabinets for
                  kitchenware or dining essentials.
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.pointContainer}>
            <li className={styles.header}>Mirror and Glass Innovations</li>
            <p className={styles.blogPara}>
              Enhance the perception of space with strategic use of mirrors and
              glass:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  Mirrored walls and furniture to reflect light and make rooms
                  appear larger.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Glass partitions to create a sense of openness while defining
                  different areas.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Transparent furniture that blends into the surroundings,
                  reducing visual clutter.
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.pointContainer}>
            <li className={styles.header}>Savvy Kitchens</li>
            <p className={styles.blogPara}>
              Incorporate space-saving technology in your kitchen:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  Pull-out countertops with pull-out tall sleek storages that
                  provide extra workspace when needed and slide away to save
                  space.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Compact, stackable kitchen appliances that free up counter
                  space.
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.pointContainer}>
            <li className={styles.header}>Innovative Storage Solutions</li>
            <p className={styles.blogPara}>
              Think creatively about where and how you store items:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  Magnetic strips for storing knives and metal utensils on
                  kitchen walls.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Pegboards in kitchens and bathrooms for versatile,
                  customisable shelving.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Overhead storage racks in closets and entryways for seasonal
                  items or infrequently used belongings.
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.pointContainer}>
            <li className={styles.header}>Decluttering and Minimalism</li>
            <p className={styles.blogPara}>
              Adopting a minimalist lifestyle can free up valuable space:
            </p>
            <ul className={styles.blogBullet}>
              <li>
                <p className={styles.blogPara}>
                  Regular decluttering to keep only what you need and love.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Minimalist decor to avoid a cramped and cluttered look.
                </p>
              </li>
              <li>
                <p className={styles.blogPara}>
                  Functional decor items, such as stylish storage boxes and
                  baskets.
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

export default MaximizingSpaceBlog;
