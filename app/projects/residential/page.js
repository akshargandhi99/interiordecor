import styles from "./page.module.css";
import GoBack from "@/components/goBack/goBack";
import ResidentialProjectCards from "@/components/projectCards/residentialProjectCards";

const Residential = () => {
  return (
    <div className={styles.projectContainer}>
      <GoBack href="/" />
      <ResidentialProjectCards />`
    </div>
  );
};

export default Residential;
