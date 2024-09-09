import styles from "./page.module.css";
import { juliusSansOne } from "@/app/fonts";
import Image from "next/image";

import formImage from "@/public/static/aboutFormImage.webp";

const Contact = () => {
  return (
    <div className={styles.fullContainer}>
      <div className={styles.formContainer}>
        <h1 className={`${styles.mainHeader} ${juliusSansOne.className}`}>
          CONTACT US
        </h1>
        <div className={styles.formBodyContainer}>
          <Image
            src={formImage}
            className={styles.formImage}
            alt="Form Decoration Image"
          />

          <form className={styles.mainContainer}>
            {/* Name */}
            <div className={styles.formInputContainer}>
              <label
                for="name"
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
                for="email"
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
                for="totalFamilyMembers"
                className={`${styles.label} ${juliusSansOne.className}`}
              >
                TOTAL FAMILY MEMBERS
              </label>
              <input
                type="text"
                id="totalFamilyMembers"
                name="totalFamilyMembers"
                className={styles.formInput1}
              />
            </div>
            {/* CURRENT ADDRESS */}
            <div className={styles.formInputContainer}>
              <label
                for="currentAddress"
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
                for="projectAddress"
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
                for="areaInSqft"
                className={`${styles.label} ${juliusSansOne.className}`}
              >
                AREA IN SQFT
              </label>
              <input
                type="text"
                id="areaInSqft"
                name="areaInSqft"
                className={styles.formInput1}
              />
            </div>
            {/* POSSESSION */}
            <div className={styles.formInputContainer}>
              <label
                for="possession"
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
                    name="vastu"
                    className={styles.radioInput}
                  />
                  <label
                    for="vastuYes"
                    className={`${styles.radioLabels} ${juliusSansOne.className}`}
                  >
                    YES
                  </label>
                </div>
                <div className={styles.radioOptionContainer}>
                  <input
                    type="radio"
                    id="vastuNo"
                    name="vastu"
                    className={styles.radioInput}
                  />
                  <label
                    for="vastuNo"
                    className={`${styles.radioLabels} ${juliusSansOne.className}`}
                  >
                    NO
                  </label>
                </div>
                <div className={styles.radioOptionContainer}>
                  <input
                    type="radio"
                    id="vastuMaybe"
                    name="vastu"
                    className={styles.radioInput}
                  />
                  <label
                    for="vastuMaybe"
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
                for="budgetConsideration"
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
                for="comments"
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
