"use client";

import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import brownArrow from "@/public/static/backArrowBrown.svg";
import MobileFooter from "@/components/mobileFooter/mobileFooter";
import IntegerInput from "./integerInput"; // Importing due to use client
import SqftInput from "./sqftInput"; //  Importing due to use client
import useWindowDimensions from "@/hooks/windowDimensions";
import formImage from "@/public/static/aboutFormImage.webp";
import whatsappImage from "@/public/static/whatsapp.webp";
import facebookImage from "@/public/static/facebook.webp";
import instagramImage from "@/public/static/instagram.webp";
import emailImage from "@/public/static/email.webp";

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for tracking form submission

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set to true when submitting

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      totalFamilyMembers: form.totalFamilyMembers.value,
      currentAddress: form.currentAddress.value,
      projectAddress: form.projectAddress.value,
      areaInSqft: form.areaInSqft.value,
      possession: form.possession.value,
      vastu: form.vastu.value,
      budgetConsideration: form.budgetConsideration.value,
      comments: form.comments.value,
      tnc: form.tnc.checked,
    };

    // setLoading(true);
    // setSuccessMessage('');

    if (!formData.tnc) {
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // setSuccessMessage('Thank you for contacting us!');
          form.reset();
        } else {
          throw new Error("Failed to send email");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred while sending your message");
      } finally {
        setIsSubmitting(false); // Set back to false after submission
        // setLoading(false);
      }
    } else {
      // Still return thank you state
      setIsSubmitting(true); // Set to true when submitting
      setTimeout(() => {
        form.reset();
        setIsSubmitting(false); // Set back to false after submission
      }, 500);
    }
  };

  // Responsive
  const { height, width } = useWindowDimensions();

  const isMobile = width <= 1240 ? true : false;
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className={styles.fullContainer}>
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
      <div className={styles.mobileFooterContainer}>
        <div className={styles.formContainer}>
          <h1 className={`${styles.mainHeader} ${juliusSansOne.className}`}>
            CONTACT US
          </h1>
          <div className={styles.formBodyContainer}>
            <div className={styles.formLeft}>
              <Image
                src={formImage}
                className={styles.formImage}
                alt="Form Decoration Image"
              />
              <p className={styles.decorativeText1}>Design that rhymes</p>
              <p className={styles.decorativeText2}>with your lifestyle!</p>
              <div className={styles.socialContainer}>
                <Link href="https://wa.me/919930999329" target="_blank">
                  <Image
                    src={whatsappImage}
                    className={styles.socialMediaImage}
                    alt="Whatsapp Link"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61567081383232"
                  target="_blank"
                >
                  <Image
                    src={facebookImage}
                    className={styles.socialMediaImage}
                    alt="Facebook Link"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/av_spatialdesignstudio/profilecard/?igsh=MTNkempjcTNzeWoxbA=="
                  target="_blank"
                >
                  <Image
                    src={instagramImage}
                    className={styles.socialMediaImage}
                    alt="Instagram Link"
                  />
                </Link>
                <Link href="mailto:info@avsds.in">
                  <Image
                    src={emailImage}
                    className={styles.socialMediaImage}
                    alt="Email Link"
                  />
                </Link>
              </div>
            </div>

            <form onSubmit={onSubmit} className={styles.mainContainer}>
              {/* Name */}
              <div
                className={`${styles.formInputContainer} ${
                  isMounted && isMobile && styles.doubleSpan
                }`}
              >
                <label
                  htmlFor="name"
                  className={`${styles.label} ${juliusSansOne.className}`}
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.formInput1}
                  required
                />
              </div>
              {/* Email */}
              <div
                className={`${styles.formInputContainer} ${
                  isMounted && isMobile && styles.doubleSpan
                }`}
              >
                <label
                  htmlFor="email"
                  className={`${styles.label} ${juliusSansOne.className}`}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput2}
                  required
                />
              </div>

              {/* TOTAL FAMILY MEMBERS */}
              <div
                className={`${styles.formInputContainer} ${
                  isMounted && isMobile && styles.doubleSpan
                }`}
              >
                <label
                  htmlFor="totalFamilyMembers"
                  className={`${styles.label} ${juliusSansOne.className}`}
                >
                  TOTAL FAMILY MEMBERS
                </label>
                <IntegerInput />
              </div>
              {/* CURRENT ADDRESS */}
              <div
                className={`${styles.formInputContainer} ${
                  isMounted && isMobile && styles.doubleSpan
                }`}
              >
                <label
                  htmlFor="currentAddress"
                  className={`${styles.label} ${juliusSansOne.className}`}
                >
                  CURRENT ADDRESS
                </label>
                <input
                  type="text"
                  id="currentAddress"
                  name="currentAddress"
                  className={styles.formInput2}
                  required
                />
              </div>
              {/* PROJECT ADDRESS */}
              <div
                className={`${styles.formInputContainer} ${styles.doubleSpan}`}
              >
                <label
                  htmlFor="projectAddress"
                  className={`${styles.label} ${juliusSansOne.className}`}
                >
                  PROJECT ADDRESS
                </label>
                <input
                  type="text"
                  id="projectAddress"
                  name="projectAddress"
                  className={styles.formInput3}
                  required
                />
              </div>
              {/* AREA IN SQFT */}
              <div
                className={`${styles.formInputContainer} ${
                  isMounted && isMobile && styles.doubleSpan
                }`}
              >
                <label
                  htmlFor="areaInSqft"
                  className={`${styles.label} ${juliusSansOne.className}`}
                >
                  AREA IN SQFT
                </label>
                <SqftInput />
              </div>
              {/* POSSESSION */}
              <div
                className={`${styles.formInputContainer} ${
                  isMounted && isMobile && styles.doubleSpan
                }`}
              >
                <label
                  htmlFor="possession"
                  className={`${styles.label} ${juliusSansOne.className}`}
                >
                  POSSESSION
                </label>
                <input
                  type="text"
                  id="possession"
                  name="possession"
                  className={styles.formInput2}
                  required
                />
              </div>
              {/* VASTU */}
              <div
                className={`${styles.formInputContainer} ${styles.doubleSpan}`}
              >
                <p className={`${styles.label} ${juliusSansOne.className}`}>
                  DOES THE SPACE NEED TO BE VASTU COMPLIANT?
                </p>
                <div className={styles.radioBtnContainer}>
                  <div className={styles.radioOptionContainer}>
                    <input
                      type="radio"
                      id="vastuYes"
                      value="Yes"
                      name="vastu"
                      className={styles.radioInput}
                      required
                    />
                    <label
                      htmlFor="vastuYes"
                      className={`${styles.radioLabels} ${juliusSansOne.className}`}
                    >
                      YES
                    </label>
                  </div>
                  <div className={styles.radioOptionContainer}>
                    <input
                      type="radio"
                      id="vastuNo"
                      value="No"
                      name="vastu"
                      className={styles.radioInput}
                    />
                    <label
                      htmlFor="vastuNo"
                      className={`${styles.radioLabels} ${juliusSansOne.className}`}
                    >
                      NO
                    </label>
                  </div>
                  <div className={styles.radioOptionContainer}>
                    <input
                      type="radio"
                      id="vastuMaybe"
                      value="Maybe"
                      name="vastu"
                      className={styles.radioInput}
                    />
                    <label
                      htmlFor="vastuMaybe"
                      className={`${styles.radioLabels} ${juliusSansOne.className}`}
                    >
                      MAYBE
                    </label>
                  </div>
                </div>
              </div>
              {/* BUDGET CONSIDERATION */}
              <div
                className={`${styles.formInputContainer} ${styles.doubleSpan}`}
              >
                <label
                  htmlFor="budgetConsideration"
                  className={`${styles.label} ${juliusSansOne.className}`}
                >
                  BUDGET CONSIDERATION
                </label>
                <input
                  type="text"
                  id="budgetConsideration"
                  name="budgetConsideration"
                  className={styles.formInput3}
                />
              </div>
              {/* COMMENTS */}
              <div
                className={`${styles.formInputContainer} ${styles.doubleSpan}`}
              >
                <label
                  htmlFor="comments"
                  className={`${styles.label} ${juliusSansOne.className}`}
                >
                  COMMENTS
                </label>
                <input
                  type="text"
                  id="comments"
                  name="comments"
                  className={styles.formInput3}
                />
              </div>
              <div className={styles.tncContainer}>
                <label
                  htmlFor="tnc"
                  className={`${styles.label} ${juliusSansOne.className}`}
                >
                  Do you agree to the terms and conditions for using our
                  services?
                </label>
                <input
                  type="checkbox"
                  id="tnc"
                  name="tnc"
                  value="tncAgree"
                  className={styles.tnc}
                />
              </div>
              {/* SUBMIT */}
              <div
                className={`${styles.formInputContainer} ${styles.doubleSpan}`}
              >
                <button
                  type="submit"
                  className={`${styles.submit} ${juliusSansOne.className}`}
                  disabled={isSubmitting} // Disable the button when submitting
                >
                  {isSubmitting ? "Submitting..." : "Submit"}{" "}
                  {/* Change button text */}
                </button>
              </div>
            </form>
          </div>
        </div>
        <MobileFooter />
      </div>
    </div>
  );
};

export default Contact;
