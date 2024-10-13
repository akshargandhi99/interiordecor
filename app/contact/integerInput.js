"use client";

import styles from "./page.module.css";

const IntegerInput = () => {
  const preventNumberChangeWithScroll = (e) => {
    e.target.blur();
  };

  return (
    <input
      type="number"
      id="totalFamilyMembers"
      name="totalFamilyMembers"
      onWheel={preventNumberChangeWithScroll}
      className={styles.formInput1}
      required
    />
  );
};

export default IntegerInput;
