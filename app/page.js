import LandingCard from "@/components/landingCards/landingCards";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <LandingCard />
    </div>
  );
}
