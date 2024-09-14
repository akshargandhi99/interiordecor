import styles from "./page.module.css";
import GoBack from "@/components/goBack/goBack";
import CommercialProjectCards from "@/components/projectCards/commercialProjectCards";
const Commercial = () => {
  return (
    <div className={styles.projectContainer}>
      <GoBack href="/" />
      <CommercialProjectCards />
    </div>
  );
};

export default Commercial;
