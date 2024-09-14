import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Image from "next/image";
import { Fragment } from "react";
import GoBack from "@/components/goBack/goBack";
import Marquee from "react-fast-marquee";
import testimonials from "@/data/testimonials.json";

import profileImage from "@/public/static/profile image.webp";
import quoteImage from "@/public/static/quotes.webp";

import blogImage1 from "@/public/static/blog 1.webp";
import blogImage2 from "@/public/static/blog 2.webp";
import blogImage3 from "@/public/static/blog 3.webp";
import blogImage4 from "@/public/static/blog 4.webp";

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
  const blogImages = [blogImage1, blogImage2, blogImage3, blogImage4];
  const blogDescriptions = [
    "Sustainable Interior Design: Materials and Practices",
    "The Art of Open-Concept Living: Balancing Privacy and Space",
    "Biophilic Design: Bringing Nature Indoors",
    "Colour Psychology & amp; Feng Shui: Space perception",
  ];
  const imagesCarouselArray = [
    [largeImage1, styles.largeImage1],
    [mediumImage1, styles.mediumImage1],
    [smallImage1, styles.smallImage1],
    [smallImage2, styles.smallImage2],
    [mediumImage2, styles.mediumImage2],
    [largeImage2, styles.largeImage2],
    [smallImage3, styles.smallImage3],
    [mediumImage3, styles.mediumImage3],
    [largeImage3, styles.largeImage3],
    [mediumImage4, styles.mediumImage4],
    [smallImage4, styles.smallImage4],
    [smallImage5, styles.smallImage5],
    [largeImage4, styles.largeImage4],
    [mediumImage5, styles.mediumImage5],
    [largeImage5, styles.largeImage5],
    [smallImage6, styles.smallImage6],
    [mediumImage6, styles.mediumImage6],
    [smallImage7, styles.smallImage7],
    [largeImage6, styles.largeImage6],
    [largeImage7, styles.largeImage7],
    [mediumImage7, styles.mediumImage7],
    [smallImage8, styles.smallImage8],
    [mediumImage8, styles.mediumImage8],
    [smallImage9, styles.smallImage9],
    [smallImage10, styles.smallImage10],
  ];
  return (
    <div className={styles.mainContainer}>
      <GoBack href="/" />
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
        {imagesCarouselArray.map((image, index) => {
          return (
            <Image
              src={image[0]}
              className={image[1]}
              key={`About Page Carousel Image ${index + 1}`}
              alt={`image${index + 1}`}
            />
          );
        })}
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

export default About;
