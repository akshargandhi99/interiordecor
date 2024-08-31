"use client";
import styles from "./page.module.css";
import CommercialProjectCards from "@/components/projectCards/commercialProjectCards";
const Commercial = () => {
  return (
    <div className={styles.projectContainer}>
      <CommercialProjectCards />
    </div>
  );
};

export default Commercial;
