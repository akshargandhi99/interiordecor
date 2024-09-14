import styles from "./goBack.module.css";
import Link from "next/link";
import { juliusSansOne } from "@/app/fonts";

const GoBack = (props) => {
  const { href } = props;
  return (
    <Link href={href}>
      <span className={`${styles.goBack} ${juliusSansOne.className}`}>
        🡠 GO BACK
      </span>
    </Link>
  );
};

export default GoBack;
