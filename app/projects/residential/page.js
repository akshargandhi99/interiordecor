import styles from "./page.module.css";
import ProjectCards from "@/components/projectCards/projectCards";

const Residential = () => {
  return (
    <div className={styles.projectContainer}>
      {/* <div className={styles.emptyDiv} /> */}

      <ProjectCards />

      {/* <div className={styles.emptyDiv} />
      <div className={styles.emptyDiv} />
      <div className={styles.emptyDiv} />
      <div className={styles.emptyDiv} />
      <div className={styles.emptyDiv} />
      <div className={styles.emptyDiv} /> */}
    </div>
  );
};

export default Residential;
