import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import testimonials from "@/data/testimonials.json";

import profileImage from "@/public/static/profile image.webp";
import quoteImage from "@/public/static/quotes.webp";

const About = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={`${styles.mainTitle} ${juliusSansOne.className}`}>
        Welcome to AV’sds!
      </h1>
      <div className={styles.welcome}>
        <Image
          src={profileImage}
          className={styles.profileImage}
          alt="Profile picture"
        />

        <div className={styles.welcomeTextContainer}>
          <p className={styles.welcomeText}>
            I’m Avani Vaidya, founder and principal designer of the studio. With
            a Bachelor&apos;s in Architecture from Mumbai and a Master&apos;s in
            Interior Design from Italy, I&apos;ve dedicated myself to
            specialising in Spatial Interior Design, focusing deeply on
            understanding how people live, move, and thrive in their
            environments.
          </p>
          <br />
          <p className={styles.welcomeText}>
            For me, design is not just about aesthetics; it&apos;s about
            creating spaces that resonate with your lifestyle and daily
            routines. I believe in a personal, informal approach to working with
            clients, making the design process as smooth and enjoyable as
            possible.
          </p>
          <br />

          <p className={styles.welcomeText}>
            At AVsds, it&apos;s all about you and your unique style. I&apos;m
            passionate about helping you uncover the comfort and bliss that
            already exists within your walls. Let&apos;s connect to bring out
            the best in your space, ensuring it reflects who you are and how you
            live. Together, we&apos;ll transform spaces into reflections of your
            life and personality, and to ensure daily life feels effortless for
            the family.
          </p>
        </div>
      </div>

      <h2 className={`${styles.header2} ${juliusSansOne.className}`}>
        EXPLORE THE WORLD THROUGH DESIGN
      </h2>
      <h2 className={`${styles.header2} ${juliusSansOne.className}`}>
        HEAR FROM OUR CLIENTS
      </h2>
      <Marquee
        className={styles.carouselContainer}
        pauseOnClick={false}
        pauseOnHover={false}
        autoFill={true}
        speed={50}
        style={{ overflowX: "visible" }}
      >
        {testimonials.map((testimonial, index) => {
          const clientName = testimonial.clientName;

          return (
            <div
              key={`${clientName} - ${index}`}
              className={styles.testimonialContainer}
            >
              <Image
                src={quoteImage}
                className={styles.quotes}
                alt="double quotes"
              />
              <p className={styles.testimonial}>{testimonial.testimonial}</p>
              <span className={styles.clientName}>- {clientName}</span>
            </div>
          );
        })}
      </Marquee>

      <h2 className={`${styles.header2} ${juliusSansOne.className}`}>
        LATEST BLOGS
      </h2>
      <div className={styles.blogContainer}></div>
    </div>
  );
};

export default About;
