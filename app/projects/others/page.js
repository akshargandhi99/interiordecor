import styles from "./page.module.css";
import GoBack from "@/components/goBack/goBack";
import OthersProjectCards from "@/components/projectCards/othersProjectCards";

const Others = () => {
  return (
    <div className={styles.projectContainer}>
      <GoBack href="/" />
      <OthersProjectCards />`
    </div>
  );
};

export default Others;
