import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import testimonials from "@/data/testimonials.json";

import profileImage from "@/public/static/profile image.webp";
import quoteImage from "@/public/static/quotes.webp";

import largeImage1 from "@/public/aboutUsMarqueeImages/364-1.webp";
import largeImage2 from "@/public/aboutUsMarqueeImages/364-2.webp";
import largeImage3 from "@/public/aboutUsMarqueeImages/364-3.webp";
import largeImage4 from "@/public/aboutUsMarqueeImages/364-4.webp";
import largeImage5 from "@/public/aboutUsMarqueeImages/364-5.webp";
import largeImage6 from "@/public/aboutUsMarqueeImages/364-6.webp";
import largeImage7 from "@/public/aboutUsMarqueeImages/364-7.webp";

import mediumImage1 from "@/public/aboutUsMarqueeImages/272-1.webp";
import mediumImage2 from "@/public/aboutUsMarqueeImages/272-2.webp";
import mediumImage3 from "@/public/aboutUsMarqueeImages/272-3.webp";
import mediumImage4 from "@/public/aboutUsMarqueeImages/272-4.webp";
import mediumImage5 from "@/public/aboutUsMarqueeImages/272-5.webp";
import mediumImage6 from "@/public/aboutUsMarqueeImages/272-6.webp";
import mediumImage7 from "@/public/aboutUsMarqueeImages/272-7.webp";
import mediumImage8 from "@/public/aboutUsMarqueeImages/272-8.webp";

import smallImage1 from "@/public/aboutUsMarqueeImages/165-1.webp";
import smallImage2 from "@/public/aboutUsMarqueeImages/165-2.webp";
import smallImage3 from "@/public/aboutUsMarqueeImages/165-3.webp";
import smallImage4 from "@/public/aboutUsMarqueeImages/165-4.webp";
import smallImage5 from "@/public/aboutUsMarqueeImages/165-5.webp";
import smallImage6 from "@/public/aboutUsMarqueeImages/165-6.webp";
import smallImage7 from "@/public/aboutUsMarqueeImages/165-7.webp";
import smallImage8 from "@/public/aboutUsMarqueeImages/165-8.webp";
import smallImage9 from "@/public/aboutUsMarqueeImages/165-9.webp";
import smallImage10 from "@/public/aboutUsMarqueeImages/165-10.webp";

const About = () => {
  const imageArray = [
    largeImage1,
    mediumImage1,
    smallImage1,
    smallImage2,
    mediumImage2,
    largeImage2,
    smallImage3,
    mediumImage3,
    largeImage3,
    mediumImage4,
    smallImage4,
    smallImage5,
    largeImage4,
    mediumImage5,
    largeImage5,
    smallImage6,
    mediumImage6,
    mediumImage7,
    largeImage6,
    smallImage7,
    largeImage7,
    mediumImage8,
    smallImage8,
    smallImage9,
    smallImage10,
  ];
  return (
    <div className={styles.mainContainer}>
      <div className={styles.welcome}>
        <Image
          src={profileImage}
          className={styles.profileImage}
          alt="Profile picture"
        />

        <div className={styles.welcomeTextContainer}>
          <h1 className={`${styles.mainTitle} ${juliusSansOne.className}`}>
            Welcome to AV’sds!
          </h1>
          <p className={styles.welcomeText}>
            I’m Avani Vaidya, founder and principal designer of the studio. With
            a Bachelor&apos;s in Architecture from Mumbai and a Master&apos;s in
            Interior Design from Italy, I&apos;ve dedicated myself to
            specialising in Spatial Interior Design, focusing deeply on
            understanding how people live, move, and thrive in their
            environments.
          </p>

          <p className={styles.welcomeText}>
            For me, design is not just about aesthetics; it&apos;s about
            creating spaces that resonate with your lifestyle and daily
            routines. I believe in a personal, informal approach to working with
            clients, making the design process as smooth and enjoyable as
            possible.
          </p>

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
      <Marquee
        className={styles.carouselContainer2}
        pauseOnClick={false}
        pauseOnHover={false}
        autoFill={true}
        speed={90}
        style={{ overflowX: "visible" }}
      >
        <Image src={largeImage1} className={styles.largeImage1} alt="image1" />
        <Image
          src={mediumImage1}
          className={styles.mediumImage1}
          alt="image2"
        />
        <Image src={smallImage1} className={styles.smallImage1} alt="image3" />
        <Image src={smallImage2} className={styles.smallImage2} alt="image4" />
        <Image
          src={mediumImage2}
          className={styles.mediumImage2}
          alt="image5"
        />
        <Image src={largeImage2} className={styles.largeImage2} alt="image6" />
        <Image src={smallImage3} className={styles.smallImage3} alt="image7" />
        <Image
          src={mediumImage3}
          className={styles.mediumImage3}
          alt="image8"
        />
        <Image src={largeImage3} className={styles.largeImage3} alt="image9" />
        <Image
          src={mediumImage4}
          className={styles.mediumImage4}
          alt="image9"
        />
        <Image src={smallImage4} className={styles.smallImage4} alt="image10" />
        <Image src={smallImage5} className={styles.smallImage5} alt="image11" />
        <Image src={largeImage4} className={styles.largeImage4} alt="image12" />
        <Image
          src={mediumImage5}
          className={styles.mediumImage5}
          alt="image13"
        />
        <Image src={largeImage5} className={styles.largeImage5} alt="image14" />
        <Image src={smallImage6} className={styles.smallImage6} alt="image15" />
        <Image
          src={mediumImage6}
          className={styles.mediumImage6}
          alt="image16"
        />
        <Image src={smallImage7} className={styles.smallImage7} alt="image16" />
        <Image src={largeImage6} className={styles.largeImage6} alt="image17" />
        <Image src={largeImage7} className={styles.largeImage7} alt="image18" />
        <Image
          src={mediumImage7}
          className={styles.mediumImage7}
          alt="image19"
        />
        <Image src={smallImage8} className={styles.smallImage8} alt="image20" />
        <Image
          src={mediumImage8}
          className={styles.mediumImage8}
          alt="image21"
        />
        <Image src={smallImage9} className={styles.smallImage9} alt="image22" />
        <Image
          src={smallImage10}
          className={styles.smallImage10}
          alt="image23"
        />
      </Marquee>
      <h2 className={`${styles.header3} ${juliusSansOne.className}`}>
        HEAR FROM OUR CLIENTS
      </h2>
      <Marquee
        className={styles.carouselContainer2}
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
