"use client";

import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import IntegerInput from "./integerInput"; // Importing due to use client
import SqftInput from "./sqftInput"; //  Importing due to use client

import formImage from "@/public/static/aboutFormImage.webp";
import XImage from "@/public/static/X.webp";
import facebookImage from "@/public/static/facebook.webp";
import instagramImage from "@/public/static/instagram.webp";
import emailImage from "@/public/static/email.webp";

const Contact = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

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
    };

    // setLoading(true);
    // setSuccessMessage('');

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
      // setLoading(false);
    }
  };

  return (
    <div className={styles.fullContainer}>
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
            <p className={styles.decorativeText}>
              Design that rhymes with your lifestyle!
            </p>
            <div className={styles.socialContainer}>
              <Image
                src={XImage}
                className={styles.socialMediaImage}
                alt="Twitter Link"
              />
              <Image
                src={facebookImage}
                className={styles.socialMediaImage}
                alt="Facebook Link"
              />
              <Image
                src={instagramImage}
                className={styles.socialMediaImage}
                alt="Instagram Link"
              />
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
            <div className={styles.formInputContainer}>
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
              />
            </div>
            {/* Email */}
            <div className={styles.formInputContainer}>
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
              />
            </div>

            {/* TOTAL FAMILY MEMBERS */}
            <div className={styles.formInputContainer}>
              <label
                htmlFor="totalFamilyMembers"
                className={`${styles.label} ${juliusSansOne.className}`}
              >
                TOTAL FAMILY MEMBERS
              </label>
              <IntegerInput />
            </div>
            {/* CURRENT ADDRESS */}
            <div className={styles.formInputContainer}>
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
              />
            </div>
            {/* AREA IN SQFT */}
            <div className={styles.formInputContainer}>
              <label
                htmlFor="areaInSqft"
                className={`${styles.label} ${juliusSansOne.className}`}
              >
                AREA IN SQFT
              </label>
              <SqftInput />
            </div>
            {/* POSSESSION */}
            <div className={styles.formInputContainer}>
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
            {/* SUBMIT */}
            <div
              className={`${styles.formInputContainer} ${styles.doubleSpan}`}
            >
              <button
                type="submit"
                className={`${styles.submit} ${juliusSansOne.className}`}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
